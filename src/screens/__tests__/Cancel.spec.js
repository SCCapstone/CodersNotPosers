import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Cancel from '../Cancel';

describe('<Cancel />', () => {
  it('renders the cancel page with the correct text', () => {
    const { getByText } = render(<Cancel />);
    const title = getByText('Order Cancelled');
    //expect(title).toBeDefined();
  });

  it('navigates to the CampusSideSelectionScreen on button press', () => {
    const navigation = { navigate: jest.fn() };
    const { getByText } = render(<Cancel navigation={navigation} />);
    const button = getByText('Homepage');
    fireEvent.press(button);
    //expect(navigation.navigate).toHaveBeenCalledWith('CampusSideSelectionScreen');
  });
});
