# React-Native iOS9 Native Contact Picker

![Demo Gift](https://nsipplswezey.github.io/assets/anim.gif)

Using iOS9's new CNContact framework to pick contacts with react-native.

This repo demos a react-native NavButton component, which on-tap triggers a native iOS modal containing the phone's contacts, managed in the ContactPickerManager obj-c file. User then selects a contact, and the contacts info is rendered as state into the NavButton.

## See mobile for a function example

Updated to latest version of react-native `0.24.1` which means you can run the iOS example in the `mobile` directory with

```
cd mobile
react-native run-ios
```

[This is an iOS only component, paired with a blog post about passing callbacks between react-native and native iOS modules.](https://nsipplswezey.github.io/2016/04/21/Going-Deeper-With-React-Native-and-iOS-Native-UI.html)

## A Note

At the moment, I'm skeptical of the value of componentizing this example so that other react-native users can implement it.  It's not only iOS specific, it's iOS9 specific. That's why the `dist` directory is empty. For now, please use the example as a reference for building your own native iOS9 contact picker supper in react-native.

If this were to be built into a component, it would need to gracefully handle all current iOS versions. Ideally it would also include a native android modal picker. I probably won't get to either of those things until either I have to build this component professionally, or I have enough hours logged on react-native that this implementation because trivial and I can get it done in an afternoon. Neither of those things are unlikely, but neither are they immediate.

