import React, {useState} from 'react';
import {
    View,
    Text,
    Image,
    ScrollView, 
    SafeAreaView,
    StatusBar,
    StyleSheet,
    TextuseColorScheme,
    TextInput,
    TouchableOpacity,
    Button
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaView } from 'react-navigation';
import leftarrow from './../../images/leftarrow.png';

const FoodDetail = ({navigation}) => {
    return (
        <SafeAreaView style = {styles.container}>
        <View
            style={{
                flex: 1, 
                justifyContent: 'center',
                backgroundColor:'#B6B7E5'
            }}
        >
            {/*Header*/}
            {/*Body*/} 
            {/*Footer*/}
            <TouchableOpacity onPress={()=>navigation.pop()}>
                    <Image source={leftarrow} 
                    style={{ width: 50, 
                    height: 50,
                    top:60,
                    left:-170}} />
            </TouchableOpacity>

            <TextButton
               buttonContainerStyle = {{
                    flex: 1,
                    flexDirection: 'row',
                    height: 60,
                    marginLeft: SIZES.raidus,
                    marginLeft: SIZES.raidus,
                    marginLeft: SIZES.raidus,
                    backgroundColor: '#884E7D'
               }}
               label = "Buy Now"
               label2 = "Meal Swipe"  
               onPress = {() => navigation.navigate("MyCart")}
            />
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


export default FoodDetail;