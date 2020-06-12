import React , {Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text : '' ,
            forecast : null 
        }
    }
    
     Data = () => {
        return 
        (  <View>
                <Text> {this.props.main} </Text>
                <Text> {this.props.description} </Text>
                <Text> {this.props.temp} </Text>
            </View>
        )
    }

    handleText = (event) =>
    {
       this.setState({text : event.nativeEvent.text})
    }


    render()
    {
        return(
           <View style={{flex : 1 , justifyContent : 'center' , alignItems:'center'}}>
             <TextInput 
             placeholder = 'Enter City'
             onSubmitEditing={this.handleText}
             />
             <Text style={{fontSize:25}}> {this.state.text} </Text>
             

           </View>

        )
    }
}