import InvalidTypeError from './invalid-type-error.js';

class ObjectSchema {
  constructor() {
    this.schema = {};
  }

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
    return Object.entries(this.schema).every(([k, v]) => v.isValid(value[k] ?? null));
  }

  /* eslint-disable class-methods-use-this */
  isInvalidType(value) {
    return typeof value !== 'object' || Array.isArray(value);
  }
}

export default ObjectSchema;
