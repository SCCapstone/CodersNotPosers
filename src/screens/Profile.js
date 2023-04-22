import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import firebase from '@react-native-firebase/app';
import leftarrow  from './../../images/leftarrow.png';
import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import profile from './../../images/profile.png';
import hamburger from './../../images/hamburger.png';
import HomeHeader from './HomeHeader';
import EditProfile from './EditProfile';
import PaymentDetails from './PaymentDetails';
import CampusSideSelectionScreen from './CampusSideSelectionScreen';
import OrderHistory from './OrderHistory';


const Profile = ({navigation }) => {
  const [name, setName] = useState(null);

  // Fetch user data from Firebase`
  useEffect(() => {
    try {
      const user = firebase.auth().currentUser;
      console.log(user);
      firebase.firestore().collection('UserData').doc(user.uid).get().then((doc) => {
        if (doc.exists) {
          setName(doc.data().name) // <--- Setting the name he
        } else {
          console.log("No such document!");
        }
      });
    } catch (error) {
      console.error(error.message);
    }
  }, []);
  const handleEditProfile = () => {
    navigation.navigate(EditProfile);
  };

  const handleOrderHistory = () => {
    navigation.navigate(OrderHistory);
    console.log('Order History clicked');
  };

  const handlePaymentDetails = () => {
    navigation.navigate(PaymentDetails);
  };

  return (
    <View style={styles.container}>
      <Image source={ellipsepink} 
                    style={{position: 'absolute',
                    left: -10,
                    top: -20,
                    }}>
                </Image>
                {/* <TouchableOpacity style={{marginLeft:5,zIndex:1}}
            onPress = {() => {navigation.toggleDrawer()}}>
            <Image source={hamburger} 
                    style = {{ width:35, height:35}}>
                </Image>
        </TouchableOpacity>
                
        <Text style = {{fontWeight: '800', fontSize: 29, textAlign:'center', top:-10,}}>
                Profile
            </Text> */}
            <HomeHeader navigation = {navigation}/>
                  <Text style={styles.nameText}>Profile</Text>
                
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
      
        <Image source = {profile}
        style={{position: 'absolute',
        width:100,height:100,
        left:150,top:60,borderRadius:50}}>
        </Image>
      <View style = {{alignItems:'center',marginTop:90}}>
      <Text style={styles.userName}>{name}</Text>
      </View>
      <View>
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
        top: -40,
        left:150
      },
  });
export default Profile;


