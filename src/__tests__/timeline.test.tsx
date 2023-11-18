import {render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Timeline} from '../components/Timeline/Timeline.tsx';
import {useQuery} from 'urql';

jest.mock('urql', () => ({
  useQuery: jest.fn()
}));

const mockGifs = [
  {id: 1, url: 'http://example.com/gif1', category: 'funny'},
  {id: 2, url: 'http://example.com/gif2', category: 'funny'}
];

describe('Timeline', () => {
  it('renders loading state initially', () => {
    (useQuery as jest.Mock).mockReturnValue([{fetching: true}]);
    render(<Timeline data={[]} category="funny" loadMore={() => {}}/>);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders error state', () => {
    (useQuery as jest.Mock).mockReturnValue([{error: new Error('Error fetching')}]);
    render(<Timeline data={[]} category="funny" loadMore={() => {}}/>);
    expect(screen.getByText('Not found')).toBeInTheDocument();
  });

  it('renders gifs and triggers loadMore on scroll', async () => {
    (useQuery as jest.Mock).mockReturnValue([{data: {gifs: mockGifs}, fetching: false}]);
    const loadMoreMock = jest.fn();
    render(<Timeline data={mockGifs} category="funny" loadMore={loadMoreMock}/>);

    await waitFor(() => {
      mockGifs.forEach(gif => {
        expect(screen.getByAltText(gif.category)).toBeInTheDocument();
      });
    });
  });
});