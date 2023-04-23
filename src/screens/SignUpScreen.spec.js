import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignUpScreen from './SignUpScreen';

// Mock the auth and firestore modules
jest.mock('@react-native-firebase/auth', () => ({
  auth: jest.fn(() => ({
    createUserWithEmailAndPassword: jest.fn(() => Promise.resolve({ user: { uid: '123' } })),
    signInWithEmailAndPassword: jest.fn(() => Promise.resolve({ user: { uid: '123' } })),
    signOut: jest.fn(() => Promise.resolve()),
    currentUser: jest.fn(() => ({ uid: '123' })),
  })),
}));

jest.mock('@react-native-firebase/firestore', () => ({
  firestore: jest.fn(() => ({
    collection: jest.fn(() => ({
      add: jest.fn(() => Promise.resolve()),
    })),
  })),
}));

describe('SignUpScreen', () => {
  it('should allow users to sign up', async () => {
    const { getByTestId } = render(<SignUpScreen />);
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const confirmPasswordInput = getByTestId('confirm-password-input');
    const signupButton = getByTestId('signup-button');

    // Behavioral test: Fill out the form and submit it
    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'test123');
    fireEvent.changeText(confirmPasswordInput, 'test123');
    fireEvent.press(signupButton);

    // Unit test: Verify that the auth module was called to register the user
    expect(auth().createUserWithEmailAndPassword).toHaveBeenCalledWith('test@example.com', 'test123');

    // Behavioral test: Verify that the user is navigated to the correct screen
    await waitFor(() => expect(navigation.navigate).toHaveBeenCalledWith(DrawerNavigation));

    // Unit test: Verify that the firestore module was called to add the user's data
    const uid = '123';
    expect(firestore().collection).toHaveBeenCalledWith('UserData');
    expect(firestore().collection().doc).toHaveBeenCalledWith(uid);
    expect(firestore().collection().doc().set).toHaveBeenCalledWith({
      email: 'test@example.com',
      name: '',
      phone: '',
      password: 'test123'
    });
  });
});
