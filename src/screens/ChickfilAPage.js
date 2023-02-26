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
import RatingScreenCFA from './RatingScreenCFA';
import HomeHeader from './HomeHeader';



const ChickfilAPage = (navigation) => {

const pressFoodItem = () => {
    //move to specified restaurant screen
}
    return(
            <View style = {styles.container}>
            <Image source={ellipsepink} 
                    style={{position: 'absolute',
                    left:-135,
                    top: -45,}}>
                </Image>
                <View style = {styles.header}>
                <HomeHeader navigation = {navigation}/>
                </View> 
                <TouchableOpacity
                  onPress={()=> navigation.naviagte(RatingScreenCFA)}>
                <Image source={ratingstar} 
                    style={{position: 'absolute',
                    height:38,
                    width: 42,
                    left:270,
                    bottom:16}}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {() => navigation.navigate("FoodDetails")}
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
    },
    header:{
        top:-63 
    },
})
export default ChickfilAPage;
