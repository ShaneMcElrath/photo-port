import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

afterEach(cleanup);

test('renders learn react link', () => {
  render(<App />);
});
