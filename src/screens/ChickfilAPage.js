import React, { useState } from 'react'; 
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,TextuseColorScheme,View,TextInput,TouchableOpacity,
    Image,Text, Button} from 'react-native';
import logo from './../../images/logo.png';
import ellipsepink from './../../images/ellipsepink.png';
import ratingstar from './../../images/ratingstar.png';
import CFALogo from './../../images/CFALogo.png';
import myJSON from './../../restaurants.json';
import RussellHouseRestaurantScreen from './RussellHouseRestaurantScreen';
import leftarrow from './../../images/leftarrow.png';


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

const ChickfilAPage = (navigation) => {

const pressFoodItem = () => {
    //move to specified restaurant screen
}

    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.container}>
            <Image source={ellipsepink} 
                    style={{position: 'absolute',
                    left:-135,
                    top: -45,}}>
                </Image>
                <TouchableOpacity
                  onPress={()=> navigation.naviagte('RatingScreenCFA')}>
                <Image source={ratingstar} 
                    style={{position: 'absolute',
                    height:38,
                    width: 42,
                    left:270,
                    bottom:16}}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {pressFoodItem}
                    style = {styles.leftFoodButtons}>
                    <Text style = {styles.buttonText}> "1. Chicken Sandwich" </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {pressFoodItem}
                    style = {styles.leftFoodButtons}>
                    <Text style = {styles.buttonText}> "2. Spicy Chicken Sandwich" </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {pressFoodItem}
                    style = {styles.leftFoodButtons}>
                    <Text style = {styles.buttonText}> "3. Chicken Nuggets " </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {pressFoodItem}
                    style = {styles.leftFoodButtons}>
                    <Text style = {styles.buttonText}> "4. Soda" </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {pressFoodItem}
                    style = {styles.leftFoodButtons}>
                    <Text style = {styles.buttonText}> "5. Sides" </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {pressFoodItem}
                    style = {styles.leftFoodButtons}>
                    <Text style = {styles.buttonText}> "6. Desserts" </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {pressFoodItem}
                    style = {styles.leftFoodButtons}>
                    <Text style = {styles.buttonText}> "7. Lemonades and Sweet Teas" </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {pressFoodItem}
                    style = {styles.leftFoodButtons}>
                    <Text style = {styles.buttonText}> "8. Water" </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('RussellHouse')}>
                    <Image source={leftarrow} 
                     style={{ width: 52, 
                    height: 50,
                    top:160,
                    alignSelf:'flex-start'}} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('RatingScreenCFA')}>      
                <Image source={ratingstar} style={{
                    height:35,
                    width:42 ,
                    top:121,
                    alignSelf:'flex-end'}}/>
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

    leftFoodButtons:{
        width:250,
        backgroundColor:"#884E7D",
        borderRadius:25,
        height:60,
        justifyContent:"center",
        marginTop:10,
        marginBottom:10
    },

    buttonText:{
        color:"white",
        fontSize:20,
        padding:2,
        alignItems:'center',
        justifyContent: 'center'
        
    }
})
export default ChickfilAPage;
