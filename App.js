import *  as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import RestaurantScreen from './src/screens/RestaurantScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StripeProvider } from '@stripe/stripe-react-native';

const Stack = createNativeStackNavigator();
const App = () => {
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
                    <Stack.Screen name="Restauraunts" component={RestaurantScreen}/>
                    <Stack.Screen name="Payment" component={PaymentScreen}/>
                    <Stack.Screen name="SignIn" component={SignInScreen} />
                    <Stack.Screen name="SignUp" component={SignUpScreen} />
                </Stack.Navigator>
        }</NavigationContainer> 
    );
};
export default App;