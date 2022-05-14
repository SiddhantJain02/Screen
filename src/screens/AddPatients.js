import { View, Text,TextInput,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import dp from '../BottomNavigator/dp.png'
import drop from '../BottomNavigator/drop.png'
import user from '../BottomNavigator/user.png'
import upload from '../BottomNavigator/upload.png'
import c from '../BottomNavigator/c.png'
import calendar from '../BottomNavigator/calendar.png'
import left from '../BottomNavigator/left.png'
import adult from '../BottomNavigator/adult.png'

const AddPatients = () => {
return (
  <View>
    <Text style={styles.re}>Add new patient</Text>
    <Image style={styles.drop} source={left} />
    <TextInput placeholder='Enter Patient Name' placeholderTextColor = "gray"  style={styles.input}/>
    <Image style={styles.imagename} source={user} />
    <TextInput placeholder='Select admit date' placeholderTextColor = "gray" style={styles.inputdate}/>
    <Image style={styles.imagedate} source={calendar} />
    <Image style={styles.imagedrop} source={drop} />
    <TextInput placeholder = "Enter Patient Age" placeholderTextColor = "gray" style={styles.age}/>
    <Image style={styles.imageage} source={adult} />
    <TextInput placeholder='Enter case with patient' placeholderTextColor = "gray"  style={styles.case}/>
    <Image style={styles.imagecase} source={c} />
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
height: 40,
left: 20,
top: 80,
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
top:250,
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
height: 120,
left: 20,
top:310,
backgroundColor: "#F6F9FF",
elevation:1,
borderRadius: 6,
fontWeight: "400",
color:"black",
paddingLeft:40,
paddingBottom:80,
},
text:{
position:"absolute",
top:440,
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
top:350,
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
  height:30,
  width:30,
  top:63,
  left:25,
 },
 imagedate:{
  height:30,
  width:30,
  top:92,
  left:25,

 },
 imageage:{
  height:30,
  width:30,
  top:175,
  left:25,
 },
 imagecase:{
  height:30,
  width:30,
  top:210,
  left:25,
 },
 imagedrop:{
  position:"absolute",
  height:30,
  width:30,
  top:145,
  left:310,
  },
  re:{
    fontStyle: "normal",
    fontWeight: "500",
    color:"black",
    fontSize: 19,
    top:15,
    lineHeight: 22,
    paddingLeft:35,
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