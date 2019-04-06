import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from '../styles/styles';
import {ScrollView, Text, View,Image,TouchableOpacity} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { Icon } from 'native-base';
const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'registerscreens' })],
})
class SideMenu extends Component {
  navigateToScreen = (MyDrawerNavigator) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: MyDrawerNavigator
    });
    this.props.navigation.dispatch(navigateAction);
  }


  render () {
    return (
      <View style={{flex:1,backgroundColor:'#fff'}}>
        <ScrollView> 
            <TouchableOpacity style={{flexDirection:'row',marginTop:24,marginLeft:24}}>
            <View style={{alignItems:'flex-start'}}><Image source={require("../img/user.png")}  style={{ width:70, height:70,marginRight:24}} /></View>
            <View style={{alignItems:'flex-start',justifyContent:'center'}}>
                <Text style={{textAlign:'left',fontSize:18,color:'#000000'}}>Admin</Text>
                <Text style={{textAlign:'left'}}>Admin@gmail.com</Text>
            </View>
            </TouchableOpacity>
            <View style={{ backgroundColor: '#efeded', height:6, marginTop: 14 }} />

            <View style={{marginLeft:24,marginTop:18}}>
            <TouchableOpacity style={{flexDirection:'row',marginTop:19}}>
            <Icon name="apps" style={{color: '#686767', fontSize: 25,marginRight:18}} />
            <Text style={{textAlign:'left',fontSize:15,color:'#686767',flex:1}}>Products</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection:'row',marginTop:19}}>
            <Icon name="list" style={{color: '#686767', fontSize: 25,marginRight:18}} />
            <Text style={{textAlign:'left',fontSize:15,color:'#686767',flex:1}}>Main Category</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',marginTop:19}}>
            <Icon name="list" style={{color: '#686767', fontSize: 25,marginRight:18}} />
            <Text style={{textAlign:'left',fontSize:15,color:'#686767',flex:1}}>Sub Category</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection:'row',marginTop:19}}>
            <Icon name="flower" style={{color: '#686767', fontSize: 25,marginRight:18}} />
            <Text style={{textAlign:'left',fontSize:15,color:'#686767',flex:1}}>Offers</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection:'row',marginTop:19}} onPress={() =>  this.props.navigation.dispatch(resetAction)}>
            <Icon name="log-out" style={{color: '#686767', fontSize: 25,marginRight:18}} />
            <Text style={{textAlign:'left',fontSize:15,color:'#686767',flex:1}}>logout</Text>
            </TouchableOpacity>

            </View>
            </ScrollView>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;