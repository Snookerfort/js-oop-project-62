import StringSchema from './string.js';

class Validator {
  name = 'validator';

  schemas = {
    string: StringSchema,
  };

  string() {
    return this.createSchema('string');
  }

  createSchema(name) {
    if (!Object.hasOwn(this.schemas, name)) {
      throw new Error(`Schema with name "${name}" is not defined`);
    }
    return new this.schemas[name]();
  }
}

export default Validator;
