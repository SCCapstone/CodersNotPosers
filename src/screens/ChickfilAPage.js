import React, { useState } from 'react'; 
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,TextuseColorScheme,View,TextInput,TouchableOpacity,
    Image,Text, Button} from 'react-native';
import logo from './../../images/logo.png';
import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';

import leftarrow from './../../images/leftarrow.png';
import HomeHeader from './HomeHeader';


const ChickfilAPage = (navigation) => {

const pressFoodItem = () => {
    //move to specified restaurant screen
}
    return(
        <HomeHeader/>,
        <SafeAreaView style = {styles.container}>
            <View style = {styles.container}>
            <Image source={ellipsepink} 
                    style={{position: 'absolute',
                    left:-135,
                    top: -45,}}>
                </Image>
                <Image source={ellipsegrey} 
                    style={{position: 'absolute',
                    right:-135,
                    bottom:0}}>
                </Image>
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
                    style={{ width: 50, 
                    height: 50,
                    top:20,
                    left:-170}} />
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
