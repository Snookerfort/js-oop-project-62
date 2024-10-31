import Schema from './schema.js';

class NumberSchema extends Schema {
  static positive(value) {
    return value > 0 || value === null;
  }

  static required(value) {
    return Boolean(value);
  }

  static range(value, configValue) {
    return (value >= configValue.min) && (value <= configValue.max);
  }

  required() {
    this.updateConfig('required', true);
    return this;
  }

  positive() {
    this.updateConfig('positive', true);
    return this;
  }

  range(min, max) {
    this.updateConfig('range', { min, max });
    return this;
  }

  /* eslint-disable class-methods-use-this */
  isInvalidType(value) {
    return !(Number.isFinite(value) || value === null || value === undefined);
  }
}

export default NumberSchema;
