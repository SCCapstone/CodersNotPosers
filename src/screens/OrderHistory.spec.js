import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import OrderHistory from './OrderHistory';

jest.mock('react-native-gesture-handler', () => ({
  ScrollView: jest.fn().mockReturnValue(null),
}));
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
  test('displays a loading indicator while fetching order data', async () => {
    const { getByTestId } = render(<OrderHistory />);
    const loadingIndicator = getByTestId('loading-indicator');
   // expect(loadingIndicator).toBeDefined();
    //await waitFor(() => expect(getByTestId('loading-indicator')).not.toBeDefined());
  });
});
