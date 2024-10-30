import Validator from '../src/validator.js';

describe('Test validator', () => {
  let validator;

  beforeEach(() => {
    validator = new Validator();
  });

  test('should be defined', () => {
    expect(validator).toBeDefined();
  });

  test('wrong schema', () => {
    const fakeSchemaName = 'invalid schema name';
    const expectedMessage = `Schema with name "${fakeSchemaName}" is not defined`;
    expect(() => validator.createSchema(fakeSchemaName)).toThrow(expectedMessage);
  });

  test('wrong validator type', () => {
    const fakeType = 'invalid type';
    const expectedMessage = `Invalid schema type "${fakeType}"`;
    expect(() => validator.addValidator(fakeType, 'test', () => {})).toThrow(expectedMessage);
  });

  test('test custom string validator', () => {
    const startWithValidator = (value, start) => value.startsWith(start);
    validator.addValidator('string', 'startWith', startWithValidator);
    const schema = validator.string().test('startWith', 'H');
    expect(schema.isValid('ello, world!')).toBe(false);
    expect(schema.isValid('Hello, world!')).toBe(true);
  });

  test('test custom number validator', () => {
    const minValidator = (value, min) => value >= min;
    validator.addValidator('number', 'min', minValidator);
    const schema = validator.number().test('min', 5);
    expect(schema.isValid(4)).toBe(false);
    expect(schema.isValid(6)).toBe(true);
  });
});
