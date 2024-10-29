import InvalidTypeError from './invalid-type-error.js';

class ObjectSchema {
  schema = {};

  shape(value) {
    if (this.isInvalidType(value)) {
      throw new InvalidTypeError('Invalid type of schema');
    }
    this.schema = value;
  }

  isValid(value) {
    if (this.isInvalidType(value)) {
      return false;
    }
    return Object.entries(value).every(([k, v]) => this.schema[k].isValid(v));
  }

  /* eslint-disable class-methods-use-this */
  isInvalidType(value) {
    return !(value.constructor === Object || (!value.constructor && typeof value === 'object'));
  }
}

export default ObjectSchema;
