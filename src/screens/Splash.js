import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
export default class Splash extends screens {
    render() {
        return (
            <View style = {{flex:1, justifyContent: "center", alignItems: "center"}}>

                <image 
                style = {{width:300, height:300}}
                source={require('./images/logo.png')}
                />

                <Text>Welcome</Text>

                
            </View>
        )
    }
}
