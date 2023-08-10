import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Sign Up button', () => {
  render(<App />);
  const signUpButton = screen.getByText(/Sign Up/i);
  expect(signUpButton).toBeInTheDocument();
});
