/**
 *
 *
 *
 * @provideModule ContactPickerIOS
 * @flow
 */

'use strict'

const RCTContactPickerManager = require('NativeModules').ContactPickerManager;

export default class Camera extends ContactPickerIOS {

/**
 * Creates the native iOS contact picker popup.
 * Uses iOS9 CNContact framework to select contacts.
 *
 */

  static openPicker(
    options,
    callback
  )

  constructor() {
    super();
    this.state = {

   };

   void {
    RCTContactPickerManager.openContactPicker(options,callback)
  }
}

module.exports = ContactPickerIOS;
