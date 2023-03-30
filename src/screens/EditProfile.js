import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native';
//import { MaterialIcons } from 'react-native-vector-icons';

const EditProfile = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSave = () => {
    // Code to save the user's updated information
  };

  return (
<SafeAreaView style = {{flex: 1, justifyContent: 'center',backgroundColor:'#B6B7E5'}}>
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

  <View style= {styles.addressView}>
    <TextInput
      style={styles.inputText}
      placeholder="Address"
      placeholderTextColor="#ccc"
      onChangeText={text => setAddress(text)}/>
  </View>

  <View style= {styles.emailView}>
    <TextInput
      style={styles.inputText}
      placeholder="Email"
      placeholderTextColor="#ccc"
      onChangeText={text => setEmail(text)}/>
  </View>


      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.buttonTex}>Save Changes</Text>
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
    borderBottomWidth: 3,
    borderBottomColor: '#ccc',
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },

  inputText: {
    height:30,
    color:"black"
  },
  saveButton: {
    backgroundColor: '#884e7d',
    padding: 20,
    borderRadius: 25,
    marginTop: 10,
    alignItems: 'center',
    width:330,
    top: 400
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  backButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 20,
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
        top: 350,
        width:330,
        backgroundColor:"#FFFFFF",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },
  
});

export default EditProfile;
