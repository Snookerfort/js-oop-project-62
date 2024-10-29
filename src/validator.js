import StringSchema from './string.js';
import NumberSchema from './number.js';
import ArraySchema from './array.js';
import ObjectSchema from './object.js';

class Validator {
  name = 'validator';

  schemas = {
    string: StringSchema,
    number: NumberSchema,
    array: ArraySchema,
    object: ObjectSchema,
  };

  object() {
    return this.createSchema('object');
  }

  string() {
    return this.createSchema('string');
  }

  number() {
    return this.createSchema('number');
  }

  array() {
    return this.createSchema('array');
  }

  createSchema(name) {
    if (!Object.hasOwn(this.schemas, name)) {
      throw new Error(`Schema with name "${name}" is not defined`);
    }
    return new this.schemas[name]();
  }
}

export default Validator;
