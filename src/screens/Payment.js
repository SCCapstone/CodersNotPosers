import React, { useState } from "react";
import {
  StyleSheet,
  StatusBar,
  Text,
  Switch,
  View,
  SafeAreaView,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import logo from "./../../images/logo.png";
import ellipsepink from "./../../images/ellipsepink.png";
import leftarrow from "./../../images/leftarrow.png";
import ellipsegrey from "./../../images/ellipsegrey.png";
import firestore from '@react-native-firebase/firestore';
import hamburger from './../../images/hamburger.png';

const Payment = ({navigation}) => {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvc, setCVC] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    const saveCard = async () => {
      if(isEnabled) {
        try{
        firestore().collection('SavedCards').add({
          name: name,
          orderAt: new Date(),
          cardNumber: cardNumber,
          expDate: expDate,
          cvc : cvc,
        });
        // Save logic here when switch is enabled
      } catch (error)
      {
        console.error("Error saving card data: ", error);
      }
    }
  };   

  const useCard = async () => { // added async keyword to enable using await
   console.log("in used card funtcion");
   try{
    firestore().collection('UsedCards').add({
      name: name,
      orderAt: new Date(),
      cardNumber: cardNumber,
      expDate: expDate,
      cvc : cvc,
   });
   console.log('User added!');
  } catch (error) {
    console.log("Error adding user data:",error);
  }
  };
   
  return (
  <View style={styles.container}>
    <Image source={ellipsepink} style={{ position: 'absolute',  left: -30, top: -45, scaleX: -1, }} />
    <View style={styles.header}>
              <TouchableOpacity
                  onPress={() => { navigation.toggleDrawer(); } }>
                  <Image source={hamburger}
                      style={{ width: 35, height: 35 }}>
                  </Image>
              </TouchableOpacity>
              
              <Text style = {{marginTop: 5, fontWeight: '800', fontSize: 29, textAlign:'center', marginRight: 30,flex:1}}>
                Payment 
            </Text>
         
      </View>
  <View style={styles.container}>
    <StatusBar style="auto" />
    <View style={styles.CardHolderName}>
      <TextInput
        style={styles.inputText}
        placeholder="Cardholder Name"
        placeholderTextColor="#884e7d"
        onChangeText={(name) => setName(name)}
      />
    </View>
    
    

  <View style={styles.CardNumber}>
    <TextInput
      style={styles.inputText}
      placeholder="Card Number"
      placeholderTextColor="#884e7d"
      onChangeText={(cardNumber) => setCardNumber(cardNumber)}
    />
  </View>

  <View style={styles.CardExpiration}>
    <TextInput
      style={styles.inputText}
      placeholder="MM/YYYY"
      placeholderTextColor="#884e7d"
      onChangeText={(expDate) => setExpDate(expDate)}
    />
  </View>

  <View style={styles.CVCcolor}>
    <TextInput
      style={styles.inputText}
      placeholder="CVC"
      placeholderTextColor="#884e7d"
      secureTextEntry={true}
      onChangeText={(cvc) => setCVC(cvc)}
    />
  </View>

  <View>
    <View style={styles.saveCardButton}>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <TouchableOpacity onPress={saveCard}></TouchableOpacity>
      <Text>{isEnabled ? 'Remember Card' : 'Do Not Remember'}</Text>
    </View>

  
  </View>

  <TouchableOpacity 
  style={styles.useCardButton} 
  onPress={useCard}>
    <Text style={styles.loginText}>Place Order</Text>
  </TouchableOpacity>
  </View>
  <TouchableOpacity onPress={()=>navigation.pop()}>
                <Image source={leftarrow} 
                style={{ width: 50, 
                height: 50,
                right:150,
                bottom:25

                }} />
            </TouchableOpacity>
            <Image source={ellipsegrey}
          style={{
              position: 'absolute',
              right: -40,
              bottom: 0
          }}>
          </Image>
  </View>

  );

}
   
  const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#B6B7E5',
    alignItems: 'center',
    justifyContent: 'center',
    },
    header:{
      flexDirection:'row',
      backgroundColor:'white',
      height: 40,
      borderRadius:10
  },
    inputView: {
      backgroundColor: "#FBEBEB",
      borderRadius: 30,
      width: "70%",
      height: 40,
      marginBottom: 30,
      alignItems: "center",
    },
    inputText:{
        height:50,
        color:"black",
        alignItems: "center",
        },
    
    CardHolderName:{
        position: 'absolute',
        top: 125,
        width:"70%",
        backgroundColor: "#FBEBEB",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
        },
     CardNumber:{
        position: 'absolute',
        top: 190,
        width:"70%",
        backgroundColor: "#FBEBEB",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
        },
    CardExpiration:{
        position: 'absolute',
        top: 255,
        width:"70%",
        backgroundColor: "#FBEBEB",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
        },
    CVCcolor:{
        position: 'absolute',
        top: 320,
        width:"70%",
        backgroundColor: "#FBEBEB",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
        },
    saveCardButton: {
      top: 200,
      width:"70%",
      right: 100,
      backgroundColor: "#FBEBEB",
      borderRadius:25,
      height:100,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
   
    useCardButton: {
      top: 100,
      width:"70%",
      left: 100,
      backgroundColor: "#FBEBEB",
      borderRadius:25,
      height:75,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
  })
  export default Payment;