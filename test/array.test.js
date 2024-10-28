import Validator from '../src/validator.js';

describe('Array schema', () => {
  let validator;

  beforeEach(() => {
    validator = new Validator();
  });

  test('array schema should be defined', () => {
    const schema = validator.array();
    expect(schema).toBeDefined();
  });

  test('test require method', () => {
    const schema = validator.array();
    expect(schema.isValid(null)).toBe(true);
    schema.required();
    expect(schema.isValid(null)).toBe(false);
    expect(schema.isValid([])).toBe(true);
    expect(schema.isValid(['test'])).toBe(true);
  });

  test('test sizeof method', () => {
    const schema = validator.array();
    expect(schema.isValid([1, 2])).toBe(true);
    schema.sizeof(3);
    expect(schema.isValid([1, 2])).toBe(false);
    expect(schema.isValid([1, 2, 3])).toBe(true);
    expect(schema.isValid([1, 2, 3, 4])).toBe(false);
  });
});
