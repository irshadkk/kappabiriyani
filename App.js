import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator,createBottomTabNavigator,createDrawerNavigator} from "react-navigation";
import { Icon } from 'native-base';
import styles from './styles/styles.js';
import SideMenu from './components/sidenav';
//import main screen
import starter from './screen/splash';
import register from './screen/register';

//import tab 1 screens
import home from './screen/Tab1/home';
import product_details from './screen/Tab1/product_details';

//import tab 2 screens
import  search from './screen/Tab2/search';

//import tab 3 screens 
import cart from './screen/Tab3/cart';

//import tab 4 screens
import user from './screen/Tab4/user';

import admin_products from './screen/admin/admin_products';

//tab1 routes navigator
const Tab1navigator = createStackNavigator({
  Homescreen: {screen: home},
  products_detaiscreen:{screen:product_details}
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
            ? <Icon type='FontAwesome' name="home" style={styles.factive} />
            : <Icon type='FontAwesome' name="home" style={styles.finactive} />
    ),
})},
  Search: { screen: Tab2navigator,navigationOptions: () => ({
    tabBarLabel: 'User',
    tabBarIcon: ({ focused }) => (
        focused
            ? <Icon type="FontAwesome" name="search" style={styles.factive} />
            : <Icon type="FontAwesome"  name="search" style={styles.finactive} />
    ),
})},
  cart: { screen: Tab3navigator,navigationOptions: () => ({
    tabBarLabel: 'User',
    tabBarIcon: ({ focused }) => (
        focused
            ? <Icon type='FontAwesome' name="shopping-bag" style={styles.factive} />
            : <Icon type='FontAwesome' name="shopping-bag" style={styles.finactive} />
    ),
})},
  user: { screen: Tab4navigator,navigationOptions: () => ({
    tabBarLabel: 'User',
    tabBarIcon: ({ focused }) => (
        focused
            ? <Icon type='FontAwesome' name="user-circle" style={styles.factive} />
            : <Icon type='FontAwesome' name="user-circle" style={styles.finactive} />
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
          overflow: "hidden",
          elivation:0,
          shadowOpacity: 0,
          borderColor:'#fff'
      },
      labelStyle: {
          fontSize:0,
          marginBottom:5,
          padding: 0,
          fontFamily: 'OpenSans-SemiBold'
      },
      activeTintColor: "#56b900",
      inactiveTintColor: "#575859",
  }
});
//end  main Tab navigator


//admin router
const admin_productstack = createStackNavigator({
  admin_product: {screen:admin_products},
  registerscreens:{screen:register},
});

const MyDrawerNavigator = createDrawerNavigator({
  admin_products: {screen: admin_productstack}
},{
  contentComponent: SideMenu,
  drawerWidth: 300
});
//end admin router

//main navigatior
const AppNavigator = createStackNavigator({
  splashscreen: {screen: starter},
  registerscreen:{screen:register},
  adminroute:{screen:MyDrawerNavigator,navigationOptions:()=>({
    header:null
  })},
  routescreen:{screen:TabsNavigator,navigationOptions:()=>({
    header:null
  })}
});
//end main navigatior

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
