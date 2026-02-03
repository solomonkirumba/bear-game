import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Level10 from '../components/Level10';

describe('Level 10 - Finale', () => {
  const mockHealth = {
    hearts: 3,
    loseOneHeart: vi.fn(),
    loseAllHearts: vi.fn(),
  };

  it('shows the Victory message when the win condition is met', () => {
    render(<Level10 advance={vi.fn()} gameHealth={mockHealth} />);
    
    // Simulating the correct final choice
    const buttons = screen.getAllByRole('button');
    // Assuming the "win" result is linked to the first button for this test
    fireEvent.click(buttons[0]); 

    expect(screen.getByText(/YOU ESCAPED!/i)).toBeInTheDocument();
    expect(screen.getByText(/Play Again?/i)).toBeInTheDocument();
  });
});