'use strict'

import React, {
  Component,
  View,
} from 'react-native';

var PhonePicker = require('./PhonePicker.js');

class PhonePickerView extends Component {
  render(){
    return(
	<View>
	<PhonePicker/>
	<PhonePicker/>
	<PhonePicker/>
	<PhonePicker/>
	</View>
    );
  }
}

module.exports = PhonePickerView;

