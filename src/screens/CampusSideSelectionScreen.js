import React, { useState } from 'react'; 
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,TextuseColorScheme,View,TextInput,TouchableOpacity,
    Image,Text, Button} from 'react-native';
import logo from './../../images/logo.png';
import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import RussellHouseRestaurantScreen from './RussellHouseRestaurantScreen';
import NorthCampus from './NorthCampus';

const CampusSideSelectionScreen = () => {

    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.container}>
                <Image source={ellipsepink} 
                    style={{position: 'absolute',
                    left: 2,
                    top: 1,}}>
                </Image>
                <Image source={ellipsegrey} 
                    style={{position: 'absolute',
                    right:-60,
                    bottom:-420}}>
                </Image>
                <TouchableOpacity
                    onPress = {() => navigation.navigate(RussellHouseRestaurantScreen)}
                    style = {{width:350,
                                backgroundColor:"WHITE",
                                borderRadius:25,
                                borderColor:"BLACK",
                                height:100,
                                alignItems:"center",
                                justifyContent:"center",
                                marginTop:20,
                                marginBottom:20}}>
                    <Text style = {styles.buttonText}> Russell House </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {() => navigation.navigate(NorthCampus)}
                    style = {{width:350,
                                backgroundColor:"WHITE",
                                borderRadius:25,
                                borderColor:"BLACK",
                                height:100,
                                alignItems:"center",
                                justifyContent:"center",
                                marginTop:20,
                                marginBottom:20}}>
                    <Text style = {styles.buttonText}> "North Campus" </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {pressFoodItem}
                    style = {{width:350,
                                backgroundColor:"WHITE",
                                borderRadius:25,
                                borderColor:"BLACK",
                                height:100,
                                alignItems:"center",
                                justifyContent:"center",
                                marginTop:20,
                                marginBottom:20}}>
                    <Text style = {styles.buttonText}> "East Campus" </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {pressFoodItem}
                    style = {{width:350,
                                backgroundColor:"WHITE",
                                borderRadius:25,
                                borderColor:"BLACK",
                                height:100,
                                alignItems:"center",
                                justifyContent:"center",
                                marginTop:20,
                                marginBottom:20}}>
                    <Text style = {styles.buttonText}> "South Campus" </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {pressFoodItem}
                    style = {{width:350,
                                backgroundColor:"WHITE",
                                borderRadius:25,
                                borderColor:"BLACK",
                                height:100,
                                alignItems:"center",
                                justifyContent:"center",
                                marginTop:20,
                                marginBottom:20}}>
                    <Text style = {styles.buttonText}> "West Campus" </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {pressFoodItem}
                    style = {{width:350,
                                backgroundColor:"WHITE",
                                borderRadius:25,
                                borderColor:"BLACK",
                                height:100,
                                alignItems:"center",
                                justifyContent:"center",
                                marginTop:20,
                                marginBottom:20}}>
                    <Text style = {styles.buttonText}> "Food Trucks" </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B6B7E5',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text:{
        height:50,
        color:"black"
    },

    campusSelectionButtons:{
        width:350,
        backgroundColor:"#884E7D",
        borderRadius:25,
        height:100,
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:40,
        marginBottom:10
    },

    buttonText:{
        color:"Black",
        fontSize:16,
        backgroundColor:"White"
    }
})

export default CampusSideSelectionScreen;