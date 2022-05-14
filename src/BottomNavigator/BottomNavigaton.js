import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { View, TouchableOpacity,Image,StyleSheet } from 'react-native'
import 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

import Home from '../screens/Home';
import Account from '../screens/Account';
import Notification from '../screens/Notification';
import Refer from '../screens/Refer';
import Add from '../screens/Add';
import reward from '../BottomNavigator/reward.jpg'

export default function Hom() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false, 
        tabBarIcon: ()=>{
          return <Ionicons name='settings'/>
        }
      }} />
      <Tab.Screen name="Account" component={Account} options={{headerShown: false , tabBarIcon: ()=>{
          return <Ionicons name='settings'/>
        }
        }} />
      <Tab.Screen name="Add" component={Add} options={{headerShown: false, tabBarIcon: ({focused})=>{
      <TouchableOpacity>
        <View style={{
          width:55,
          height:55,
          backgroundColor:"red",
          borderRadius:"50%",
          justifyContent:"center",
          alignItems:"center",
          }}>
            <Image source={reward} style={{
              width:70,
              height:70,
              position:"absolute",
              
            }}></Image>
          </View>

      </TouchableOpacity>
     
        }
        }}/>
      <Tab.Screen name="Refer" component={Refer} options={{headerShown: false, tabBarIcon: ()=>{
          return <Ionicons name='settings'/>
        }}}/>
      <Tab.Screen name="Notification" component={Notification} options={{headerShown: false, tabBarIcon: ()=>{
          return <Ionicons name='settings'/>
        }}}/>
    </Tab.Navigator>
  );
}