/**
 * gamedata.test.js
 * Tests for the game data module
 */

import { 
  gamemode, 
  level1data, 
  level2data, 
  questions, 
  ansresult 
} from '../data/gamedata';

describe('Game Data Module', () => {
  describe('gamemode array', () => {
    test('exports gamemode array', () => {
      expect(gamemode).toBeDefined();
      expect(Array.isArray(gamemode)).toBe(true);
    });

    test('gamemode contains correct screens in order', () => {
      expect(gamemode[0]).toBe('start');
      expect(gamemode[1]).toBe('level1');
      expect(gamemode[2]).toBe('level2');
      expect(gamemode[3]).toBe('gameover');
    });

    test('gamemode has correct length', () => {
      expect(gamemode.length).toBe(4);
    });
  });

  describe('ansresult array', () => {
    test('exports ansresult array', () => {
      expect(ansresult).toBeDefined();
      expect(Array.isArray(ansresult)).toBe(true);
    });

    test('ansresult contains correct values', () => {
      expect(ansresult[0]).toBe(null);
      expect(ansresult[1]).toBe('correct');
      expect(ansresult[2]).toBe('closecall');
      expect(ansresult[3]).toBe('died');
    });

    test('ansresult has correct length', () => {
      expect(ansresult.length).toBe(4);
    });
  });

  describe('level1data object', () => {
    test('exports level1data object', () => {
      expect(level1data).toBeDefined();
      expect(typeof level1data).toBe('object');
    });

    test('level1data contains all answer properties', () => {
      expect(level1data).toHaveProperty('answer1');
      expect(level1data).toHaveProperty('answer2');
      expect(level1data).toHaveProperty('answer3');
      expect(level1data).toHaveProperty('answer4');
    });

    test('level1data contains all outcome properties', () => {
      expect(level1data).toHaveProperty('outcome1');
      expect(level1data).toHaveProperty('outcome2');
      expect(level1data).toHaveProperty('outcome3');
    });

    test('level1data answers are strings', () => {
      expect(typeof level1data.answer1).toBe('string');
      expect(typeof level1data.answer2).toBe('string');
      expect(typeof level1data.answer3).toBe('string');
      expect(typeof level1data.answer4).toBe('string');
    });

    test('level1data outcomes are strings', () => {
      expect(typeof level1data.outcome1).toBe('string');
      expect(typeof level1data.outcome2).toBe('string');
      expect(typeof level1data.outcome3).toBe('string');
    });

    test('level1data answers are not empty', () => {
      expect(level1data.answer1.length).toBeGreaterThan(0);
      expect(level1data.answer2.length).toBeGreaterThan(0);
      expect(level1data.answer3.length).toBeGreaterThan(0);
      expect(level1data.answer4.length).toBeGreaterThan(0);
    });
  });

  describe('level2data object', () => {
    test('exports level2data object', () => {
      expect(level2data).toBeDefined();
      expect(typeof level2data).toBe('object');
    });

    test('level2data contains all answer properties', () => {
      expect(level2data).toHaveProperty('answer1');
      expect(level2data).toHaveProperty('answer2');
      expect(level2data).toHaveProperty('answer3');
      expect(level2data).toHaveProperty('answer4');
    });

    test('level2data contains all outcome properties', () => {
      expect(level2data).toHaveProperty('outcome1');
      expect(level2data).toHaveProperty('outcome2');
      expect(level2data).toHaveProperty('outcome3');
    });

    test('level2data answers are strings', () => {
      expect(typeof level2data.answer1).toBe('string');
      expect(typeof level2data.answer2).toBe('string');
      expect(typeof level2data.answer3).toBe('string');
      expect(typeof level2data.answer4).toBe('string');
    });

    test('level2data outcomes are strings', () => {
      expect(typeof level2data.outcome1).toBe('string');
      expect(typeof level2data.outcome2).toBe('string');
      expect(typeof level2data.outcome3).toBe('string');
    });

    test('level2data answers are not empty', () => {
      expect(level2data.answer1.length).toBeGreaterThan(0);
      expect(level2data.answer2.length).toBeGreaterThan(0);
      expect(level2data.answer3.length).toBeGreaterThan(0);
      expect(level2data.answer4.length).toBeGreaterThan(0);
    });
  });

  describe('questions object', () => {
    test('exports questions object', () => {
      expect(questions).toBeDefined();
      expect(typeof questions).toBe('object');
    });

    test('questions contains setting property', () => {
      expect(questions).toHaveProperty('setting');
      expect(typeof questions.setting).toBe('string');
    });

    test('questions contains level1 property', () => {
      expect(questions).toHaveProperty('level1');
      expect(typeof questions.level1).toBe('string');
    });

    test('questions contains level2 property', () => {
      expect(questions).toHaveProperty('level2');
      expect(typeof questions.level2).toBe('string');
    });

    test('questions values are not empty', () => {
      expect(questions.setting.length).toBeGreaterThan(0);
      expect(questions.level1.length).toBeGreaterThan(0);
      expect(questions.level2.length).toBeGreaterThan(0);
    });

    test('questions contain expected content', () => {
      expect(questions.setting).toContain('forest');
      expect(questions.level1).toContain('bear');
      expect(questions.level2).toContain('soup');
    });
  });

  describe('Data structure consistency', () => {
    test('level1data and level2data have same structure', () => {
      const level1Keys = Object.keys(level1data).sort();
      const level2Keys = Object.keys(level2data).sort();
      
      // Both should have 4 answers
      expect(level1Keys.filter(k => k.startsWith('answer')).length).toBe(4);
      expect(level2Keys.filter(k => k.startsWith('answer')).length).toBe(4);
      
      // Both should have 3 outcomes
      expect(level1Keys.filter(k => k.startsWith('outcome')).length).toBe(3);
      expect(level2Keys.filter(k => k.startsWith('outcome')).length).toBe(3);
    });

    test('all exports are defined', () => {
      expect(gamemode).toBeDefined();
      expect(ansresult).toBeDefined();
      expect(level1data).toBeDefined();
      expect(level2data).toBeDefined();
      expect(questions).toBeDefined();
    });
  });
});
