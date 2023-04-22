import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ContactDriver from './ContactDriver';
import Cancel from './Cancel';
import Reciept from './Reciept';

describe('ContactDriver component', () => {
  test('renders correctly', () => {
    const { getByText } = render(<ContactDriver />);
    const driverEmail = getByText(/Driver email:/i);
    const driverCell = getByText(/Driver cell:/i);
    expect(driverEmail).toBeDefined();
    expect(driverCell).toBeDefined();
  });

  test('navigates to Cancel screen when cancel button is pressed', () => {
    const navigation = { navigate: jest.fn() };
    const { getByText } = render(<ContactDriver navigation={navigation} />);
    const cancelButton = getByText(/Cancel/i);
    fireEvent.press(cancelButton);
    expect(navigation.navigate).toHaveBeenCalledWith(Cancel);
  });

  test('navigates to Reciept screen when delivered button is pressed', () => {
    const navigation = { navigate: jest.fn() };
    const { getByText } = render(<ContactDriver navigation={navigation} />);
    const deliveredButton = getByText(/Food was delivered/i);
    fireEvent.press(deliveredButton);
    expect(navigation.navigate).toHaveBeenCalledWith(Reciept);
  });
});
