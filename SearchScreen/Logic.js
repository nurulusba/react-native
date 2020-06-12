import React , {Component}  from 'react'
import {View,Text,StyleSheet,TextInput,AsyncStorage ,FlatList,Button,TouchableOpacity} from 'react-native'
import Card from '../UiComponents/Card'
import { ThemeProvider } from '@react-navigation/native'

export default class Logic extends Component {
      state = {
          text : '' , 
          cities : [] ,
      }
 
   async buttonClick()
     {
       this.props.navigation.navigate('Home' , {city : this.state.text})
        await AsyncStorage.setItem('city' , this.state.text);
       
     }

  
  fetchCities = (text) =>
  {
      console.log(text);
      this.setState({text})
      fetch(`http://autocomplete.wunderground.com/aq?query=${text}`)
      .then(data => data.json())
      .then(city => 
        {
            this.setState({
                cities : city.RESULTS.slice(0,30)
            })
        })
       console.log(this.state.cities);
      }

    render()
  {
     
    return(
      <View style={styles.container}>
   
       <TextInput 
       style ={{flexDirection:'row'}}
       placeholder='Enter City' 
       onChangeText= {text => this.fetchCities(text) }
       />
      <Button title='Save Me' onPress={() => this.buttonClick()} />
       <View>
     <FlatList 
      data={this.state.cities}
      keyExtractor={(item) => item.zmw}
      renderItem={({item}) => (
          <Card>
           
      <TouchableOpacity>
      <Text>{item.name}</Text>
      </TouchableOpacity>
      </Card>
    )}
          
           
           />
           
           </View> 
       </View>
    
    )
    
  }
}

const styles = StyleSheet.create({
  container : {
    alignItems : 'center' , 
    justifyContent:'center' ,
    paddingTop : 50 ,
  }
})