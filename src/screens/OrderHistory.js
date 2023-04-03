import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
//import firebase from '@react-native-firebase/app';
import leftarrow  from './../../images/leftarrow.png';
import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import profile from './../../images/profile.png';
import EditProfile from './EditProfile';
import CampusSideSelectionScreen from './CampusSideSelectionScreen';
import { useNavigation } from '@react-navigation/native';


const Profile = ({navigation }) => {


  // Fetch user data from Firebase`
  const handleDetails = () => {
    console.log('View History Clicked');
  };

  return (
    <View style={styles.container}>
      <Image source={ellipsepink} 
                    style={{position: 'absolute',
                    left: -10,
                    top: -20,
                    scaleX:-1}}>
                </Image>
                
                <Image source={ellipsegrey} 
                    style={{position: 'absolute',
                    right:-40,
                    bottom:0}}>
                </Image>
      <View style={{ position: 'absolute', bottom: 14, left: 10 }}>
        <TouchableOpacity onPress={()=>navigation.navigate(CampusSideSelectionScreen)}>
                <Image source={leftarrow} 
                style={{ width: 50, 
                height: 50,
                right:-9,
                bottom:20
                }} />            
     </TouchableOpacity>
      </View>
      <View style={styles.profileNameContainer}>
          <Text style={styles.nameText}>Order{"\n"}History</Text>
      </View>
        
      <View>
        <TouchableOpacity style={styles.button} onPress={handleDetails}>
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#b6b7e5',
    },
    backButton: {
      marginRight: 20,
       
    },
    profileNameContainer: {
      marginTop: 30,
      marginLeft:10,
    },
    userName: {
      color: 'black',
      fontSize: 30,
      fontWeight: '900',
    },
    button: {
      backgroundColor:'#884e7d',
      padding: 20,
      marginHorizontal:20,
      borderRadius: 35,
      marginTop:30,
      alignItems: 'center',
      top: 100
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    nameText: {
        color: 'black',
        fontSize: 30,
        fontWeight: '900',
        top: 0
      },
  });
export default Profile;


