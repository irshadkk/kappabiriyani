import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  //splash screen
  splash_bg_img: {
    width: null,
    height: null,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  splash_heading: {
    fontSize: 34,
    color: "#52232d"
  },
  //end splash screen
  //registration pages
  scrollviews: {
    justifyContent: 'center',
    flex: 1
  },
  containerreg: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
  },
  sub_container: {
    alignItems: 'center',
    marginBottom: 10
  },
  logo_img: {
    width: 100,
    height: 50
  },
  heading_container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 24,
    marginTop: 24
  },
  welcome_h: {
    color: '#52232d',
    fontSize: 28
  },
  texts_h: {
    marginBottom: 10,
    marginRight: 20,
    color: '#000000'
  },
  form_container: {
    alignItems: 'center',
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 18
  },
  loginitem2: {
    marginTop: 15,
    flexDirection: 'row',
    borderColor: "#e0e0e0",
    backgroundColor: "#e0e0e0",
    borderWidth: 1.2,
    borderRadius: 4

  },
  formicon2: {
    marginTop: 14,
    color: "#52232d",
    fontSize: 20,
    marginRight: 10,
    marginLeft: 10
  },
  input_text: {
    flex: 1,
    marginLeft:10
  },
  login_btn: {
    backgroundColor: '#3da641',
    borderRadius: 4,
    marginTop: 50,
    height: 50
  },
  cart_btn: {
    backgroundColor: '#3da641',
    borderRadius: 4,
    height: 50
  },
  login_btn_text: {
    fontSize: 18,
    color: '#fff'
  },
  bottom_container: {
    flexDirection: 'row',
    marginTop: 20
  },
  sign_up: {
    fontSize: 15,
    color: '#3da641'
  },
  btn_skip: {
    backgroundColor: '#f9f9f9',
    borderRadius: 4,
    marginTop: 20,
    marginLeft: 2,
    height: 50
  },
  btn_skip_text: {
    fontSize: 15,
    color: '#52232d'
  },

  //end register screen
  //admin product list
  loading_container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  ad_main_container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  search_container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 8,
    marginBottom: 5
  },
  search_box: {
    marginTop: 10,
    flexDirection: 'row',
    borderColor: "#e0e0e0",
    backgroundColor: "#e0e0e0",
    borderWidth: 1.2,
    borderRadius: 4,
    marginBottom: 10
  },
  search_icon: {
    marginTop: 10,
    color: "#aeaeae",
    fontSize: 20,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10
  },
  search_input: {
    flex: 1,
    height: 40
  },
  sub_title: {
    marginLeft: 7,
    color: "#000000"
  },
  devider: {
    backgroundColor: '#e2e1e0',
    height: 1,
    marginTop: 2,
    marginBottom: 10
  },
  admin_sub_contaiber: {
    marginLeft: 18,
    marginRight: 18
  },
  list_card: {
    flexDirection: 'row',
    elevation: 1
  },
  admin_third_container: {
    marginLeft: 14,
    marginTop: 10,
    marginBottom: 10,
    flex: 1
  },
  row: {
    flexDirection: 'row'
  },
  item_name: {
    color: '#000000',
    fontSize: 18,
    marginBottom: 7,
    marginRight: 10
  },
  item_price: {
    fontSize: 13,
    fontWeight: '500',
    marginRight: 10,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },
  offer_price: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
    marginRight: 10
  },
  item_price1: {
    fontSize: 12,
    fontWeight: '500',
    marginRight: 10,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },
  offer_price1: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '500',
    marginRight: 10
  },
  item_price2: {
    fontSize: 18,
    fontWeight: '500',
    marginRight: 10,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },
  offer_price2: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '500',
    marginRight: 10
  },
  offer_box: {
    backgroundColor: '#3da641',
    marginLeft: 10,
    borderRadius: 6,
    height: 14,
    marginTop: 1,
    marginBottom: 3
  },
  offer_text: {
    color: '#fff',
    fontSize: 10,
    marginLeft: 8,
    marginRight: 8
  },
  discrip: {
    marginBottom: 10,
    flexDirection: 'row'
  },
  edit_btn: {
    backgroundColor: '#e0e0e0',
    marginRight: 14,
    borderRadius: 4,
    alignItems:'center',
    flex:1
  },
  edit_text: {
    marginBottom: 5,
    marginTop: 5,
    color: '#000000'
  },
  delete_btn: {
    backgroundColor: '#fbe9e7',
    borderRadius: 4,
    marginRight:14,
    alignItems:'center',
    flex:1
  },
  delete_txt: {
    marginBottom: 5,
    marginTop: 5,
    color: '#000000'
  },
  //end admin products list



  form_box: {
    marginTop: 10,
    flexDirection: 'row',
    borderColor: "#e0e0e0",
    backgroundColor: "#e0e0e0",
    borderWidth: 1.2,
    borderRadius: 4,
    marginBottom: 10,
    marginRight:5
  },
  form_box1: {
    flex:1,
    marginTop: 10,
    flexDirection: 'row',
    borderColor: "#e0e0e0",
    backgroundColor: "#e0e0e0",
    borderWidth: 1.2,
    borderRadius: 4,
    marginBottom: 10,
   marginLeft:5
  },

  factive: {
    marginTop: 2,
    fontSize: 38,
    color: '#3da641'
  },
  finactive: {
    fontSize: 28,
    color: '#aeafaf'
  },
  modal_body: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
    justifyContent: 'center'
  },
  modal_body_2: {
    marginLeft: 22,
    marginRight: 22,
    borderRadius: 14
  },
  modal_body_3: {
    borderRadius: 14
  },
  user_alert_text: {
    marginTop: 12,
    marginRight: 12,
    marginLeft: 15,
    fontSize: 22,
    fontFamily: 'OpenSans-SemiBold',
    color: '#000000'
  },
})