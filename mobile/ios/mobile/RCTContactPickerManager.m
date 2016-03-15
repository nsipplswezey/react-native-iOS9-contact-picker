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
  NSMutableArray<RCTResponseSenderBlock> *_callbacks;
  
};

RCT_EXPORT_MODULE()

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(openContactPicker:(NSDictionary *) args
                  callback:(RCTResponseSenderBlock)callback)
{
  _callbacks = [NSMutableArray new];
  [_callbacks addObject:callback];
  
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

#pragma mark - CNContactPickerViewControllerDelegate

- (void)contactPicker:(CNContactPickerViewController *)contactPickerController didSelectContactProperty:(CNContactProperty*)contactProperty
{
  CNContact* contact = contactProperty.contact;
  CNPhoneNumber* contactPhone = contactProperty.value;
  NSString* phoneNumber = contactPhone.stringValue;
  NSString* contactName = [CNContactFormatter stringFromContact:contact style:CNContactFormatterStyleFullName];
  
  RCTResponseSenderBlock callback = _callbacks[0];
  
  callback(@[contactName,phoneNumber]);
  
  [_callbacks removeObjectAtIndex:0];
  
}

@end