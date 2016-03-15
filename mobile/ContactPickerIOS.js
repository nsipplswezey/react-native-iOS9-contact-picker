/**
 *
 *
 *
 * @provideModule ContactPickerIOS
 * @flow
 */

'use strict'

var RCTContactPickerManager = require('NativeModules').ContactPickerManager;

class ContactPickerIOS {
/**
 * Creates the native iOS contact picker popup.
 * Uses iOS9 CNContact framework to select contacts.
 *
 */

  static openPicker(
    options,
    callback
  ): void {
    RCTContactPickerManager.openContactPicker(options,callback)
  }
}

module.exports = ContactPickerIOS;
