'use strict'

import React, {
  Component,
  View,
} from 'react-native';

var PhonePicker = require('./PhonePicker.js').default;

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

export default PhonePickerView;

