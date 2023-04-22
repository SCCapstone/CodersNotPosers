import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
const MyCart = require('./MyCart');
const Receipt = require('./Receipt');
import firebase from '@react-native-firebase/app';

// Behavioral Tests
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

describe('Receipt', () => {
  afterEach(() => {
    jest.clearAllMocks();
    MyCart.clearCart();
  });

  it('renders the component', () => {
    const { getByTestId } = render(<Receipt />);
    expect(getByTestId('receipt-screen')).toBeDefined();
  });

  it('renders the correct cart items', () => {
    MyCart.addItem({ item: 'Item 1', price: 10 }, 2);
    MyCart.addItem({ item: 'Item 2', price: 15 }, 1);

    const { getByText } = render(<Receipt />);
    expect(getByText('Item 1')).toBeDefined();
    expect(getByText('Item 2')).toBeDefined();
  });

  it('does not render items with a quantity of 0', () => {
    MyCart.addItem({ item: 'Item 1', price: 10 }, 0);

    const { queryByText } = render(<Receipt />);
    expect(queryByText('Item 1')).toBeNull();
  });

  it('saves the receipt when the Homepage button is pressed', async () => {
    const mockUser = {
      uid: '123',
    };
    firebase.auth = jest.fn(() => ({
      currentUser: mockUser,
    }));
    firebase.firestore = jest.fn(() => ({
      collection: jest.fn(() => ({
        doc: jest.fn(() => ({
          set: jest.fn(),
        })),
      })),
    }));

    MyCart.addItem({ item: 'Item 1', price: 10 }, 1);
    MyCart.addItem({ item: 'Item 2', price: 15 }, 2);

    const { getByTestId } = render(<Receipt />);
    const homepageButton = getByTestId('homepage-button');
    fireEvent.press(homepageButton);

    expect(firebase.firestore().collection).toHaveBeenCalledWith('receipts');
    expect(firebase.firestore().collection().doc).toHaveBeenCalledWith('123');
    expect(firebase.firestore().collection().doc().set).toHaveBeenCalledWith({
      cartItems: [
        { item: 'Item 1', price: 10 },
        { item: 'Item 2', price: 15 },
        { item: 'Item 2', price: 15 },
      ],
      orderAt: expect.any(Date),
    });
  });
});
