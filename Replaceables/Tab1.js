import React ,{ Component } from "react"
import {View,Text,StyleSheet} from 'react-native'

export default class Tab1 extends Component {
    render()
    {
        return(
            <View style={styles.container}>
                <Text>Hello</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container :
    {
        flex : 1 ,
        justifyContent : 'center' ,
        alignItems : 'center' ,
    }
})