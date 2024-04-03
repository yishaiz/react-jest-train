import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Input from './Input';

describe('input test', () => {
  beforeEach(() => {
    render(<Input />);
  });

  test('renders input', () => {
    const element = screen.getByRole('textbox');
    expect(element).toBeInTheDocument();
  });

  test('renders another input', () => {
    const element = screen.getByRole('textbox');
    expect(element).toBeInTheDocument();
  });

  test('update input value', () => {
    // const input = screen.getByRole('textbox');
    const input = screen.getByTestId('test-input');

    user.click(input);
    user.keyboard('yishai');
    expect(input.value).toEqual('yishai');
  });
});
