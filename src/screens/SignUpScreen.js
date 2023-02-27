import React, { useContext, useState } from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,View,TextInput,TouchableOpacity,
Image,Text, Alert, Keyboard} from 'react-native';
import auth from '@react-native-firebase/auth';
import {getdatabase, ref, set} from "firebase/database";
import { firebase } from '@react-native-firebase/firestore';

import logo from './../../images/logo.png';
import ellipsepink from './../../images/ellipsepink.png';
import leftarrow from './../../images/leftarrow.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import DrawerNavigation from '../../navigation/DrawerNavigation';


const SignUpScreen =  ({navigation}) => {
  const [email, setEmail] = useState("");
  const [fname,setFirstName] = useState("");
  const [lname,setLastName] = useState("");
  const [phone,setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
//const {register}  = useContext(AuthContext);
  const todoRef = firebase.firestore().collection('newData');
  const addData= () => {
    const data = {
    Useremail: email,
    FirstName: fname,
    LastName: lname,
    PhoneNumber: phone,
    Password: password,
    };
    todoRef.add(data).then(() => {setEmail('');
                                  setFirstName('');
                                  setLastName('');
                                  setPhoneNumber('');
                                  setPassword('');
                                Keyboard.dismiss();})
                                .catch ((error) => {
                                  alert(error);
                                  console.log(error);                                
                                })
}
  const register = () => {
    if(!email) {
      Alert.alert("Please enter email");
      return
    }
    else if (!password) {
      Alert.alert("Please enter password");
      return
    }
    else if (password != confirmPassword) {
      Alert.alert("Passwords does not match");
      return
    }
    registerUser(email,password);
    //addData();
  }

  const registerUser = async (email,password) => {
    try {
        let response = await auth().createUserWithEmailAndPassword(email,password)
        if(response && response.user) {
          navigation.navigate(DrawerNavigation)
        }
    }
    catch(e) {
      console.error(e.message)
    }
  }
  return (

    <SafeAreaView style = {{flex: 1, justifyContent: 'center',backgroundColor:'#B6B7E5'}}>

      <View style={styles.container}>
        <Image source={ellipsepink} 
          style={{position: 'absolute',
            left: 2,
            top: -55}} />
      </View>

      <View style = {styles.container}>
        <Image source={logo} 
          style={{ position: 'absolute',
              width: 109, 
              height: 109,
              top:-280 }} />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>   </Text>
      </View>

      <View style={styles.fView}>
        <TextInput id='firstName'
          style={styles.inputText}
          placeholder="First Name"
          placeholderTextColor="#ccc"
          onChangeText={text => setFirstName(text)}/>
      </View>

      <View style={styles.lView}>
        <TextInput id='lastName'
          style={styles.inputText}
          placeholder="Last Name"
          placeholderTextColor="#ccc"
          onChangeText={text => setLastName(text)}/>
      </View>

      <View style= {styles.phoneView}>
        <TextInput
          style={styles.inputText}
          placeholder="Phone"
          placeholderTextColor="#ccc"
          onChangeText={text => setPhoneNumber(text)}/>
      </View>

      <View style= {styles.emailView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#ccc"
          onChangeText={text => setEmail(text)}/>
      </View>
      
      <View style= {styles.passwordView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#ccc"
          onChangeText={text => setPassword(text)}/>
      </View>

      <View style= {styles.confirmPasswordView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Confirm Password"
          placeholderTextColor="#ccc"
          onChangeText={text => setConfirmPassword(text)}/>
      </View>

      <View>
        <TouchableOpacity
          style={styles.signupBtn}
          onPress= {register}>
          <Text style={styles.forgotAndSignUpText}>Sign Up</Text>
           
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.pop()}>
        <Image source={leftarrow} 
          style={{ width: 50, 
            height: 50,
            top:-10,
            left:10}} />
           
      </TouchableOpacity>

      <Image source={ellipsegrey} 
        style={{position: 'absolute',
          right:0,
          bottom:0}}/>
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

    fView:{
    position: 'absolute',
    left: 30,
    top: 194,
    width:153,
    backgroundColor:"#FFFFFF",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
    },

    lView:{
      position: 'absolute',
      left: 207,
      top: 194,
      width:153,
      backgroundColor:"#FFFFFF",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },

    phoneView:{
      position: 'absolute',
      left: 30,
      top: 260,
      width:330,
      backgroundColor:"#FFFFFF",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },

    emailView:{
      position: 'absolute',
      left:30,
      top:326,
      width:330,
      backgroundColor:"#FFFFFF",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },

    passwordView:{
      position: 'absolute',
      left:30,
      top:390,
      width:330,
      backgroundColor:"#FFFFFF",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },

    confirmPasswordView:{
      position: 'absolute',
      left: 30,
      top:455,
      width:330,
      backgroundColor:"#FFFFFF",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    }, 


    inputText:{
    height:50,
    color:"black"
    },

    signupBtn:{
      position: "absolute",
      right:145,
      top:-150, 
      width:115,
      backgroundColor:"#884E7D",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      },
  });
  export default SignUpScreen;