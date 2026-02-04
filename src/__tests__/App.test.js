/**
 * App.test.js
 * Tests for the main App component
 */

import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  test('renders the app without crashing', () => {
    render(<App />);
    expect(screen.getByText(/Hearts:/i)).toBeInTheDocument();
  });

  test('displays 3 hearts at the start', () => {
    render(<App />);
    const heartsDisplay = screen.getByText(/Hearts: 3/i);
    expect(heartsDisplay).toBeInTheDocument();
  });

  test('starts at Welcome screen by default', () => {
    render(<App />);
    expect(screen.getByText(/BEAR GAME/i)).toBeInTheDocument();
    expect(screen.getByText(/startgame/i)).toBeInTheDocument();
  });

  test('navigates to Level 1 when start button is clicked', () => {
    render(<App />);
    const startButton = screen.getByText(/startgame/i);
    fireEvent.click(startButton);
    
    // Should now be on Level 1
    expect(screen.getByText(/A real bear opens the door/i)).toBeInTheDocument();
  });

  test('displays Game Over message when hearts reach 0', () => {
    render(<App />);
    const startButton = screen.getByText(/startgame/i);
    fireEvent.click(startButton);
    
    // Click a wrong answer that loses all hearts
    const wrongButton = screen.getByText(/leave and run quickly/i);
    fireEvent.click(wrongButton);
    
    // Should show game over
    expect(screen.getByText(/GAME OVER - NO HEARTS LEFT!/i)).toBeInTheDocument();
  });

  test('restart button resets the game', () => {
    render(<App />);
    const startButton = screen.getByText(/startgame/i);
    fireEvent.click(startButton);
    
    // Lose all hearts
    const wrongButton = screen.getByText(/leave and run quickly/i);
    fireEvent.click(wrongButton);
    
    // Click restart
    const restartButton = screen.getByText(/Restart Game/i);
    fireEvent.click(restartButton);
    
    // Should be back at welcome screen
    expect(screen.getByText(/BEAR GAME/i)).toBeInTheDocument();
  });

  test('hearts display is hidden on welcome screen', () => {
    render(<App />);
    const heartsDisplay = screen.queryByText(/❤️ Hearts:/);
    // Hearts should be visible initially
    expect(heartsDisplay).toBeInTheDocument();
  });

  test('displays victory screen after completing Level 2', () => {
    render(<App />);
    const startButton = screen.getByText(/startgame/i);
    fireEvent.click(startButton);
    
    // Complete Level 1 correctly
    const correctLevel1 = screen.getByText(/politley obey/i);
    fireEvent.click(correctLevel1);
    
    const proceedButton = screen.getByText(/Proceed to Level 2/i);
    fireEvent.click(proceedButton);
    
    // Complete Level 2 correctly
    const correctLevel2 = screen.getByText(/politely refuse you had eaten before/i);
    fireEvent.click(correctLevel2);
    
    const proceedLevel3 = screen.getByText(/Proceed to Level 3/i);
    fireEvent.click(proceedLevel3);
    
    // Should show win screen
    expect(screen.getByText(/🎉 You Win!/i)).toBeInTheDocument();
  });

  test('game flow progresses through levels correctly', () => {
    render(<App />);
    
    // Start game
    fireEvent.click(screen.getByText(/startgame/i));
    expect(screen.getByText(/A real bear opens the door/i)).toBeInTheDocument();
    
    // Level 1 to Level 2
    fireEvent.click(screen.getByText(/politley obey/i));
    fireEvent.click(screen.getByText(/Proceed to Level 2/i));
    expect(screen.getByText(/The bear seems friendly and offers you some soup/i)).toBeInTheDocument();
  });
});
