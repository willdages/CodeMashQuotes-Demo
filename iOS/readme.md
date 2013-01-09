# iOS Demo

The iOS Demo is based off a new Master-Detail application (Universal) with Storyboards & ARC. Once this project is created, all you have to do is drag and drop the Parse Framework in, add the libraries listed in the iOS Quickstart guide on Parse.com, and then import the Parse headers in your AppDelegate.m file, and initialize Parse with `[Parse setApplicationId:@"App_ID" clientKey:@"Client_Key"];` inside `applicationDidFinishLaunchingWithOptions`.

Important: Just like in the Web portion of the demo, you will need to sign up at Parse.com to get your Application ID and Client Key, then fill in your keys in the AppDelegate.m file.