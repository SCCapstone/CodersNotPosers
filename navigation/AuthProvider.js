 import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [driver,setDriver] = useState(null);
    return (
        <AuthContext.Provider
        value = {{
            user,
            setUser,
            login: async (email,password) => {
                try{
                    await auth().signInWithEmailAndPassword(email, password);
                } catch(e) {
                    console.log(e);
                }
            },
            register: async(email,password) => {
                try{
                    await auth().createUserWithEmailAndPassword(email,password);
                } catch(e) {
                    console.log(e);
                } 
            },
            logout: async() => {
                try {
                    await auth().signOut();
                } catch(e) {
                    console.log(e);
                }
            },   
        }}
        drivers = {{
            driver,
            setDriver,
            loginDriver: async (emailDriver,passwordDriver) => {
                try {
                    await auth().signInWithEmailAndPasswordDriver(emailDriver,passwordDriver);
                } catch(e) {
                    console.log(e);
                }
            },
            registerDriver: async(emailDriver,passwordDriver) => {
                try {
                    await auth().createDriverWithEmailAndPassword(emailDriver,passwordDriver);
                } catch(e) {
                    console.log(e);
                }
            },
            logoutDriver: async() => {
                try {
                    await auth().signOut();
                } catch(e) {
                    console.log(e);
                }
            }
        }}>
        {children}
    </AuthContext.Provider>
    );
}; 

