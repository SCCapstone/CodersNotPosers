import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from "../src/screens/OnboardingScreen";
import SignInScreen from "../src/screens/SignInScreen";
import DrawerNavigation from "./DrawerNavigation";
import SouthCampus from "../src/screens/SouthCampus";
import EastCampus from "../src/screens/EastCampus";
import WestCampus from "../src/screens/WestCampus";
import FoodTrucks from "../src/screens/FoodTrucks";
import { NavigationContainer } from "@react-navigation/native";
import RussellHouseRestaurantScreen from "../src/screens/RussellHouseRestaurantScreen";
import NorthCampus from "../src/screens/NorthCampus";
import SignUpScreen from "../src/screens/SignUpScreen";
import ChickfilA from "../src/screens/RussellHouse/ChickfilA";
import RatingScreenCFA from "../src/screens/RatingScreenCFA";
import DriverSignUpScreen from "../src/screens/DriverSignUpScreen";
import DriverSignInScreen from "../src/screens/DriverSignInScreen";
import FoodDetail from "../src/screens/FoodDetail";
import AddressScreen from "../src/screens/AddressScreen";
import Cart from "../src/screens/Cart";
import Profile from "../src/screens/Profile";
import paymentScreen from "../src/screens/paymentScreen";

const Auth = createNativeStackNavigator();

export default function AuthStack() {
    return(
        <NavigationContainer>
        <Auth.Navigator>
            <Auth.Screen
                name= "OnboardingScreen"
                component = {OnboardingScreen}
                options = {{headerShown: false}}
            />
             <Auth.Screen
                name= "SignInScreen"
                component = {SignInScreen}
                options = {{
                    headerShown: false
                }}
            />
             <Auth.Screen
                name= "SignUpScreen"
                component = {SignUpScreen}
                options = {{
                    headerShown: false
                }}
            />

            <Auth.Screen
                name= "DrawerNavigation"
                component = {DrawerNavigation}
                options = {{
                    headerShown: false
                }}
            />

            <Auth.Screen
                name= "RussellHouseRestaurantScreen"
                component = {RussellHouseRestaurantScreen}
                options = {{
                    headerShown: false
                }}
            />

            <Auth.Screen
                name= "NorthCampus"
                component = {NorthCampus}
                options = {{
                    headerShown: false
                }}
            />

            <Auth.Screen
                name= "EastCampus"
                component = {EastCampus}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "WestCampus"
                component = {WestCampus}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "SouthCampus"
                component = {SouthCampus}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "FoodTrucks"
                component = {FoodTrucks}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "ChickfilA"
                component = {ChickfilA}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "RatingScreenCFA"
                component = {RatingScreenCFA}
                options = {{
                    headerShown: false
                }}
            />
             <Auth.Screen
                name= "DriverSignInScreen"
                component = {DriverSignInScreen}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "DriverSignUpScreen"
                component = {DriverSignUpScreen}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "Profile"
                component = {Profile}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "FoodDetail"
                component = {FoodDetail}
                options = {{
                    headerShown: false
                }}
            />
             <Auth.Screen
                name= "Cart"
                component = {Cart}
                options = {{
                    headerShown: false
                }}
            /> 
            <Auth.Screen
                name= "paymentScreen"
                component = {paymentScreen}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "AddressScreen"
                component = {AddressScreen}
                options = {{
                    headerShown: false
                }}
            />
            

            
        </Auth.Navigator>
        </NavigationContainer>
    )
}