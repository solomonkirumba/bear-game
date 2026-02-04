/**
 * Level1.test.js
 * Tests for the Level1 component
 */

import { render, screen, fireEvent } from '@testing-library/react';
import Level1 from '../components/Level1';

describe('Level1 Component', () => {
  const mockAdvance = jest.fn();
  const mockGameHealth = {
    hearts: 3,
    loseOneHeart: jest.fn(),
    loseAllHearts: jest.fn(),
    resetGame: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders Level 1 question', () => {
    render(<Level1 advance={mockAdvance} gameHealth={mockGameHealth} />);
    expect(screen.getByText(/A real bear opens the door/i)).toBeInTheDocument();
  });

  test('renders all four answer options', () => {
    render(<Level1 advance={mockAdvance} gameHealth={mockGameHealth} />);
    expect(screen.getByText(/leave and run quickly/i)).toBeInTheDocument();
    expect(screen.getByText(/politley obey/i)).toBeInTheDocument();
    expect(screen.getByText(/attack the bear/i)).toBeInTheDocument();
    expect(screen.getByText(/try and resist/i)).toBeInTheDocument();
  });

  test('correct answer shows success outcome', () => {
    render(<Level1 advance={mockAdvance} gameHealth={mockGameHealth} />);
    const correctButton = screen.getByText(/politley obey/i);
    fireEvent.click(correctButton);
    
    expect(screen.getByText(/You chose to listen to him. You survived!/i)).toBeInTheDocument();
    expect(mockGameHealth.loseOneHeart).not.toHaveBeenCalled();
    expect(mockGameHealth.loseAllHearts).not.toHaveBeenCalled();
  });

  test('wrong answer loses all hearts', () => {
    render(<Level1 advance={mockAdvance} gameHealth={mockGameHealth} />);
    const wrongButton = screen.getByText(/leave and run quickly/i);
    fireEvent.click(wrongButton);
    
    expect(mockGameHealth.loseAllHearts).toHaveBeenCalledTimes(1);
  });

  test('close call answer loses one heart', () => {
    render(<Level1 advance={mockAdvance} gameHealth={mockGameHealth} />);
    const closeCallButton = screen.getByText(/try and resist/i);
    fireEvent.click(closeCallButton);
    
    expect(mockGameHealth.loseOneHeart).toHaveBeenCalledTimes(1);
  });

  test('proceed button appears after correct answer', () => {
    render(<Level1 advance={mockAdvance} gameHealth={mockGameHealth} />);
    const correctButton = screen.getByText(/politley obey/i);
    fireEvent.click(correctButton);
    
    const proceedButton = screen.getByText(/Proceed to Level 2/i);
    expect(proceedButton).toBeInTheDocument();
  });

  test('proceed button calls advance function', () => {
    render(<Level1 advance={mockAdvance} gameHealth={mockGameHealth} />);
    const correctButton = screen.getByText(/politley obey/i);
    fireEvent.click(correctButton);
    
    const proceedButton = screen.getByText(/Proceed to Level 2/i);
    fireEvent.click(proceedButton);
    
    expect(mockAdvance).toHaveBeenCalledTimes(1);
  });

  test('attack bear option loses all hearts', () => {
    render(<Level1 advance={mockAdvance} gameHealth={mockGameHealth} />);
    const attackButton = screen.getByText(/attack the bear/i);
    fireEvent.click(attackButton);
    
    expect(mockGameHealth.loseAllHearts).toHaveBeenCalledTimes(1);
    expect(screen.getByText(/He got really angry and tore you apart/i)).toBeInTheDocument();
  });

  test('close call shows warning and allows proceeding', () => {
    render(<Level1 advance={mockAdvance} gameHealth={mockGameHealth} />);
    const closeCallButton = screen.getByText(/try and resist/i);
    fireEvent.click(closeCallButton);
    
    expect(screen.getByText(/⚠️ Lost 1 heart!/i)).toBeInTheDocument();
    expect(screen.getByText(/Proceed to Level 2/i)).toBeInTheDocument();
  });

  test('Result component does not render before selection', () => {
    render(<Level1 advance={mockAdvance} gameHealth={mockGameHealth} />);
    expect(screen.queryByText(/Proceed to Level 2/i)).not.toBeInTheDocument();
  });

  test('multiple wrong answers all call loseAllHearts', () => {
    const { rerender } = render(<Level1 advance={mockAdvance} gameHealth={mockGameHealth} />);
    
    // Click first wrong answer
    fireEvent.click(screen.getByText(/leave and run quickly/i));
    expect(mockGameHealth.loseAllHearts).toHaveBeenCalledTimes(1);
    
    // Reset and test another wrong answer
    jest.clearAllMocks();
    rerender(<Level1 advance={mockAdvance} gameHealth={mockGameHealth} />);
    fireEvent.click(screen.getByText(/attack the bear/i));
    expect(mockGameHealth.loseAllHearts).toHaveBeenCalledTimes(1);
  });
});
