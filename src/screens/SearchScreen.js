import React, { useContext, useState } from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,View,TextInput,TouchableOpacity,
Image,Text, Alert, Keyboard} from 'react-native';
import auth from '@react-native-firebase/auth';
import {getdatabase, ref, set} from "firebase/database";
import { firebase } from '@react-native-firebase/firestore';

import logo from './../../images/logo.png';
import ellipsepink from './../../images/ellipsepink.png';
import leftarrow from './../../images/leftarrow.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import hamburger from './../../images/hamburger.png';


//const allRestaurants = require("../../data/AllRestaurants.json");

const SearchScreen = ({navigation}) => {

    var allRestaurants = [{name: "Colloquium Cafe"}, {name: "Horseshoe Deli"}, {name: "Humanities - Starbucks"}, {name: "Village Juice and Kitchen"}, {name: "Nacho Papi's"}, {name: "The Coop"},
    {name:  "Counselor's Cafe"}, {name: "Hampton St. Cafe"}, {name: "Carolina Creamery"}, {name: "Chick-Fil-A"}, 
    {name: "Einstein Bros. Bagels"}, {name: "Panda Express"},{ name: "Panera"}, {name: "Twisted Taco"}, {name: "Cafe Verde"},
    {name:"Wired Cafe"}, {name: "Thomas Cooper Starbucks"}];

    const [searchQuery, setSearchQuery] = useState('');

    const filteredData = allRestaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
            <View style = {styles.container}> 
                <TextInput
                    style={styles.searchBar}
                    placeholder="What are you looking for?"
                    keyboardType='search'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={setSearchQuery}
                    value = {searchQuery} 
                />
                {filteredData.map((restaurant) => (
                    <View key={restaurant.name} style={styles.itemContainer}>
                        <Text style={styles.itemName}>{restaurant.name}</Text>
                    </View>
                ))}
                <View style={styles.container}>
                    <Image source={ellipsepink}
                        style={{
                            position: 'absolute',
                            left: -180,
                            top: 0,
                            scaleX: -1,
                        }}>
                    </Image>

                    <View style={styles.header}>
                        <TouchableOpacity
                            onPress={() => { navigation.toggleDrawer(); } }>
                            <Image source={hamburger}
                                style={{ width: 35, height: 35 }}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                    <Image source={ellipsegrey}
                        style={{
                            position: 'absolute',
                            right: -40,
                            bottom: 0
                        }}>
                    </Image>
                </View>
          </View>
    );
};
export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#B6B7E5'
    },
    header:{
        flexDirection:'row',
        position: 'absolute',
        backgroundColor:'white',
        height: 40,
        borderRadius:10
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
    searchBar: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    itemContainer: {
        marginBottom: 10,
    },
    itemName: {
        fontWeight: 'bold',
    },
    itemDescription: {
        color: 'gray',
    }
})