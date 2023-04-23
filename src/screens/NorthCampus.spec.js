import React from 'react';
import { fireEvent, render, act } from '@testing-library/react-native';
import NorthCampus from './NorthCampus';

jest.mock('@react-native-firebase/app', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('NorthCampus', () => {
  it('renders a list of buttons with names and images', () => {
    const { getByText, getByA11yRole, getByTestId } = render(<NorthCampus />);
    const buttonData = require('./../../data/NorthCampus.json');

    buttonData.forEach((item) => {
      const button = getByA11yRole('button', { name: item.name });
      expect(button).toBeDefined();

      const image = getByTestId(`image-${item.id}`);
      expect(image).toBeDefined();
    });
  });

  it('navigates to the corresponding screen when a button is pressed', () => {
    const mockNavigate = jest.fn();
    const { getByText } = render(<NorthCampus navigation={{ navigate: mockNavigate }} />);
    const buttonData = require('./../../data/NorthCampus.json');

    buttonData.forEach((item) => {
      const button = getByText(item.name);
      fireEvent.press(button);

      switch (item.id) {
        case 1:
          expect(mockNavigate).toHaveBeenCalledWith('CounselorsCafe');
          break;
        case 2:
          expect(mockNavigate).toHaveBeenCalledWith('HamptonStCafe');
          break;
        default:
          expect(mockNavigate).not.toHaveBeenCalled();
      }
    });
  });

  it('navigates back when the back arrow is pressed', () => {
    const mockPop = jest.fn();
    const { getByA11yRole } = render(<NorthCampus navigation={{ pop: mockPop }} />);
    const backButton = getByA11yRole('button', { name: 'Back' });

    fireEvent.press(backButton);
    expect(mockPop).toHaveBeenCalled();
  });
});
