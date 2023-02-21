import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Profile from './../src/screens/Profile';
import DriverSignInScreen from './../src/screens/DriverSignInScreen'
import DriverSignUpScreen from './../src/screens/DriverSignUpScreen';
//import CampusSideSelectionScreen from './../src/screens/CampusSideSelectionScreen';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
      {/* <Drawer.Screen name="Home" component={CampusSideSelectionScreen} /> */}
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Driver Application" component={DriverSignUpScreen} />
            <Drawer.Screen name="Driver SignIn" component={DriverSignInScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
