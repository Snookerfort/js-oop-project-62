class Schema {
  constructor(config = {}) {
    this.config = config;
  }

  updateConfig(key, value) {
    this.config = { ...this.config, [key]: value };
  }

  /* eslint-disable class-methods-use-this */
  isValid() {
    return true;
  }
}

export default Schema;
