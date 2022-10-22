import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import SignInDoneScreen from '../screens/SignInDoneScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Sign In" component={SignInScreen} />
      <Stack.Screen name="Sign In Done" component={SignInDoneScreen}/>
    </Stack.Navigator>
  );
};

export default AppNavigation;