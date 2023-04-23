import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthNavigators";
//basic function to simply hold the root navigation for authenticating our users
export default function RootNavigator() {
    return(
        <NavigationContainer>
            <AuthStack/>
        </NavigationContainer>
    )
}