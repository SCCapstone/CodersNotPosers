import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SignupScreen from './SignupScreen';

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

describe('SignupScreen', () => {
  it('should allow users to sign up', async () => {
    const { getByTestId } = render(<SignupScreen />);
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const confirmPasswordInput = getByTestId('confirm-password-input');
    const signupButton = getByTestId('signup-button');

    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'test123');
    fireEvent.changeText(confirmPasswordInput, 'test123');
    fireEvent.press(signupButton);

    // Add assertions to verify that the user was successfully signed up
    // and that their data was added to the Firestore database
  });
});
