//
//  RCTContactPickerManager.m
//  mobile
//
//  Created by Nicolas Sippl-Swezey on 3/12/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "RCTContactPickerManager.h"
#import "RCTLog.h"
#import "RCTUtils.h"
#import <Contacts/Contacts.h>
#import <ContactsUI/ContactsUI.h>

@interface RCTContactPickerManager() <CNContactPickerDelegate, CNContactViewControllerDelegate>

@end

@implementation RCTContactPickerManager
{
  
}

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(openContactPicker:(NSDictionary *) args
                  callback:(RCTResponseSenderBlock)callback)
{
  callback(@[@"hello"]);
  
  UIViewController *presentingController = RCTKeyWindow().rootViewController;
  if(presentingController == nil) {
    RCTLogError(@"Tried to display contact picker, but there is no application window. args:%@",args);
  }
  
  // Walk the chain to the topmost model view controller.
  while(presentingController.presentedViewController) {
    presentingController = presentingController.presentedViewController;
  }
  
  
  
  CNContactPickerViewController *contactPickerController = [CNContactPickerViewController new];
  
  NSArray *displayedItems = @[CNContactPhoneNumbersKey,CNContactEmailAddressesKey,CNContactBirthdayKey];
  contactPickerController.delegate = self;
  contactPickerController.displayedPropertyKeys = displayedItems;
  
  [presentingController presentViewController:contactPickerController animated:YES completion:nil];
  
}

@end