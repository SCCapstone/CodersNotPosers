import React, { useState } from 'react'; 
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,TextuseColorScheme,View,TextInput,TouchableOpacity,
    Image,Text, Button} from 'react-native';
import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import CFALogo from './../../images/CFALogo.png';
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
//     </ScrollView>

// </RelativeLayout>}

const RussellHouseRestaurantScreen = ({navigation}) => {

const pressRestaurant = () => {
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
                    onPress = {() => navigation.navigate('CFA')}
                    style = {styles.restaurantButtons}>
                    <Text style = {styles.buttonText}> Chick-Fil-A </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {pressRestaurant}
                    style = {styles.restaurantButtons}>
                    <Text style = {styles.buttonText}> "Panera" </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {pressRestaurant}
                    style = {styles.restaurantButtons}>
                    <Text style = {styles.buttonText}> "Panda Express" </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {pressRestaurant}
                    style = {styles.restaurantButtons}>
                    <Text style = {styles.buttonText}> "Twisted Taco" </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {pressRestaurant}
                    style = {styles.restaurantButtons}>
                    <Text style = {styles.buttonText}> "Einstein Bros. Bagels" </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {pressRestaurant}
                    style = {styles.restaurantButtons}>
                    <Text style = {styles.buttonText}> Restaurant6 </Text>
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
        width:200,
        backgroundColor:"#884E7D",
        borderRadius:25,
        height:75,
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:5,
        marginBottom:5
    },

    buttonText:{
        color:"#FFFFFF",
        fontSize:32
    }
})
export default RussellHouseRestaurantScreen;
