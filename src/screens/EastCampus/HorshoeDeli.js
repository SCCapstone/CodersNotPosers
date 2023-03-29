import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions,TouchableOpacity,Image } from 'react-native';

import ellipsepink from './../../../images/ellipsepink.png';
import ellipsegrey from './../../../images/ellipsegrey.png';
import HomeHeader from './../HomeHeader';
import leftarrow  from './../../../images/leftarrow.png';
import mycart from './../../../images/mycart.png';
import MyCart from './../MyCart';
import Cart from './../Cart';


const menuData = require('./../../../data/EastCampus/HorshoeDeli.json') 


const HorshoeDeli = ({navigation}) => {
 
  const [menuType, setMenuType] = useState('Entrees');
  
  const renderCategory = () => {
    switch (menuType) {
      case 'Breakfast':
        return (
          <FlatList
            data={menuData.breakfast[0].items.map((item, index) => ({
              item,
              price: menuData.breakfast[0].prices[index],
            }))}
            keyExtractor={(item) => item.item}
            renderItem={renderItem}
            
          />
        );
      case 'Sandwiches':
        return (
          <FlatList
            data={menuData.sandwiches[0].items.map((item, index) => ({
              item,
              price: menuData.sandwiches[0].prices[index],
            }))}
            keyExtractor={(item) => item.item}
            renderItem={renderItem}
            
          />
        );
      case 'Flatbreads':
        return (
          <FlatList
            data={menuData.flatbread[0].items.map((item, index) => ({
              item,
              price: menuData.flatbread[0].prices[index],
            }))}
            keyExtractor={(item) => item.item}
            renderItem={renderItem}
            
          />
        );
      case 'Sides':
        return (
          <FlatList
            data={menuData.sides[0].items.map((item, index) => ({
              item,
              price: menuData.sides[0].prices[index],
            }))}
            keyExtractor={(item) => item.item}
            renderItem={renderItem}
            
          />
        );
        case 'Beverages':
        return (
          <FlatList
            data={menuData.beverages[0].items.map((item, index) => ({
              item,
              price: menuData.beverages[0].prices[index],
            }))}
            keyExtractor={(item) => item.item}
            renderItem={renderItem}
            
          />
        );
      default:
        return null;
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.item}</Text>
      <Text style={styles.itemText}>${item.price}</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => MyCart.addToCart(item)}>
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
     
    <TouchableOpacity onPress={() => setMenuType("Breakfast")}><Text style={styles.category} >Breakfast</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => setMenuType("Sandwiches")}><Text style={styles.category}>Sandwiches</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => setMenuType("Flatbreads")}><Text style={styles.category}>Flatbreads</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => setMenuType("Sides")}><Text style={styles.category}>Sides</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => setMenuType("Beverages")}><Text style={styles.category}>Beverages</Text></TouchableOpacity>
      
      </View>
      <View>
        {renderCategory()}
      </View>
      
      <View style={{position: 'absolute', bottom: 14, left:10}}>
      <TouchableOpacity onPress={()=>navigation.pop()}>
                <Image source={leftarrow} 
                style={{ width: 50}} />
            </TouchableOpacity>
            </View>
            <View style = {{ position:'absolute', bottom: 14, right:10}}>
            <TouchableOpacity onPress={() => navigation.navigate(Cart)}>
                    <Image source = {mycart}
                    style = {{width:50, height:45, borderRadius:20, backgroundColor: '#884E7D',}}>
                 </Image>
                </TouchableOpacity>
                </View>
            </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B6B7E5',
    flex:1
  },
  category: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: 'grey',
    padding: 10,
    marginHorizontal:7,
    borderRadius:20,
  },
  item: {
    marginHorizontal: 11,
    padding: 3,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  itemText: {
    alignContent:'center',
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  addButton: {
    backgroundColor: '#884E7D',
    borderRadius:9,
    padding: 5,
    marginRight:3,
    width:30,
    alignItems:'center',
  },
  addButtonText: {
    color: "black",
    fontSize: 15,
    fontWeight:'bold',
  }});


  export default HorshoeDeli;