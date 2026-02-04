import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from '../App';

// Mock sub-components to focus on App logic
vi.mock('../components/MusicPlayer', () => ({
  default: () => <div data-testid="music-player">Music Player</div>
}));

vi.mock('../components/Welcome', () => ({
  default: ({ advance }) => (
    <button onClick={advance}>Start Game</button>
  )
}));

describe('App Component Integration', () => {
  it('renders the initial layout with Hearts and MusicPlayer', () => {
    render(<App />);
    
    // Check for the Hearts display (matches your <strong> tag)
    expect(screen.getByText(/Hearts: 3/i)).toBeInTheDocument();
    
    // Check for the MusicPlayer
    expect(screen.getByTestId('music-player')).toBeInTheDocument();
  });

  it('shows the Welcome screen by default', () => {
    render(<App />);
    expect(screen.getByText(/Start Game/i)).toBeInTheDocument();
  });

  it('hides the large heart container on the start screen', () => {
    render(<App />);
    // Your App.jsx only shows .heart-container if screen !== "start"
    const heartContainer = document.querySelector('.heart-container');
    expect(heartContainer).toBeNull();
  });
});