const test = require('ava');
const iban = require('../src/modules/iban');
const dataSet = require('./iban.json');

test('should reject non-standard IBAN country code', t => {
  const fakeIban = 'YY000000000000000000';
	t.false(iban.isValid(fakeIban));
});

test('should validate correct IBAN codes', t => {
  dataSet.correct.forEach(i => t.true(iban.isValid(i)));
});

test('should reject incorrect IBAN codes', t => {
  dataSet.incorrect.forEach(i => t.false(iban.isValid(i)));
});
