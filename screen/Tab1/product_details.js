import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,TouchableOpacity,Image,TextInput} from 'react-native';
import { Card,Icon,Button} from 'native-base';
import styles from '../../styles/styles.js';
import Toast, { DURATION } from 'react-native-easy-toast';
export default class product_details extends Component{
    static navigationOptions = {
        title: 'Product Details',
      };
  constructor(props) {
    super(props);
    this.state = {
        id:this.props.navigation.state.params.id,
        name:this.props.navigation.state.params.name,
        disc:this.props.navigation.state.params.disc,
        img:this.props.navigation.state.params.img,
        price:this.props.navigation.state.params.price,
        offer_price:this.props.navigation.state.params.offer_price
    };
  }

  _add_to_cart = () =>{
    var obj = {"id":this.state.id,"name":this.state.name}
    fetch('https://newsappnode-irs.herokuapp.com/api/addcarts',{
      method: 'POST',
      headers: {  Accept: 'application/json',
        'Content-Type': 'application/json'},
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.refs.toast.show('Product carted!');
      })
      .catch((error) => { alert('error Try again' + error); });
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'#fff',flexDirection:"column"}}>
      <Image source={{ uri:this.state.img }} style={{ width:null, height: 130,flex:1}} />
      <View style={{flex:1,marginLeft:18,marginRight:18,marginTop:18}}>
      <Text style={{fontSize:25,color:'#000000',marginBottom:10}}>{this.state.name}</Text>
      <View style={styles.row}>
                        <Text style={styles.item_price2} numberOfLines={1}>₹{this.state.price}.00</Text>
                        <Text style={styles.offer_price2} numberOfLines={1}>₹{this.state.offer_price}.00</Text>
                      </View>
      <Text style={{marginBottom:10,marginTop:10}}>{this.state.disc}</Text>
      
      </View>
      <View style={{backgroundColor:'#e5e5e5',height:50,marginLeft:18,marginRight:18,borderRadius:30,flexDirection:'row',alignItems:'center'}}>
      <TouchableOpacity style={{flex:1,alignItems:'flex-start'}}>
          <Icon name="remove" style={{marginLeft:20}}/>
      </TouchableOpacity>
      <View><Text style={{fontSize:15}}>0</Text></View>
      <TouchableOpacity style={{flex:1,alignItems:'flex-end'}}>
      <Icon name="add" style={{marginRight:20}}/>
      </TouchableOpacity>

      </View>
      <Button block style={styles.login_btn} onPress={() => this._add_to_cart()}>
      <Icon type="FontAwesome" name='shopping-bag' style={{marginTop:5,color: "#fff",fontSize:20,marginBottom:5,marginRight:10,marginLeft:10}} />
              <Text style={styles.login_btn_text}>Add to cart</Text>
            </Button>
             <Toast
          ref="toast"
          style={{ backgroundColor: '#6b6c6d', borderRadius: 10 }}
          position='bottom'
          positionValue={200}
          fadeInDuration={750}
          fadeOutDuration={1000}
          opacity={0.8}
          textStyle={{ color: '#fff' }}
        />
      </View>
    );
  }
}
