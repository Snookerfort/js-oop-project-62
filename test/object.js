import Validator from '../src/validator.js';

describe('Object schema', () => {
  let validator;

  beforeEach(() => {
    validator = new Validator();
  });

  test('object schema should be defined', () => {
    const schema = validator.object();
    expect(schema).toBeDefined();
  });

  test('shape method', () => {
    const schema = validator.object();
    schema.shape(1).toThrow('Invalid type of schema');
    schema.shape('qwe').toThrow('Invalid type of schema');
    schema.shape([]).toThrow('Invalid type of schema');
  });

  test('invalid types', () => {
    const schema = validator.object();
    expect(schema.isValid(null)).toBe(true);
    expect(schema.isValid({})).toBe(true);
    expect(schema.isValid('qwq')).toBe(false);
    expect(schema.isValid(12)).toBe(false);
  });

  test('shape method', () => {
    const schema = validator.object();
    schema.shape({
      name: validator.string().required(),
      age: validator.number().positive(),
    });
    expect(schema.isValid({ name: 'kolya', age: 100 })).toBe(true);
    expect(schema.isValid({ name: 'ada', age: -5 })).toBe(false);
    expect(schema.isValid({ age: 5 })).toBe(false);
    expect(schema.isValid({ name: 'ada' })).toBe(true);
  });
});
