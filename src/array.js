import Schema from './schema.js';

class ArraySchema extends Schema {
  static required(value) {
    return Array.isArray(value);
  }

  static sizeof(value, configValue) {
    return value.length === configValue;
  }

  required() {
    this.updateConfig('required', true);
    return this;
  }

  sizeof(value) {
    this.updateConfig('sizeof', value);
    return this;
  }

  /* eslint-disable class-methods-use-this */
  isInvalidType(value) {
    return !(Array.isArray(value) || value === null);
  }
}

export default ArraySchema;
