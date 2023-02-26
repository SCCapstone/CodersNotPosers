import React, { useState } from 'react'; 
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,TextuseColorScheme,View,TextInput,TouchableOpacity,
    Image,Text, Button} from 'react-native';
import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import ChickfilAPage from './ChickfilAPage';
import leftarrow from './../../images/leftarrow.png';
import CFALogo from './../../images/CFALogo.png';


const RussellHouseRestaurantScreen = ({navigation}) => {

const pressRestaurant = () => {
    //move to specified restaurant screen
}

    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.container}>
                <Image source={ellipsepink} 
                    style={{position: 'absolute',
                    left: -100,
                    top: -45,}}>
                </Image>
                <Image source={ellipsegrey} 
                    style={{position: 'absolute',
                    right:-100,
                    bottom:0}}>
                </Image>
                <TouchableOpacity
                    onPress = {()=>{navigation.navigate(ChickfilAPage)}}
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
                    <Text style = {styles.buttonText}> Carolina Creamery </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.pop()}>
<Image source={leftarrow} 
style={{ width: 50, 
height: 50,
top:80,
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
        fontSize:18
    }
})
export default RussellHouseRestaurantScreen;
