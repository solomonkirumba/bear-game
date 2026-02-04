/**
 * Welcome.test.js
 * Tests for the Welcome component
 */

import { render, screen, fireEvent } from '@testing-library/react';
import Welcome from '../components/Welcome';

describe('Welcome Component', () => {
  const mockAdvance = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders welcome screen', () => {
    render(<Welcome advance={mockAdvance} />);
    expect(screen.getByText(/BEAR GAME/i)).toBeInTheDocument();
  });

  test('renders start game button', () => {
    render(<Welcome advance={mockAdvance} />);
    const startButton = screen.getByText(/startgame/i);
    expect(startButton).toBeInTheDocument();
  });

  test('start button calls advance function when clicked', () => {
    render(<Welcome advance={mockAdvance} />);
    const startButton = screen.getByText(/startgame/i);
    fireEvent.click(startButton);
    
    expect(mockAdvance).toHaveBeenCalledTimes(1);
  });

  test('button is clickable', () => {
    render(<Welcome advance={mockAdvance} />);
    const startButton = screen.getByText(/startgame/i);
    
    expect(startButton).toBeEnabled();
    fireEvent.click(startButton);
    expect(mockAdvance).toHaveBeenCalled();
  });

  test('renders as a valid React component', () => {
    const { container } = render(<Welcome advance={mockAdvance} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  test('advance prop is required and works', () => {
    render(<Welcome advance={mockAdvance} />);
    const startButton = screen.getByText(/startgame/i);
    
    // Click multiple times to verify function is called each time
    fireEvent.click(startButton);
    fireEvent.click(startButton);
    fireEvent.click(startButton);
    
    expect(mockAdvance).toHaveBeenCalledTimes(3);
  });

  test('component structure is a div with paragraph and button', () => {
    const { container } = render(<Welcome advance={mockAdvance} />);
    const div = container.querySelector('div');
    const paragraph = container.querySelector('p');
    const button = container.querySelector('button');
    
    expect(div).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('welcome text is displayed correctly', () => {
    render(<Welcome advance={mockAdvance} />);
    const welcomeText = screen.getByText('BEAR GAME');
    expect(welcomeText.tagName).toBe('P');
  });

  test('start button has correct text', () => {
    render(<Welcome advance={mockAdvance} />);
    const startButton = screen.getByRole('button');
    expect(startButton).toHaveTextContent('startgame');
  });
});
