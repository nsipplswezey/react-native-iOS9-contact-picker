//
//  PhoneNumberPicker.swift
//  mobile
//
//  Created by Nicolas Sippl-Swezey on 3/10/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

import Foundation
import Contacts
import ContactsUI


@available(iOS 9.0, *)
@objc(PhoneNumberPicker)
class PhoneNumberPicker:NSObject {
  
  //let contactPicker = CNContactPickerViewController();
  //contactPicker.delegate = self;
  
  
  var bridge: RCTBridge! //this is synthesized
  
  @objc func addEvent(name:String, location:String, date:NSNumber, callback:(NSObject) -> () ) -> Void {
    //Date is ready to use!
    NSLog("Bridge: %@", self.bridge);
    NSLog("%@, %@, %@", name, location, date);
    
    let ret = [
      "name": name,
      "location": location,
      "date" : date
    ]
    callback([ret]);
    
    //Dispatch an event on invokation of addEvent... Okey.
    self.bridge.eventDispatcher.sendAppEventWithName("EventReminder", body: ret)
  }
  
  @objc func constantsToExport() -> NSObject {
    return[
      "x": 1,
      "y": 2,
      "z": "Arbitrary string"
    ]
  }

}