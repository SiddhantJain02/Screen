import { View, Text, StyleSheet,Image,FlatList,TouchableOpacity } from 'react-native'
import React, {Component} from 'react'
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import dp from '../BottomNavigator/dp.png'
import treated from '../BottomNavigator/treated.png'
import refered from '../BottomNavigator/refered.png'
import reward from '../BottomNavigator/reward.jpg'
import rating from '../BottomNavigator/rating.png'


const Home = ({}) => {
    return (
<View style={styles.mainContainer} >
    <View style={{flexDirection: "row",paddingStart:-80}}> 
        <Image style={styles.image} source={dp} />
             <View>
                <Text style={styles.mainText}>Welcome back</Text>
                <Text style={styles.headerText}>Dr. Parihar Parmar</Text>
            </View>
        <View style={{alignItems:"flex-end",paddingLeft:20}}> 
            <View style={styles.card4}></View>
            <View style={styles.line}></View>
            <View style={styles.line1}></View>
            <View style={styles.line2}></View>
        </View>
    </View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"space-evenly"}}>
            <View style={styles.card}>
                <View style={styles.card11}></View>
                <Text style={styles.text00}>24</Text>
                <Text style={styles.text000}>Treated Patients</Text>
                <Image style={styles.imagetreated} source={treated} />
            </View>
            <View style={styles.card8}>
                <View style={styles.card12}></View>
                <Text style={styles.text101}>24</Text>
                <Text style={styles.text001}>Referred Patients</Text>
                <Image style={styles.imagerefered} source={refered} />
            </View>
        </View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"space-evenly"}}>
            <View style={styles.card3}>
            <Text style={styles.text1001}>245</Text>
            <Text style={styles.refferal}>Rewards Earned</Text>
            <View style={styles.card13}>
            <Image style={styles.imagereward} source={reward} />
            </View>
            </View>
             <View style={styles.card5}>
             <Text style={styles.ra}>24</Text>
            <Text style={styles.current}>Current Rating</Text>
            <View style={styles.card00}></View>
            <Image style={styles.imagerating} source={rating} />
            </View>
        </View>
        </View> 
        );
      };
      
        

        
