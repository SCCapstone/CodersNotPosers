import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SignInScreen from './SignInScreen';

// mock the firebase module
jest.mock('@react-native-firebase/auth', () => {
  const auth = jest.fn();
  const signInWithEmailAndPassword = jest.fn();
  auth.signInWithEmailAndPassword = signInWithEmailAndPassword;
  return () => ({
    auth,
  });
});

describe('SignInScreen', () => {
  test('should call signInWithEmailAndPassword when Sign In button is pressed', async () => {
    const { getByTestId } = render(<SignInScreen />);
    const emailInput = getByTestId('emailInput');
    const passwordInput = getByTestId('passwordInput');
    const signInButton = getByTestId('signInButton');

    fireEvent.changeText(emailInput, 'testuser@example.com');
    fireEvent.changeText(passwordInput, 'testpassword');
    fireEvent.press(signInButton);

    expect(auth().signInWithEmailAndPassword).toHaveBeenCalledWith(
      'testuser@example.com',
      'testpassword',
    );
  });
});
