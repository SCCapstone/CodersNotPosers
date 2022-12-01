import React, { useState } from 'react'; 
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,TextuseColorScheme,View,TextInput,TouchableOpacity,
    Image,Text, Button} from 'react-native';
import logo from './../../images/logo.png';
import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import CFALogo from './../../images/CFALogo.png';
//import restaurantJSON from './../../Restaurant.json';

{/* <RelativeLayout
    xmlns:android = 'https://schemas.android.com/apk/res/android'
    xmlns:tools = 'https://schema.android.com/tools'
    android:layout_width = "match_parent"
    android:layout_height = "match_parent"
    android:paddingLeft = "16dp"
    android:paddingRight = "16dp"
    android:paddingTop = "16dp"
    android:paddingBottom = "16dp" tools:context = ".Activity1" >

    <ScrollView
        android:layout_width = "wrap_content"
        android:layout_height = "wrap_content"
        android:layout_below = "@+id/button"
        android:layout_centerHorizontal = "true" >
        <TextView
            android:layout_width = "wrap_content"
            android:layout_height = "wrap_content"
            android:textAppearance = "?android:attr/textAppearanceLarge"
            android:text = "@string/long_string"
            android:id = "@+id/textView" />
    </ScrollView>

</RelativeLayout> */}

const RestaurantScreen = () => {

const pressRestaurant = () => {
    //move to specified restaurant screen
}

    return(
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
                    onPress = {pressRestaurant}
                    style = {{width:350,
                                backgroundColor:"WHITE",
                                borderRadius:25,
                                borderColor:"BLACK",
                                height:100,
                                alignItems:"center",
                                justifyContent:"center",
                                marginTop:20,
                                marginBottom:20}}>
                        <Text style = {styles.buttonText}> Restaurant1 </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {pressRestaurant}
                    style = {{width:350,
                                backgroundColor:"WHITE",
                                borderRadius:25,
                                borderColor:"BLACK",
                                height:100,
                                alignItems:"center",
                                justifyContent:"center",
                                marginTop:20,
                                marginBottom:20}}>
                    <Text style = {styles.buttonText}> Restaurant2 </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {pressRestaurant}
                    style = {{width:350,
                                backgroundColor:"WHITE",
                                borderRadius:25,
                                borderColor:"BLACK",
                                height:100,
                                alignItems:"center",
                                justifyContent:"center",
                                marginTop:20,
                                marginBottom:20}}>
                    <Text style = {styles.buttonText}> Restaurant3 </Text>
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
    
    inputView:{
        width:"80%",
        backgroundColor:"#FFFFFF",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },

    inputText:{
        height:50,
        color:"black"
    },

    restaurantButtons:{
        width:350,
        backgroundColor:"#884E7D",
        borderRadius:25,
        height:100,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },

    buttonText:{
        color:"Black",
        fontSize:16,
        backgroundColor:"White"
    }
})
export default RestaurantScreen;
