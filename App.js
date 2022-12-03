import *  as React from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from './src/screens/OnboardingScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import AddressScreen from './src/screens/AddressScreen';
import PaymentScreen from './src/screens/paymentScreen';
import CampusSideSelectionScreen from './src/screens/CampusSideSelectionScreen';
import RussellHouseRestaurantScreen from './src/screens/RussellHouseRestaurantScreen';
import ChickfilAPage from './src/screens/ChickfilAPage';
import DriverSignUpScreen from './src/screens/DriverSignUpScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StripeProvider } from '@stripe/stripe-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import AddressScreen from './src/screens/AddressScreen';

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
                {/* /*
                    <StripeProvider
                        publishableKey="pk_test_51M9ueME2kyK6I5WPJO8bYnghkiEiicrytMc9587Yr"
                        </StripeProvider>
                */ }
                        {/* <Stack.Screen name="OnBoarding" component={OnboardingScreen} />
                         */}<Stack.Screen name="SignIn" component={SignInScreen} />
                        <Stack.Screen name="SignUp" component={SignUpScreen} />
                       <Stack.Screen name="CampusSelect" component={CampusSideSelectionScreen}/>
                        <Stack.Screen name="RussellHouse" component={RussellHouseRestaurantScreen}/>
                        <Stack.Screen name="CFA" component={ChickfilAPage}/>
                        <Stack.Screen name="DriverSignUp" component={DriverSignUpScreen}/>
                        <Stack.Screen name="Payment" component={PaymentScreen}/>
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
                {/* /*
                    <StripeProvider
                        publishableKey="pk_test_51M9ueME2kyK6I5WPJO8bYnghkiEiicrytMc9587Yr"
                        </StripeProvider>
                */ }
                        <Stack.Screen name="AddressScreen" component={AddressScreen} />
                        <Stack.Screen name="SignIn" component={SignInScreen} />
                        <Stack.Screen name="SignUp" component={SignUpScreen} />
                        <Stack.Screen name="Payment" component={PaymentScreen}/>
                        <Stack.Screen name="CampusSelect" component={CampusSideSelectionScreen}/>
                        <Stack.Screen name="RussellHouse" component={RussellHouseRestaurantScreen}/>
                        <Stack.Screen name="CFA" component={ChickfilAPage}/>
                        <Stack.Screen name="DriverSignUp" component={DriverSignUpScreen}/>
                        <Stack.Screen name="Payment 2" component={PaymentScreen}/>
                    
                       </Stack.Navigator>
            }</NavigationContainer> 
        );
    }
}
export default App;