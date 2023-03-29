import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const Profile = ({navigation }) => {
  const [userData, setUserData] = useState(null);

  // Fetch user data from Firebase
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase.firestore().collection('users').doc(user.uid).get()
          .then(doc => {
            if (doc.exists) {
              setUserData(doc.data());
            } else {
              console.log('No user data found');
            }
          })
          .catch(error => console.log(error));
      }
    });
    return unsubscribe;
  }, []);

  const handleEditProfile = () => {
    navigation.navigate('Edit Profile');
    };

  const handleOrderHistory = () => {
    console.log('Order History clicked');
  };

  const handlePaymentDetails = () => {
    console.log('Payment Details clicked');
  };

  const handlePrivacyPolicy = () => {
    console.log('Privacy Policy clicked');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#884e7d" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>
      <View style={styles.userDetails}>
        <TouchableOpacity style={styles.profileImageContainer} onPress={() => console.log('Profile image clicked')}>
          <Icon name="user-circle-o" size={100} color="#fff" />
          <Text style={styles.nameText}>Jessica Bricker</Text>
        </TouchableOpacity>
        <Text style={styles.userName}>{userData ? userData.name : ''}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
          <Icon name="edit" size={24} color="white" />
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleOrderHistory}>
          <Icon name="history" size={24} color="white" />
          <Text style={styles.buttonText}>Order History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handlePaymentDetails}>
          <Icon name="credit-card" size={24} color="white" />
          <Text style={styles.buttonText}>Payment Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handlePrivacyPolicy}>
          <Icon name="lock" size={24} color="white" />
          <Text style={styles.buttonText}>Privacy Policy</Text>
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
    header: {
      backgroundColor: '#fff',
      paddingVertical: 15,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    headerTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      marginLeft: 20,

    },
    backButton: {
      marginRight: 20,
    },
    userImageContainer: {
      marginTop: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    userImage: {
      width: 150,
      height: 150,
      borderRadius: 75,
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
      padding: 10,
      borderRadius: 25,
      marginTop: 20,
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
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
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


