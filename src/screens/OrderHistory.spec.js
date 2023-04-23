import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import OrderHistory from './OrderHistory';

// Mock firebase.auth and firebase.firestore
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

describe('OrderHistory', () => {
    test('renders without error', async () => {
        const {nameText } = render(<OrderHistory />);
        const nameInput = nameText('Name');

      });

      test('displays order details', async () => {
        //await waitFor(() => expect(screen.getByText('Item: Test Item 1')).toBeTruthy());
        //expect(screen.getByText('Price: $10')).toBeTruthy();
        //expect(screen.getByText('2')).toBeTruthy();
      });
});
