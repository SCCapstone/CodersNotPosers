import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, Image } from 'react-native';
//import { MaterialIcons } from 'react-native-vector-icons';
import leftarrow  from './../../images/leftarrow.png';
import Profile from './Profile';
import firebase from '@react-native-firebase/app';



const EditProfile = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [states, setStates]= useState('');
  const [zipCode, setZipCode]= useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSave = () => {
    // Code to save the user's updated information
  };

  return (
<SafeAreaView style = {{flex: 1, justifyContent: 'center',backgroundColor:'#B6B7E5'}}>
    <View style={styles.header}>
        <Text style={styles.title}>Edit Profile</Text>
      </View>
 <Text style={styles.Infotitle}>Personal Information</Text>

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
    <TextInput id='phoneNumber'
      style={styles.inputText}
      placeholder="Phone"
      placeholderTextColor="#ccc"
      onChangeText={text => setPhoneNumber(text)}/>
  </View>
  <View style= {styles.emailView}>
    <TextInput id='email'
      style={styles.inputText}
      placeholder="Email"
      placeholderTextColor="#ccc"
      onChangeText={text => setEmail(text)}/>
  </View>
  <Text style={styles.Addresstitle}>Address</Text>
  <View style= {styles.addressView}>
    <TextInput id='streetAddress'
      style={styles.inputText}
      placeholder="Street Address"
      placeholderTextColor="#ccc"
      onChangeText={text => setStreetAddress(text)}/>
  </View>
  <View style= {styles.cityView}>
    <TextInput id='city'
      style={styles.inputText}
      placeholder="City"
      placeholderTextColor="#ccc"
      onChangeText={text => setTown(text)}/>
  </View>

  <View style= {styles.stateView}>
    <TextInput id='states'
      style={styles.inputText}
      placeholder="State"
      placeholderTextColor="#ccc"
      onChangeText={text => setStates(text)}/>
  </View>

  <View style= {styles.zipView}>
    <TextInput id='zipCode'
      style={styles.inputText}
      placeholder="Zip Code"
      placeholderTextColor="#ccc"
      onChangeText={text => setZipCode(text)}/>
  </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>

     <TouchableOpacity onPress={()=>navigation.pop()}>
                <Image source={leftarrow} 
                style={{ width: 50, 
                height: 50,
                right:-9,
                bottom:-235

                }} />            
     </TouchableOpacity>

    </SafeAreaView>
        );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b6b7e5',
    padding: 45,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth:0,
    borderBottomColor: '#ccc',
    marginVertical: 10,
  },

  inputText: {
    height:40,
    color:"black"
  },
  saveButton: {
    backgroundColor: '#884e7d',
    padding: 20,
    borderRadius: 26,
    marginTop: 10,
    alignItems: 'center',
    width:153,
    top: 220,
    right:-125,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  fView:{
    position: 'absolute',
    left: 30,
    top: 100,
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
        top: 100,
        width:153,
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
        top:180,
        width:330,
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
      addressView:{
        position: 'absolute',
        left: 30,
        top: 370,
        width:330,
        backgroundColor:"#FFFFFF",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333333',
        textAlign: 'center',
        marginBottom: 10,
        top: -230,
        left: -120  },
    
      Addresstitle: {
          fontSize: 15,
          color: '#333333',
          textAlign: 'center',
          marginBottom: 10,
          top: 15,
          left: -140},
    
     Infotitle: {
            fontSize: 15,
            color: '#333333',
            textAlign: 'center',
            marginBottom: 10,
            top: -225,
            left: -95},
        
        cityView:{
              position: 'absolute',
              left: 30,
              top: 440,
              width:153,
              backgroundColor:"#FFFFFF",
              borderRadius:25,
              height:50,
              marginBottom:20,
              justifyContent:"center",
              padding:20
              },
              stateView:{
                position: 'absolute',
                left: 207,
                top: 440,
                width:153,
                backgroundColor:"#FFFFFF",
                borderRadius:25,
                height:50,
                marginBottom:20,
                justifyContent:"center",
                padding:20
              },
              zipView:{
                position: 'absolute',
                left: 30,
                top: 510,
                width:153,
                backgroundColor:"#FFFFFF",
                borderRadius:25,
                height:50,
                marginBottom:20,
                justifyContent:"center",
                padding:20
                },
  
});

export default EditProfile;
