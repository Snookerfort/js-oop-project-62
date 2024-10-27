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
    const expectedMessage = `Schema with name "${fakeSchemaName}" is not defined`
    expect(() => validator.createSchema(fakeSchemaName)).toThrow(expectedMessage);
  });
});
