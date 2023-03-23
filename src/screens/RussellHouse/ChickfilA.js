import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions,TouchableOpacity,Image } from 'react-native';

import ellipsepink from './../../../images/ellipsepink.png';
import ellipsegrey from './../../../images/ellipsegrey.png';
import HomeHeader from './../HomeHeader';
import leftarrow  from './../../../images/leftarrow.png';
const menuData = require('./../../../data/RussellHouseRestaurants/ChickfilA.json') 

export const addToCart = (item,cart,setCart) => {
  setCart([...cart, item]);
}; 
const ChickfilA = ({navigation}) => {

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.item}</Text>
      <Text style={styles.itemText}>{"\n"}${item.price}</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item,cart,setCart)}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );

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
    <View style = {{flexDirection:'row'}}>
      <Text style={styles.category}>Entrees</Text>
      <Text style={styles.category}>Meals</Text>
      <Text style={styles.category}>Sides</Text>
      <Text style={styles.category}>Beverages</Text>
      </View>
      <View>
      <FlatList
        data={menuData.entrees[0].items.map((item, index) => ({
          item,
          price: menuData.entrees[0].prices[index],
        }))}
        keyExtractor={(item) => item.item}
        renderItem={renderItem}
        horizontal
      />
      
      <FlatList
        data={menuData.meals[0].items.map((item, index) => ({
          item,
          price: menuData.meals[0].prices[index],
        }))}
        keyExtractor={(item) => item.item}
        renderItem={renderItem}
        horizontal
      />
      <FlatList
        data={menuData.sides[0].items.map((item, index) => ({
          item,
          price: menuData.sides[0].prices[index],
        }))}
        keyExtractor={(item) => item.item}
        renderItem={renderItem}
        horizontal
      />
      <FlatList
        data={menuData.beverages[0].items.map((item, index) => ({
          item,
          price: menuData.beverages[0].prices[index],
        }))}
        keyExtractor={(item) => item.item}
        renderItem={renderItem}
        horizontal
      />
      <TouchableOpacity onPress={()=>navigation.pop()}>
                <Image source={leftarrow} 
                style={{ width: 50, 
                height: 50,
                right:-9,
                bottom:25

                }} />
            </TouchableOpacity>
      {/* <Text style={styles.category}>Cart</Text>
      <FlatList
        data={cart}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text style={styles.cartItemText}>{item.item}</Text>
            <Text style={styles.cartItemText}>${item.price}</Text>
          </View>
        )}
      /> */}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B6B7E5',
  },
  category: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: 'grey',
    padding: 10,
    marginHorizontal:7,
    borderRadius:20
  },
  item: {
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    alignContent:'center',
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  addButton: {
    backgroundColor: '#007aff',
    borderRadius: 5,
    padding: 5,
  },
  addButtonText: {
    color: "black"
  }});


  export default ChickfilA;