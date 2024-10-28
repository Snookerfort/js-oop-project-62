import Schema from './schema.js';

class ArraySchema extends Schema {
  required() {
    this.updateConfig('required', true);
  }

  sizeof(value) {
    this.updateConfig('sizeof', value);
  }

  isValid(value) {
    return this.checkRequired(value) && this.checkSizeof(value);
  }

  checkRequired(value) {
    return this.config.required ? Array.isArray(value) : true;
  }

  checkSizeof(value) {
    return this.config.sizeof ? value.length === this.config.sizeof : true;
  }
}

export default ArraySchema;
