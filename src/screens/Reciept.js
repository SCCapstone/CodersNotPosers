import React, { useState,useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions,TouchableOpacity,Image} from 'react-native';

import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import leftarrow  from './../../images/leftarrow.png';
import MyCart from './MyCart';
import CampusSideSelectionScreen from './CampusSideSelectionScreen';
import hamburger from './../../images/hamburger.png';
import { firebase } from '@react-native-firebase/firestore';
//const firebase = require('@react-native-firebase/firestore');


const Reciept = ({navigation}) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
      const updatedCartItems = MyCart.getItems().filter((item) => {
        return MyCart.getQuantityByName(item) > 0;
      });
      setCartItems(updatedCartItems);
    }, []);

    const saveReceipt = async () => {
        const user = firebase.auth().currentUser;
        try {
          const receiptRef = firebase.firestore().collection('Reciept').doc(user.uid);
          const orderRef = receiptRef.collection('Orders').doc();
          await orderRef.set({
            cartItems,
            orderAt : new Date()
          });
          console.log('Receipt saved successfully');
        } catch (error) {
          console.error('Error saving receipt:', error);
        }
      };
    
       
    const renderItem = ({ item }) => {
      const itemQuantity = MyCart.getQuantityByName(item);

      if (itemQuantity === 0) {
      return null;
      }
    return(
      <View style={styles.item} testID="receipt-screen">
        <Text style={styles.itemText}>{item.item}</Text>
        <Text style={styles.itemText}>${item.price}</Text>
        <Text style= {styles.itemText}>{MyCart.getQuantityByName(item)}</Text>
      </View>
  );
};
    return(
        <View style={styles.container}>
          <Image source={ellipsepink}
              style={{
                  position: 'absolute',
                  left: -30,
                  top: -45,
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
          
          <FlatList
              data={cartItems}
              renderItem={renderItem}
              keyExtractor={(item) => item.item}
              testID="cart-items-list" />
              
          <TouchableOpacity
              onPress={() => {navigation.navigate(CampusSideSelectionScreen); saveReceipt()}}
              style={styles.deliveredButton}
              testID="homepage-button">
              <Text style={styles.forgotAndSignUpText}>Homepage</Text>
          </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#B6B7E5',
      flex:1
    },
     header:{
          flexDirection:'row',
          backgroundColor:'white',
          height: 40,
          borderRadius:10
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
    deliveredButton:{
      width:"80%",
      backgroundColor:"#884E7D",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      bottom: 50,
      left: 40
    },
    contactButton:{
      width:"80%",
      backgroundColor:"#884E7D",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      top: 340,
      left: 40
    },
    cancelButton:{
      width:"80%",
      backgroundColor:"#884E7D",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      top: 440,
      left: 40
    },
    forgotAndSignUpText:{
      color:"white",
      fontSize:16
    },
    addButtonText: {
      color: "black",
      fontSize: 15,
      fontWeight:'bold',
}});

export default Reciept;