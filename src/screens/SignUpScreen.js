import React, { useState } from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,TextuseColorScheme,View,TextInput,TouchableOpacity,
Image,Text} from 'react-native';
import logo from './images/logo.png';
import ellipsepink from './images/ellipsepink.png';
import leftarrow from './images/leftarrow.png';
import ellipsegrey from './images/ellipsegrey.png';

const SignUpScreen =  () => {
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
fname: '',
lname: '',
email: '',
phone: '',
dob: '',
password: ''
})
return (

<SafeAreaView style = {{flex: 1, justifyContent: 'center',backgroundColor:'#B6B7E5'}}>

<View style={styles.container}>
<Image source={ellipsepink} 
style={{position: 'absolute',
left: 2,
top: -55}} />

<Image source={logo} 
style={{ width: 109, 
height: 109,
top: -250 }} />

<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
  <Text>   </Text>
</View>
<View style={styles.fView}>
<TextInput
style={styles.inputText}
placeholder="First Name"
placeholderTextColor="#ccc"
onChangeText={text => setState({fname:text})}/>
</View>
<View style={styles.lView}>
<TextInput
style={styles.inputText}
secureTextEntry
placeholder="Last Name"
placeholderTextColor="#ccc"
onChangeText={text => setState({lname:text})}/>


<View style= {styles.emailView}>
<TextInput
style={styles.inputText}
placeholder="Email"
placeholderTextColor="#ccc"
onChangeText={text => setState({email:text})}/>
</View>

<View style= {styles.dobView}>
<TextInput
style={styles.inputText}
placeholder="DOB"
placeholderTextColor="#ccc"
onChangeText={text => setState({dob:text})}/>
</View>

<View style= {styles.phoneView}>
<TextInput
style={styles.inputText}
placeholder="Phone"
placeholderTextColor="#ccc"
onChangeText={text => setState({phone:text})}/>

<View style= {styles.passwordView}>
<TextInput
style={styles.inputText}
placeholder="USC ID"
placeholderTextColor="#ccc"
onChangeText={text => setState({password:text})}/>
<TouchableOpacity
onPress = {onPressSignUp}
style={styles.signupBtn}>
<Text style={styles.forgotAndSignUpText}>Sign Up</Text>
</TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.naviagte('SignInScreen')}>
<Image source={leftarrow} 
style={{ width: 50, 
height: 50,
top: 220,
left: -30 }} />
</TouchableOpacity>

<Image source={ellipsegrey} 
style={{position: 'absolute',
right: -30,
bottom:-295}}/>

</View>
</View>
</View>
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

emailView:{
  position: 'absolute',
  left: -175,
  top: 85,
  width:330,
  backgroundColor:"#FFFFFF",
  borderRadius:25,
  height:50,
  marginBottom:20,
  justifyContent:"center",
  padding:20
},

phoneView:{
  position: 'absolute',
  left: -175,
  top: 175,
  width:"135%",
  backgroundColor:"#FFFFFF",
  borderRadius:25,
  height:50,
  marginBottom:20,
  justifyContent:"center",
  padding:20
},

dobView:{
  position: 'absolute',
  left: -2,
  top: 175,
  width:153,
  backgroundColor:"#FFFFFF",
  borderRadius:25,
  height:50,
  marginBottom:20,
  justifyContent:"center",
  padding:20
},

passwordView:{
  position: 'absolute',
  left: 0,
  top: 85,
  width:330,
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

signupBtn:{
  position: "absolute",
  left: 45,
  top: 100,
  width:"80%",
  backgroundColor:"#884E7D",
  borderRadius:25,
  height:50,
  alignItems:"center",
  justifyContent:"center",
  },
});
export default SignUpScreen;
