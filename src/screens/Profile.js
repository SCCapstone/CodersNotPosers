import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import firebase from '@react-native-firebase/app';
import leftarrow  from './../../images/leftarrow.png';
import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import profile from './../../images/profile.png';
import EditProfile from './EditProfile';
import { useNavigation } from '@react-navigation/native';



const Profile = ({navigation }) => {
  const [userData, setUserData] = useState(null);
  const [name, setName] = useState('Jessica ');

  // Fetch user data from Firebase`
  useEffect(() => {
    try {
      const user = firebase.auth().currentUser;
      firebase.firestore().collection('UserData').doc(user.uid).get().then((doc) => {
        if (doc.exists) {
          setName(user.displayName);
          setUserData(user);
        } else {
          console.log("No such document!");
        }
      });
    } catch (error) {
      console.error(error.message);
    }
  }, []);
  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
    };

  const handleOrderHistory = () => {
    console.log('Order History clicked');
  };

  const handlePaymentDetails = () => {
    console.log('Payment Details clicked');
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
        <TouchableOpacity onPress={()=>navigation.navigate('CampusSideSelectionScreen')}>
                <Image source={leftarrow} 
                style={{ width: 50, 
                height: 50,
                right:-9,
                bottom:20

                }} />            
     </TouchableOpacity>
      </View>
      <View style={styles.userDetails}>
          <Text style={styles.nameText}>Profile</Text>
      </View>
        <Image source = {profile}
        style={{position: 'absolute',
        width:100,height:100,
        left:150,top:60,borderRadius:50}}>
        </Image>
      <View style = {{alignItems:'center',marginTop:120}}>
      <Text style={styles.userName}>{name}</Text>
      </View>
        <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleOrderHistory}>
          <Text style={styles.buttonText}>Order History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handlePaymentDetails}>
          <Text style={styles.buttonText}>Payment Details</Text>
        </TouchableOpacity>
      
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
      alignItems: 'center',
      justifyContent: 'center',
    },
    profileContainer: {
      marginTop: 30,
      marginLeft:10
    },
   
    editButton: {
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      position: 'absolute',
      bottom: -20,
      right: 20,
    },
    userName: {
      color: 'black',
      fontSize: 30,
      fontWeight: '900',
    },
    editButtonText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    formContainer: {
      padding: 20,
      marginTop: 30,
      backgroundColor: '#fff',
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      borderRadius: 5,
      marginBottom: 20,
      fontSize: 16,
    },
    button: {
      backgroundColor:'#884e7d',
      padding: 20,
      marginHorizontal:20,
      borderRadius: 35,
      marginTop: 30,
      top:100,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 30,
      marginBottom: 10,
    },
    sectionContainer: {
      marginTop: 20,
      backgroundColor: '#fff',
      padding: 20,
    },
    orderButton: {
      backgroundColor: '#28527a',
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
      alignItems: 'center',
    },
    orderButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    privacyButton: {
      backgroundColor: '#884e7d',
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
      alignItems: 'center',
    },
    privacyButtonText: {
      color: '#28527a',
      fontSize: 18,
      fontWeight: 'bold',
    },
    nameText: {
        color: 'black',
        fontSize: 30,
        fontWeight: '900',
      },
    creditButton: {
      backgroundColor:'#884e7d',
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
      alignItems: 'center',
    },
    creditButtonText: {
      color: '#28527a',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });


export default Profile;


