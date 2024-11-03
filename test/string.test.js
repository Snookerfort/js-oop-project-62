import Validator from '../src/validator.js';

describe('String schema', () => {
  let validator;

  beforeEach(() => {
    validator = new Validator();
  });

  test('string schema should be defined', () => {
    const schema = validator.string();
    expect(schema).toBeDefined();
  });

  test('invalid types', () => {
    const schema = validator.string();
    expect(schema.isValid(1)).toBe(false);
    expect(schema.isValid({})).toBe(false);
  });

  test('require method', () => {
    const schema = validator.string();
    expect(schema.isValid('')).toBe(true);
    expect(schema.isValid(null)).toBe(true);
    expect(schema.isValid(undefined)).toBe(true);
    schema.required();
    expect(schema.isValid('test')).toBe(true);
    expect(schema.isValid(null)).toBe(false);
    expect(schema.isValid('')).toBe(false);
  });

  test('minLength method', () => {
    const schema = validator.string();
    expect(schema.minLength(10).isValid('Test')).toBe(false);
    expect(schema.minLength(10).minLength(4).isValid('Test')).toBe(true);
  });

  test('contains  method', () => {
    const schema = validator.string();
    expect(schema.contains('what').isValid('what does the fox say')).toBe(true);
    expect(schema.contains('who').isValid('what does the fox say')).toBe(false);
  });
});
