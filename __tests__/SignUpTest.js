import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import SignUpScreen, {register} from '../src/screens/SignUpScreen';
import CampusSideSelectionScreen from '../src/screens/CampusSideSelectionScreen';
import SignInScreen from '../src/screens/SignInScreen';

describe('signup screen', () =>{
    
    it('shows to enter email and password', () => {
        const {getByTestId, getByText} = render (<SignUpScreen />);
    
        fireEvent.press(signupButton);

    getByText("Please enter email");
    getByText("Please enter password");  
          
    });

    it ('directs to Home screen', () =>{
        const navigation = {navigate: () => {}}
        const signupBtn = page.getByTestId('signupBtn');
        fireEvent.press(signupBtn);
         
        expect(navigation.navigate).toHaveBeenCalledWith("CampusSelect");
    })
    
    it('should go back to login screen if needed', () =>{
        const naviagtion = {naviagte: () => {}}
        spyOn(naviagtion, 'naviagte');
        const page = render (<SignInScreen navigation={navigation} />)
        const arrowBtn = page.getByTestId('arrowBtn')
        fireEvent.press(arrowBtn)

        expect(navigation.naviagte).toHaveBeenCalledWith("SignIn");
    })
});

