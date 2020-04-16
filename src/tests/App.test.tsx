import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

test('renders Foody Recipe API', () => {
  const { getByText } = render(<App />);
  const appTitle = getByText(/Foody Recipe API/i);
  expect(appTitle).toBeInTheDocument();
});
