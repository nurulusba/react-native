import React, { Component } from "react"
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity
} from "react-native"

import Icons from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Tab1 from '../Replaceables/Tab1'
import Logic from '../SearchScreen/Logic'
import WeatherProject from './../SPA/WeatherProject'


import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import App from "../App"

export default  MyNavigations = () => {

    const Stack = createStackNavigator();
    const BottomTabs = createBottomTabNavigator();

    bottomTabFun = () =>
    {
        return (

           <BottomTabs.Navigator>

          <BottomTabs.Screen name='Home' component={WeatherProject}
             options ={{
              tabBarIcon: ({}) => (
                <Icon
                    name='cloud-queue'
                    color='orange'
                    size={25} />
              )}}
            />

         <BottomTabs.Screen name='Search' component={Logic} 
            options ={{
              tabBarIcon: ({}) => (
                <Icons
                    name="search1" 
                    color='orange'
                    size={23} />
              )}}
            />
            
       </BottomTabs.Navigator>
        )   
 }
        return(
            <NavigationContainer>
              <Stack.Navigator>
             <Stack.Screen 
             name='Bottoms' 
             children={this.bottomTabFun}
             options = {{
             title : 'Weather App' ,
             headerTitleStyle: {
                fontFamily : 'Iowan Old Style' ,
                fontSize : 20 , 
                color : 'black'
              },
            }}
             />
             </Stack.Navigator>                
            </NavigationContainer>
        )
    }
