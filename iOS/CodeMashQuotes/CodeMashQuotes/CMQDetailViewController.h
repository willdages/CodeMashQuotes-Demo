//
//  CMQDetailViewController.h
//  CodeMashQuotes
//
//  Created by William Dages on 1/9/13.
//  Copyright (c) 2013 Tevsi LLC. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface CMQDetailViewController : UIViewController <UISplitViewControllerDelegate>

@property (strong, nonatomic) id detailItem;

@property (weak, nonatomic) IBOutlet UILabel *detailDescriptionLabel;
@end
