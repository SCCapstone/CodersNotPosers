/* //Below are the imports which COULD show up in the favorite screen
//By could: all of the restaurants are able to be in the screen, but the logic will limit it to only show ones favorited by the user
import React, {useState} from 'react'; 
import {StyleSheet,View,TouchableOpacity,
    Image,Text, FlatList} from 'react-native';

import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import HomeHeader from './HomeHeader';
import ChickfilA from './RussellHouse/ChickfilA';
import Panera from './RussellHouse/Panera';
import Panda from './RussellHouse/Panda';
import TwistedTaco from './RussellHouse/TwistedTaco';
import Einstein from './RussellHouse/Einstein';
import CarolinaCreamery from './RussellHouse/Creamery';
import CounselorsCafe from './NorthCampus/CounselorsCafe';
import HamptonStCafe from './NorthCampus/HamptonStCafe';
import CafeVerde from './SouthCampus/CafeVerde';
import WiredCafe from './SouthCampus/WiredCafe';
import HorshoeDeli from './EastCampus/HorshoeDeli';
import HumanitiesStarbucks from './EastCampus/HumanitiesStarbucks';
import VillageJuiceAndKitchen from './EastCampus/VillageJuiceAndKitchen';
import ColloquiumCafe from './EastCampus/ColloquiumCafe';
import TcoopStarbs from './WestCampus/TcoopStarbs';
import Coop from './FoodTrucks/Coop';
import NachoPapis from './FoodTrucks/NachoPapis';


const restaurants1 = require('./../../data/RussellHouse.json')
const restaurants2 = require('./../../data/NorthCampus.json')
const restaurants3 = require('./../../data/SouthCampus.json')
const restaurants4 = require('./../../data/EastCampus.json')
const restaurants5 = require('./../../data/WestCampus.json')
const restaurants6 = require('./../../data/FoodTrucks.json')
const buttonData = restaurants1.concat(restaurants2).concat(restaurants3).concat(restaurants4).concat(restaurants5).concat(restaurants6);
<RestaurantsList restaurants = {buttonData} />

const RestaurantsList = ({ restaurants, favorites }) => {
  // in theory this should filter the restaurants based on whether they're favorited or not
  const favoriteRestaurants = restaurants.filter(r => favorites.includes(r.isFavorite));

  return (
    <View>
      {favoriteRestaurants.map(restaurant => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </View>
  );
};



const Favorites = ({navigation}) => {
  
  //this will be the favorite restaurants list.
  const [favoriteRestaurants, setFavoriteRestaurants] = useState([]);
  
//this is the images for all of the restaurants and can be called when you determine which one the user has selected as a favorite
const getimageSource = (id) => {
  switch (id) {
    case 1:
      return require('./../../images/RussellHouse/Chick.png');
    case 2:
      return require('./../../images/RussellHouse/panera.png');
    case 3:
      return require('./../../images/RussellHouse/panda.png');
    case 4:
      return require('./../../images/RussellHouse/twisted.png');
    case 5:
      return require('./../../images/RussellHouse/Einstein.png');
    case 6:
      return require('./../../images/RussellHouse/creamery.png');
    case 7:
      return require('./../../images/NorthCampus/CounselorCafe.png');
    case 8:
      return require('./../../images/NorthCampus/Hamptons.png');
    case 9:
      return require('./../../images/SouthCampus/CafeVerde.png');
    case 10:
      return require('./../../images/SouthCampus/Wiredcafe.png');
    case 11:
      return require('./../../images/EastCampus/ColloquimCafe.png');
    case 12:
      return require('./../../images/EastCampus/horshoeDeli.png');
    case 13:
      return require('./../../images/EastCampus/starbucksWelsh.png');
    case 14:
      return require('./../../images/EastCampus/village.png');
    case 15:
      return require('./../../images/WestCampus/starbucksCooper.png');
    case 16:
        return require('./../../images/FoodTrucks/TheCoop.png');
    case 17:
        return require('./../../images/FoodTrucks/Nacho.png');
    default:
      return null;
  }
};
//this is the navigation for the buttons to the respective screens
const handleButtonClick = (item) => {
   switch(item.id) {
       case 1:
          return navigation.navigate(ChickfilA);
      case 2: 
          return navigation.navigate(Panera);
      case 3:
          return navigation.navigate(Panda);
      case 4: 
          return navigation.navigate(TwistedTaco);
      case 5: 
          return navigation.navigate(Einstein);
      case 6:
          return navigation.navigate(CarolinaCreamery);
      case 7:
          return navigation.navigate(CounselorsCafe);
      case 8:
          return navigation.navigate(HamptonStCafe);
      case 9:
          return navigation.navigate(CafeVerde);
      case 9:
          return navigation.navigate(WiredCafe);
      case 11:
          return navigation.navigate(ColloquiumCafe);
      case 12: 
          return navigation.navigate(HorshoeDeli);
      case 13:
          return navigation.navigate(HumanitiesStarbucks);
      case 14: 
          return navigation.navigate(VillageJuiceAndKitchen);
      case 15:
          return navigation.navigate(TcoopStarbs);
      case 16:
          return navigation.navigate(Coop);
      case 17: 
          return navigation.navigate(NachoPapis);
  }  
};
//i feel like this is where we should weed out the nonfavorites
//But this is where we render the item itself
//i commented out what I think should work but doesnt
const renderItem = ({item}) => {
  //if(item.isFavorite) {
  const imageSource = getimageSource(item.id);

  return (
      <TouchableOpacity
        onPress={() => handleButtonClick(item)}
        style={{flex: 1, margin: 5}}>
        <View style={styles.item}>
          <Image source={imageSource} style={styles.image} />
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  //}
  };

  return (
    <View style= {styles.container}>
      <Image source={ellipsepink} 
              style={{position: 'absolute',
              left: -30,
              top: -45,
              scaleX:-1}}>
          </Image>
          <HomeHeader navigation = {navigation}/>
          <Text style={styles.nameText}>Favorites</Text>
          
          <Image source={ellipsegrey} 
              style={{position: 'absolute',
              right:-40,
              bottom:0}}>
          </Image>
      <FlatList
        data={buttonData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        numColumns = {2}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B6B7E5',
  },
  item: {
    marginTop:14,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    marginTop:10,
    fontWeight: 'bold',
  },
  selectedIcon: {
    width: 15,
    height: 15,
  },
  list: {
    padding: 10,
  },
  image: {
      width: 110,
      height: 110,
      borderRadius:15,

  },
  nameText: {
    color: 'black',
    fontSize: 25,
    fontWeight: '900',
    top: -40,
    left: 140
  },
});

export default Favorites; */
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

import firebase from '@react-native-firebase/app';

const Favorites= () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const user = firebase.auth().currentUser;
    if (!user) {
      console.log('User not logged in');
      return;
    }

    const favoritesRef = firebase.firestore().collection('Favorites').doc(user.uid).collection('Restaurants');

    const unsubscribe = favoritesRef.where('isFavorite', '==', true)
                                     .onSnapshot((querySnapshot) => {
                                       const favoritesData = [];
                                       querySnapshot.forEach((doc) => {
                                         favoritesData.push(doc.data());
                                       });
                                       setFavorites(favoritesData);
                                     }, (error) => {
                                       console.log('Error getting favorites:', error);
                                     });

    return () => unsubscribe();
  }, []);

  return (
    <View>
      <Text>Favorite Restaurants</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default Favorites;
