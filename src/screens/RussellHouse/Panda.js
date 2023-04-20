import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import ellipsepink from './../../../images/ellipsepink.png';
import ellipsegrey from './../../../images/ellipsegrey.png';
import leftarrow  from './../../../images/leftarrow.png';
import mycart from './../../../images/mycart.png';
import MyCart from './../MyCart';
import Cart from './../Cart';
import CampusSideSelectionScreen from './../CampusSideSelectionScreen';
import home  from './../../../images/home.png';

const menuData = require('./../../../data/RussellHouseRestaurants/PandaExpress.json') 

const Panda = ({navigation}) => {
 
  const [menuType, setMenuType] = useState('Appetizers');
  const [cartCount, setCartCount] = useState(MyCart.getTotalQuantity());
  const updateCartCount = useCallback(() => {
    setCartCount(MyCart.getTotalQuantity());
  }, []);

  useFocusEffect(
    useCallback(() => {
      updateCartCount();
    }, [updateCartCount])
  );

  const menuItems = [
    { type: "Appetizers" },
    { type: "Entrees" },
    { type: "Bowls And Plates" },
    { type: "Sides" },
    { type: "Beverages" },
  ];
  
  const renderCategory = () => {
    switch (menuType) {
        case 'Appetizers':
        return (
          <FlatList
            data={menuData.appetizers[0].items.map((item, index) => ({
              item,
              price: menuData.appetizers[0].prices[index],
            }))}
            keyExtractor={(item) => item.item}
            renderItem={renderItem}
          />
        );
      case 'Entrees':
        return (
          <FlatList
            data={menuData.entrees[0].items.map((item, index) => ({
              item,
              price: menuData.entrees[0].prices[index],
            }))}
            keyExtractor={(item) => item.item}
            renderItem={renderItem}
            
          />
        );
      case 'Bowls And Plates':
        return (
          <FlatList
            data={menuData.bowlsandplates[0].items.map((item, index) => ({
              item,
              price: menuData.bowlsandplates[0].prices[index],
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
      <TouchableOpacity style={styles.addButton} onPress={() => {MyCart.addToCart(item); setCartCount(MyCart.getTotalQuantity())}}>
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
                
                <Image source={ellipsegrey} 
                    style={{position: 'absolute',
                    right:-40,
                    bottom:0}}>
                </Image>
                <View style = {styles.header}>
            <TouchableOpacity onPress={()=>navigation.navigate(CampusSideSelectionScreen)}>
            <Image source={home} 
                    style = {{ width:35, height:35,marginRight:360, top:5 }}>
                </Image>
                <View style={styles.profileNameContainer}>
                  <Text style={styles.nameText}>Panda Express</Text>
                </View>
                </TouchableOpacity>              
               </View>
    <View style = {{flexDirection:'row'}}>
    
<FlatList
  data={menuItems}
  horizontal={true}
  renderItem={({item}) => (
    <TouchableOpacity onPress={() => setMenuType(item.type)}>
      <Text style={styles.category}>{item.type}</Text>
    </TouchableOpacity>
  )}
/>

      </View>
      <View style = {{maxHeight:'76%'}}>
        {renderCategory()}
      </View>
      
      <View style={{position: 'absolute', bottom: 14, left:10}}>
      <TouchableOpacity onPress={()=>navigation.pop()}>
                <Image source={leftarrow} 
                style={{ width: 50}} />
            </TouchableOpacity>
            </View>
            <View style={{ position: 'absolute', bottom: 14, right: 10 }}>
              <TouchableOpacity onPress={() => navigation.navigate(Cart)}>
                <Image
                  source={mycart}
                  style={{
                    width: 50,
                    height: 45,
                    borderRadius: 20,
                    backgroundColor: '#884E7D',
                  }}
                />
                {cartCount > 0 && (
                  <View
                    style={{
                      position: 'absolute',
                      top: -5,
                      right: -5,
                      backgroundColor: 'red',
                      borderRadius: 10,
                      paddingHorizontal: 5,
                      paddingVertical: 2,
                    }}
                  >
                    <Text style={{ color: 'white', fontSize: 12 }}>{cartCount}</Text>
                  </View>
                )}
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
  header:{
    flexDirection:'row',
    backgroundColor:'white',
    height: 45,
    borderRadius:10,
    justifyContent:'space-evenly',  
    zIndex: 0
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
  },
  nameText: {
    color: 'black',
    fontSize: 24,
    fontWeight: '900',
    top: -30,
    left: 130
  },
});


  export default Panda;