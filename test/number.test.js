import Validator from '../src/validator.js';

describe('Number schema', () => {
  let validator;

  beforeEach(() => {
    validator = new Validator();
  });

  test('number schema should be defined', () => {
    const schema = validator.number();
    expect(schema).toBeDefined();
  });

  test('test invalid types', () => {
    const schema = validator.number();
    expect(schema.isValid('qwq')).toBe(false);
    expect(schema.isValid({})).toBe(false);
  });

  test('test require method', () => {
    const schema = validator.number();
    expect(schema.isValid(0)).toBe(true);
    expect(schema.isValid(null)).toBe(true);
    expect(schema.isValid(undefined)).toBe(true);
    schema.required();
    expect(schema.isValid(0)).toBe(true);
    expect(schema.isValid(1)).toBe(true);
    expect(schema.isValid(null)).toBe(false);
  });

  test('test positive method', () => {
    const schema = validator.number();
    schema.positive();
    expect(schema.isValid(2)).toBe(true);
    expect(schema.isValid(0)).toBe(false);
    expect(schema.isValid(-1)).toBe(false);
  });

  test('test range method', () => {
    const schema = validator.number();
    schema.range(-5, 5);
    expect(schema.isValid(-4)).toBe(true);
    expect(schema.isValid(-5)).toBe(true);
    expect(schema.isValid(5)).toBe(true);
    expect(schema.isValid(0)).toBe(true);
    expect(schema.isValid(6)).toBe(false);
    expect(schema.isValid(-6)).toBe(false);
  });
});
