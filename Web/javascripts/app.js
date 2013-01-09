;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  $(document).ready(function() {
    $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
    $.fn.foundationButtons          ? $doc.foundationButtons() : null;
    $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
    $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
    $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
    $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
    $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
    $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
    $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
    $.fn.foundationMagellan         ? $doc.foundationMagellan() : null;
    $.fn.foundationClearing         ? $doc.foundationClearing() : null;

    $.fn.placeholder                ? $('input, textarea').placeholder() : null;
  });

  // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
  // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
  // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
  // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
  // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

  // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
  if (Modernizr.touch && !window.location.hash) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }

})(jQuery, this);

$(document).ready(function() {

  $("#newQuote").submit(function(e) {
    e.preventDefault();
    saveQuote();
  });

  getQuotes();

});

function closeModal() {
  // The popup is powered by the Reveal plugin
  $("#add-quote").trigger("reveal:close");
}

function saveQuote() {
  var quoteText = $("#quoteText").val();
  var attribution = $("#attribution").val();

  // Quote (uppercase) represents the Quote class
  var Quote = Parse.Object.extend("Quote");

  // quote (lowercase) is an instance of the Quote class
  // that will show up as a row in the Data Browser
  var quote = new Quote();

  quote.set("quoteText", quoteText);
  quote.set("by", attribution);

  quote.save(null, {
    success: function(quote) {
      // Called if save() was successful.
      // Returns the newly-created object (with
      // its id, createdAt and updatedAt properties)

      // Since it's saved, refresh the list automatically
      getQuotes();
      closeModal();
    },
    error: function(quote, error) {
      // Called if there was a problem saving.
      // Returns the object you tried to save and
      // an error object w/ info
      console.log("Did you remember to fill in your Parse keys on line 107 in index.html?");
      console.log(error.message);
      // Handle the error here
    }
  })
}

function getQuotes() {
  // Quote (uppercase) represents the Quote class
  var Quote = Parse.Object.extend("Quote");

  // query is an instance of a PFQuery, created by
  // passing in a class object to new Parse.Query()
  var query = new Parse.Query(Quote);

  // Sort whatever is returned by the key "createdAt"
  // in the order 'descending' (newest first)
  query.descending("createdAt");

  // Return no more than 25 results
  query.limit(25);

  // Once we're satisfied with the constraints we put
  // on our query, we call find(). (Play around with 
  // adding more constraints).
  query.find({
    success: function(results) {
      // The query was successful, and has passed
      // back an array of PFObjects for you to use

      // Since we're appending, clear the list out 
      // every time we're about to add results
      $("#quoteList").html("");

      // Compile the Handlebars template we're going
      // to stick the results into. Pass Handlebars the
      // ID of the script tags in index.html that contain
      // the template.
      var template = Handlebars.compile($("#single-quote-template").html());

      // Iterate over all the results
      $(results).each(function(i,e) {
        // Serialize the PFObject and store it in q
        var q = e.toJSON();
        // Select the DOM element we're appending to,
        // Then append the template, passing in q to
        // provide the values of the template variables
        $("#quoteList").append(template(q));
      });
    },
    error: function(error) {
      if (error.message == "unauthorized") {
        // Temporary message if you haven't added your own credentials for Parse.com yet. Remove once set up.
        console.warn("Please fill in your own Parse.com App ID and Javascript Key on line 107 of index.html");
      }
      // Handle the error here
    }
  })
}