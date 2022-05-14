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
      <Text style={styles.text1}>Enter the OTP</Text>
      <TextInput style={styles.input1}/>
      <TextInput style={styles.input2}/>
      <TextInput style={styles.input3}/>
      <TextInput style={styles.input4}/>
      <TextInput style={styles.input5}/>
      <TextInput style={styles.input6}/>
      <TouchableOpacity style={styles.button}>
    <Text style={styles.admit}>Verify OTP</Text>
    </TouchableOpacity>
    
    <TouchableOpacity>
    <Text style={styles.text3}>Not received OTP yet? Send Again</Text>
    </TouchableOpacity>
    <Text style={styles.text}>00:30</Text>
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
width:responsiveWidth(100),
height:responsiveHeight(60),
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
input1:{
  position: "absolute",
  width: 32,
  height: 40,
  top: 440,
  left:15,
  backgroundColor: "#F6F9FF",
  elevation:1,
  borderRadius: 6,
  fontWeight: "400",
  color:"black",
  paddingLeft:40,
  },
  input2:{
    position: "absolute",
    width: 32,
    height: 40,
    left: 70,
    top: 440,
    backgroundColor: "#F6F9FF",
    elevation:1,
    borderRadius: 6,
    fontWeight: "400",
    color:"black",
    paddingLeft:40,
    },
    input3:{
      position: "absolute",
      width: 32,
      height: 40,
      left: 125,
      top: 440,
      backgroundColor: "#F6F9FF",
      elevation:1,
      borderRadius: 6,
      fontWeight: "400",
      color:"black",
      paddingLeft:40,
      },
      input4:{
        position: "absolute",
        width: 32,
        height: 40,
        left: 180,
        top: 440,
        backgroundColor: "#F6F9FF",
        elevation:1,
        borderRadius: 6,
        fontWeight: "400",
        color:"black",
        paddingLeft:40,
        },
        input5:{
          position: "absolute",
          width: 32,
          height: 40,
          left: 235,
          top: 440,
          backgroundColor: "#F6F9FF",
          elevation:1,
          borderRadius: 6,
          fontWeight: "400",
          color:"black",
          paddingLeft:40,
          },
          input6:{
            position: "absolute",
            width: 32,
            height: 40,
            left: 290,
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
        top:620,
        color:"black",
        left:170,
        color:"gray"
        },
        text3:{
          fontFamily: 'Poppins',
fontStyle: "normal",
fontWeight: "500",
fontSize: 15,
lineHeight: 22.5,
color: "black",
textAlign:"center",
top:155,
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