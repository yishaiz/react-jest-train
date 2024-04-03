import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Input from './Input';

test('renders input', () => {
  render(<Input />);

  const element = screen.getByRole('textbox');
  expect(element).toBeInTheDocument();
});

test('renders another input', () => {
  render(<Input />);

  const element = screen.getByRole('textbox');
  expect(element).toBeInTheDocument();
});
