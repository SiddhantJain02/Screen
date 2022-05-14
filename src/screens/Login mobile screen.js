import { View, Text,StyleSheet,Image,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import background from '../BottomNavigator/background.png'
import referro from '../BottomNavigator/referro.png'
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
const Loginmobilescreen = () => {
  return (
    <View>
      <Image style={styles.main} source={background} />
      <Image style={{left:17,top:120}} source={referro} />
      <View style = {styles.view2}></View>
      <Text style={styles.text1}>Doctor’s Login</Text>
      <TextInput placeholder='Mobile Number' placeholderTextColor = "black" style={styles.inputdate}/>
      <TouchableOpacity style={styles.button}>
    <Text style={styles.admit}>LOGIN</Text>
    </TouchableOpacity>
    <Text style={styles.text}>or</Text>
    <TouchableOpacity>
    <Text style={styles.text3}>Login with Email?</Text>
    </TouchableOpacity>
    <TouchableOpacity>
    <Text style={styles.text4}>Don’t have an account? Register Here</Text>
    </TouchableOpacity>
      </View>
      )
}

const styles=StyleSheet.create({
main:{
width:responsiveWidth(100),
height: responsiveHeight(100),
position:"absolute",
},

view2:{
width:380,
height:320,
backgroundColor:"white",
top:270,
borderTopLeftRadius:35,
},
text1:{
  position: "absolute",
  width: 163,
  height: 35,
  left: 108,
  top: 380,
  fontFamily: 'Poppins',
  fontStyle: "normal",
  fontWeight:"500",
  fontSize: 23,
  lineHeight: 34,
  color: "#00007A",
},
inputdate:{
  position: "absolute",
  width: 325,
  height: 40,
  left: 20,
  top: 440,
  backgroundColor: "#F6F9FF",
  elevation:1,
  borderRadius: 6,
  fontWeight: "400",
  color:"black",
  paddingLeft:40,
  },
  admit:{
    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 13,
    lineHeight: 20,
    textTransform: "uppercase",
    color: "white",
    textAlign:"center",
    top:10,
    },
    button:{
      position: "absolute",
      width: 100,
      height: 40,
      left:130,
      top: 500,
      backgroundColor: "#00007A",
      borderRadius: 4,
      },
      text:{
        position:"absolute",
        top:550,
        color:"black",
        left:170,
        },
        text3:{
          fontFamily: 'Poppins',
fontStyle: "normal",
fontWeight: "500",
fontSize: 15,
lineHeight: 22.5,
color: "black",
textAlign:"center",
top:165,
},
text4:{
  fontFamily: 'Poppins',
fontStyle: "normal",
fontWeight: "500",
fontSize: 15,
lineHeight: 22.5,
color: "black",
textAlign:"center",
top:180,
},

});
export default Loginmobilescreen