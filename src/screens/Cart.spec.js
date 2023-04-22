import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import Cart from './Cart';

test('renders checkout button', () => {
  const { getByText } = render(<Cart />);
  const checkoutButton = getByText(/checkout/i);
  expect(checkoutButton).toBeTruthy();
});

test('pressing checkout button with empty cart shows alert', () => {
  const { getByText } = render(<Cart />);
  const checkoutButton = getByText(/checkout/i);
  act(() => {
    fireEvent.press(checkoutButton);
  });
  const alert = getByText(/your cart is empty/i);
  expect(alert).toBeTruthy();
});
