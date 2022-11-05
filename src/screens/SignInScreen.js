import React, { useState } from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,TextuseColorScheme,View,TextInput,TouchableOpacity,
Image,Text} from 'react-native';
import logo from './images/logo.png';
import ellipsepink from './images/ellipsepink.png';
import ellipsegrey from './images/ellipsegrey.png';

const SignInScreen =  () => {
const onPressLogin = () => {
// Do something about login operation
};
const onPressForgotPassword = () => {
// Do something about forgot password operation
};
const onPressSignUp = () => {
// Do something about signup operation
};
const [state,setState] = useState({
email: '',
password: '',
})
return (
<SafeAreaView style = {{flex: 1, justifyContent: 'center',backgroundColor:'#B6B7E5'}}>

<View style={styles.container}>
<Image source={ellipsepink} 
style={{position: 'absolute',
left: 2,
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
placeholderTextColor="#ccc"
onChangeText={text => setState({email:text})}/>
</View>
<View style={styles.inputView}>
<TextInput
style={styles.inputText}
secureTextEntry
placeholder="Password"
placeholderTextColor="#ccc"
onChangeText={text => setState({password:text})}/>

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
onPress = {onPressSignUp}
style={styles.signupBtn}>
<Text style={styles.forgotAndSignUpText}>Sign Up</Text>
</TouchableOpacity>
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
export default SignInScreen;
