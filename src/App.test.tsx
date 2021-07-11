import { render, screen } from '@testing-library/react';
import Map from './components/map'

test('renders learn react link', () => {
  render(<Map />);
  const linkElement = screen.getByText(/Play/i);
  expect(linkElement).toBeInTheDocument();
});
