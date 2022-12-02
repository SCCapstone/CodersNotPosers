import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import PaymentScreen from './../src/screens/PaymentScreen';
import CampusSideSelectionScreen from './../src/screens/CampusSideSelectionScreen';
import RussellHouseRestaurantScreen from './../src/screens/RussellHouseRestaurantScreen';
import ChickfilAPage from './../src/screens/ChickfilAPage';
import DriverSignUpScreen from './../src/screens/DriverSignUpScreen';
import { StripeProvider } from '@stripe/stripe-react-native';

const Stack = createStackNavigator();

const AppStack = () => {
    return(
        <Stack.Navgitor>
            <Stack.Screen name='Home' component={CampusSideSelectionScreen} />
            <Stack.Screen name="RussellHouse" component={RussellHouseRestaurantScreen}/>
            <Stack.Screen name="CFA" component={ChickfilAPage}/>
            <Stack.Screen name="DriverSignUp" component={DriverSignUpScreen}/>
            <Stack.Screen name="Payment" component={PaymentScreen}/>
                        
        </Stack.Navgitor>
    );
}

export default AppStack;