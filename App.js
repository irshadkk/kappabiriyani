import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator,createBottomTabNavigator} from "react-navigation";
import { Icon } from 'native-base';
import styles from './styles/styles.js';
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
  Home: { screen: Tab1navigator,navigationOptions: () => ({
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
        focused
            ? <Icon name="home" style={styles.factive} />
            : <Icon name="home" style={styles.finactive} />
    ),
})},
  Search: { screen: Tab2navigator,navigationOptions: () => ({
    tabBarLabel: 'User',
    tabBarIcon: ({ focused }) => (
        focused
            ? <Icon name="search" style={styles.factive} />
            : <Icon name="search" style={styles.finactive} />
    ),
})},
  cart: { screen: Tab3navigator,navigationOptions: () => ({
    tabBarLabel: 'User',
    tabBarIcon: ({ focused }) => (
        focused
            ? <Icon name="basket" style={styles.factive} />
            : <Icon name="basket" style={styles.finactive} />
    ),
})},
  user: { screen: Tab4navigator,navigationOptions: () => ({
    tabBarLabel: 'User',
    tabBarIcon: ({ focused }) => (
        focused
            ? <Icon name="person" style={styles.factive} />
            : <Icon name="person" style={styles.finactive} />
    ),
})
}
},
{
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
      showIcon: true,
      style: {
          backgroundColor: "#fff",
          overflow: "hidden",
          height:54
      },
      labelStyle: {
          fontSize: 11,
          marginBottom:5,
          padding: 0,
          fontFamily: 'OpenSans-SemiBold'
      },
      activeTintColor: "#56b900",
      inactiveTintColor: "#575859",
      indicatorStyle: { backgroundColor: '#fff' }
  }
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
