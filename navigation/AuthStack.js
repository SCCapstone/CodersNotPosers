import *  as React from 'react';
import { useEffect } from 'react';
import OnboardingScreen from './../src/screens/OnboardingScreen'
import SignInScreen from './../src/screens/SignInScreen';
import SignUpScreen from './../src/screens/SignUpScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    const[isFirstLaunch, setIsFirstLaunch] = React.useState(null);
    let routeName; 

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then((value) => {
          if (value == null) {
            AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
            setIsFirstLaunch(true);
          } else {
            setIsFirstLaunch(false);
          }
        });
    }, []);

   if(isFirstLaunch == null ) {
    return null;
   } else if (isFirstLaunch == true) {
    routeName = 'Onboarding';
   } else {
    routeName = 'Login';
   }
    
   return (
        <Stack.Navigator initialRouteName ={routeName}
                    screenOptions={{
                        headerShown: false
                    }}
                >
                        <Stack.Screen name="OnBoarding" component={OnboardingScreen} />
                        <Stack.Screen name="SignIn" component={SignInScreen} />
                        <Stack.Screen name="SignUp" component={SignUpScreen} />
                        </Stack.Navigator>
            
        );
    };
    export default AuthStack;
