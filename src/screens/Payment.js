import React, { useState ,useEffect} from "react";
import {
  StyleSheet,
  StatusBar,
  Text,
  Switch,
  View,
  SafeAreaView,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  Picker,
  ScrollView
} from "react-native";
import { TextInputMask } from 'react-native-masked-text';
//import firebase from '@react-native-firebase/app';
import logo from "./../../images/logo.png";
import ellipsepink from "./../../images/ellipsepink.png";
import leftarrow from "./../../images/leftarrow.png";
import ellipsegrey from "./../../images/ellipsegrey.png";
//import firestore from '@react-native-firebase/firestore';
import hamburger from './../../images/hamburger.png';
import MyCart from "./MyCart";
import DeliveryStatus from "./DeliveryStatus";
//const app = require('@react-native-firebase/app');
const firestore = require('@react-native-firebase/firestore');


const Payment = ({navigation}) => {
  const [name, setName] = useState("");
  const [studentname,setStudentName] = useState("");
  const [studentID,setStudentID] = useState("");
  const [PromoCode,setPromoCode] = useState("");
  const [studentBarcode, setStudentBarcode] = useState("");
  const [selectedButton,setSelectedButton] = useState('mealPlanCash');
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvc, setCVC] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [total, setTotal] = useState(0);
  const options = ["1000 Catawba Street", 
                  "1215 Devine Street",
                  "1233 Washington Street",
                  "1321 Pendleton Street",
                  "Barnwell College",
                  "Benson",
                  "Booker T. Washington",
                  "Callcott Social Sciences Center",
                  "Carolina Coliseum",
                  "Close-Hipp Building",
                  "Darla Moore School of Business",
                  "Davis College",
                  "Discovery 1 Building",
                  "Gambrell Hall",
                  "Hamilton College",
                  "Horizon 1 Building",
                  "Humanities Classroom Building",
                  "Institute for Mind and Brain",
                  "Innovation Center Building",
                  "J. Welsh Humanities Building",
                  "Jones Physical Sciences Center",
                  "LeConte College",
                  "Thomas Cooper Library",
                  "McMaster College",
                  "Petigru College",
                  "Science and Technology",
                  "School of Law",
                  "Sumwalt College",
                  "Swearingen Engineering Center",
                  "300 Main Street"]
    
      const handleSelectOption = (option) => {
        setSelectedOption(option);
        setDropdownOpen(false);
      };
      const promoCodePayment = () => {
        if(PromoCode === 'CEC5') {
          setTotal(MyCart.getTotalPrice() - 5);
        } else if (PromoCode === 'CEC1') {
          setTotal(MyCart.getTotalPrice() - 1);
          
        } else if(PromoCode === 'MAIN2') {
          setTotal(MyCart.getTotalPrice() - 2);
      }
    };
      
      useEffect(() => {
        setTotal(MyCart.getTotalPrice());
        if (isEnabled) {
          saveCard();
        }
      }, [isEnabled,PromoCode]);

      const saveCard = async () => {
        const mealPlancard = {
          cardtype: 'Meal Plan/Carolina Cash',
                      studentName: studentname,
                      studentID: studentID,
                      studentBarcode: studentBarcode,
        }
        const debitcard = {
          cardtype: 'Credit/Debit',
                      name: name,
                      cardNumber: cardNumber,
                      expDate: expDate,
                      cvc: cvc,
        }
        if (isEnabled) {
          if (selectedButton === 'mealPlanCash') {
            const user = firebase.auth().currentUser;
            firebase
              .firestore()
              .collection('SavedCards')
              .doc(user.uid)
              .get()
              .then((doc) => {
                if (doc.exists) {
                  const userData = doc.data();
                  if (userData.studentBarcode === studentBarcode && userData.studentID === studentID) {
                    alert('Card already saved');
                  } else {
                    firebase.firestore().collection('SavedCards').doc(user.uid).update({
                      cards:firebase.firestore.FieldValue.arrayUnion(mealPlancard),
                    });
                  }
                } else {
                  firebase.firestore().collection('SavedCards').doc(user.uid).set({
                    cards:[mealPlancard],
                  });
                }
              })
              .catch((error) => {
                console.error(error.message);
              });
          } else if (selectedButton === 'creditDebit') {
            const user = firebase.auth().currentUser;
            firebase
              .firestore()
              .collection('SavedCards')
              .doc(user.uid)
              .get()
              .then((doc) => {
                if (doc.exists) {
                  const userData = doc.data();
                  if (userData.cardNumber === cardNumber) {
                    alert('Card already saved');
                  } else {
                    firebase.firestore().collection('SavedCards').doc(user.uid).update({
                      cards:firebase.firestore.FieldValue.arrayUnion(debitcard),
                    });
                  }
                } else {
                  firebase.firestore().collection('SavedCards').doc(user.uid).set({
                    cards:[debitcard],
                  });
                }
              })
              .catch((error) => {
                console.error(error.message);
              });
          }
        }
      };
        

  const useCard = async () => { 
    const user = firebase.auth().currentUser;
   try{
    firestore().collection('UsedCards').doc(user.uid).set({
      name: name,
      orderAt: new Date(),
      cardNumber: cardNumber,
      expDate: expDate,
      cvc : cvc,
      total: total,
      location: selectedOption
   });
   console.log('User added!');
  } catch (error) {
    console.log("Error adding user data:",error);
  }
  };
   
  return (
  <View style={styles.container}>
    <Image source={ellipsepink} style={{ position: 'absolute',  left: -30, top: -45, scaleX: -1, }} />
    <View style={styles.header}>
              <TouchableOpacity
                  onPress={() => { navigation.toggleDrawer(); } }>
                  <Image source={hamburger}
                      style={{ width: 35, height: 35 }}>
                  </Image>
              </TouchableOpacity>
              
              <Text style = {{marginTop: 5, fontWeight: '800', fontSize: 29, textAlign:'center', marginRight: 30,flex:1}}>
                Payment 
            </Text>
         
      </View>
      
      <View style = {{backgroundColor:'grey',padding:9,borderRadius:13,marginTop:7,marginRight:230,marginBottom:10}}>
      <Text style={{fontWeight:'bold'}}>Deilvery Address</Text>
      </View>
      
      
      <TouchableOpacity 
      onPress={() => setDropdownOpen(!dropdownOpen)}
      style={{
        backgroundColor: '#FBEBEB',
        padding: 15,
        borderRadius: 25,
        marginBottom:15,
        width:"70%"
      }}>
      <Text>{selectedOption ? `Selected Building: ${selectedOption}` : 'Select the delivery Building'}</Text>
      </TouchableOpacity>

      {dropdownOpen &&
      <ScrollView style={{maxHeight:400}}>
    {options.map((option) => (
        <TouchableOpacity
          style={{backgroundColor:'#FBEBEB',zIndex:1,fontWeight:'bold',width:280,marginBottom:3}}
          key={option}
          onPress={() => handleSelectOption(option)}
        >
          <Text style={{fontWeight:'600'}}>{option}</Text>
        </TouchableOpacity>
      ))}
      </ScrollView>}
   
        <TextInput 
        style={{backgroundColor:'#FBEBEB',borderRadius:25,width:"70%",padding:10}} placeholder = "Enter Room/Lobby" />

    <View style = {{backgroundColor:'grey',padding:9,borderRadius:13,marginTop:10,marginRight:270,marginBottom:10}}>
      <Text style={{fontWeight:'bold'}}>Payment</Text>
      </View>

<View style ={{flexDirection:'row'}}>
<TouchableOpacity style={{
        backgroundColor: selectedButton === 'mealPlanCash' ? '#884E7D' : '#FBEBEB',
        padding: 15,
        borderRadius: 25,
        marginRight:20,
      }}
      onPress={() => setSelectedButton('mealPlanCash')}
      >
      <Text style={{ color: selectedButton === 'mealPlanCash' ? '#FBEBEB' : 'black' }}>
          Meal Plan/Carolina Cash
      </Text>
      </TouchableOpacity>
    
<TouchableOpacity
      style={{
        backgroundColor: selectedButton === 'creditDebit' ? '#884E7D' : '#FBEBEB',
        padding: 15,
        borderRadius: 25,}}
        onPress={() => setSelectedButton('creditDebit')}
        >
  <Text style={{ color: selectedButton === 'creditDebit' ? '#FBEBEB' : '#000' }}>
            Credit/Debit
            </Text>
            </TouchableOpacity>
    </View>
    
    <View style={styles.container}>
    {selectedButton === 'mealPlanCash' ? (
  <>
  <View style = {styles.CardHolderName}>
    <TextInput
    style = {styles.inputText}
    placeholder = "Student Name"
    placeholderTextColor="#884e7d"
    onChangeText={(studentname) => setStudentName(studentname)}
    />
  </View>
  <View style={styles.CardNumber}>
    <TextInput
    style={styles.inputText}
    placeholder="Student ID"
    placeholderTextColor="#884e7d"
    onChangeText={(studentID) => setStudentID(studentID)}
  />
</View>
<View style={styles.CardExpiration}>
      <TextInput
        style={styles.inputText}
        placeholder="Enter barcode given on your ID card"
        placeholderTextColor="#884e7d"
        onChangeText={(studentBarcode) => setStudentBarcode(studentBarcode)}
      />
    </View>

  </>
) : (
  <>
    <StatusBar style="auto" />
    <View style={styles.CardHolderName}>
      <TextInput
        style={styles.inputText}
        placeholder="Cardholder Name"
        placeholderTextColor="#884e7d"
        onChangeText={(name) => setName(name)}
      />
    </View>

    <View style={styles.CardNumber}>
    <TextInputMask
    style={styles.inputText}
    type={'credit-card'}
    options={{
      mask: '9999 9999 9999 9999',
    }}
    placeholder="Card Number"
    placeholderTextColor="#884e7d"
    onChangeText={(cardNumber) => setCardNumber(cardNumber)}
  />
</View>

    <View style={styles.CardExpiration}>
      <TextInput
        style={styles.inputText}
        placeholder="MM/YYYY"
        placeholderTextColor="#884e7d"
        onChangeText={(expDate) => setExpDate(expDate)}
      />
    </View>

    <View style={styles.CVCcolor}>
      <TextInput
        style={styles.inputText}
        placeholder="CVC"
        placeholderTextColor="#884e7d"
        secureTextEntry={true}
        onChangeText={(cvc) => setCVC(cvc)}
      />
    </View>
    </>
)}
<View style = {styles.Promo}>
<TextInput
        style={styles.inputText}
        placeholder="PromoCode"
        placeholderTextColor="#884e7d"
        onChangeText={(PromoCode) => setPromoCode(PromoCode)} onSubmitEditing = {promoCodePayment}
      />
</View>
    <View style={styles.saveCardButton}>
      <Text style={{textAlign:'center'}}>{isEnabled ? 'Remember Card:Yes' : 'Remember Card:No'}</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> 
  </View>

  <TouchableOpacity onPress={()=>navigation.pop()}>
                <Image source={leftarrow} 
                style={{ width: 50, 
                height:50,
                right:170,
                bottom:-150
                }} />
            </TouchableOpacity>
            <Image source={ellipsegrey}
              style={{
              position: 'absolute',
              right: -150,
              bottom: 0,
              zIndex:-1
          }}>
          </Image>
          <TouchableOpacity 
  style={styles.useCardButton} 
  onPress = {() => {useCard();navigation.navigate(DeliveryStatus)}}>
    <Text style={{textAlign:'center'}}>Place Order ${total.toFixed(2)}</Text>
  </TouchableOpacity>
 
          </View>
  </View>
  );
};
   
  const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#B6B7E5',
    alignItems: 'center',
    justifyContent: 'center',
    },
    header:{
      flexDirection:'row',
      backgroundColor:'white',
      height: 40,
      borderRadius:10
  },
    inputView: {
      backgroundColor: "#FBEBEB",
      borderRadius: 30,
      width: "70%",
      height: 40,
      marginBottom: 30,
      alignItems: "center",
    },
    inputText:{
        height:50,
        color:"black",
        alignItems: "center",
        },
    
    CardHolderName:{
        position: 'absolute',
        width:"70%",
        top:10,
        backgroundColor: "#FBEBEB",
        borderRadius:25,
        height:50,
        justifyContent:"center",
        padding:20
        },
     CardNumber:{
        position: 'absolute',
        top: 70,
        width:"70%",
        backgroundColor: "#FBEBEB",
        borderRadius:25,
        height:50,
        justifyContent:"center",
        padding:20
        },
    CardExpiration:{
        position: 'absolute',
        top: 130,
        width:"70%",
        backgroundColor: "#FBEBEB",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
        },
    CVCcolor:{
        position: 'absolute',
        top: 190,
        width:"70%",
        backgroundColor: "#FBEBEB",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
        },
    Promo:{
        position: 'absolute',
        top: 250,
        width:"70%",
        backgroundColor: "#FBEBEB",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
          },
    saveCardButton: {
      top: 230,
      width:140,
      marginLeft:-110,
      backgroundColor: "#FBEBEB",
      borderRadius:25,
      height:60,
      marginBottom:30,
      flexDirection:'row',
      padding:10
    },
   
    useCardButton: {
      top: 90,
      width:140,
      left: 100,
      backgroundColor: "#FBEBEB",
      borderRadius:25,
      height:60,
      marginBottom:20,
      padding:10,
      justifyContent:'center'
    },
  })
  export default Payment;