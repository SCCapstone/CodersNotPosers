// This screen is used to allow a user to enter an address for their delivery
import React, { useState } from "react";
import {
  StyleSheet,
  StatusBar,
  Text,
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


export default function AddressScreen() {
  const [street, setStreet] = useState("");
  const [town, setTown] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
 //the method below saves the address in firebase 
  const saveAddress = async () => { 
    firestore().collection('SaveAddress').add({
          street: street,
          town: town,
          state: state,
          zipCode: zipCode,
        })
      };   
      return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: '#B6B7E5' }}>
          <View style={styles.container}>
            <Image source={ellipsepink} style={{ position: 'absolute', left: 2, top: -55 }} />
          </View>
    
          <StatusBar style="auto" />
    
          <View style={styles.CardHolderName}>
            <TextInput
              style={styles.inputText}
              placeholder="Cardholder Name"
              placeholderTextColor="#884e7d"
              onChangeText={(street) => setStreet(street)}
            />
          </View>
    
          <View style={styles.CardNumber}>
            <TextInput
              style={styles.inputText}
              placeholder="Card Number"
              placeholderTextColor="#884e7d"
              onChangeText={(town) => setTown(town)}
            />
          </View>
    
          <View style={styles.CardExpiration}>
            <TextInput
              style={styles.inputText}
              placeholder="MM/YYYY"
              placeholderTextColor="#884e7d"
              onChangeText={(state) => setState(state)}
            />
          </View>
    
          <View style={styles.CVCcolor}>
            <TextInput
              style={styles.inputText}
              placeholder="CVC"
              placeholderTextColor="#884e7d"
              secureTextEntry={true}
              onChangeText={(zipCode) => setZipCode(zipCode)}
            />
          </View>
    
          <View>
            <View style={styles.saveCardButton}>
              <TouchableOpacity onPress={saveAddress}>
                <Text>Save Address</Text>
              </TouchableOpacity>
            </View>
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
  });