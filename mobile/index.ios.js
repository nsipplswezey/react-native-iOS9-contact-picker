
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

var Platform = require('Platform');
var TouchableWithoutFeedback = require('TouchableWithoutFeedback');
var cssVar = require('cssVar');
var NavButton = require('./NavButton.js').default;

var PhonePicker = require('./PhonePicker.js');
var PhonePickerView = require('./PhonePickerView.js');

var styles = StyleSheet.create({
  messageText: {
    fontSize: 17,
    fontWeight: '500',
    padding: 15,
    marginTop: 50,
    marginLeft: 15,
  },
  container: {
    flex: 1,
  },
  navBar: {
    backgroundColor: 'white',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBatTitleText: {
    color: cssVar('fbui-bluegray-60'),
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
    color: cssVar('fbui-accent-blue'),
  },
  scene: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#EAEAEA',
  },
});

var NavigationBarRouteMapper = {

  LeftButton: function(route, navigator, index,navState){
      if (index === 0){
      return null;
    }

    var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
	style={styles.navBarLeftButton}>
	<Text style={[styles.navBarText, styles.navBarBUttonText]}>
	  {previousRoute.title}
	</Text>
      </TouchableOpacity>
    );
  },

  RightButton: function(route, navigator, index, navState) {

    function _onPress(index,navState){
      var routes = createInitialRoutes();
      var maxStack = routes.length-1
      var nextRoute = routes[index+1];
      if(navState.routeStack.length > maxStack){
        return null
      }else{
        navigator.push(nextRoute)
      }

    }

    function nextRouteTitle(index){
      var routes = createInitialRoutes();
      var nextRoute = routes[index+1];
      if(nextRoute){
        return nextRoute.title;
      }else{
        return null;
      }
    }

    if (index >= 3){
      return null;
    }else{
      return (
        <TouchableOpacity
          onPress={() => _onPress(index,navState)}
	  style={styles.navBarRightButton}>
	  <Text style={[styles.navBarText, styles.navBarButtonText]}>
	    {nextRouteTitle(index)}
	  </Text>
        </TouchableOpacity>
      );
    }
  },

  Title: function(route, navigator, index, navState){
    var currentRoute = navState.routeStack[index]

    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {currentRoute.title} [{index}]
      </Text>
    );
  },
};


function createInitialRoutes() {
  return [
    {title: 'friends ',
     component: PhonePickerView,},
  ]

};


var NavigationBarSample = React.createClass({

  componentWillMount: function() {

    var navigator = this.props.navigator;

    var callback = (event) => {
      console.log(
        `NavigationBarSample : event ${event.type}`,
	{
	  route: JSON.stringify(event.data.route),
	  target: event.target,
	  type: event.type,
	}
      );
    };

    //Observe focus change events from this component.
    this._listeners = [
      navigator.navigationContext.addListener('willfocus', callback),
      navigator.navigationContext.addListener('didfocus', callback),
    ];
  },

  componentWillUnmount: function() {
    this._listeners && this._listeners.forEach(listener => listener.remove());

    //native events
    subscription.remove()
  },

  render: function(){
    return(
      <Navigator
        debugOverlay={false}
		style={styles.appContainer}
		initialRouteStack={[createInitialRoutes()[0]]}
		renderScene={(route,navigator) => (
	  	  <ScrollView style={styles.scene}>
	        <Text style={styles.messageText}>{'hello ' + route.title}</Text>

	        <NavButton
	          onPress={() => {
	          //navigator.immediatelyResetRouteStack(createInitialRoutes());
	          }}
	          text="Navigate to MapView"
	        />
	        <NavButton
	          onPress={() => {
		       //this doesn't do anything... can be removed
	         }}
	         text="Test native interaction"
	        />
	       <route.component />
	      </ScrollView>
	)}
	navigationBar={
	  <Navigator.NavigationBar
	    routeMapper={NavigationBarRouteMapper}
	    style={styles.navBar}
	  />
	}
      />
    );
  },

});

var TabBarExample = React.createClass({

  statics: {
    title: '<Navigator>',
    description: 'JS-implemented navigation',
  },

  renderScene: function(route,nav){
    return <NavigationBarSample navigator={nav}/>
  },

  render: function(){
    return (
      <Navigator
        ref={this._setNavigatorRef}
        style={styles.container}
	initialRoute={createInitialRoutes()[0]}
	renderScene={this.renderScene}
	configureScene={(route) => {
	  if(route.sceneConfig){
	    return route.sceneConfig;
	  }
	  return;
	}}
	/>
    );
  },

  componentWillUnmount: function(){
    this._listeners && this.listeners.forEach(listener => listener.remove());
  },

  _setNavigatorRef: function(navigator){
    if (navigator !== this._navigator){
      this._navigator = navigator;

      if (navigator) {
        var callback = (event) => {
	  console.log(
	    `TabBarExample: event $ ${event.type}`,
	    {
	      route: JSON.stringify(event.data.route),
	      target: event.target,
	      type: event.type,
	    }
	  );
	};
	//Observer focus chang events from the owner.

	this._listeners = [
	  navigator.navigationContext.addListener('willfocus', callback),
	  navigator.navigationContext.addListener('didfocus', callback),
	];
      }
    }
  },

});


class mobile extends Component {
  render() {
    return(
	<TabBarExample/>
  )}

}


AppRegistry.registerComponent('mobile', () => mobile);
