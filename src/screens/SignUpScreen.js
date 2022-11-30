import React, { useState } from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,TextuseColorScheme,View,TextInput,TouchableOpacity,
Image,Text} from 'react-native';
import logo from './../../images/logo.png';
import ellipsepink from './../../images/ellipsepink.png';
import leftarrow from './../../images/leftarrow.png';
import ellipsegrey from './../../images/ellipsegrey.png';

const SignUpScreen =  () => {
const onPressSignUp = () => {
// Do something about signup operation
};
const [state,setState] = useState({
fname: '',
lname: '',
email: '',
phone: '',
password: '',
confirmPassword: ''
})
return (

<SafeAreaView style = {{flex: 1, justifyContent: 'center',backgroundColor:'#B6B7E5'}}>

<View style={styles.container}>
<Image source={ellipsepink} 
style={{position: 'absolute',
left: 2,
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
onChangeText={text => setState({fname:text})}/>
</View>

<View style={styles.lView}>
<TextInput id='lastName'
style={styles.inputText}
placeholder="Last Name"
placeholderTextColor="#ccc"
onChangeText={text => setState({lname:text})}/>
</View>

<View style= {styles.phoneView}>
<TextInput
style={styles.inputText}
placeholder="Phone"
placeholderTextColor="#ccc"
onChangeText={text => setState({phone:text})}/>
</View>

<View style= {styles.emailView}>
<TextInput
style={styles.inputText}
placeholder="Email"
placeholderTextColor="#ccc"
onChangeText={text => setState({email:text})}/>
</View>

<View style= {styles.passwordView}>
<TextInput
style={styles.inputText}
secureTextEntry
placeholder="Password"
placeholderTextColor="#ccc"
onChangeText={text => setState({password:text})}/>
</View>

<View style= {styles.confirmPasswordView}>
<TextInput
style={styles.inputText}
secureTextEntry
placeholder="Confirm Password"
placeholderTextColor="#ccc"
onChangeText={text => setState({password:text})}/>
</View>

<View>
<TouchableOpacity
onPress = {onPressSignUp}
style={styles.signupBtn}>
<Text style={styles.forgotAndSignUpText}>Sign Up</Text>
</TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.naviagte('SignInScreen')}>
<Image source={leftarrow} 
style={{ width: 50, 
height: 50,
top:-10,
left:10}} />
</TouchableOpacity>

<Image source={ellipsegrey} 
style={{position: 'absolute',
right:0,
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


inputText:{
height:50,
color:"black"
},

signupBtn:{
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
});
export default SignUpScreen;
