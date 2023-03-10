import React, { useState } from 'react'; 
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,TextuseColorScheme,View,TextInput,TouchableOpacity,
    Image,Text, Button} from 'react-native';
import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';
//import CFALogo from './../../images/CFALogo.png';
//import restaurantJSON from './../../restaurants.json';

// {<RelativeLayout
//     xmlns:android = 'https://schemas.android.com/apk/res/android'
//     xmlns:tools = 'https://schema.android.com/tools'
//     android:layout_width = "match_parent"
//     android:layout_height = "match_parent"
//     android:paddingLeft = "16dp"
//     android:paddingRight = "16dp"
//     android:paddingTop = "16dp"
//     android:paddingBottom = "16dp" tools:context = ".Activity1" >

//     <ScrollView
//         android:layout_width = "wrap_content"
//         android:layout_height = "wrap_content"
//         android:layout_below = "@+id/button"
//         android:layout_centerHorizontal = "true" >
//         <TextView
//             android:layout_width = "wrap_content"
//             android:layout_height = "wrap_content"
//             android:textAppearance = "?android:attr/textAppearanceLarge"
//             android:text = "@string/long_string"
//             android:id = "@+id/textView" />
//    </ScrollView>
//
//</RelativeLayout>}

const DriverOrderScreen = ({navigation}) => {

const pressOrder = () => {
    //move to specified restaurant screen
}

    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.container}>
                <Image source={ellipsepink} 
                    style={{position: 'absolute',
                    left: 0,
                    top: 1,}}>
                </Image>
                <Image source={ellipsegrey} 
                    style={{position: 'absolute',
                    right:-60,
                    bottom:-420}}>
                </Image>
                <TouchableOpacity
                    onPress = {pressOrder}
                    style = {styles.orderButtons}>
                    <Text style = {styles.buttonText}> Cameron Pinkman's Order -- Chick-Fil-A, Russell House </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {pressOrder}
                    style = {styles.orderButtons}>
                    <Text style = {styles.buttonText}> Tyler Jackson's Order -- Counselor's Cafe, North Campus </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {pressOrder}
                    style = {styles.orderButtons}>
                    <Text style = {styles.buttonText}> Jesse Whitworth's Order -- Starbucks, Thomas Cooper </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {pressOrder}
                    style = {styles.orderButtons}>
                    <Text style = {styles.buttonText}> Patricia Boyd -- The Coop, Food Truck </Text>
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

    inputText:{
        height:50,
        color:"black"
    },

    orderButtons:{
        width:200,
        backgroundColor:"#884E7D",
        borderRadius:25,
        height:100,
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:5,
        marginBottom:5
    },

    buttonText:{
        color:"Black",
        fontSize:16,
        backgroundColor:"White"
    }
})
export default DriverOrderScreen;