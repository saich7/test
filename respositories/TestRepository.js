const Test = require('../models/Test');

class TestRepository {
  
  constructor(model) {
    this.model = model;
  }

  create(name) {
    const newTest = { name, done: false };
    const test = new this.model(newTest);

    return test.save();
  }

}

module.exports = new TestRepository(Test);
