/**
 * Level2.test.js
 * Tests for the Level2 component
 */

import { render, screen, fireEvent } from '@testing-library/react';
import Level2 from '../components/Level2';

describe('Level2 Component', () => {
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

  test('renders Level 2 question', () => {
    render(<Level2 advance={mockAdvance} gameHealth={mockGameHealth} />);
    expect(screen.getByText(/The bear seems friendly and offers you some soup/i)).toBeInTheDocument();
  });

  test('renders all four answer options', () => {
    render(<Level2 advance={mockAdvance} gameHealth={mockGameHealth} />);
    expect(screen.getByText(/accept his smelly soup and eat/i)).toBeInTheDocument();
    expect(screen.getByText(/politely refuse you had eaten before/i)).toBeInTheDocument();
    expect(screen.getByText(/strongly decline, you're allergic!/i)).toBeInTheDocument();
    expect(screen.getByText(/try and make a run for it/i)).toBeInTheDocument();
  });

  test('accepting rotten soup loses all hearts', () => {
    render(<Level2 advance={mockAdvance} gameHealth={mockGameHealth} />);
    const wrongButton = screen.getByText(/accept his smelly soup and eat/i);
    fireEvent.click(wrongButton);
    
    expect(mockGameHealth.loseAllHearts).toHaveBeenCalledTimes(1);
    expect(screen.getByText(/The soup was rotten. Game over!/i)).toBeInTheDocument();
  });

  test('politely refusing is correct answer', () => {
    render(<Level2 advance={mockAdvance} gameHealth={mockGameHealth} />);
    const correctButton = screen.getByText(/politely refuse you had eaten before/i);
    fireEvent.click(correctButton);
    
    expect(mockGameHealth.loseOneHeart).not.toHaveBeenCalled();
    expect(mockGameHealth.loseAllHearts).not.toHaveBeenCalled();
    expect(screen.getByText(/He respected your decision. You survived!/i)).toBeInTheDocument();
  });

  test('strongly declining is also a correct answer', () => {
    render(<Level2 advance={mockAdvance} gameHealth={mockGameHealth} />);
    const correctButton = screen.getByText(/strongly decline, you're allergic!/i);
    fireEvent.click(correctButton);
    
    expect(mockGameHealth.loseOneHeart).not.toHaveBeenCalled();
    expect(mockGameHealth.loseAllHearts).not.toHaveBeenCalled();
    expect(screen.getByText(/He respected your decision. You survived!/i)).toBeInTheDocument();
  });

  test('trying to run is a close call and loses one heart', () => {
    render(<Level2 advance={mockAdvance} gameHealth={mockGameHealth} />);
    const closeCallButton = screen.getByText(/try and make a run for it/i);
    fireEvent.click(closeCallButton);
    
    expect(mockGameHealth.loseOneHeart).toHaveBeenCalledTimes(1);
  });

  test('proceed button appears after correct answer', () => {
    render(<Level2 advance={mockAdvance} gameHealth={mockGameHealth} />);
    const correctButton = screen.getByText(/politely refuse you had eaten before/i);
    fireEvent.click(correctButton);
    
    const proceedButton = screen.getByText(/Proceed to Level 3/i);
    expect(proceedButton).toBeInTheDocument();
  });

  test('proceed button calls advance function', () => {
    render(<Level2 advance={mockAdvance} gameHealth={mockGameHealth} />);
    const correctButton = screen.getByText(/politely refuse you had eaten before/i);
    fireEvent.click(correctButton);
    
    const proceedButton = screen.getByText(/Proceed to Level 3/i);
    fireEvent.click(proceedButton);
    
    expect(mockAdvance).toHaveBeenCalledTimes(1);
  });

  test('close call shows proceed button', () => {
    render(<Level2 advance={mockAdvance} gameHealth={mockGameHealth} />);
    const closeCallButton = screen.getByText(/try and make a run for it/i);
    fireEvent.click(closeCallButton);
    
    expect(screen.getByText(/Proceed to Level 3/i)).toBeInTheDocument();
  });

  test('Result component does not render before selection', () => {
    render(<Level2 advance={mockAdvance} gameHealth={mockGameHealth} />);
    expect(screen.queryByText(/Proceed to Level 3/i)).not.toBeInTheDocument();
  });

  test('wrong answer does not show proceed button', () => {
    render(<Level2 advance={mockAdvance} gameHealth={mockGameHealth} />);
    const wrongButton = screen.getByText(/accept his smelly soup and eat/i);
    fireEvent.click(wrongButton);
    
    expect(screen.queryByText(/Proceed to Level 3/i)).not.toBeInTheDocument();
  });

  test('both correct answers show the same success message', () => {
    const { rerender } = render(<Level2 advance={mockAdvance} gameHealth={mockGameHealth} />);
    
    // Test first correct answer
    fireEvent.click(screen.getByText(/politely refuse you had eaten before/i));
    expect(screen.getByText(/He respected your decision. You survived!/i)).toBeInTheDocument();
    
    // Reset and test second correct answer
    rerender(<Level2 advance={mockAdvance} gameHealth={mockGameHealth} />);
    fireEvent.click(screen.getByText(/strongly decline, you're allergic!/i));
    expect(screen.getByText(/He respected your decision. You survived!/i)).toBeInTheDocument();
  });

  test('close call outcome displays correctly', () => {
    render(<Level2 advance={mockAdvance} gameHealth={mockGameHealth} />);
    const closeCallButton = screen.getByText(/try and make a run for it/i);
    fireEvent.click(closeCallButton);
    
    // The outcome text from gamedata.js for close call
    expect(screen.getByText(/Got your face ripped off! Game over!/i)).toBeInTheDocument();
  });
});
