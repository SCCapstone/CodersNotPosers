import React from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { View, Text } from 'react-native';

import Profile from '../src/screens/Profile';
import DriverSignInScreen from '../src/screens/DriverSignInScreen';
import DriverSignUpScreen from '../src/screens/DriverApplication';
import CampusSideSelectionScreen from '../src/screens/CampusSideSelectionScreen';
import Favorites from '../src/screens/Favorites';
import Order from '../src/screens/Order';
import SignOutScreen from '../src/screens/SignOutScreen';
import DriverApplication from '../src/screens/DriverApplication';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator 
      screenOptions={{
        header: () => null,
      }}
    >
      <Drawer.Screen
        name="CampusSideSelectionScreen"
        component={CampusSideSelectionScreen}
        options={{
          title: 'Home',
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
        }}
      />
      <Drawer.Screen
        name="Order"
        component={Order}
        options={{
          title: 'Orders',
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: 'Favorites',
        }}
      />
      <Drawer.Screen
        name="DriverApplication"
        component={DriverApplication}
        options={{
          title: 'Driver Application',
        }}
      />
      <Drawer.Screen
        name="DriverSignInScreen"
        component={DriverSignInScreen}
        options={{
          title: 'Driver SignIn',
        }}
      />
        <Drawer.Screen
        name = "Sign out"
        component = {SignOutScreen}
        options = {{
          title: 'Sign out',
        }}
        />
    </Drawer.Navigator>
  );
}
