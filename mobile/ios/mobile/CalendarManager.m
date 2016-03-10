//
//  CalendarManager.m
//  mobile
//
//  Created by Nicolas Sippl-Swezey on 3/7/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "CalendarManager.h"

@implementation CalendarManager

RCT_EXPORT_MODULE();

//functions
RCT_EXPORT_METHOD(addEvent:(NSString *)name details:(NSDictionary *)details)
{
  //NSDate *date = [RCTConvert NSDate:secondsSinceUnixEpoch];
  NSString *location = [RCTConvert NSString:details[@"location"]];
  NSDate *time = [RCTConvert NSDate:details[@"time"]];
  RCTLogInfo(@"Pretending to create event %@ at %@ at date %@", name, location, time);

}

//callbacks
RCT_EXPORT_METHOD(findEvents:(RCTResponseSenderBlock)callback)
{
  NSString *events = @"hello with a callback";
  callback(@[[NSNull null], events]);
}

//promises
RCT_REMAP_METHOD(updateEvents,
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSString *events = @"hello with a promise";
  if (events){
    resolve(events);
  } else {
    NSError *error;
    reject(@"no_events", @"There were no events",error);
  }
}

//constants
- (NSDictionary *)constantsToExport
{
  return @{ @"firstDayOfWeek": @"Monday"};
}


//events
@synthesize bridge = _bridge;
- (void)calendarEventReminderReceived:(NSNotification *)notification
{
  NSString *eventName = notification.userInfo[@"name"];
  [self.bridge.eventDispatcher sendAppEventWithName:@"EventReminder"
                                               body:@{@"name":eventName}];
}


@end

