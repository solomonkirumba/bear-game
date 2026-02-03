import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Level1 from '../components/Level1';
import Level2 from '../components/Level2';
// ... import other levels as needed

const levels = [
  { Component: Level1, name: 'Level 1' },
  { Component: Level2, name: 'Level 2' },
  // Add others here
];

describe('Game Levels Logic', () => {
  const mockHealth = {
    hearts: 3,
    loseOneHeart: vi.fn(),
    loseAllHearts: vi.fn(),
    resetGame: vi.fn(),
  };

  levels.forEach(({ Component, name }) => {
    it(`${name} calls loseOneHeart on a "close-call" answer`, () => {
      const advance = vi.fn();
      render(<Component advance={advance} gameHealth={mockHealth} />);
      
      // Find buttons - in your JSX they likely have specific IDs or text
      // We search for the buttons that trigger the 'close-call' result
      const buttons = screen.getAllByRole('button');
      
      // This is a generic way to find the button; 
      // in a real test, you'd target the specific choice text from gamedata
      fireEvent.click(buttons[1]); 
      
      // Verify health logic was triggered
      expect(mockHealth.loseOneHeart).toHaveBeenCalled();
    });

    it(`${name} displays the result container after answering`, () => {
      render(<Component advance={vi.fn()} gameHealth={mockHealth} />);
      const button = screen.getAllByRole('button')[0];
      fireEvent.click(button);
      
      const result = screen.getByRole('heading', { level: 3 });
      expect(result).toBeInTheDocument();
    });
  });
});