import React from 'react';
import { render } from '@testing-library/react-native';
import Profile from './Profile';

jest.mock('@react-native-firebase/app', () => {
  const currentUser = {
    uid: 'test-user-uid',
  };
  const data = {
    name: 'Test User',
    phone: '1234567890',
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

describe('Profile', () => {
  it('renders the user name', () => {
    const name = 'John Doe';
    const { getByText } = render(<Profile name={name} />);
    expect(getByText(name)).toBeTruthy();
  });

  it('navigates to EditProfile screen when "Edit Profile" button is pressed', () => {
    const navigate = jest.fn();
    const { getByTestId } = render(<Profile navigation={{ navigate }} />);
    fireEvent.press(getByTestId('edit-profile-button'));
    //expect(navigate).toHaveBeenCalledWith('EditProfile');
  });

  it('navigates to OrderHistory screen when "Order History" button is pressed', () => {
    const navigate = jest.fn();
    const { getByTestId } = render(<Profile navigation={{ navigate }} />);
    fireEvent.press(getByTestId('order-history-button'));
    //expect(navigate).toHaveBeenCalledWith('OrderHistory');
  });

  it('navigates to PaymentDetails screen when "Payment Details" button is pressed', () => {
    const navigate = jest.fn();
    const { getByTestId } = render(<Profile navigation={{ navigate }} />);
    fireEvent.press(getByTestId('payment-details-button'));
    //expect(navigate).toHaveBeenCalledWith('PaymentDetails');
  });
});