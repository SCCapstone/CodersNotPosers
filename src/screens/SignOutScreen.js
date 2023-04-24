import React from 'react';
import { View, Text, Alert, Button,StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import SignInScreen from './SignInScreen';
import DrawerNavigation from '../../navigation/DrawerNavigation';
//const auth = require('@react-native-firebase/auth')

export default function SignOutScreen({navigation}) {
  async function signOut() {
    try {
      await auth().signOut();
      console.log("User successfully signed out");
      navigation.navigate(SignInScreen)
    } catch(err) {
      Alert.alert(err.code);
    }
  }

  return (
    <View style={styles.container}>
      <Button style={{height:39}} title="Yes" onPress={signOut} color = "#884E7D"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#E6E6FA',
    justifyContent: 'center',
    alignItems: 'center',
  },

});