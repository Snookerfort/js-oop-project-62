import Schema from './schema.js';

class StringSchema extends Schema {
  static required(value) {
    return Boolean(value);
  }

  static minLength(value, configValue) {
    return value.length >= configValue;
  }

  static contains(value, configValue) {
    return value.includes(configValue);
  }

  required() {
    this.updateConfig('required', true);
    return this;
  }

  minLength(value) {
    this.updateConfig('minLength', value);
    return this;
  }

  contains(value) {
    this.updateConfig('contains', value);
    return this;
  }

  /* eslint-disable class-methods-use-this */
  isInvalidType(value) {
    return !(typeof value === 'string' || value === null);
  }
}

export default StringSchema;
