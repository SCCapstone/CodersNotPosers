import React, { useState } from 'react'; 
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,TextuseColorScheme,View,TextInput,TouchableOpacity,
    Image,Text, Button} from 'react-native';
import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';

{<RelativeLayout
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

</RelativeLayout>}

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
                    bottom:0}}>
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
        borderRadius:10,
        borderColor:"BLACK",
        height:100,
        alignItems:"center",
        justifyContent:"center",
        marginTop:5,
        marginBottom:5,
    },

    buttonText:{
        color:"Black",
        fontSize:16,
    }
})

export default CampusSideSelectionScreen;