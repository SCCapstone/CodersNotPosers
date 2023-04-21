import React from 'react';
import { StyleSheet,StatusBar, Text, View, SafeAreaView,Image,Button,TextInput,TouchableOpacity} from 'react-native';
import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import Cancel from './Cancel';
import Reciept from './Reciept';


const ContactDriver = ({navigation}) => {
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
          <Image source={ellipsegrey}
          style={{
              position: 'absolute',
              right: -40,
              bottom: 0
          }}>
          </Image>
          <Text
            style= {{
                position:'absolute',
                justifyContent: 'center',
                fontSize: 25,
                top: 200,
                textAlign: 'center',
                left: 50,
                color: "black",
                flex: 1
            }}>
            Driver Email: 
          </Text>
          <Text
            style= {{
                position:'absolute',
                justifyContent: 'center',
                fontSize: 25,
                top: 300,
                textAlign: 'center',
                left: 50,
                color: "black",
                flex: 1
            }}>
            Driver Cell: 
          </Text>
          <TouchableOpacity
          onPress = {() => navigation.navigate(Cancel)}
          style={styles.cancelButton}>
          <Text style={styles.forgotAndSignUpText}>Cancel Order</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress = {() => navigation.navigate(Reciept)}
          style={styles.deliveredButton}>
          <Text style={styles.forgotAndSignUpText}>Food was Delivered</Text>
          </TouchableOpacity>

          </View>
    )
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
      top: 500,
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
      top: 470,
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

export default ContactDriver;