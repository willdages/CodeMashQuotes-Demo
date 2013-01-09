Parse.Cloud.beforeSave("Quote", function(request, response) {
	// The object attempting to be saved can be found in request.object
	// Use response.success() to allow the save
	// Use response.error() to reject the save, and pass in an error message for the client to read

	// Always use get/set to access your key/value pairs
	var quoteText = request.object.get("quoteText");
	var by = request.object.get("by");

	if (quoteText.length == 0) {
		// The quoteText field was blank, don't allow the save
		response.error("What is a quote without text?")
	} else {
		if (by.length == 0) {
			// Replace a blank attribution with "Anonymous"
			request.object.set("by", "Anonymous");
		}
		response.success();
	}
});
