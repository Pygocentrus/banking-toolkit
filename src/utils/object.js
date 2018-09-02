const isObject = (obj) => {
  return obj && typeof obj === 'object';
};

const has = (obj, key) => {
  if (!isObject(obj) || !key) return false;
  return obj.hasOwnProperty(key);
};

module.export = {
  isObject,
  has,
};
