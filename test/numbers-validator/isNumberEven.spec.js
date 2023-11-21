import {NumbersValidator} from '../../app/numbers_validator.js';
import {expect} from 'chai';

describe('Description is here: IsNumberEven positive tests', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  },
  afterEach(() => {
    validator = null;
  }));

  it('Should return true, when provided an even number', () => {
    // has 2 args, first is a string, seconi is a function
    const validationResult = validator.isNumberEven(4);
    expect(validationResult).to.be.equal(true);
  });

  it('Should return false, when provided an not even number', () => {
    // has 2 args, first is a string, seconi is a function
    const validationResult = validator.isNumberEven(5);
    expect(validationResult).to.be.equal(false);
  });

  it('Should throw an error when provided a string', () => {
    expect(() => {
      validaton.isNumberEven('4');
    }).to.throw('[4] is not of type "Number" it is of type "string"');
  });
});
