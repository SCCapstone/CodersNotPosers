/* import React,{ useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import OnboardingScreen from './src/screens/OnboardingScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import PaymentScreen from './src/screens/paymentScreen';
import CampusSideSelectionScreen from './src/screens/CampusSideSelectionScreen';
import RussellHouseRestaurantScreen from './src/screens/RussellHouseRestaurantScreen';
import ChickfilAPage from './src/screens/ChickfilAPage';
import DriverSignUpScreen from './src/screens/DriverSignUpScreen';
import Profile from './src/screens/Profile';
import EastCampus from './src/screens/EastCampus';
import WestCampus from './src/screens/WestCampus';
import SouthCampus from './src/screens/SouthCampus';
import NorthCampus from './src/screens/NorthCampus';
import FoodTrucks from './src/screens/FoodTrucks';
import DriverSignInScreen from './src/screens/DriverSignInScreen'
import DriverOrderScreen from './src/screens/DriversOrderScreen';
import { createAppContainer } from 'react-navigation';

const Stack = createNativeStackNavigator();

const App = () => {
    const[isFirstLaunch, setIsFirstLaunch] = React.useState(null);
   
    useEffect(() => {
    var value = AsyncStorage.getItem("alreadyLaunched");
        if(value == null) {
            AsyncStorage.setItem('alreadyLaunched', 'true');
            setIsFirstLaunch(true);
        } else {
            setIsFirstLaunch(false);
        }
    }, []);

   if(isFirstLaunch == null ) {
    return null;
   } else if (isFirstLaunch == true) {
        return (
            <NavigationContainer>{
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
               
                        <Stack.Screen name="OnBoarding" component={OnboardingScreen} />
                        <Stack.Screen name="SignIn" component={SignInScreen} />
                        <Stack.Screen name="SignUp" component={SignUpScreen} />
                        <Stack.Screen name="CampusSelect" component={CampusSideSelectionScreen}/>
                        <Stack.Screen name="RussellHouse" component={RussellHouseRestaurantScreen}/>
                        <Stack.Screen name="CFA" component={ChickfilAPage}/>
                        <Stack.Screen name="EastCampus" component={EastCampus}/>
                        <Stack.Screen name="WestCampus" component={WestCampus}/>
                        <Stack.Screen name="NorthCampus" component={NorthCampus}/>
                        <Stack.Screen name="SouthCampus" component={SouthCampus}/>
                        <Stack.Screen name="FoodTrucks" component={FoodTrucks}/>
                        <Stack.Screen name="CFA" component={ChickfilAPage}/>
                        <Stack.Screen name="DriverSignUp" component={DriverSignUpScreen}/>
                        <Stack.Screen name="DriverSignInScreen" component={DriverSignInScreen}/>
                        <Stack.Screen name="DriversOrderScreen" component={DriverOrderScreen}/>
                        </Stack.Navigator>
            }</NavigationContainer> 
        );
    }
    else {
        return (
            <NavigationContainer>{
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
               
                
                       <Stack.Screen name="OnBoarding" component={OnboardingScreen} />
                        <Stack.Screen name="SignIn" component={SignInScreen} />
                        <Stack.Screen name="SignUp" component={SignUpScreen} />
                        <Stack.Screen name="CampusSelect" component={CampusSideSelectionScreen}/>
                        <Stack.Screen name="RussellHouse" component={RussellHouseRestaurantScreen}/>
                        <Stack.Screen name="CFA" component={ChickfilAPage}/>
                        <Stack.Screen name="EastCampus" component={EastCampus}/>
                        <Stack.Screen name="WestCampus" component={WestCampus}/>
                        <Stack.Screen name="NorthCampus" component={NorthCampus}/>
                        <Stack.Screen name="SouthCampus" component={SouthCampus}/>
                        <Stack.Screen name="FoodTrucks" component={FoodTrucks}/>
                        <Stack.Screen name="DriverSignUp" component={DriverSignUpScreen}/>
                    
                        </Stack.Navigator>
             }</NavigationContainer> 
         );
     }
 }
 export default App;  */
 import React from "react";

 import RootNavigator from "./navigation/RootNavigators";

 export default function App () {
    return(
        <View>
            <RootNavigator/>
            
        </View>
    )
 }