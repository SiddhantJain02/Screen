import { View, Text,Image,StyleSheet,ScrollView } from 'react-native'
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import React from 'react'
import dp from '../BottomNavigator/dp.png'
import user from '../BottomNavigator/user.png'
import reward from '../BottomNavigator/reward.jpg'
import privacy from '../BottomNavigator/privacy.png'
import help from '../BottomNavigator/help.png'
import info from '../BottomNavigator/info.png'
import share from '../BottomNavigator/share.png'
import left from '../BottomNavigator/left.png'
import logout from '../BottomNavigator/logout.png'
import camera from '../BottomNavigator/camera.png'
import next from '../BottomNavigator/next.png'
import { Flex } from 'native-base';
const Notification = () => {
return (
<View style={styles.container}>
<Text style={styles.re}>My account</Text>
<Image style={[styles.drop1,{top:13,left:5,height:27,width:27}]} source={left} />
<Image style={styles.image} source={dp} />
<Image style={styles.camera} source={camera} />
<Text style={styles.text}>Dr. Parihar Parmar</Text>
<Text style={styles.text2}>MBBS, MD (Gynecologist/Obstetrician)</Text>
<Text style={styles.text3}>11 year(s) experience </Text>
<View style={{flex:1,flexDirection:"column",justifyContent:"space-between"}}>
<Image style={styles.imageuser} source={user} />
<Image style={[styles.drop1,{top:330,right:70}]} source={next} />
<Text style={[styles.out,{top:330,left:55}]}>Profile </Text>
<Image style={[styles.imageuser,{top:360,right:370}]} source={reward} />
<Image style={[styles.drop1,{top:368,right:70}]} source={next} />
<Text style={[styles.out,{top:360,left:55}]}>My Rewards </Text>
</View>

<View style ={styles.pline}>
<Image style={[styles.imageuser,{top:11,right:308}]} source={help} />
<Image style={[styles.drop1,{top:13,right:10}]} source={next} />
<Text style={[styles.out,{top:10,left:25}]}>About us </Text>
<Image style={[styles.imageuser,{top:41,right:308}]} source={privacy} />
<Image style={[styles.drop1,{top:42,right:10}]} source={next} />
<Text style={[styles.out,{top:40,left:25}]}>Privacy Policy </Text>
<Image style={[styles.imageuser,{top:70,right:308}]} source={info} />
<Image style={[styles.drop1,{top:75,right:10}]} source={next} />
<Text style={[styles.out,{top:70,left:25}]}>FAQ </Text>
<View style ={[styles.pline,{top:100,left:1}]}></View>
<Image style={[styles.imageuser,{top:110,right:308}]} source={share} />
<Image style={[styles.drop1,{top:145,right:10}]} source={next} />
<Text style={[styles.out,{top:110,left:28}]}>Share with friends </Text>
<Image style={[styles.imageuser,{top:145,right:308}]} source={logout} />
<Image style={[styles.drop1,{top:115,right:10}]} source={next} />
<Text style={[styles.out,{top:140,left:28}]}>Logout </Text>
<Text style={[styles.out,{top:180,left:90,color:"#7C7C7C"}]}> App version 0.2.5</Text>
</View>
</View>
)
}
const styles = StyleSheet.create({
image:{

position: "absolute",
width:responsiveWidth(30),
height: responsiveHeight(18),
top: 100,  
left:150,
borderRadius:100,
},
camera:{
position: "absolute",
width:responsiveWidth(7),
height: responsiveHeight(4),
left: 230, 
top: 190,    
},
text:{
position: "absolute",
width:responsiveWidth(60),
height: responsiveHeight(10),
left: 95,
top: 245,
fontStyle: "normal",
fontWeight: "400",
fontSize: 23,
lineHeight: 34,
color: "#00007A",
textAlign:"center"
},
text2:{
position: "absolute",
left: 120,
top: 280,
fontStyle: "normal",
fontWeight: "400",
fontSize: 12,
lineHeight: 18,
color: '#7C7C7C',
},
text3:{
position: "absolute",
left: 150,
top: 300,
fontStyle: "normal",
fontWeight: "400",
fontSize: 13,
lineHeight: 20,
color: '#171726',
},
pline:{
position: "absolute",
width:responsiveWidth(80),
height: responsiveHeight(0.2),
left: 27,
top: 420,
border: 0.5,
backgroundColor:"#7C7C7C",
},

out:{
position: "absolute",
left: 28,
top: 140,
fontStyle: "normal",
fontWeight: "400",
fontSize: 15,
lineHeight: 22,
color: "#171726",
},
imageuser:{
position: "absolute",
width: 19,
height: 19,
right:370,
top: 330,    
},
re:{
fontStyle: "normal",
fontWeight: "500",
color:"black",
fontSize: 20,
top:16,
lineHeight: 22,
paddingLeft:35,
},
drop1:{
position:"absolute",
width:responsiveWidth(5),
height: responsiveHeight(2),
},
})
export default Notification