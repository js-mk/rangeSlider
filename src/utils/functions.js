/**
 * Delays a function for the given number of milliseconds, and then calls
 * it with the arguments supplied.
 *
 * @param  {Function} fn   function
 * @param  {Number}   wait delay
 * @param  {Number}   args arguments
 * @return {Function}
 */
export const delay = (fn, wait, ...args) => {
  return setTimeout(function () {
    return fn.apply(null, args);
  }, wait);
};

/**
 * Returns a debounced function that will make sure the given
 * function is not triggered too much.
 *
 * @param  {Function} fn Function to debounce.
 * @param  {Number}   debounceDuration OPTIONAL. The amount of time in milliseconds for which we will debounce the
 *         function. (defaults to 100ms)
 * @return {Function}
 */
export const debounce = (fn, debounceDuration) => {
  debounceDuration = debounceDuration || 100;
  return (...args) => {
    if (!fn.debouncing) {
      fn.lastReturnVal = fn.apply(window, args);
      fn.debouncing = true;
    }
    clearTimeout(fn.debounceTimeout);
    fn.debounceTimeout = setTimeout(function () {
      fn.debouncing = false;
    }, debounceDuration);
    return fn.lastReturnVal;
  };
};

export const isString = obj => obj === '' + obj;

export const isArray = obj => Object.prototype.toString.call(obj) === '[object Array]';

export const isNumberLike = (obj) =>
  (obj !== null && obj !== undefined && (isString(obj) && isFinite(parseFloat(obj)) || (isFinite(obj))));

export const getFirsNumberLike = (...args) => {
  if (!args.length) {
    return null;
  }

  for (let i = 0, len = args.length; i < len; i++) {
    if (isNumberLike(args[i])) {
      return args[i];
    }
  }

  return null;
};

export const isObject = (obj) => Object.prototype.toString.call(obj) === '[object Object]';

export const simpleExtend = (defaultOpt, options) => {
  const opt = {};

  for (let key in defaultOpt) {
    opt[key] = defaultOpt[key];
  }
  for (let key in options) {
    opt[key] = options[key];
  }

  return opt;
};
