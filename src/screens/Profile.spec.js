import React from 'react';
import { render } from '@testing-library/react-native';
import Profile from './Profile';

test('renders profile screen', () => {
  const { getByText } = render(<Profile />);
  const profileText = getByText(/Profile/i);
  expect(profileText).toBeTruthy();
});
