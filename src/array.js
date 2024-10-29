import Schema from './schema.js';

class ArraySchema extends Schema {
  required() {
    this.updateConfig('required', true);
    return this;
  }

  sizeof(value) {
    this.updateConfig('sizeof', value);
    return this;
  }

  isValid(value) {
    if (this.isInvalidType(value)) {
      return false;
    }
    return this.checkRequired(value) && this.checkSizeof(value);
  }

  checkRequired(value) {
    return this.config.required ? Array.isArray(value) : true;
  }

  checkSizeof(value) {
    return this.config.sizeof ? value.length === this.config.sizeof : true;
  }

  /* eslint-disable class-methods-use-this */
  isInvalidType(value) {
    return !(Array.isArray(value) || value === null);
  }
}

export default ArraySchema;
