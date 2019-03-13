import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator,createBottomTabNavigator} from "react-navigation";
//import main screen
import starter from './screen/splash';
import register from './screen/register';
import login from './screen/login';

//import tab 1 screens
import home from './screen/Tab1/home';

//import tab 2 screens
import  search from './screen/Tab2/search';

//import tab 3 screens 
import cart from './screen/Tab3/cart';

//import tab 4 screens
import user from './screen/Tab4/user';

//tab1 routes navigator
const Tab1navigator = createStackNavigator({
  Homescreen: {screen: home}
});

//tab2 routes navigator
const Tab2navigator = createStackNavigator({
  searchscreen: {screen: search}
});

//tab3 routes navigator
const Tab3navigator = createStackNavigator({
  cartscreen: {screen: cart}
});

//tab4 routes navigator
const Tab4navigator = createStackNavigator({
  userscreen: {screen: user}
});
//main Tab navigator
const TabsNavigator = createBottomTabNavigator({
  Home: { screen: Tab1navigator},
  Search: { screen: Tab2navigator },
  cart: { screen: Tab3navigator },
  user: { screen: Tab4navigator }
});

//main navigatior
const AppNavigator = createStackNavigator({
  splashscreen: {screen: starter},
  registerscreen:{screen:register},
  loginscreen:{screen:login},
  routescreen:{screen:TabsNavigator,navigationOptions:()=>({
    header:null
  })
  }
});

export default class App extends Component{
  static navigationOptions = {
    header:null,
  };
  render() {
    return (
      <AppNavigator/>
    );
  }
}
