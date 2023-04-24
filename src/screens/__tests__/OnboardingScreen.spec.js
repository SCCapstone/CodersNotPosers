import React from 'react';
import { render } from '@testing-library/react-native';
import OnboardingScreen, { Skip, Next, Done, Dots } from '../OnboardingScreen';
jest.mock('react-native-onboarding-swiper');
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
    replace: jest.fn(),
  }),
}));

describe('OnboardingScreen', () => {
  it('renders the onboarding screen without crashing', () => {
    render(<OnboardingScreen />);
  });
});

describe('Dots', () => {
  it('renders the dots without crashing', () => {
    render(<Dots selected={true} />);
  });
});

describe('Skip', () => {
  it('renders the skip button without crashing', () => {
    render(<Skip />);
  });
});

describe('Next', () => {
  it('renders the next button without crashing', () => {
    render(<Next />);
  });
});

describe('Done', () => {
  it('renders the done button without crashing', () => {
    render(<Done />);
  });
});
