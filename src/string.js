import Schema from './schema.js';

class StringSchema extends Schema {
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

  isValid(value) {
    return this.checkRequired(value)
      && this.checkMinLength(value)
      && this.checkContains(value);
  }

  checkRequired(value) {
    return this.config.required ? Boolean(value) : true;
  }

  checkMinLength(value) {
    return this.config.minLength ? value.length >= this.config.minLength : true;
  }

  checkContains(value) {
    return this.config.contains ? value.includes(this.config.contains) : true;
  }
}

export default StringSchema;
