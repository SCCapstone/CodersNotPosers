import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import auth from '@react-native-firebase/auth';
import SignOutScreen from './SignOutScreen';
import SignInScreen from './SignInScreen';

// Mock the auth() function to prevent calling the Firebase auth API during tests
jest.mock('@react-native-firebase/auth');

describe('SignOutScreen component', () => {
  test('renders SignOutScreen component without crashing', () => {
    render(<SignOutScreen />);
  });

  test('calls signOut function when button is pressed', () => {
    // Create a mock navigation object with a navigate method
    const navigate = jest.fn();
    const navigation = { navigate };

    // Render the SignOutScreen component with the mock navigation object
    const { getByText } = render(<SignOutScreen navigation={navigation} />);

    // Simulate a button press by calling fireEvent.press on the button element
    fireEvent.press(getByText('Yes'));

    // Expect the signOut function to be called
    expect(auth().signOut).toHaveBeenCalled();

    // Expect the navigation object to navigate to the SignInScreen component
    expect(navigate).toHaveBeenCalledWith(SignInScreen);
  });
});
