import *  as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import paymentScreen from './src/screens/paymentScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
    return (
        <NavigationContainer>{
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                    <Stack.Screen name="Payment" component={paymentScreen}/>
                    <Stack.Screen name="SignIn" component={SignInScreen} />
                    <Stack.Screen name="SignUp" component={SignUpScreen} />
                </Stack.Navigator>
        }</NavigationContainer>
    );
};
export default App;