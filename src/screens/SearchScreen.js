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
import ColloquiumCafe from './EastCampus/ColloquiumCafe';
import HorshoeDeli from './EastCampus/HorshoeDeli';
import HumanitiesStarbucks from './EastCampus/HumanitiesStarbucks';
import VillageJuiceAndKitchen from './EastCampus/VillageJuiceAndKitchen';
import NachoPapis from './FoodTrucks/NachoPapis';
import Coop from './FoodTrucks/Coop';
import CounselorsCafe from './NorthCampus/CounselorsCafe';
import HamptonStCafe from './NorthCampus/HamptonStCafe';
import Creamery from './RussellHouse/Creamery';
import ChickfilA from './RussellHouse/ChickfilA';
import Einstein from './RussellHouse/Einstein';
import Panda from './RussellHouse/Panda';
import Panera from './RussellHouse/Panera';
import TwistedTaco from './RussellHouse/TwistedTaco';
import CafeVerde from './SouthCampus/CafeVerde';
import WiredCafe from './SouthCampus/WiredCafe';
import TcoopStarbs from './WestCampus/TcoopStarbs';

const SearchScreen = ({navigation}) => {

    var allRestaurants = [{name: "Colloquium Cafe", screen: ColloquiumCafe}, {name: "Horseshoe Deli", screen: HorshoeDeli}, {name: "Humanities - Starbucks", screen: HumanitiesStarbucks}, 
                            {name: "Village Juice and Kitchen", screen: VillageJuiceAndKitchen}, {name: "Nacho Papi's", screen: NachoPapis}, {name: "The Coop", screen: Coop},
                            {name:  "Counselor's Cafe", screen: CounselorsCafe}, {name: "Hampton St. Cafe", screen: HamptonStCafe}, {name: "Carolina Creamery", screen: Creamery}, {name: "Chick-Fil-A", screen: ChickfilA}, 
                            {name: "Einstein Bros. Bagels", screen: Einstein}, {name: "Panda Express", screen: Panda},{ name: "Panera", screen: Panera}, {name: "Twisted Taco", screen: TwistedTaco}, {name: "Cafe Verde", screen: CafeVerde},
                            {name:"Wired Cafe", screen: WiredCafe}, {name: "Thomas Cooper Starbucks", screen: TcoopStarbs}];

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
                    placeholderTextColor="#ccc"
                    onChangeText={setSearchQuery}
                    value = {searchQuery} 
                />


<View style={{
  flex: 4.8,
  alignItems: 'center',
  top: 17,
}}>
  {filteredData.map((restaurant) => (
    <View key={restaurant.name} style={styles.itemContainer}>
      <TouchableOpacity 
        onPress={() => navigation.navigate(restaurant.screen)}
        style={styles.itemName}>
        <Text style={styles.loginText}>{restaurant.name}</Text>
      </TouchableOpacity>
    </View>
  ))}
</View>
                <View style={styles.container}>

                    <View style={styles.header}>
                        <TouchableOpacity
                            onPress={() => { navigation.toggleDrawer(); } }>
                            <Image source={hamburger}
                                style={{ width: 35, height: 35, top: 5, zIndex:90 }}>
                            </Image>
                        </TouchableOpacity>

                        <Image source={ellipsepink}
                        style={{
                            position: 'absolute',
                            left: -12,
                            top: -650,
                            scaleX: -1,
                            zIndex:-100
                        }}>

                    </Image>
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
        backgroundColor:'#B6B7E5',
        zIndex:5
    },
    header:{
        flexDirection:'row',
        position: 'absolute',
        backgroundColor:'white',
        height: 40,
        borderRadius:10,
        top: -590,
        zIndex:4,
        left: 3
    },
    inputText:{
        height:55,
        color:"black"
    },
    searchBar: {
        height: 40,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 50,
        borderRadius: 10,
        marginBottom: 10,
        color: "black",
        height: 50,
        width: 410,
        zIndex:2,
        top: 20
    },
    itemContainer: {
        marginBottom: 10,
        justifyContent: "center",
        zIndex: 4
    },
    itemName: {
        fontWeight: 'bold',
        justifyContent: "center"
    },
    itemDescription: {
        color: 'gray',
    },
    loginText:{
        color:"white",
        fontSize:16
    },
   
})