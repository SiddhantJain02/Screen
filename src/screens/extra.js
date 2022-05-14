import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import left from '../BottomNavigator/left.png'
import reward from '../BottomNavigator/reward.jpg'

const Refer = () => {
  return (
    <View>
    <Text style={styles.re}>My rewards</Text>
    <Image style={styles.drop} source={left} />
    <View style={styles.box}></View>
    <View style={styles.card13}></View>
    <Image style={styles.imagereward} source={reward} />
    <Text style={styles.text1001}>245</Text>
    <Text style={styles.refferal}>Rewards Earned</Text>
    <Text style={{color:"black",bottom:50,left:25,}}>Transaction list</Text>
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
    drop:{
      position:"absolute",
      height:27,
      width:27,
      top:13, 
      left:5,
    },
box:{
  width: 317,
  height: 120,
  marginLeft:20,
  borderRadius:1,
  top:50,
  
  backgroundColor:"#53B17630",
  borderRadius:4,
    },
    card13:{
      borderRadius:4,
      width: 90,
      height: 90,
      margin:20,
      bottom:75,
      left:20,
      backgroundColor:"#53B176"
      },
      imagereward:{
        position: "absolute",
        width: 60,
        height: 60,
        left: 55, 
        top: 102,
        borderRadius:4,
        backgroundColor:"white",
                
      },
      text1001:{
        position: "absolute",
        left: 151,
        top: 80,
        textAlign:"center",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 43,
        lineHeight: 64.5,
        color: "#53B176",
      },
      refferal:{
        position: "absolute",
        left: 150,
        top: 140,
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 15,
        lineHeight: 19.5,
        textAlign:"center",
        color: "#53B176",
      },
});
export default Refer