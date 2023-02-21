import React from "react";

import { createNativeStackNavigator,TransitionPresets } from "@react-navigation/native-stack"; 
import OnboardingScreen from "../src/screens/OnboardingScreen";
import SignInScreen from "../src/screens/SignInScreen";

const Auth = createNativeStackNavigator();

export default function AuthStack() {
    return(
        <Auth.Navigator>
            <Auth.Screen
                name= "OnboradingScreen"
                component = {OnboardingScreen}
                options = {{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

             <Auth.Screen
                name= "SignInScreen"
                component = {SignInScreen}
                options = {{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

        </Auth.Navigator>
    )
}