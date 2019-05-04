import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, TouchableOpacity,ScrollView,TextInput} from 'react-native';
import { Card, Icon,Button} from 'native-base';
import styles from '../../styles/styles.js';
export default class cart extends Component {
  static navigationOptions = {
    title: 'Your Cart',
  };
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      length: ''
    };
    this.arrayholder = [];
  }

  componentDidMount() {
    return fetch('https://newsappnode-irs.herokuapp.com/api/getcarts')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.reverse(),
          length: responseJson.length
        }, function () {
          this.arrayholder = responseJson
        });
      })
      .catch((error) => { console.error(error); });
  }
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
   <FlatList
          data={this.state.dataSource}
          renderItem={({ item: rowData, i }) => {
            return (
              <View style={{ marginLeft: 18, marginRight: 18, marginTop: 18, flexDirection: 'row' }}>
              <Icon type="Ionicons" name="ios-radio-button-on" style={{ color: 'grey', marginLeft: 5, marginRight: 8, fontSize:10,marginTop:8}} />
                <View style={{ flex: 1, alignItems: 'flex-start'}}>
                  <Text style={{color:'#000000',fontSize:15}}>{rowData.name}</Text>
                  <Text style={{marginTop:7}}>₹00.00</Text>
                </View>
                <View style={{alignItems: 'flex-end'}}>
                <View style={{ borderColor: '#0eaf51', borderWidth: 1.7, marginBottom: 4, borderRadius:20, width: 90, flexDirection: 'row',height:27}}>
                  <TouchableOpacity style={{ alignItems: 'flex-start', flex: 1 }} onPress={() => { this._cart_update(rowData, rowData.qty - 1); }}>
                    <Icon type="MaterialIcons" name="remove" style={{ color: '#0eaf51', marginLeft: 5, marginRight: 8, marginTop: 3, fontSize: 20 }} /></TouchableOpacity>
                  <Text style={{ marginTop: 3, marginBottom: 3, color: '#000000' }}>0</Text>
                  <TouchableOpacity style={{ alignItems: 'flex-end', flex: 1 }} onPress={() => { this._cart_update(rowData, rowData.qty + 1); }}>
                    <Icon type="MaterialIcons" name="add" style={{ color: '#0eaf51', marginLeft: 5, marginRight: 8, marginTop: 3, fontSize: 20 }} /></TouchableOpacity>
                </View>
                <Text style={{color:'#000000',marginTop:7,marginRight:3}}>₹00.00</Text>
                  </View>
               
              </View>

            );
          }}
          keyExtractor={item => item._id}
        />
         <View style={{height:4,backgroundColor:'#e6e8ed',marginTop:10}}/>
         <View style={{ marginTop: 20, flexDirection: 'row', borderColor: "#e0e0e0", backgroundColor: "#e0e0e0", borderWidth: 1.2, borderRadius: 6, marginLeft: 18, marginRight: 18, height: 45 }}>
            <TextInput
              style={styles.input_text}
              placeholder="Special instructions" />
          </View>
        <View style={{height:4,backgroundColor:'#e6e8ed',marginTop:10,marginBottom:10}}/>
        <View style={{flexDirection:'row',marginLeft: 18, marginRight: 18,marginBottom:10}}>
        <View style={{flex:1,alignItems:'flex-start'}}>
        <Text>Total Items</Text>
        <Text>Item Tolal</Text>
        <Text style={{fontSize:10,marginTop:8}}>Service Charge</Text>
        <Text style={{color:'#000000',fontSize:15,marginTop:8}}>Grand Total</Text>
        </View>
         <View  style={{flex:1,alignItems:'flex-end'}}>
         <Text>5 items</Text>
         <Text>₹00.00</Text>
         <Text style={{fontSize:10,marginTop:8}}>₹00.00</Text>
         <Text style={{color:'#000000',fontSize:15,marginTop:8}}>₹00.00</Text>
        </View>
        </View>
        <View style={{height:4,backgroundColor:'#e6e8ed',marginTop:10,marginBottom:10}}/>

        <TouchableOpacity style={{flexDirection:'row',marginLeft: 18, marginRight: 18,marginBottom:10}}>
          <Text style={{marginTop:10,marginBottom:15,fontSize:16,color:'#0eaf51'}}>Change Delivery Location</Text>
          <View style={{flex:1,alignItems:'flex-end'}}>
          <Icon type="MaterialCommunityIcons" name="google-maps" style={{ color: 'grey', marginLeft: 5, marginRight: 8, fontSize:25}} />
          </View>
        </TouchableOpacity>

        </ScrollView>
        <Button block style={styles.cart_btn}>
                <Text style={styles.login_btn_text}>Checkout</Text>
              </Button>
      </View>
    );
  }
}
