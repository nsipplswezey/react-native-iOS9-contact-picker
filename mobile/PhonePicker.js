'use strict';

import React, {
  Component,
  AlertIOS,
  NativeModules,
  NativeAppEventEmitter,
} from 'react-native';

var NavButton = require('./NavButton.js').default;
const ContactPickerIOS = require('./ContactPickerIOS.js');


var nativePicker = function(callback){
  console.log('contact picker', ContactPickerIOS);
  ContactPickerIOS.openPicker({arg1: "hello"},
			      (name,number) => callback(name,number));
}

class PhonePicker extends Component {
  constructor(props){
    super(props);
    this.state = {
      inviteName: null,
      inviteNumber: null,
      text: "Select Friends to Invite",
    };
  }

  render() {
    return(
      <NavButton
        onPress={() => nativePicker((name,number) => this._handleTouch(name,number))}
        text={this.state.text}
      />
    );
  }

  _handleTouch(name,number){
    this.setState(
      {inviteName : name,
		   inviteNumber : number,
    	 text : name + ' - ' + number});
  }
}

module.exports = PhonePicker;
