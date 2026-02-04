/**
 * useGameHealth.test.js
 * Tests for the useGameHealth custom hook
 */

import { renderHook, act } from '@testing-library/react';
import useGameHealth from '../hooks/useGameHealth';

describe('useGameHealth Hook', () => {
  test('initializes with 3 hearts', () => {
    const { result } = renderHook(() => useGameHealth());
    expect(result.current.hearts).toBe(3);
  });

  test('loseOneHeart decreases hearts by 1', () => {
    const { result } = renderHook(() => useGameHealth());
    
    act(() => {
      result.current.loseOneHeart();
    });
    
    expect(result.current.hearts).toBe(2);
  });

  test('loseOneHeart can be called multiple times', () => {
    const { result } = renderHook(() => useGameHealth());
    
    act(() => {
      result.current.loseOneHeart();
      result.current.loseOneHeart();
    });
    
    expect(result.current.hearts).toBe(1);
  });

  test('loseAllHearts sets hearts to 0', () => {
    const { result } = renderHook(() => useGameHealth());
    
    act(() => {
      result.current.loseAllHearts();
    });
    
    expect(result.current.hearts).toBe(0);
  });

  test('loseOneHeart does not go below 0', () => {
    const { result } = renderHook(() => useGameHealth());
    
    act(() => {
      result.current.loseOneHeart();
      result.current.loseOneHeart();
      result.current.loseOneHeart();
      result.current.loseOneHeart(); // Extra call
    });
    
    expect(result.current.hearts).toBe(0);
  });

  test('resetGame restores hearts to 3', () => {
    const { result } = renderHook(() => useGameHealth());
    
    // Lose some hearts
    act(() => {
      result.current.loseOneHeart();
      result.current.loseOneHeart();
    });
    
    expect(result.current.hearts).toBe(1);
    
    // Reset
    act(() => {
      result.current.resetGame();
    });
    
    expect(result.current.hearts).toBe(3);
  });

  test('resetGame works after losing all hearts', () => {
    const { result } = renderHook(() => useGameHealth());
    
    act(() => {
      result.current.loseAllHearts();
    });
    
    expect(result.current.hearts).toBe(0);
    
    act(() => {
      result.current.resetGame();
    });
    
    expect(result.current.hearts).toBe(3);
  });

  test('isGameOver is true when hearts are 0', () => {
    const { result } = renderHook(() => useGameHealth());
    
    act(() => {
      result.current.loseAllHearts();
    });
    
    expect(result.current.isGameOver).toBe(true);
  });

  test('isGameOver is false when hearts are above 0', () => {
    const { result } = renderHook(() => useGameHealth());
    expect(result.current.isGameOver).toBe(false);
    
    act(() => {
      result.current.loseOneHeart();
    });
    
    expect(result.current.isGameOver).toBe(false);
  });

  test('hook returns all expected properties', () => {
    const { result } = renderHook(() => useGameHealth());
    
    expect(result.current).toHaveProperty('hearts');
    expect(result.current).toHaveProperty('loseOneHeart');
    expect(result.current).toHaveProperty('loseAllHearts');
    expect(result.current).toHaveProperty('resetGame');
    expect(result.current).toHaveProperty('isGameOver');
  });

  test('loseOneHeart is a function', () => {
    const { result } = renderHook(() => useGameHealth());
    expect(typeof result.current.loseOneHeart).toBe('function');
  });

  test('loseAllHearts is a function', () => {
    const { result } = renderHook(() => useGameHealth());
    expect(typeof result.current.loseAllHearts).toBe('function');
  });

  test('resetGame is a function', () => {
    const { result } = renderHook(() => useGameHealth());
    expect(typeof result.current.resetGame).toBe('function');
  });

  test('hearts value changes are reflected immediately', () => {
    const { result } = renderHook(() => useGameHealth());
    
    const initialHearts = result.current.hearts;
    expect(initialHearts).toBe(3);
    
    act(() => {
      result.current.loseOneHeart();
    });
    
    const afterLoss = result.current.hearts;
    expect(afterLoss).toBe(2);
    expect(afterLoss).not.toBe(initialHearts);
  });

  test('multiple operations in sequence work correctly', () => {
    const { result } = renderHook(() => useGameHealth());
    
    // Start with 3
    expect(result.current.hearts).toBe(3);
    
    // Lose one
    act(() => {
      result.current.loseOneHeart();
    });
    expect(result.current.hearts).toBe(2);
    
    // Lose all
    act(() => {
      result.current.loseAllHearts();
    });
    expect(result.current.hearts).toBe(0);
    
    // Reset
    act(() => {
      result.current.resetGame();
    });
    expect(result.current.hearts).toBe(3);
  });
});
