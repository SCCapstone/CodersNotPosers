import React, { useState , useEffect} from 'react'; 
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

const restaurants1 = require('./../../data/RussellHouse.json')
const restaurants2 = require('./../../data/NorthCampus.json')
const restaurants3 = require('./../../data/SouthCampus.json')
const restaurants4 = require('./../../data/EastCampus.json')
const restaurants5 = require('./../../data/WestCampus.json')
const restaurants6 = require('./../../data/FoodTrucks.json')
const buttonData = restaurants1.concat(restaurants2).concat(restaurants3).concat(restaurants4).concat(restaurants5).concat(restaurants6);
<RestaurantsList restaurants = {buttonData} />

const RestaurantsList = ({ restaurants }) => {
  return (
    <View>
      {restaurants.map(restaurant => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </View>
  );
};



const Favorites = ({navigation}) => {
  
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
    default:
      return null;
  }
};
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
          return navigation.navigate();
  }  
};
const renderItem = ({item}) => {
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

  }
});

export default Favorites;