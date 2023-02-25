import React, { useState } from 'react'; 
import {StyleSheet,View,TouchableOpacity,
    Image,Text, Pressable} from 'react-native';
import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import HomeHeader from './HomeHeader';
import RussellHouseRestaurantScreen from './RussellHouseRestaurantScreen';



const CampusSideSelectionScreen = ({navigation}) => {

    
    return (
            <View style = {styles.container}>
                <Image source={ellipsepink} 
                    style={{position: 'absolute',
                    left: -40,
                    top: -45,
                    scaleX:-1}}>
                </Image>
                <View style = {styles.header}>
                <HomeHeader navigation = {navigation}/>
                </View> 
                

                <Image source={ellipsegrey} 
                    style={{position: 'absolute',
                    right:-60,
                    bottom:0}}>
                </Image>

             
                <TouchableOpacity
                    onPress = {() => navigation.navigate('RussellHouseRestaurantScreen')}
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
        borderRadius:10,
        borderColor:"BLACK",
        height:75,
        alignItems:"center",
        justifyContent:"center",
        marginTop:5,
        marginBottom:5,
    },

    buttonText:{
        color:"white",
        fontSize:32,
    },

    header:{
        top:-63 
    },

})

export default CampusSideSelectionScreen;