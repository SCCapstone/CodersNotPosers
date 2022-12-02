import *  as React from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from './src/screens/OnboardingScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import PaymentScreen from './src/screens/paymentScreen';
import RestaurantScreen from './src/screens/RestaurantScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StripeProvider } from '@stripe/stripe-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
                        <Stack.Screen name="Restauraunts" component={RestaurantScreen}/>
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
                         <Stack.Screen name="SignIn" component={SignInScreen} />
                        <Stack.Screen name="SignUp" component={SignUpScreen} />
                        <Stack.Screen name="Restauraunts" component={RestaurantScreen}/>
                        <Stack.Screen name="Payment" component={PaymentScreen}/>
                       </Stack.Navigator>
            }</NavigationContainer> 
        );
    }
}
export default App;