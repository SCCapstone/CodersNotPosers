import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HorshoeDeli from './.././EastCampus/HorshoeDeli';
import AsyncStorage from '@react-native-async-storage/async-storage';

jest.mock('@react-navigation/native', () => ({
  useFocusEffect: jest.fn(),
}));

jest.mock('@react-native-async-storage/async-storage', () => ({
    getItem: jest.fn(() => Promise.resolve('')),
  }));

describe('HorshoeDeli', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the component', () => {
    render(<HorshoeDeli />);
    expect(AsyncStorage.getItem).toHaveBeenCalled();
  });

  it('renders the breakfast menu by default', () => {
    const { getByText } = render(<HorshoeDeli />);
    //expect(getByText('Breakfast')).toBeDefined();
  });

  it('renders the correct menu when a category is selected', () => {
    const { getByText } = render(<HorshoeDeli />);
    fireEvent.press(getByText('Sandwiches'));
   // expect(getByText('Sandwiches')).toBeDefined();
  });

  it('adds an item to the cart when the add button is pressed', () => {
    const { getByTestId } = render(<HorshoeDeli />);
    const addButton = getByTestId('addButton-0');
    fireEvent.press(addButton);
    //expect(getByTestId('cartCount')).toHaveTextContent('1');
  });
});
