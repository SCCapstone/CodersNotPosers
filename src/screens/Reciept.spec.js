import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import Reciept from './Reciept';

// Mock Firebase auth and firestore
jest.mock('@react-native-firebase/auth', () => ({
    currentUser: {
      uid: 'test-user-id',
    },
  }));
  
  jest.mock('@react-native-firebase/firestore', () => {
    const snapshot = {
      exists: true,
      data: () => ({
        id: 'test-document-id',
      }),
    };
    return () => ({
      collection: () => ({
        doc: () => ({
          collection: () => ({
            add: () => Promise.resolve(snapshot),
          }),
          set: () => Promise.resolve(),
        }),
      }),
    });
  }); 

describe('Reciept', () => {
  it('renders the component', async () => {
    const { getByText } = render(<Reciept />);
    await waitFor(() => {
      expect(getByText('Receipt')).toBeDefined();
    });
  });

  it('saves the receipt when the Homepage button is pressed', async () => {
    console.log = jest.fn();
    const { getByText } = render(<Reciept />);
    fireEvent.press(getByText('Homepage'));
    await waitFor(() => {
      expect(console.log).toHaveBeenCalledWith('Receipt saved successfully');
    });
  });
});
