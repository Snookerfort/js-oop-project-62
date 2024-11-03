import StringSchema from './string.js';
import NumberSchema from './number.js';
import ArraySchema from './array.js';
import ObjectSchema from './object.js';

class Validator {
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

  addValidator(type, name, fn) {
    if (!this.schemas[type]) {
      throw new Error(`Invalid schema type "${type}"`);
    }
    this.schemas[type][name] = fn;
  }

  createSchema(name) {
    if (!Object.hasOwn(this.schemas, name)) {
      throw new Error(`Schema with name "${name}" is not defined`);
    }
    return new this.schemas[name]();
  }
}

export default Validator;
