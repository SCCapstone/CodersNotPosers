import *  as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import SignInScreen from './src/screens/SignInScreen';
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
                    <Stack.Screen name="SignIn"
                        component={SignInScreen} />
                </Stack.Navigator>
        }</NavigationContainer>
    );
};
export default App;