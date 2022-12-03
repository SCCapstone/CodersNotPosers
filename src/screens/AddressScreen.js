import React, { useState } from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,TextuseColorScheme,View,TextInput,TouchableOpacity,
Image,Text} from 'react-native';
import logo from './../../images/logo.png';
import ellipsepink from './../../images/ellipsepink.png';
import leftarrow from './../../images/leftarrow.png';
import ellipsegrey from './../../images/ellipsegrey.png';

const AddressScreen =  ({navigation}) => {
const onPressSignUp = () => {navigation.navigate('Restauraunts')
};
const [state,setState] = useState({
street: '',
city: '',
zipcode: '',
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
<TextInput id='street'
style={styles.inputText}
placeholder="Street"
placeholderTextColor="#ccc"
onChangeText={text => setState({fname:text})}/>
</View>

<View style={styles.lView}>
<TextInput id='city'
style={styles.inputText}
placeholder="City"
placeholderTextColor="#ccc"
onChangeText={text => setState({lname:text})}/>
</View>

<View style= {styles.phoneView}>
<TextInput id= 'zip'
style={styles.inputText}
placeholder="Zip Code"
placeholderTextColor="#ccc"
onChangeText={text => setState({phone:text})}/>
</View>

<View>
<TouchableOpacity
onPress = {onPressSignUp}
style={styles.signupBtn}>
<Text style={styles.forgotAndSignUpText}>Sign Up</Text>
</TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.pop()}>
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

streetView:{
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

cityView:{
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

zipView:{
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





inputText:{
height:50,
color:"black"
},

saveAddressButton:{
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
export default AddressScreen;
