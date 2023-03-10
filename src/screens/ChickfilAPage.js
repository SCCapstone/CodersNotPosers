import React, { useState } from 'react'; 
import {SafeAreaView,StyleSheet,View,TouchableOpacity,
    Image,Text, Button} from 'react-native';
import logo from './../../images/logo.png';
import ellipsepink from './../../images/ellipsepink.png';
import ratingstar from './../../images/ratingstar.png';
//import CFALogo from './../../images/CFALogo.png';
import myJSON from './../../restaurants.json';
import RussellHouseRestaurantScreen from './RussellHouseRestaurantScreen';
import leftarrow from './../../images/leftarrow.png';
import RatingScreenCFA from './RatingScreenCFA';
import FoodDetail from './FoodDetail';



const ChickfilAPage = ({navigation}) => {

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
                        onPress = {() => navigation.navigate(FoodDetail)}
                        style = {styles.leftFoodButtons}>
                        <Text style = {styles.buttonText}> "1. Chicken Sandwich" </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                       
                       onPress = {() => navigation.navigate(FoodDetails)}
                        style = {styles.leftFoodButtons}>
                        <Text style = {styles.buttonText}> "2. Spicy Chicken Sandwich" </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        
                        onPress = {() => navigation.navigate(FoodDetails)}
                        style = {styles.leftFoodButtons}>
                        <Text style = {styles.buttonText}> "3. Chicken Nuggets " </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        
                        onPress = {() => navigation.navigate(FoodDetails)}
                        style = {styles.leftFoodButtons}>
                        <Text style = {styles.buttonText}> "4. Soda" </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        
                        onPress = {() => navigation.navigate(FoodDetails)}
                        style = {styles.leftFoodButtons}>
                        <Text style = {styles.buttonText}> "5. Sides" </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        
                        onPress = {() => navigation.navigate(FoodDetails)}
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
                        style = {styles.ratebtn}
                        onPress={() => navigation.navigate(RatingScreenCFA)}>
                        <Text style = {styles.rbtnText}> Rate us </Text>
                    </TouchableOpacity>
                    

                    <TouchableOpacity 
                        onPress={() => navigation.navigate(RussellHouseRestaurantScreen)}>
                        <Image source={leftarrow} 
                        style={{ width: 50, 
                        height: 50,
                        top:-20,
                        left:-150
                        }} />
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
            height:50,
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
    
        rbtnText:{
            color:"white",
            fontSize:15,
            alignItems:'center',
            justifyContent: 'center',
            top:-10
            
        },
        
        ratebtn:{
            backgroundColor:"#884E7D",
            justifyContent: 'flex-end',
            left: 140,
            width:70,
            borderRadius:25,
            height:50,
            bottom:-20
    
        }
    })
export default ChickfilAPage;
