import Schema from './schema.js';

class NumberSchema extends Schema {
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

  isValid(value) {
    return this.checkRequired(value)
      && this.checkPositive(value)
      && this.checkRange(value);
  }

  checkPositive(value) {
    return this.config.positive ? value > 0 : true;
  }

  checkRequired(value) {
    return this.config.required ? Number.isFinite(value) : true;
  }

  checkRange(value) {
    return this.config.range
      ? (value >= this.config.range.min) && (value <= this.config.range.max)
      : true;
  }
}

export default NumberSchema;