const styles = StyleSheet.create({
mainContainer:{
position: "absolute",
width:responsiveWidth(100),
height: responsiveHeight(100),
backgroundColor: "#FFFFFF",
},
mainText:{
position: "absolute",
width: 90,
height: 18,
left: 86,
top: 30,
fontFamily: 'Poppins',
fontStyle: "normal",
fontWeight:"400",
fontSize: 12,
lineHeight: 18,
color: "#7C7C7C",      
},
image:{
position: "absolute",
width: 50,
height: 50,
left: 20, 
top: 30,        
},
headerText:{
position: "absolute",
width: 210,
height: 35,
left: 86,
top: 40,
fontStyle: "normal",
fontWeight: "400",
fontSize: 23,
lineHeight: 34,
color: "#171726",
},
card:{
width:responsiveWidth(45),
height: responsiveHeight(16),
borderRadius:10,
top: 105,
backgroundColor:"#D837340D"
},
card11:{
width: 50,
height: 50,
margin:20,
borderRadius:4,
top:2,
backgroundColor:"#D83734"
},
card8:{
width:responsiveWidth(45),
height: responsiveHeight(16),
borderRadius:10,
top: 105,
backgroundColor:"#00007A0D",
},
card12:{
width: 50,
height: 50,
margin:20,
borderRadius:4,
top:2,
backgroundColor:"#00007A"
},
card3:{
width:responsiveWidth(45),
height: responsiveHeight(16),
borderRadius:10,
bottom: 124,
backgroundColor:"#53B1760D",
},
card13:{
borderRadius:4,
width: 50,
height: 50,
margin:20,
top:2,
backgroundColor:"#53B176"
},
card5:{
borderRadius:10,
width:responsiveWidth(45),
height: responsiveHeight(16),
bottom: 124,
backgroundColor:"#FFCC010D",
},
card00:{
width: 50,
height: 50,
marginLeft:20,
borderRadius:1,
top:22,
elevation:1,
backgroundColor:"#FFCC01",
borderRadius:4,
},
text00:{
position: "absolute",
left: 90,
top: 15,
fontStyle: "normal",
fontWeight: "600",
fontSize: 43,
lineHeight: 64.5,
alignContent:"center",
color: "#D83734",
},
card4:{
position: "absolute",
width: 40,
height: 40,
left: 310,
top: 35,
backgroundColor:"#F6F9FF",
borderRadius: 4,
},
text000:{
position: "absolute",
left: 35,
top: 80,
fontStyle: "normal",
fontWeight: "600",
fontSize: 13,
lineHeight: 19.5,
textAlign:"center",
color: "#D83734",
},
text02:{
position: "absolute",
left: 35,
top: 80,
fontStyle: "normal",
fontWeight: "600",
fontSize: 13,
lineHeight: 19.5,
textAlign:"center",
color: "#D83734",
},
text001:{
position: "absolute",
left: 35,
top: 80,
fontStyle: "normal",
fontWeight: "600",
fontSize: 13,
lineHeight: 19.5,
textAlign:"center",
color: "#00007A",
},
text101:{
  position: "absolute",
  left: 90,
  top: 15,
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: 43,
  lineHeight: 64.5,
  alignContent:"center",
  color: "#00007A",
},
text1001:{
  position: "absolute",
  left: 78,
  top: 15,
  textAlign:"center",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: 42,
  lineHeight: 64.5,
  color: "#53B176",
},
refferal:{
  position: "absolute",
  left: 35,
  top: 80,
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: 13,
  lineHeight: 19.5,
  textAlign:"center",
  color: "#53B176",
},
ra:{
  position: "absolute",
  left: 90,
  top: 15,
  textAlign:"center",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: 42,
  lineHeight: 64.5,
  color: "#FFCC01",
},
current:{
  position: "absolute",
  left: 43,
  top: 80,
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: 13,
  lineHeight: 19.5,
  textAlign:"center",
  color: "#FFCC01",
},
container:{
  flex:1,
  backgroundColor:"white",
  padding:24,
  },
image50:{
 position: "absolute",
  width: 30,
  height: 30,
  left: 120, 
  bottom:10,
  },
Text1:{
color:"#00007A",
fontStyle: "normal",
fontWeight: "400",
bottom:10,
fontSize: 15,
lineHeight: 22,
},
Text2:{
  color:"#171726",
  fontSize:13,
  fontStyle: "normal",
fontWeight: "500",
lineHeight: 20,
bottom:4,
},
Text3:{
  color:"#171726",
  fontSize:13,
  fontStyle: "normal",
fontWeight: "500",
lineHeight: 20,
top:2
},
flatList:{
  flexDirection:"row",
  justifyContent:"flex-start",
  alignItems:"center",
  backgroundColor:"white",
  marginBottom:16,
  padding:8,
  borderRadius:2,
  elevation:2,
  width:374,
  height:100,
  },
delete:{
  left:90,
  top:20,
  borderRadius:5,
  backgroundColor:"blue",
  width:60,
  height:25,
},
Textdelete:{
color:"#00007A",
fontStyle: "normal",
fontWeight: "500",
textAlign:"center",
color:"white",
fontSize: 13,
lineHeight: 22,
},
imagetreated:{
  position: "absolute",
  width: 30,
  height: 30,
  left: 30, 
  top: 32,
  borderRadius:2,        
},
imagerefered:{
  position: "absolute",
  width: 30,
  height: 30,
  left: 30, 
  top: 32,
  borderRadius:2,
  backgroundColor:"white",
          
},
imagereward:{
  position: "absolute",
  width: 30,
  height: 30,
  left: 10, 
  top: 10,
  borderRadius:2,
  backgroundColor:"white",
          
},
imagerating:{
  position: "absolute",
  width: 33,
  height: 33,
  left: 28, 
  top: 31,
  borderRadius:4,
  backgroundColor:"white",        
},
line:{
  position: "absolute",
  width: 20,
  height: 2,
  left: 322, 
  top: 48,
  backgroundColor:"black",        
},
line1:{
  position: "absolute",
  width: 23,
  height: 2,
  left: 319, 
  top: 54,
  backgroundColor:"black",        
},
line2:{
  position: "absolute",
  width: 16,
  height: 2,
  left: 326, 
  top: 60,
  backgroundColor:"black",        
},
 });
export default Home