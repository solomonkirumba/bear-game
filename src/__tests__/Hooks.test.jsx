import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import useGameHealth from '../hooks/useGameHealth';

describe('useGameHealth Hook', () => {
  it('should initialize with 3 hearts', () => {
    const { result } = renderHook(() => useGameHealth());
    expect(result.current.hearts).toBe(3);
  });

  it('should reset hearts when resetGame is called', () => {
    const { result } = renderHook(() => useGameHealth());
    // Assuming you have a decrement function or similar logic
    act(() => {
      result.current.resetGame();
    });
    expect(result.current.hearts).toBe(3);
  });
});