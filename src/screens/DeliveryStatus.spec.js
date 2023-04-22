import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import DeliveryStatus from './DeliveryStatus';
import Cancel from './Cancel';
import Reciept from './Reciept';
import ContactDriver from './ContactDriver';

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
  

describe('DeliveryStatus component', () => {
  it('renders the DeliveryStatus component correctly', () => {
    const {getByText} = render(<DeliveryStatus />);
    expect(getByText('Your order should arrive in 30 minutes!')).toBeTruthy();
  });

  it('navigates to the ContactDriver component when the "Contact Driver" button is pressed', () => {
    const {getByText, getByTestId} = render(<DeliveryStatus />);
    fireEvent.press(getByTestId('contactButton'));
    expect(getByText('Contact Driver')).toBeTruthy();
  });

  it('navigates to the Reciept component when the "Food was delivered" button is pressed', () => {
    const {getByText, getByTestId} = render(<DeliveryStatus />);
    fireEvent.press(getByTestId('deliveredButton'));
    expect(getByText('Reciept')).toBeTruthy();
  });

  it('navigates to the Cancel component when the "Cancel" button is pressed', () => {
    const {getByText, getByTestId} = render(<DeliveryStatus />);
    fireEvent.press(getByTestId('cancelButton'));
    expect(getByText('Cancel Order')).toBeTruthy();
  });
});

