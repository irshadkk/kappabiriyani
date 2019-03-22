import React, { Component } from 'react';
import {Text, View, AsyncStorage, StatusBar,Image,ImageBackground} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import styles from '../styles/styles.js';
const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'routescreen' })],
})
const resetActions = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'registerscreen' })],
})
export default class Splash extends Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = {
            timePassed: false,
        }
    }
     componentDidMount() {
      setTimeout(() => {
       this.setTimePassed();
      }, 2500);
    }
    setTimePassed() {
     AsyncStorage.getItem("login").then((value) => {
            var dd = JSON.stringify(value);
            if (dd == "null") {
                this.props.navigation.dispatch(resetActions);
            }
            else {
              this.props.navigation.dispatch(resetAction);
            }
        }).done();
    }

    render() {
        return (
            <View style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
                  <ImageBackground
                    blurRadius={0}
                    source={require("../img/bg.jpg")}
                    style={styles.splash_bg_img}>
                      <Image  source={require("../img/logo.png")} style={{width:120,height:120}}/>
                <Text style={styles.splash_heading}>Kappabiriyani.</Text>
                <Text>Eat.Drink.Enjoy.Good food</Text>
                </ImageBackground>
            </View>
        );
    }
}
