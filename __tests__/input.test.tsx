import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Input} from '../src/components/Input/Input.tsx';

describe('Input', () => {
  const input = {
    placeholder: "placeholder test",
    onChange: jest.fn()
  };

  beforeEach(() => {
    render(<Input value="" onChange={input.onChange} placeholder={input.placeholder}/>);
  });

  it('renders correctly', () => {
    expect(screen.getByPlaceholderText(input.placeholder)).toBeInTheDocument();
  });

  it('calls onChange when the input value changes', () => {
    const element = screen.getByPlaceholderText(input.placeholder);
    fireEvent.change(element, {target: {value: 'New text'}});
    expect(input.onChange).toHaveBeenCalledTimes(1);
  });
});