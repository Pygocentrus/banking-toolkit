const isObject = (obj) => {
  return obj && typeof obj === 'object';
};

const has = (obj, key) => {
  if (!isObject(obj) || !key) return false;
  return obj.hasOwnProperty(key);
};

const get = (obj, key) => {
  if (!isObject(obj) || !key || !has(obj, key)) return null;
  return obj[key];
};

module.exports = {
  isObject,
  has,
  get,
};
