import React, { useState } from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,TextuseColorScheme,View,TextInput,TouchableOpacity,
Image,Text,Alert} from 'react-native';


import auth from '@react-native-firebase/auth';
import {getdatabase, ref, set} from "firebase/database";
import { firebase } from '@react-native-firebase/firestore';
import logo from './../../images/logo.png';
import ellipsepink from './../../images/ellipsepink.png';
import leftarrow from './../../images/leftarrow.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import { CardStyleInterpolators } from 'react-navigation-stack';
import DriverSignInScreen from './DriverSignInScreen';

const DriverSignUpScreen =  ({navigation}) => {
    const [fnameDriver, setFirstNameDriver] = useState("");
    const [lnameDriver, setLastNameDriver] = useState("");
    const [emailDriver, setEmailDriver] = useState("");
    const [phoneDriver, setPhoneDriver] = useState("");
    const [passwordDriver, setPasswordDriver] = useState("");
    const [confirmPasswordDriver, setConfirmPasswordDriver] = useState("");

    const todoRef = firebase.firestore().collection('newData');
    const addData= () => {
        const data = {
            DriverEmail: emailDriver,
            DriverFirstName: fnameDriver,
            DriverLastName: lnameDriver,
            DriverPhoneNumber: phoneDriver,
            DriverPassword: passwordDriver,
        };
        todoRef.add(data).then(() => {setEmailDriver('');
                                        setFirstNameDriver('');
                                        setLastNameDriver('');
                                        setPhoneDriver('');
                                        setPasswordDriver('');
                                        Keyboard.dismiss();})
                                        .catch ((error) => {
                                        alert(error);
                                        console.log(error);                                
                                        })
}
    
    const apply = () => {
        if(!emailDriver) {
          Alert.alert("Please enter email");
          return
        }
        else if (!passwordDriver) {
          Alert.alert("Please enter password");
          return
        }
        else if (passwordDriver != confirmPasswordDriver) {
          Alert.alert("Passwords does not match");
          return
        }
        registerDriver(emailDriver,passwordDriver)
    }
    
    const registerDriver = async (emailDriver,passwordDriver) => {
    try {
        let response = await auth().createDriverWithEmailAndPassword(emailDriver,passwordDriver);
        //store phone number of driver here
        if(response && response.user) {
            navigation.navigate("DriverSignInScreen")
        }
    }
    catch(e) {
        console.error(e.message);
    }
    }

    

    return (

    <SafeAreaView style = {styles.container}>

        <View style={styles.container}>
            <Image source={ellipsepink} 
                style={{position: 'absolute',
                left: -210,
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
                onChangeText={text => setFirstNameDriver(text)}/>
        </View>

        <View style={styles.lView}>
            <TextInput id='lastName'
                style={styles.inputText}
                placeholder="Last Name"
                placeholderTextColor="#ccc"
                onChangeText={(text) => setLastNameDriver(text)}/>
        </View>

        <View style= {styles.phoneView}>
            <TextInput
                style={styles.inputText}
                placeholder="Phone"
                placeholderTextColor="#ccc"
                onChangeText={(text) => setPhoneDriver(text)}/>
        </View>

        <View style= {styles.emailView}>
            <TextInput
                style={styles.inputText}
                placeholder="Email"
                placeholderTextColor="#ccc"
                onChangeText={(text) => setEmailDriver(text)}/>
        </View>

        <View style= {styles.passwordView}>
            <TextInput
                style={styles.inputText}
                secureTextEntry
                placeholder="Password"
                placeholderTextColor="#ccc"
                onChangeText={(text) => setPasswordDriver(text)}/>
        </View>

        <View style= {styles.confirmPasswordView}>
            <TextInput
                style={styles.inputText}
                secureTextEntry
                placeholder="Confirm Password"
                placeholderTextColor="#ccc"
                onChangeText={(text) => setConfirmPasswordDriver(text)}/>
        </View>

       

        <View>
            <TouchableOpacity
                onPress = {apply}
                style={styles.signupBtn}>
                <Text style={styles.forgotAndSignUpText}>Submit Application</Text>
            </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate(DriverSignInScreen)}>
            <Image source={leftarrow} 
                    style={{ width: 50, 
                    height: 50,
                    top:-10,
                    left:-160}} />
        </TouchableOpacity>

        <Image source={ellipsegrey} 
                style={{position: 'absolute',
                right:-200,
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

    uploadDriversLicenseButton:{
        position: "absolute",
        right:145,
        top:-200, 
        width:115,
        backgroundColor:"#884E7D",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
    },


    inputText:{
        height:50,
        color:"black"
    },

    signupBtn:{
        position: "absolute",
        right:-20,
        top:-50, 
        width:115,
        backgroundColor:"#884E7D",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
    },

    passwordsDontMatchTxt:{
        height:60,
        color:"black",
        backgroundColor:"White",
        textAlign:"center"
    }
});
export default DriverSignUpScreen;
