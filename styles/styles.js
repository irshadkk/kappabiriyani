import { StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerreg:{
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:"center",
    alignItems:'center'
  },
  splash_bg_img:{
    width: null,
     height: null, 
     flex: 1,
     alignItems:'center',
     justifyContent:'center'
  },
  splash_heading:{
    fontSize:32,
    fontWeight:'500',
    color:"#56b900"
  },
  loginitem2: {
    marginTop: 10,
    marginRight:10,
    flexDirection: 'row',
    borderColor:"#c1c1c1",
    borderWidth:1.2,
    borderRadius:0

  },
  formicon2: {
    marginTop: 14,
    color: '#c1c1c1',
    fontSize: 20,
    marginRight: 10,
    marginLeft:10
  },
  input_text:{
      flex:1
  },
  factive: {
    marginTop: 2,
    fontSize: 28,
    color: '#56b900'
  },
  finactive: {
    fontSize: 20,
    color: 'grey'
  },
})