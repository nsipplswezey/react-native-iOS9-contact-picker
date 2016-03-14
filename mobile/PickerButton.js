'use strict';

import React, {
  Component,
  Picker,
} from 'react-native';

class PickerButton extends Component {
  render(){
    return (
    <Picker
      onValueChange={(lang)=> this.setState({language:lang})}>
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>)
  }
}

export default PickerButton;
