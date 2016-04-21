'use strict';

import React, {
  Component,
  AlertIOS,
  NativeModules,
  NativeAppEventEmitter,
  requireNativeComponent
} from 'react-native';

var NavButton = require('./NavButton.js').default;

var ContactPickerManager = NativeModules.ContactPickerManager || NativeModules.ContactPickerModule;

var nativePicker = function(callback){
  ContactPickerManager.openContactPicker({arg1: "hello"},callback);
};

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
