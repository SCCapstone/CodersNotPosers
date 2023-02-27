import React, {useState} from 'react';
import { StyleSheet,StatusBar, Text, View, SafeAreaView,Image,Button,TextInput,TouchableOpacity} from 'react-native';
import logo from './../../images/logo.png';
import ellipsepink from './../../images/ellipsepink.png';
import leftarrow from './../../images/leftarrow.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import auth from '@react-native-firebase/auth';
import firebase from '../config';
import firebase from 'firebase';
import { Keyboard } from 'react-native';


export default function AddressScreen() {
  const address = firebase.firestore().collection('New Address');
  const [street, setStreet] = useState("");
  const [town, setTown] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  // const registerCard = async (name,cardNumber, expDate, cvc) => {
  //   try {
  //       let response = await auth().createUserWithEmailAndPassword(email,password)
  //       if(response && response.user) {
  //         navigation.navigate(CampusSideSelectionScreen)
  //       }
  //   }
  //   catch(e) {
  //     console.error(e.message)
  //   }
  // }
  const saveAddress = () => {
    //const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    const usersAddress = {
     street: street,
     town: town,
     state: state,
     zipCode: zipCode,
    };
    address
      .add(usersAddress)
      .then(() => {
    // userCard.set(usersCard);
    setStreet('');
    setTown('');
    setState('');
    setZipCode('');
    Keyboard.dismiss();
  })
  .catch((error) => {
    alert(error);
  })
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
            placeholder="street"
            placeholderTextColor="#884e7d"
            onChangeText={(street) => setStreet(street)}
          />
        </View>

        <View style={styles.CardNumber}>
          <TextInput
            style={styles.inputText}
            placeholder="Town"
            placeholderTextColor="#884e7d"
            onChangeText={(town) => setTown(town)}
          />
        </View>

        <View style={styles.CardNumber}>
          <TextInput
            style={styles.inputText}
            placeholder="State"
            placeholderTextColor="#884e7d"
            onChangeText={(state) => setState(state)}
          />
        </View>

        <View style={styles.CVCcolor}>
          <TextInput
            style={styles.inputText}
            placeholder="ZIP"
            placeholderTextColor="#884e7d"
            secureTextEntry={true}
            onChangeText={(zipCode) => setZipCode(zipCode)}
          />
        </View>
   
        <TouchableOpacity 
          style={styles.saveCardButton}
          onPress={saveAddress}>
          <Text style={styles.loginText}>Save Address</Text>
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
      marginTop: 25,
      backgroundColor: "#FBEBEB",
    },
  });