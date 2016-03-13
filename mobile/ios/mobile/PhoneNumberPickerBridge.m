//
//  PhoneNumberPickerBridge.m
//  mobile
//
//  Created by Nicolas Sippl-Swezey on 3/10/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(PhoneNumberPicker, NSObject)

RCT_EXTERN_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(nonnull NSNumber *)date callback:(RCTResponseSenderBlock));

@end