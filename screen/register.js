import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput,Image} from 'react-native';
import styles from '../styles/styles.js';
import { NavigationActions, StackActions } from 'react-navigation';
import { Icon, Item, Card, CardItem, Left, Body, Button, Input } from 'native-base';
const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'routescreen' })],
})
export default class register extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.containerreg}>
        <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 17, marginRight: 17, marginBottom: 18 }}>
        <Image  source={require("../img/logo.png")} style={{width:80,height:80}}/>
          <Text style={styles.splash_heading}>Kappabiriyani.</Text>
          <Text style={{marginBottom:20}}>Eat.Drink.Enjoy.Good food</Text>
          <View style={styles.loginitem2}>
            <Icon active name='person' style={styles.formicon2} />
            <TextInput
              style={styles.input_text}
              autoFocus
              placeholder="Username"
              clearTextOnFocus={true}
              clearButtonMode='always' />
          </View>

          <View style={styles.loginitem2}>
            <Icon active name='lock' style={styles.formicon2} />
            <TextInput
              style={styles.input_text}
              placeholder="password"
              clearTextOnFocus={true}
              clearButtonMode='always' />
          </View>
            <Button block style={{backgroundColor: '#56b900',borderRadius: 0,marginTop:20,marginLeft:2, marginRight: 10}}>
            <Text  style={{ fontSize: 16,color: '#fff' }}>Login </Text>
          </Button>

          <View style={{flexDirection: 'row',marginTop:20}}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity style={{ backgroundColor: '#9ed173', borderRadius: 0, alignItems: 'center', marginRight: 10 }}>
              <Text style={{ fontSize: 16, marginBottom: 10, marginLeft: 10, marginRight: 10, marginTop: 10, color: '#fff' }}>Register Now</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity style={{ backgroundColor: '#bbbcba', borderRadius: 0, alignItems: 'center', marginRight: 10 }}
             onPress={() => this.props.navigation.dispatch(resetAction)} >
              <Text style={{ fontSize: 16, marginBottom: 10, marginLeft: 10, marginRight: 10, marginTop: 10, color: '#fff' }}>Skip Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>

       
      </View>
    );
  }
}
