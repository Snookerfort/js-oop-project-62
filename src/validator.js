import StringSchema from './string.js';
import NumberSchema from './number.js';

class Validator {
  name = 'validator';

  schemas = {
    string: StringSchema,
    number: NumberSchema,
  };

  string() {
    return this.createSchema('string');
  }

  number() {
    return this.createSchema('number');
  }

  createSchema(name) {
    if (!Object.hasOwn(this.schemas, name)) {
      throw new Error(`Schema with name "${name}" is not defined`);
    }
    return new this.schemas[name]();
  }
}

export default Validator;
