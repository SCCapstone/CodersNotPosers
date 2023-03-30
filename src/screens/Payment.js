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
import { app } from "../../firebase";
import firebase from "firebase/app";
import firestore from '@react-native-firebase/firestore';


export default function Payment() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvc, setCVC] = useState("");
  const SaveButton = () => {
    const [isEnabled, setIsEnabled] = useState(false);
  
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    const saveCard = async () => {
      if(isEnabled) {
        firestore().collection('SavedCards').add({
          name: name,
          orderAt: new Date(),
          cardNumber: cardNumber,
          expDate: expDate,
          cvc : cvc,
        })
        // Save logic here when switch is enabled
      }
    };   
  const useCard = async () => { // added async keyword to enable using await
   console.log("in used card funtcion");
   firestore().collection('UsedCards').add({
    name: name,
    orderAt: new Date(),
    cardNumber: cardNumber,
    expDate: expDate,
    cvc : cvc,
   })
   .then( () => {console.log('User added!');});
  };
  }
  
  return (

<SafeAreaView style = {{flex: 1, justifyContent: 'center',backgroundColor:'#B6B7E5'}}>

<View style={styles.container}>
<Image source={ellipsepink} 
style={{position: 'absolute',
left: 2,
top: -55}} />
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
        <Text>{isEnabled ? 'Save Enabled' : 'Save Disabled'}</Text>
      </View>
      <TouchableOpacity onPress={saveCard}>
        <Text>Save</Text>
      </TouchableOpacity>
    </View> 
        <TouchableOpacity 
          style={styles.useCardButton}
          onPress={useCard}>
          <Text style={styles.loginText}>Place Order</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    );
  }
   
  const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#B6B7E5',
    alignItems: 'center',
    justifyContent: 'center',
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
        left: 60,
        top: -100,
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
        left: 60,
        top: -30,
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
        left: 60,
        top: 40,
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
        left: 60,
        top: 110,
        width:"70%",
        backgroundColor: "#FBEBEB",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
        },
    saveCardButton: {
          width: "70%",
          borderRadius: 25,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
          backgroundColor: "#FBEBEB",
    },
   
    useCardButton: {
      width: "70%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 25,
      backgroundColor: "#FBEBEB",
    },
  });