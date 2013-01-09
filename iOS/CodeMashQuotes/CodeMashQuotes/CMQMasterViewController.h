//
//  CMQMasterViewController.h
//  CodeMashQuotes
//
//  Created by William Dages on 1/9/13.
//  Copyright (c) 2013 Tevsi LLC. All rights reserved.
//

#import <UIKit/UIKit.h>

@class CMQDetailViewController;

@interface CMQMasterViewController : UITableViewController

@property (strong, nonatomic) CMQDetailViewController *detailViewController;

@end
