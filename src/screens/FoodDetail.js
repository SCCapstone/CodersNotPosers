import React, {useState} from 'react';
import {
    View,
    Text,
    Image,
    ScrollView, 
    SafeAreaView,
    StatusBar,
    StyleSheet,
    useColorScheme,
    TextInput,
    TouchableOpacity,
    Button
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import leftarrow from './../../images/leftarrow.png';
import MyCart from './MyCart';
import paymentScreen from './paymentScreen';

const FoodDetail = ({navigation}) => {
    const isDarkMode = useColorScheme() === 'dark';
    
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

                <TouchableOpacity
                   style = {{
                        flex: 1,
                        flexDirection: 'row',
                        height: 60,
                        backgroundColor: '#884E7D',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: 20
                   }}
                   //onPress = {() => navigation.navigate('')}
                >
                    <Text style = {{color: 'white'}}>Buy Now</Text>
                    <Text style = {{color: 'white'}}>Meal Swipe</Text>
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
});

export default FoodDetail;
