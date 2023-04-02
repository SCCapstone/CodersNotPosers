import React from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer';

import Profile from '../src/screens/Profile';
import DriverSignInScreen from '../src/screens/DriverSignInScreen';
import CampusSideSelectionScreen from '../src/screens/CampusSideSelectionScreen';
import Favorites from '../src/screens/Favorites';
//import Order from '../src/screens/Order';
import SignOutScreen from '../src/screens/SignOutScreen';
import DriverApplication from '../src/screens/DriverApplication';
import SearchScreen from '../src/screens/SearchScreen';

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
        <Drawer.Screen
        name = "Search Screen"
        component = {SearchScreen}
        options = {{
          title: 'Search Screen',
        }}
        />
    </Drawer.Navigator>
  );
}
