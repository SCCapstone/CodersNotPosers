import React, {useState} from 'react';
import { StyleSheet,StatusBar, Text, View, SafeAreaView,Image,Button,TextInput,TouchableOpacity} from 'react-native';
import ellipsepink from './../../images/ellipsepink.png';
import leftarrow from './../../images/leftarrow.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import hamburger from './../../images/hamburger.png';

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
                color: "black",
                flex: 1
            }}>
            Your order should arrive in 30 minutes
          </Text></View>

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
    addButtonText: {
      color: "black",
      fontSize: 15,
      fontWeight:'bold',
}});
  
  
export default DeliveryStatus; 
