import healthStatus from '../health.js';

describe('Health Status Checker', () => {
  test('health > 50 returns healthy', () => {
    expect(healthStatus({ health: 90 })).toBe('healthy');
  });

  test('health between 50 and 15 returns wounded', () => {
    expect(healthStatus({ health: 30 })).toBe('wounded');
  });

  test('health < 15 returns critical', () => {
    expect(healthStatus({ health: 10 })).toBe('critical');
  });
});