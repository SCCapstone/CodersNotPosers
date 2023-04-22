import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SignInScreen from './SignInScreen';

// Mock the firebase module
jest.mock('@react-native-firebase/app', () => {
  const currentUser = {
    uid: 'test-user-uid',
  };
  const data = {
    name: 'Test User',
  };
  const doc = {
    exists: true,
    data: () => data,
  };
  const firestore = {
    collection: jest.fn().mockReturnThis(),
    doc: jest.fn().mockReturnThis(),
    get: jest.fn().mockResolvedValue(doc),
  };
  const auth = {
    currentUser,
  };
  return {
    auth: () => auth,
    firestore: () => firestore,
  };
});

describe('SignInScreen', () => {
  it('should call signInWithEmailAndPassword when the Sign In button is pressed', async () => {
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
