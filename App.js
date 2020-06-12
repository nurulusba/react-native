import React , {Component}  from 'react'
import {View,Text,StyleSheet,TextInput} from 'react-native'
import MyNavigations from './Navigations/MyNavigations'
import Weather from './src/Weather'
export default class App extends Component {
  render()
  {
    return(
   <Weather />
  // <MyNavigations />
   
   )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1 ,
    justifyContent : 'center' ,
    alignItems : 'center' , 
  }
})