import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import styles from '../styles/styles.js';
import { NavigationActions, StackActions } from 'react-navigation';
import { Icon, Item, Card, CardItem, Left, Body, Button, Input } from 'native-base';
const user = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'routescreen' })],
})
const admin = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'adminroute' })],
})
export default class register extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:''
    };
  }

  _login = () => {
    if(this.state.username == 'admin' && this.state.password == 'admin'){
      this.props.navigation.dispatch(admin);
    }
    else if (this.state.username == 'user' && this.state.password == 'user'){
      this.props.navigation.dispatch(user);
    }
    else{
      alert('login falid');
    }
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.scrollviews}>
        <View style={styles.containerreg}>
          <View style={styles.sub_container}>
            <Image source={require("../img/logo1.jpg")} style={styles.logo_img} />
          </View>
          <View style={styles.heading_container}>
            <Text style={styles.welcome_h}>Welcome to Kappabiriyani.</Text>
            <Text style={styles.texts_h}>You Can try the application without signin, but why would you do that.</Text>
          </View>

          <View style={styles.form_container}>
            <View style={styles.loginitem2}>
              <Icon active name='person' style={styles.formicon2} />
              <TextInput
                style={styles.input_text}
                autoFocus
                placeholder="Username"
                clearTextOnFocus={true}
                clearButtonMode='always'
                onChangeText={value => this.setState({ username: value })}
                value={this.state.username} />
            </View>

            <View style={styles.loginitem2}>
              <Icon active name='lock' style={styles.formicon2} />
              <TextInput
                style={styles.input_text}
                placeholder="password"
                clearTextOnFocus={true}
                clearButtonMode='always'
                onChangeText={value => this.setState({ password: value })}
                value={this.state.password} 
                secureTextEntry={true}/>
            </View>
            <Button block style={styles.login_btn} onPress={() => this._login()}>
              <Text style={styles.login_btn_text}>Login</Text>
            </Button>
            <View style={styles.bottom_container}>
              <Text>New Here? </Text>
              <Text style={styles.sign_up}> SignUp</Text>
            </View>

            <Button block style={styles.btn_skip} onPress={() => this.props.navigation.dispatch(user)}>
              <Text style={styles.btn_skip_text}>Skip Continue</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    );
  }
}
