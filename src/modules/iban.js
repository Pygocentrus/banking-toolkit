const { take, size, replace, dropFirst, split, chunks, toUpper } = require('../utils/string');
const ibanCountries = require('../conf/ibanCountries');

const ALPHABET = split('ABCDEFGHIJKLMNOPQRSTUVWXYZ', '');
const MODULO_BASE = 97;


const sanitize = (rawIban) => {
  return toUpper(replace(String(rawIban), /[\s\-\_]*/g, ''));
};

const getIbanCountryCode = (iban = '') => {
  return take(iban, 2);
};

const getIbanCountry = (countryCode) => {
  return ibanCountries.find(c => c.country === countryCode);
};

const swapFirstFourLetters = (iban) => {
  const firstFour = take(iban, 4);
  const remaining = dropFirst(iban, 4);
  return `${remaining}${firstFour}`;
};

/**
 * We transform each on of the alphabetical IBAN letters
 * to their corresponding digit. To do so, we add 10 to
 * their position within the alphabet
 * @param {string} letter The letter to digitize
 */
const convertLetterToDigit = (letter) => {
  const index = ALPHABET.indexOf(letter);
  if (index === -1) return letter; // Not letter
  return index + 10;
};

const convertIbanToDigitEquivalent = (iban) => {
  return split(iban, '')
    .map(convertLetterToDigit)
    .join('');
};

const stringToDigit = (str) => {
  const strAsNumber = Number(str);
  return isNaN(strAsNumber) ? -1 : strAsNumber;
};

const processModulo97 = (str) => {
  // We can't process a 30-digits-based modulo calculation.
  // Hence, we split it in 4 parts
  const parts = chunks(str, 4);
  return parts.reduce((total, cur) => {
    const currentDigit = stringToDigit(`${total}${cur}`);
    return currentDigit % MODULO_BASE;
  }, '');
};

const validateIban = (iban) => {
  const step1 = swapFirstFourLetters(iban);
  const step2 = convertIbanToDigitEquivalent(step1);
  const step3 = processModulo97(step2);
  return step3 === 1;
};

const isValid = (rawIban) => {
  const iban = sanitize(rawIban);
  const ibanCountryCode = getIbanCountryCode(iban);
  if (!ibanCountryCode) return false; // no country code

  // Find matching country among valid IBAN ones
  const matchingCountry = getIbanCountry(ibanCountryCode);
  if (!matchingCountry || matchingCountry.size !== size(iban)) return false; // No match or wrong size

  // Check algorithm used to verify IBAN
  return validateIban(iban);
};

module.exports = {
  isValid,
};
