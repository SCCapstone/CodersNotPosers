/* import React, {useState} from 'react';
import { StyleSheet,StatusBar, Text, View, SafeAreaView,Image,Button,TextInput,TouchableOpacity} from 'react-native';
import logo from './../../images/logo.png';
import ellipsepink from './../../images/ellipsepink.png';
import leftarrow from './../../images/leftarrow.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue} from "firebase/database";
import auth from '@react-native-firebase/auth';
 // TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBijFau4g9NJAkNebhthYn4mopsN5HBTmA",
  authDomain: "campuseats-847ff.firebaseapp.com",
  // The value of `databaseURL` depends on the location of the database
  projectId: "campuseats-847ff",
  storageBucket: "campuseats-847ff.appspot.com",
  //messagingSenderId: "SENDER_ID",
  appId: "1:279146890630:android:d88cba5e317a2da614d807",
  databaseURL: "https://campuseats-847ff-default-rtdb.firebaseio.com/E.firebaseio.com",
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
//const ref = db.ref('server/saving-data/fireblog');
export default function PaymentScreen() {

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
            onChangeText={(fullName) => setName(fullName)}
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
   
        <TouchableOpacity 
          style={styles.saveCardButton}
          onPress={() => alert("Card was saved")}>
          <Text style={styles.loginText}>Save Card</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    );
  }
  function saveCard(fullName, cardNumber, expDate, cvc) {
    return (
        userEntry.push({
          fullName: fullName,
            cardNumber: cardNumber,
            expDate:expDate,
            cvc:cvc
        }));
  }
  saveCard(fullName, cardNumber, expDate, cvc);
  const usersRef = ref.child('users cards');
  usersRef.push().set({fullName, cardNumber, expDate, cvc});
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
      marginTop: 25,
      backgroundColor: "#FBEBEB",
    },
  }); */