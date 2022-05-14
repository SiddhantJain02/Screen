import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import SpalshScreen from '../BottomNavigator/SpalshScreen.png'
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const Refer = () => {
  return (
    <View>
     <Image style={styles.main} source={SpalshScreen} />
    </View>
  )
}
const styles=StyleSheet.create({
  main:{
  width:responsiveWidth(100),
  height: responsiveHeight(100),
  position:"absolute",
  },
});
export default Refer