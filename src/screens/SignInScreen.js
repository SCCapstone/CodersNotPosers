import React from 'react';
import {SafeAreaView, View,Text, TextInput, TouchableOpacity, onPress} from 'react-native';
import InputField from '../components/Inputfield';

const SignInScreen = () => {
    return (
        
        <SafeAreaView style = {{flex: 1, justifyContent: 'center',backgroundColor:'#B6B7E5'}}>
        
        <View style={{alignItems: 'center', paddingHorizontal:25}}>
        <Text style={{fontSize:29,fontWeight:'300',paddingBottom:25}}>
            Login
        </Text>
        <InputField
        label={'Email'}
        keyboardType="email-address"
        />
        <InputField
           label={'Password'}
           inputType="password"
           fieldButtonLabel={"Forgot?"}
           fieldButtonFunction={() => {}}
         />
         <TouchableOpacity
          onPress={onPress}
          style={{
          backgroundColor: '#884E7D',
          padding: 20,
          borderRadius: 10,
          marginBottom: 30,
          }}>
       <Text
         style={{
           textAlign: 'center',
           fontWeight: '700',
           fontSize: 16,
           color: '#ccc',
         }}>
         Sign Up
       </Text>
     </TouchableOpacity>
         <TouchableOpacity
          onPress={() => console.log("Logged in")}
          style={{
          backgroundColor: '#884E7D',
          padding: 20,
          borderRadius: 10,
          marginBottom: 30,
          }}>
       <Text
         style={{
           textAlign: 'center',
           fontWeight: '700',
           fontSize: 16,
           color: '#ccc',
         }}>
         Sign In
       </Text>
     </TouchableOpacity>
        </View>
        </SafeAreaView>
        
    );
}
export default SignInScreen;



