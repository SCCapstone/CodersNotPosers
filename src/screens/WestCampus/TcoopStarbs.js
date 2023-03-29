import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions,TouchableOpacity,Image } from 'react-native';

import ellipsepink from './../../../images/ellipsepink.png';
import ellipsegrey from './../../../images/ellipsegrey.png';
import HomeHeader from './../HomeHeader';
import leftarrow  from './../../../images/leftarrow.png';
import mycart from './../../../images/mycart.png';
import MyCart from './../MyCart';
import Cart from './../Cart';


const menuData = require('./../../../data/WestCampusRestaurants/TCoopStarbucks.json') 


const TcoopStarbs = ({navigation}) => {
 
  const [menuType, setMenuType] = useState('Entrees');
  
  const renderCategory = () => {
    switch (menuType) {
      case 'Coffee Tea and More':
        return (
          <FlatList
            data={menuData.coffeeteaandmore[0].items.map((item, index) => ({
              item,
              price: menuData.coffeeteaandmore[0].prices[index],
            }))}
            keyExtractor={(item) => item.item}
            renderItem={renderItem}
            
          />
        );
      case 'Refreshers':
        return (
          <FlatList
            data={menuData.refreshers[0].items.map((item, index) => ({
              item,
              price: menuData.refreshers[0].prices[index],
            }))}
            keyExtractor={(item) => item.item}
            renderItem={renderItem}
            
          />
        );
      case 'Frappucinos':
        return (
          <FlatList
            data={menuData.frappucinos[0].items.map((item, index) => ({
              item,
              price: menuData.frappucinos[0].prices[index],
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
     
    <TouchableOpacity onPress={() => setMenuType("Coffee Tea and More")}><Text style={styles.category} >Entrees</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => setMenuType("Refreshers")}><Text style={styles.category}>Meals</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => setMenuType("Frappucinos")}><Text style={styles.category}>Sides</Text></TouchableOpacity>
      
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


  export default TcoopStarbs;