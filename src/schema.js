class Schema {
  config = {};

  updateConfig(key, value) {
    this.config = { ...this.config, [key]: value };
  }

  test(validatorName, value) {
    this.updateConfig(validatorName, value);
    return this;
  }

  isValid(value) {
    if (this.isInvalidType(value)) {
      return false;
    }

    return Object.entries(this.config)
      .every(([key, configValue]) => this.constructor[key](value, configValue));
  }

  /* eslint-disable class-methods-use-this */
  isInvalidType() {
    return false;
  }
}

export default Schema;
