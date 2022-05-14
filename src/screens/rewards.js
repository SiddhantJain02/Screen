import { View, Text,TextInput,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import dp from '../BottomNavigator/dp.png'
import drop from '../BottomNavigator/drop.png'
import upload from '../BottomNavigator/upload.png'
import skyline from '../BottomNavigator/skyline.png'
import stethoscope from '../BottomNavigator/stethoscope.png'
import hospital from '../BottomNavigator/hospital.png'
const AddPatients = () => {
return (
  <View>
    
    <TextInput style={styles.input}>Heart Failure</TextInput>
    <TextInput placeholder='Select city' placeholderTextColor = "gray" style={styles.inputdate}/>
    <Image style={styles.imagedate} source={skyline} />
    <Image style={styles.imagedrop} source={drop} />
    <TextInput placeholder = "Select Hospital" placeholderTextColor = "gray" style={styles.age}/>
    <Image style={styles.imageage} source={hospital} />
    <Image style={styles.imagedrophos} source={drop} />
    <TextInput placeholder='Select Doctor' placeholderTextColor = "gray"  style={styles.case}/>
    <Image style={styles.imagecase} source={stethoscope} />
    <Image style={styles.imagedropdoc} source={drop} />
    <Text style={styles.text}>Attach any required documents</Text>
    <TouchableOpacity style={styles.button}>
    <Text style={styles.admit}>Admit Patient</Text>
    </TouchableOpacity>
    <TouchableOpacity>
    <Image style={styles.image} source={upload} />
    </TouchableOpacity>
    <Text style={styles.upload}>Upload Document</Text>
    </View>
  )
}
const styles = StyleSheet.create({
input:{
position: "absolute",
width: 325,
height: 80,
left: 20,
top: 40,
backgroundColor: "#F6F9FF",
elevation:1,
borderRadius: 6,
fontWeight: "400",
color:"black",
paddingLeft:40,
paddingBottom:50,
},
inputdate:{
position: "absolute",
width: 325,
height: 40,
left: 20,
top: 140,
backgroundColor: "#F6F9FF",
elevation:1,
borderRadius: 6,
fontWeight: "400",
color:"black",
paddingLeft:40,
},
age:{
position: "absolute",
width: 325,
height: 40,
left: 20,
top:200,
backgroundColor: "#F6F9FF",
elevation:1,
borderRadius: 6,
fontWeight: "400",
color:"black",
paddingLeft:40,
},
case:{
  position: "absolute",
  width: 325,
  height: 40,
  left: 20,
  top:260,
  backgroundColor: "#F6F9FF",
  elevation:1,
  borderRadius: 6,
  fontWeight: "400",
  color:"black",
  paddingLeft:40,
  
},
text:{
position:"absolute",
top:310,
color:"black",
left:30,
},
button:{
position: "absolute",
width: 136,
height: 40,
left:110,
top: 450,
backgroundColor: "#00007A",
borderRadius: 4,
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
image:{
position:"absolute",
height:40,
tintColor:"gray",
width:40,
top:350,
left:155,
},
upload:{
position:"absolute",
fontSize:13,
color:"gray",
top:400,
left:125,
},
 imagedate:{
  position:"absolute",
  height:30,
  width:30,
  top:145,
  left:25,
 },
 imageage:{
  position:"absolute",
  height:30,
  width:30,
  top:205,
  left:25,
 },
 imagecase:{
  position:"absolute",
  height:30,
  width:30,
  top:265,
  left:25,
 },
 imagedrop:{
  position:"absolute",
  height:25,
  width:30,
  top:148,
  left:310,
  },
  imagedrophos:{
    position:"absolute",
    height:25,
    width:30,
    top:210,
    left:310,
    },
    imagedropdoc:{
      position:"absolute",
      height:25,
      width:30,
      top:270,
      left:310,
      },
})
export default AddPatients