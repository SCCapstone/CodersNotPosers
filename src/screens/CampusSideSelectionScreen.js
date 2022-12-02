import React, { useState } from 'react'; 
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,TextuseColorScheme,View,TextInput,TouchableOpacity,
    Image,Text, Button} from 'react-native';
import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';

const CampusSideSelectionScreen = ({navigation}) => {

    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.container}>
                <Image source={ellipsepink} 
                    style={{position: 'absolute',
                    left: -20,
                    top: -45,}}>
                </Image>
                <Image source={ellipsegrey} 
                    style={{position: 'absolute',
                    right:-60,
                    bottom:-420}}>
                </Image>
                <TouchableOpacity
                    onPress = {() => navigation.navigate('RussellHouse')}
                    style = {styles.campusSelectionButtons}>
                    <Text style = {styles.buttonText}> Russell House </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {() => navigation.navigate('NorthCampus')}
                    style = {styles.campusSelectionButtons}>
                    <Text style = {styles.buttonText}> North Campus </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {() => navigation.navigate('EastCampus')}
                    style = {styles.campusSelectionButtons}>
                    <Text style = {styles.buttonText}> East Campus </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {() => navigation.navigate('SouthCampus')}
                    style = {styles.campusSelectionButtons}>
                    <Text style = {styles.buttonText}> South Campus </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {() => navigation.navigate('WestCampus')}
                    style = {styles.campusSelectionButtons}>
                    <Text style = {styles.buttonText}> West Campus </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {() =>navigation.navigate('FoodTrucks')}
                    style = {styles.campusSelectionButtons}>
                    <Text style = {styles.buttonText}> Food Trucks </Text>
                </TouchableOpacity>
            </View>
            <View>
            <Image source={ellipsegrey} 
                style={{position: 'absolute',
                right:-200,
                bottom:0}}/>
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
        backgroundColor:"WHITE",
        borderRadius:10,
        borderColor:"BLACK",
        height:100,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        marginBottom:10
    },

    buttonText:{
        color:"Black",
        fontSize:16
    }
})

export default CampusSideSelectionScreen;