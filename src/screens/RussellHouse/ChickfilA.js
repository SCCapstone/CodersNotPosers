import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const menuData = require('./../../../data/RussellHouseRestaurants/ChickfilA.json') 

const ChickfilA = ({navigation}) => {
 const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  }; 

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.item}</Text>
      <Text style={styles.itemText}>${item.price}</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <Text style={styles.category}>Entrees</Text>
      <FlatList
        data={menuData.entrees[0].items.map((item, index) => ({
          item,
          price: menuData.entrees[0].prices[index],
        }))}
        keyExtractor={(item) => item.item}
        renderItem={renderItem}
        horizontal
      />
      <Text style={styles.category}>Meals</Text>
      <FlatList
        data={menuData.meals[0].items.map((item, index) => ({
          item,
          price: menuData.meals[0].prices[index],
        }))}
        keyExtractor={(item) => item.item}
        renderItem={renderItem}
        horizontal
      />
      <Text style={styles.category}>Sides</Text>
      <FlatList
        data={menuData.sides[0].items.map((item, index) => ({
          item,
          price: menuData.sides[0].prices[index],
        }))}
        keyExtractor={(item) => item.item}
        renderItem={renderItem}
        horizontal
      />
      <Text style={styles.category}>Beverages</Text>
      <FlatList
        data={menuData.beverages[0].items.map((item, index) => ({
          item,
          price: menuData.beverages[0].prices[index],
        }))}
        keyExtractor={(item) => item.item}
        renderItem={renderItem}
        horizontal
      />
      <Text style={styles.category}>Cart</Text>
      <FlatList
        data={cart}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text style={styles.cartItemText}>{item.item}</Text>
            <Text style={styles.cartItemText}>${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  item: {
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
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
    