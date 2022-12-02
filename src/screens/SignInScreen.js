import React, { useContext, useState } from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,TextuseColorScheme,View,TextInput,TouchableOpacity,
Image,Text} from 'react-native';
import logo from './../../images/logo.png';
import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import { AuthContext } from '../../navigation/AuthProvider';

const SignInScreen =  ({navigation}) => {
  
  const [email,setEmail] = useState();
  const[password,setPassword] = useState();

  //const {login} = useContext(AuthContext);
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
keyboardType='email-address'
autoCapitalize='none'
autoCorrect={false}
placeholderTextColor="#ccc"
onChangeText={(userEmail) => setEmail(userEmail)}/>
</View>
<View style={styles.inputView}>
<TextInput
style={styles.inputText}
secureTextEntry={true}
placeholder="Password"
placeholderTextColor="#ccc"
onChangeText={(userPassword) => setPassword(userPassword)}/>
<Image source={ellipsegrey} 
style={{position: 'absolute',
right:-60,
bottom:-420}}/>

</View>
<TouchableOpacity>
<Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
</TouchableOpacity>
<TouchableOpacity
onPress = {alert('a') }
style={styles.loginBtn}>
<Text style={styles.loginText}>Sign In</Text>
</TouchableOpacity>
<TouchableOpacity
onPress = {() => navigation.navigate('SignUp')}
style={styles.signupBtn}>
<Text style={styles.forgotAndSignUpText}>Sign Up</Text>
</TouchableOpacity>
</View>
</SafeAreaView>
);
}
export default SignInScreen;

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
