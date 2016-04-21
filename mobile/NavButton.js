'use strict';

import React, {
  StyleSheet,
  Component,
  TouchableHighlight,
  Text,
} from 'react-native';

class NavButton extends Component {

  render() {
    return (
      <TouchableHighlight
        style={styles.button}
	      underlayColor='#B5B5B5'
	      onPress={this.props.onPress}>
	       <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

var styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CDCDCD',
  },

  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
})

export default NavButton;
