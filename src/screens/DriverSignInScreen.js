import React, { useState } from 'react';
import {SafeAreaView,StyleSheet,View,TextInput,TouchableOpacity,
Image,Text, Alert} from 'react-native';
import logo from './../../images/logo.png';
import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import DriversOrder from './DriversOrderScreen';
import DrawerNavigation from '../../navigation/DrawerNavigation';
import DriverSignUpScreen from './DriverSignUpScreen';

const DriverSignInScreen =  ({navigation}) => {

    const [emailDriver,setEmailDriver] = useState('');
    const [passwordDriver,setPasswordDriver] = useState('');

    const onPressLogin = () => {
        if(!emailDriver) {
            Alert.alert('Enter Email');
            return;
          } else if (!passwordDriver && passwordDriver.trim()) {
            Alert.alert('Enter password');
            return;
          } 
        doSignInDriver(emailDriver,passwordDriver);
    };

    const doSignInDriver = async (emailDriver,passwordDriver) => {
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
          Alert.alert('Invalid email format');
          return;
        }
    
        try {
          let response = await auth().signInWithEmailAndPasswordDriver(emailDriver,passwordDriver)
          if (response && response.user) {
            navigation.navigate(DriversOrder);
          }
        }
        catch(e) {
          console.error(e.message);
          Alert.alert(e.message);
        }
      }

    const onPressForgotPassword = () => {
    // Do something about forgot password operation
    };
    const [state,setState] = useState({
    emailDriver: '',
    passwordDriver: '',
    })
    return (
        <SafeAreaView style = {{flex: 1, justifyContent: 'center',backgroundColor:'#B6B7E5'}}>

            <View style={styles.container}>
                <Text> Driver Sign In </Text>
                <Image source={ellipsepink} 
                    style={{position: 'absolute',
                    left: 0,
                    top: 1,}} />
                <Image source={logo} 
                    style={{ width: 120, height: 120 }} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>   </Text>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Email"
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholderTextColor="#ccc"
                    onChangeText={text => setState({emailDriver:text})}/>
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        secureTextEntry={true}
                        placeholder="Password"
                        placeholderTextColor="#ccc"
                        onChangeText={text => setState({passwordDriver:text})}/>

                    <Image source={ellipsegrey} 
                        style={{position: 'absolute',
                        right:-60,
                        bottom:-420}}/>

                </View>
                <TouchableOpacity
                    onPress = {onPressForgotPassword}>
                    <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {onPressLogin}
                    style={styles.loginBtn}>
                    <Text style={styles.loginText}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {() => navigation.navigate(DriverSignUpScreen)}
                    style={styles.loginBtn}>
                    <Text style={styles.loginText}>Apply to be a Driver?</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}
export default DriverSignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B6B7E5',
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputView:{
        width:"80%",
        backgroundColor:"#FFFFFF",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    inputText:{
        height:50,
        color:"black"
    },

    loginText:{
        color:"white",
        fontSize:16
    },

    forgotAndSignUpText:{
        color:"white",
        fontSize:16
    },
    loginBtn:{
        width:"80%",
        backgroundColor:"#884E7D",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },

    signupBtn:{
        width:"80%",
        backgroundColor:"#884E7D",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
});

