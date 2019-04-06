import React from 'react';
import { FlatList, ActivityIndicator, Text, View, TouchableOpacity, StatusBar, Image, ScrollView, TextInput, Modal, Picker } from 'react-native';
import { Icon, Fab, Card } from 'native-base';
import styles from '../../styles/styles.js';
import Toast, { DURATION } from 'react-native-easy-toast';
import { NavigationActions, StackActions, DrawerActions, CardItem, Left, Button } from 'react-navigation';
export default class admin_products extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation
    const { params = {} } = navigation.state
    return {
      headerLeft: <View style={{ flexDirection: "row", marginLeft: 25 }}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Icon name="menu" style={{ color: '#fff', fontSize: 27, marginRight: 25, marginTop: 5 }} />
        </TouchableOpacity>
        <View>
          <Text style={{ color: "#fff", fontSize: 20, marginTop: 5 }} numberOfLines={1}>Home</Text>
        </View>
      </View>,
      headerStyle: {
        elevation: 1,
        shadowOpacity: 0,
        backgroundColor: "#3da641"

      }
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      delete_popup: false,
      add_up: false,
      delete_id: null,
      delete_name: '',
      add: false,
      update: false,
      length: 0,

      p_id: 0,
      p_name: '',
      p_rice: 0,
      language: 'false',
      p_off_price: '',
      p_off_percentage: '',
      main_cat: '',
      sub_cat: '',
      disc: '',
      image_url: ''
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

  //add A new item
  _add = () => {
    this.setState({
      add_up: true,
      add: true,
      update: false,
      heading: 'New Product',
      p_name: '',
      p_rice: '',
      offer: 'false',
      p_off_price: '',
      p_off_percentage: '',
      main_cat: '',
      sub_cat: '',
      disc: '',
      image_url: ''
    })
  }

  _add_service = () => {
    var obj = { "name": this.state.p_name, "disc": this.state.disc, "img": this.state.image_url, "price": this.state.p_rice, "offer": this.state.offer, "offer_price": this.state.p_off_price, "percentage_off": this.state.p_off_percentage, "main_category": this.state.main_cat, "sub_category": this.state.sub_cat }
    fetch('https://newsappnode-irs.herokuapp.com/api/addproducts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ add_up: false });
        this.componentDidMount();
      })
      .catch((error) => { alert('error Try again' + error); });
  }

  //end add a new item

  //update item
  _update = (item) => {
    this.setState({
      add_up: true,
      add: false,
      update: true,
      heading: 'update Product',
      p_id: item._id,
      p_name: item.name,
      p_rice: item.price,
      offer: item.offer,
      p_off_price: item.offer_price,
      p_off_percentage: item.percentage_off,
      main_cat: item.main_category,
      sub_cat: item.sub_category,
      disc: item.disc,
      image_url: item.img
    })
  }


  _update_service = () => {
    var obj = { "name": this.state.p_name, "disc": this.state.disc, "img": this.state.image_url, "price": this.state.p_rice, "offer": this.state.offer, "offer_price": this.state.p_off_price, "percentage_off": this.state.p_off_percentage, "main_category": this.state.main_cat, "sub_category": this.state.sub_cat }
    fetch('https://newsappnode-irs.herokuapp.com/api/updateproductbyid/' + this.state.p_id, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ add_up: false });
        this.componentDidMount();
        this.refs.toast.show('Product updated!');
      })
      .catch((error) => { alert('error Try again' + error); });
  }
  //end update item

  //delete item
  _Delete(id, name) {
    this.setState({
      delete_id: id,
      delete_name: name,
      delete_popup: true
    })
  }
  _delete_service = () => {
    return fetch('https://newsappnode-irs.herokuapp.com/api/deleteproductbyid/' + this.state.delete_id)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ delete_popup: false });
        this.componentDidMount();
        this.refs.toast.show('Product Deleted!');
      })
      .catch((error) => {
        console.error(error);
      });
  }
  //end delete item

  //searching items
  SearchFilterFunction(text) {
    const newData = this.arrayholder.filter(function (item) {
      const itemData = item.name.toUpperCase()
      const textData = text.toUpperCase()
      return itemData.indexOf(textData) > -1
    })
    this.setState({
      dataSource: newData.reverse(),
      text: text
    })
  }
  //end search

  render() {

    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" color="#3da641" />
        </View>
      )
    }

    return (
      <View style={styles.ad_main_container}>
        <StatusBar backgroundColor="#007611" barStyle="light-content" />
        <ScrollView>
          <View style={styles.search_container}>
            <View style={styles.search_box}>
              <Icon active name='search' style={styles.search_icon} />
              <TextInput
                style={styles.search_input}
                placeholder="Search Items"
                clearTextOnFocus={true}
                clearButtonMode='always'
                onChangeText={(text) => this.SearchFilterFunction(text)}
                value={this.state.username} />
            </View>
            <Text style={styles.sub_title}>{this.state.length} Products</Text>
          </View>
          <View style={styles.devider} />
          <View style={styles.admin_sub_contaiber}>
            <FlatList
              data={this.state.dataSource}
              renderItem={({ item: rowData, i }) => {
                return (
                  <Card key={i} style={styles.list_card}>
                    <View>
                      <Image source={{ uri: rowData.img }} style={{ width: 140, height: 130 }} />
                    </View>
                    <View style={styles.admin_third_container}>
                      <View style={styles.row}>
                        <Text style={styles.item_name} numberOfLines={1}>{rowData.name}</Text>
                      </View>
                      <View style={styles.row}>
                        <Text style={styles.item_price} numberOfLines={1}>${rowData.price}.00</Text>
                        <Text style={styles.offer_price} numberOfLines={1}>${rowData.offer_price}.00</Text>
                        {rowData.offer == true && (
                          <View style={styles.offer_box}>
                            <Text style={styles.offer_text}>Offer</Text>
                          </View>
                        )}
                      </View>
                      <View style={styles.discrip} >
                        <View style={{ flex: 1 }}>
                          <Text numberOfLines={1}>{rowData.disc}</Text>
                        </View>
                      </View>
                      <View style={styles.row}>
                        <TouchableOpacity style={styles.edit_btn}
                          onPress={() => { this._update(rowData); }}>
                          <Text style={styles.edit_text}>Edit</Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.delete_btn} onPress={() => { this._Delete(rowData._id, rowData.name) }}>
                          <Text style={styles.delete_txt}>Delete</Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                  </Card>
                );
              }}
              keyExtractor={item => item._id}
            />
          </View>
        </ScrollView>
        <Fab
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: '#3da641' }}
          position="bottomRight"
          onPress={() => { this._add() }}>
          <Icon name="add" />
        </Fab>




        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.add_up}
          onRequestClose={() => {
            this.setState({ add_up: false })
          }}>
          <StatusBar backgroundColor="rgba(52, 52, 52, 0.4)" barStyle="light-content" />
          <View style={{ flex: 1, backgroundColor: 'rgba(52, 52, 52, 0.4)', justifyContent: 'center' }}>
            <View style={{ flex: 1, backgroundColor: '#fff', borderTopRightRadius: 16, borderTopLeftRadius: 16, marginTop: 2 }}>
            <ScrollView>

              <View style={{ marginTop: 14, marginBottom: 14 }}>
                <Text style={{ marginLeft: 18, fontSize: 17, marginBottom: 10, color: '#000000' }}>{this.state.heading}</Text>
                <View style={styles.devider} />
              </View>

              <View style={{ marginRight: 18, marginLeft: 18, marginBottom: 10 }}>
                <Text style={{ color: '#000000', fontSize: 10 }}>Product Name</Text>
                <View style={styles.search_box}>
                  <Icon active name='create' style={styles.search_icon} />
                  <TextInput
                    style={styles.search_input}
                    placeholder="Product Name"
                    clearTextOnFocus={true}
                    clearButtonMode='always'
                    onChangeText={value => this.setState({ p_name: value })}
                    value={this.state.p_name} />
                </View>

                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ color: '#000000', fontSize: 10 }}>Product Price</Text>
                    <View style={styles.form_box}>
                      <Icon active name='create' style={styles.search_icon} />
                      <TextInput
                        style={styles.search_input}
                        placeholder="Product Price"
                        keyboardType="numeric"
                        clearTextOnFocus={true}
                        clearButtonMode='always'
                        onChangeText={value => this.setState({ p_rice: value })}
                        value={this.state.p_rice} />
                    </View>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ color: '#000000', fontSize: 10, marginLeft: 5 }}>Offer</Text>
                    <View style={styles.form_box1}>
                      <Icon active name='create' style={styles.search_icon} />
                      <Picker
                        selectedValue={this.state.offer}
                        style={styles.search_input}
                        onValueChange={(itemValue, itemIndex) =>
                          this.setState({ offer: itemValue })
                        }>
                        <Picker.Item label="True" value="true" />
                        <Picker.Item label="False" value="false" />
                      </Picker>
                    </View>
                  </View>
                </View>


                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ color: '#000000', fontSize: 10 }}>Offer Price</Text>
                    <View style={styles.form_box}>
                      <Icon active name='create' style={styles.search_icon} />
                      <TextInput
                        style={styles.search_input}
                        placeholder="Offer Price"
                        clearTextOnFocus={true}
                        clearButtonMode='always'
                        onChangeText={value => this.setState({ p_off_price: value })}
                        value={this.state.p_off_price} />
                    </View>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ color: '#000000', fontSize: 10, marginLeft: 5 }}>off Percentage</Text>
                    <View style={styles.form_box1}>
                      <Icon active name='create' style={styles.search_icon} />
                      <TextInput
                        style={styles.search_input}
                        placeholder="off Percentage"
                        clearTextOnFocus={true}
                        clearButtonMode='always'
                        onChangeText={value => this.setState({ p_off_percentage: value })}
                        value={this.state.p_off_percentage} />
                    </View>
                  </View>
                </View>



                <Text style={{ color: '#000000', fontSize: 10 }}>Main Category</Text>
                <View style={styles.search_box}>
                  <Icon active name='create' style={styles.search_icon} />
                  <TextInput
                    style={styles.search_input}
                    placeholder="Main Category"
                    clearTextOnFocus={true}
                    clearButtonMode='always'
                    onChangeText={value => this.setState({ main_cat: value })}
                    value={this.state.main_cat} />
                </View>


                <Text style={{ color: '#000000', fontSize: 10 }}>Sub Category</Text>
                <View style={styles.search_box}>
                  <Icon active name='create' style={styles.search_icon} />
                  <TextInput
                    style={styles.search_input}
                    placeholder="Sub Category"
                    clearTextOnFocus={true}
                    clearButtonMode='always'
                    onChangeText={value => this.setState({ sub_cat: value })}
                    value={this.state.sub_cat} />
                </View>

                <Text style={{ color: '#000000', fontSize: 10 }}>Discription</Text>
                <View style={styles.search_box}>
                  <Icon active name='create' style={styles.search_icon} />
                  <TextInput
                    style={styles.search_input}
                    placeholder="Write Discription"
                    clearTextOnFocus={true}
                    clearButtonMode='always'
                    onChangeText={value => this.setState({ disc: value })}
                    value={this.state.disc} />
                </View>


                <Text style={{ color: '#000000', fontSize: 10 }}>Image URL</Text>
                <View style={styles.search_box}>
                  <Icon active name='camera' style={styles.search_icon} />
                  <TextInput
                    style={styles.search_input}
                    placeholder="Enter a image url"
                    clearTextOnFocus={true}
                    clearButtonMode='always'
                    onChangeText={value => this.setState({ image_url: value })}
                    value={this.state.image_url} />
                </View>
                <Text style={{ textAlign: 'center', fontSize: 15, color: '#000000' }}>OR</Text>
                <TouchableOpacity style={{ flexDirection: 'row', height: 40, backgroundColor: '#b0bec5', borderRadius: 4, marginTop: 10, alignItems: 'center', justifyContent: 'center' }}>
                  <Icon active name='camera' style={{ marginRight: 10 }} />
                  <Text style={{ textAlign: 'center' }}>Upload Image</Text>
                </TouchableOpacity>


                <View style={{ flexDirection: 'row' }}>
                  {this.state.add &&
                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', height: 40, backgroundColor: '#3da641', borderRadius: 4, marginTop: 10, alignItems: 'center', justifyContent: 'center', marginRight: 5 }}
                      onPress={() => { this._add_service() }}>
                      <Text style={{ textAlign: 'center', color: "#fff" }}>Add +</Text>
                    </TouchableOpacity>
                  }
                  {this.state.update &&
                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', height: 40, backgroundColor: '#3da641', borderRadius: 4, marginTop: 10, alignItems: 'center', justifyContent: 'center', marginRight: 5 }}
                      onPress={() => { this._update_service() }}>
                      <Text style={{ textAlign: 'center', color: "#fff" }}>Update</Text>
                    </TouchableOpacity>
                  }

                  <TouchableOpacity style={{ flex: 1, flexDirection: 'row', height: 40, backgroundColor: '#e0e0e0', borderRadius: 4, marginTop: 10, alignItems: 'center', justifyContent: 'center', marginLeft: 5 }}
                    onPress={() => { this.setState({ add_up: false }) }}>
                    <Text style={{ textAlign: 'center', color: '#d32f2f' }}>Cancel</Text>
                  </TouchableOpacity>
                </View>

              </View>
              </ScrollView>
            </View>
          </View>
        </Modal>


        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.delete_popup}
          onRequestClose={() => {
            this.setState({ delete_popup: false })
          }}>
          <StatusBar backgroundColor="rgba(52, 52, 52, 0.2)" barStyle="light-content" />
          <View style={{ flex: 1, backgroundColor: 'rgba(52, 52, 52, 0.2)', justifyContent: 'center' }}>
            <Card style={{ backgroundColor: '#fff', marginLeft: 30, marginRight: 30, borderRadius: 4 }}>
              <Text style={{ marginLeft: 18, marginTop: 20, color: '#000000', fontWeight: '500' }}>{this.state.delete_name}</Text>
              <Text style={{ marginLeft: 18, marginTop: 4, fontSize: 20, marginBottom: 40, color: '#ce0a38', fontWeight: '500' }}>Permenently Delete Product ?</Text>
              <View style={{ flexDirection: 'row', marginBottom: 20, marginLeft: 15 }}>
                <TouchableOpacity style={styles.edit_btn} onPress={() => this.setState({ delete_popup: false })}>
                  <Text style={styles.edit_text}>cancel</Text>
                </TouchableOpacity >
                <TouchableOpacity style={styles.delete_btn} onPress={() => { this._delete_service() }}>
                  <Text style={styles.delete_txt}>Delete</Text>
                </TouchableOpacity>
              </View>
            </Card>
          </View>
        </Modal>

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
