#CodeMash Quotes

Demo files for the "How to Build a Cloud App in an Afternoon with Parse" presentation at CodeMash 2.0.1.3

These files are a more-heavily-commented version of the code that was written during the live demo -- a screencast of the demo is on YouTube here: http://www.youtube.com/watch?v=6ATktgoXu9s

This demo consists of two applications, a web and iOS app that accept text submissions of quotes that people heard at CodeMash. By the end of the demo, we will have built:
* A web interface that allows people to type in a quote, along with an attribution, and save that information to Parse.
* A list of the 25 newest quotes, grabbed from Parse, sorted newest-to-oldest, and displayed on the main page.
* An iOS Master-Detail application that displays a table view filled with the quote attributions.
* A detail view that the iOS list drills down into when tapping on a quote attribution, which displays the full quote.
* A modal dialog in the iOS app that will save new quote submissions to Parse
* Simple validation to make sure the text field isn't empty, and replace an empty attribution field with "Anonymous"

*Important:* _This demo will not contain a real App ID or Client/JS Key. Sign up on Parse.com and fill in `Parse.initialize()` with your own keys to follow along._ 

_Note: I have no affiliation with Parse.com_