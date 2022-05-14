import { View, Text,TextInput,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import teacher from '../BottomNavigator/teacher.png'
import drop from '../BottomNavigator/drop.png'
import upload from '../BottomNavigator/upload.png'
import reg from '../BottomNavigator/reg.png'
import certificate from '../BottomNavigator/certificate.png'
import user from '../BottomNavigator/user.png'
import email from '../BottomNavigator/email.png'
import left from '../BottomNavigator/left.png'
import hospital from '../BottomNavigator/hospital.png'
const AddPatients = () => {
return (
  <View>
    <Text style={styles.re}>Update profile</Text>
    <Image style={styles.drop} source={left} />
    <TextInput placeholder='Enter your name' placeholderTextColor = "gray"  style={styles.input}/>
    <Image style={styles.imagename} source={user} />
    <TextInput placeholder='Enter your email' placeholderTextColor = "gray" style={styles.inputdate}/>
    <Image style={styles.imagedate} source={email} />
    <TextInput placeholder = "Select your current hospital" placeholderTextColor = "gray" style={styles.age}/>
    <Image style={styles.imageage} source={hospital} />
    <Image style={styles.imagedrop} source={drop} />
    <TextInput placeholder='Select your qualification' placeholderTextColor = "gray"  style={styles.case}/>
    <Image style={styles.imagecase} source={certificate} />
    <Image style={styles.imagequali} source={drop} />
    <TextInput placeholder = "Select your speciality" placeholderTextColor = "gray" style={styles.special}/>
    <Image style={styles.imagespecial} source={teacher} />
    <Image style={styles.imagespec} source={drop} />
    <TextInput placeholder='Enter registration detail' placeholderTextColor = "gray"  style={styles.reg}/>
    <Image style={styles.imagereg} source={reg} />
    <Text style={styles.text}>Attach any required documents</Text>
    <TouchableOpacity style={styles.button}>
    <Text style={styles.admit}>UPDATE DETAIL</Text>
    </TouchableOpacity>
    <TouchableOpacity>
    <Image style={styles.image} source={upload} />
    </TouchableOpacity>
    <Text style={styles.upload}>Upload Document</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  re:{
    fontStyle: "normal",
    fontWeight: "500",
    color:"black",
    fontSize: 19,
    top:15,
    lineHeight: 22,
    paddingLeft:35,
    },
input:{
position: "absolute",
width: 325,
height: 40,
left: 20,
top: 60,
backgroundColor: "#F6F9FF",
elevation:1,
borderRadius: 6,
fontWeight: "400",
color:"black",
paddingLeft:40,
},
inputdate:{
position: "absolute",
width: 325,
height: 40,
left: 20,
top: 120,
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
top:220,
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
top:280,
backgroundColor: "#F6F9FF",
elevation:1,
borderRadius: 6,
fontWeight: "400",
color:"black",
paddingLeft:40,
},
special:{
  position: "absolute",
  width: 325,
  height: 40,
  left: 20,
  top:340,
  backgroundColor: "#F6F9FF",
  elevation:1,
  borderRadius: 6,
  fontWeight: "400",
  color:"black",
  paddingLeft:40,
  },
  reg:{
    position: "absolute",
    width: 325,
    height: 40,
    left: 20,
    top:400,
    backgroundColor: "#F6F9FF",
    elevation:1,
    borderRadius: 6,
    fontWeight: "400",
    color:"black",
    paddingLeft:40,
    },
text:{
position:"absolute",
top:450,
color:"black",
left:30,
},
button:{
position: "absolute",
width: 136,
height: 40,
left:110,
top: 570,
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
width:40,
tintColor:"gray",
top:470,
left:155,
},
upload:{
position:"absolute",
fontSize:13,
color:"gray",
top:530,
left:125,
},
imagename:{
  position:"absolute",
  height:30,
  width:30,
  top:65,
  left:25,
 },
 imagedate:{
  position:"absolute",
  height:30,
  width:30,
  top:125,
  left:25,
 },
 imageage:{
  position:"absolute",
  height:30,
  width:30,
  top:225,
  left:25,
 },
 imagecase:{
  position:"absolute",
  height:30,
  width:30,
  top:285,
  left:25,
 },
 imagedrop:{
  position:"absolute",
  height:30,
  width:30,
  top:225,
  left:310,
  },
  imagespec:{
    position:"absolute",
    height:30,
    width:30,
    top:345,
    left:310,
    },
    imagequali:{
      position:"absolute",
      height:30,
      width:30,
      top:285,
      left:310,
      },
  
imagespecial:{
position:"absolute",
height:30,
width:30,
top:345,
left:25,
},
imagereg:{
position:"absolute",
height:30,
width:30,
top:405,
left:25,
},
drop:{
  position:"absolute",
  height:27,
  width:27,
  top:13,
  left:5,

  },
})
export default AddPatients