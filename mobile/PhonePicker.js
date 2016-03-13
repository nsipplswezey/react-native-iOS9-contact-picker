'use strict';

import React, {
  Component,
  AlertIOS,
  NativeModules,
  NativeAppEventEmitter,
} from 'react-native';

var NavButton = require('./NavButton.js').default;
const CalendarManager = NativeModules.CalendarManager;
const NativePhoneNumberPicker = NativeModules.PhoneNumberPicker;
const RCTContactPickerManager = NativeModules.ContactPickerManager;

console.log(NativePhoneNumberPicker);

var subscription = NativeAppEventEmitter.addListener(
  'EventReminder',
  (reminder) => {
    console.log(`EVENT`)
    console.log('name: ' + reminder.name)
    console.log('location: ' + reminder.location)
    console.log('date: ' + reminder.date)
  }
);

var testPicker = function(callback){
  RCTContactPickerManager.openContactPicker({arg1: "hello"},
				    (id,value) => callback(value))
}

var testNative = function(index){

  //AlertIOS api
  AlertIOS.prompt('Plain text entry!');
  
  var testDate = new Date();
  CalendarManager.addEvent('Birthday party',
			   {location: '4 privy',
			    time: testDate.getTime(),});
  //Using callbacks
  CalendarManager.findEvents((error,events) => {
    if(error){
      console.error(error);
    } else {
      console.log(events);
    }
  });

  //Using promises
  async function updateEvents() {
    try {
      var events = await CalendarManager.updateEvents();
    } catch(e) {
      console.error(e);
    }
  }

  updateEvents();

  //Export constants
  console.log(CalendarManager.firstDayOfWeek);

  //Subscribe to native(needs a closer look)
  var subscription = NativeAppEventEmitter.addListener(
    'EventReminder',
    (reminder) => console.log(reminder.name)
  );

  //Swift
  NativePhoneNumberPicker.addEvent('One','Two',3,(o) => {console.log(o)});



}


class PhonePicker extends Component {

  render() {
    return(
      <NavButton
        onPress={() => testPicker((value)=>AlertIOS.alert('value',value))}
        text="Select Friends to Invite" 
      />
    )}
}

export default PhonePicker;
