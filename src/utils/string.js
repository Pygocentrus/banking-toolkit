const isString = (str) => {
  return str && typeof str === 'string';
};

const size = (str) => {
  if (!isString(str)) return 0;
  return str.length;
};

const take = (str, n) => {
  if (!isString(str)) return null;
  return str.substring(0, n);
};

const takeRight = (str, n) => {
  if (!isString(str)) return '';
  const len = size(str);
  return str.substring(len - n, len);
};

const dropFirst = (str, n) => {
  if (!isString(str)) return '';
  return str.substring(n, size(str));
};

const toUpper = (str) => {
  if (!isString(str)) return '';
  return str.toUpperCase();
};

const replace = (str, reg, replacement) => {
  if (!isString(str)) return str;
  return str.replace(reg, replacement);
};

const split = (str, val) => {
  if (!isString(str)) return [];
  return str.split(val);
};

// Splits a string into n parts
const chunks = (str, n) => {
  if (!isString(str)) return [];
  const len = size(str);
  if (!n || n < 2 || len < n) return [str];

  const offsetSize = Math.floor(len / n);
  const parts = [];
  for (let i=0; i<n; i++) {
    const cur = i * offsetSize;
    parts.push(str.substring(cur, cur + offsetSize));
  }

  const isFloatingPointRatio = len % n !== 0;
  return isFloatingPointRatio
    ? parts.concat(str.substring(n * offsetSize, len))
    : parts;
};

module.exports = {
  isString,
  toUpper,
  replace,
  take,
  split,
  takeRight,
  dropFirst,
  chunks,
  size,
};
