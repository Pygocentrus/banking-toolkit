const { size, sanitize } = require('../../utils/string');
const { get } = require('../../utils/object');

const weightsTable = require('./valacdos');
const scsubtab = require('./scsubtab');

const getChecks = (sc) => {
  const sortCode = parseInt(sc, 10);
  const checks = [];
  for (const line of weightsTable) {
    if (sortCode >= line.start && sortCode <= line.end) {
      checks.push(line);
      if (checks.length === 2) {
        break;
      }
    }
  }
  return checks;
};

const processModulusCheck = (sortCode, accountNumber, check) => {
  const checkWeights = [check.u, check.v, check.w, check.x, check.y, check.z, check.a, check.b, check.c, check.d, check.e, check.f, check.g, check.h];

  const step1 = `${sortCode}${accountNumber}`;
  const step2 = step1.split('').map((digitAsStr, i) => {
    const digit = parseInt(digitAsStr, 10);
    return digit * checkWeights[i];
  });

  // Sum each weighted products
  const step3 = step2.reduce((total, cur) => {
    if (check.modulus === 'DBLAL') {
      // Sum each digits of the product number
      const digitsSum = `${cur}`
        .split('')
        .reduce((subTotal, subCur) => (
          subTotal + parseInt(subCur, 10)
        ), 0);
      return total + digitsSum;
    }
    return total + cur;
  }, 0);

  const modulus = check.modulus === '11' ? 11 : 10;
  return step3 % modulus === 0;
};

const isValid = (params = {}) => {
  let sortCode = sanitize(get(params, 'sortCode'));
  let accountNumber = sanitize(get(params, 'accountNumber'));

  if (!sortCode || !accountNumber) return false;
  if (size(sortCode) !== 6 || (size(accountNumber) < 8 || size(accountNumber) > 10)) return false;

  const checks = getChecks(sortCode);
  if (!size(checks)) return true; // We couldn't find any check. We assume it's OK

  const firstCheck = checks[0];
  const firtCheckPassed = processModulusCheck(sortCode, accountNumber, firstCheck);

  if (firtCheckPassed) {
    // The first check passed and it was either the only one, or among the specified exceptions
    if (size(checks) === 1 || [2, 9, 10, 11, 12, 13, 14].indexOf(firstCheck.exception)) return true;

    // TODO: second check
  }
  // TODO: missed first check

  return true;
};

module.exports = {
  isValid,
};
