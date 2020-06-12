import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default function Card(props) {
    return (
        <View style={styles.card}>
        <View style={styles.cardContent}>
         {props.children}
        </View> 

        </View>
    )
}
const styles = StyleSheet.create({
    card : {
        width : 400,
        height : 80,
        borderRadius : 10 ,
        elevation : 10 ,
        backgroundColor : '#fff' ,
        shadowOffset : {
            width : 2 ,
            height : 2 
        } ,
        shadowColor : '#333' ,
        shadowOpacity : 0.3 ,
        shadowRadius : 3 ,
        marginHorizontal : 4 ,
        marginVertical : 6
    } ,
    cardContent : {
        marginHorizontal : 25 ,
        marginVertical : 20 ,
    }
})