import React, {useState} from 'react';
import { StyleSheet,StatusBar, Text, View, SafeAreaView,Image,Button,TextInput,TouchableOpacity} from 'react-native';
import ellipsepink from './../../images/ellipsepink.png';
import leftarrow from './../../images/leftarrow.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import hamburger from './../../images/hamburger.png';
import Cancel from './Cancel.js';
import Reciept from './Reciept';
import ContactDriver from './ContactDriver';

const DeliveryStatus = ({navigation}) => {
    return(
        <View style={styles.container}>
          <Image source={ellipsepink}
              style={{
                  position: 'absolute',
                  left: -30,
                  top: -45,
                  scaleX: -1,
              }}>
          </Image>

          <View style={styles.header}>
              <TouchableOpacity
                  onPress={() => { navigation.toggleDrawer(); } }>
                  <Image source={hamburger}
                      style={{ width: 35, height: 35 }}>
                  </Image>
              </TouchableOpacity>
         
      </View>
      <Image source={ellipsegrey}
          style={{
              position: 'absolute',
              right: -40,
              bottom: 0
          }}>
          </Image>
          <View>
          <Text
            style= {{
                position:'absolute',
                justifyContent: 'center',
                fontSize: 50,
                top: 100,
                textAlign: 'center',
                left: 15,
                color: "black",
                flex: 1
            }}>
            Your order should arrive in 30 minutes!
          </Text></View>
          <View>
          <Text
            style= {{
                position:'absolute',
                justifyContent: 'center',
                fontSize: 20,
                top: 300,
                textAlign: 'center',
                left: 120,
                color: "black",
                flex: 1
            }}>
            Having issues?
          </Text></View>

          <TouchableOpacity
          onPress = {() => navigation.navigate(ContactDriver)}
          style={styles.contactButton}
          testID='contactButton'>
          <Text style={styles.forgotAndSignUpText}>Contact Driver</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress = {() => navigation.navigate(Reciept)}
          testID='deliveredButton'
          style={styles.deliveredButton}>
          <Text style={styles.forgotAndSignUpText}>Food was delivered</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress = {() => navigation.navigate(Cancel)}
          testID='cancelButton'
          style={styles.cancelButton}>
          <Text style={styles.forgotAndSignUpText}>Cancel</Text>
          </TouchableOpacity>
          

          </View>
    );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#B6B7E5',
      flex:1
    },
     header:{
          flexDirection:'row',
          backgroundColor:'white',
          height: 40,
          borderRadius:10
      },
    category: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 5,
      backgroundColor: 'grey',
      padding: 10,
      marginHorizontal:7,
      borderRadius:20,
    },
    item: {
      marginHorizontal: 11,
      padding: 3,
      marginVertical: 10,
      backgroundColor: 'white',
      borderRadius: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
  
    },
    itemText: {
      alignContent:'center',
      justifyContent: 'center',
      fontSize: 16,
      fontWeight: 'bold',
      flex: 1,
    },
    addButton: {
      backgroundColor: '#884E7D',
      borderRadius:9,
      padding: 5,
      marginRight:3,
      width:30,
      alignItems:'center',
    },
    deliveredButton:{
      width:"80%",
      backgroundColor:"#884E7D",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      top: 390,
      left: 40
    },
    contactButton:{
      width:"80%",
      backgroundColor:"#884E7D",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      top: 340,
      left: 40
    },
    cancelButton:{
      width:"80%",
      backgroundColor:"#884E7D",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      top: 440,
      left: 40
    },
    forgotAndSignUpText:{
      color:"white",
      fontSize:16
    },
    addButtonText: {
      color: "black",
      fontSize: 15,
      fontWeight:'bold',
}});
  
  
export default DeliveryStatus; 
