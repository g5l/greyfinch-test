import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Home} from '../src/pages/Home/Home.tsx';
import {PropsFilterGroup} from "../src/components/FilterGroup/FilterGroup.tsx";
import {PropsInput} from "../src/components/Input/Input.tsx";
import {PropsTimeline} from "../src/components/Timeline/Timeline.tsx";

// Mock child components
jest.mock('@/components/FilterGroup', () => ({values, onClick}: PropsFilterGroup) => (
  <div>
    {values.map((value, index) => (
      <button key={index} onClick={onClick} value={value}>{value}</button>
    ))}
  </div>
));
jest.mock('@/components/Input', () => ({value, onChange, placeholder}: PropsInput) => (
  <input value={value} onChange={onChange} placeholder={placeholder}/>
));
jest.mock('@/components/Timeline', () => ({category}: PropsTimeline) => (
  <div data-testid="mock-timeline">{category}</div>
));

describe('Home', () => {
  it('renders correctly', () => {
    render(<Home/>);
    expect(screen.getByText('Animal Gif Explorer')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search a category')).toBeInTheDocument();
  });

  it('updates filter on button click', () => {
    render(<Home/>);
    fireEvent.click(screen.getByText('cat'));
    expect(screen.getByTestId('mock-timeline').textContent).toBe('cat');
  });

  it('updates search and filter on input change', () => {
    render(<Home/>);
    fireEvent.change(screen.getByPlaceholderText('Search a category'), {target: {value: 'panda'}});
    expect(screen.getByTestId('mock-timeline').textContent).toBe('panda');
  });
});
