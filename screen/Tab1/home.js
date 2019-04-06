import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,TouchableOpacity,Image,TextInput} from 'react-native';
import { Card,Icon} from 'native-base';
import styles from '../../styles/styles.js';
export default class home extends Component{
  static navigationOptions = {
   header:null
  };
  constructor(props) {
    super(props);
    this.state = {
      dataSource:[],
      length:''
    };
    this.arrayholder = [];
  }

  componentDidMount() {
    return fetch('https://newsappnode-irs.herokuapp.com/api/getproducts')
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
      <View style={{flex:1,backgroundColor:'#fff'}}>
      <View>
      <View style={{marginTop:20,flexDirection: 'row',borderColor: "#e0e0e0",backgroundColor: "#e0e0e0",borderWidth: 1.2,borderRadius:6,marginLeft:18,marginRight:18,height:45}}>
              <TextInput
                style={styles.input_text}
                placeholder="Search Food"/>
                 <Icon type="FontAwesome" name='search' style={{marginTop:8,color: "#c2c3c4",fontSize: 25,marginRight: 10,marginLeft: 10}} />
            </View>
      </View>
      <View  style={{margin:8}}>
       <FlatList
       numColumns={2}
              data={this.state.dataSource}
              renderItem={({ item: rowData, i }) => {
                return (
                  <Card key={i} style={{flex:1,marginRight:8,marginBottom:8,marginLeft:8,marginTop:8,borderRadius:7,elevation:1}}>
                      <Image source={{ uri: rowData.img }} style={{ width:null, height: 130,flex:1,borderTopLeftRadius:7,borderTopRightRadius:7}} />
                    <View style={{flex:1,marginLeft:10,marginRight:10,marginTop:5,marginBottom:5}}>
                    <Text style={{color:'#000000',fontWeight:'500',marginBottom:5,fontSize:15}} numberOfLines={1}>{rowData.name}</Text>

                    <View style={styles.row}>
                        <Text style={styles.item_price1} numberOfLines={1}>₹{rowData.price}.00</Text>
                        <Text style={styles.offer_price1} numberOfLines={1}>₹{rowData.offer_price}.00</Text>
                        {rowData.offer == true && (
                          <View style={styles.offer_box}>
                            <Text style={styles.offer_text}>Offer</Text>
                          </View>
                        )}
                      </View>
                      <TouchableOpacity style={{borderColor:'#c2c3c4',borderWidth: 1.2,flex:1,alignItems:'center',flexDirection:'row',justifyContent:'center',borderRadius:7,marginTop:10,marginBottom:10}}>
                      <Icon type="FontAwesome" name='shopping-bag' style={{marginTop:5,color: "#3da641",fontSize:20,marginBottom:5,marginRight:10}} />
                      <Text style={{fontWeight:'500'}}>Add To Cart</Text>
                      </TouchableOpacity>

                    </View>
                  </Card>
                );
              }}
              keyExtractor={item => item._id}
            />
             </View>
      </View>
    );
  }
}
