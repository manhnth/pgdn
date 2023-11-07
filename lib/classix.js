// Author: https://github.com/alexnault/classix/blob/main/src/index.ts

/**
 * Conditionally join classNames into a single string
 * @param {...String} args The expressions to evaluate
 * @returns {String} The joined classNames
 */

// function cx(...args);
function cx() {
  let str = "",
    i = 0,
    arg;

  for (; i < arguments.length; ) {
    if ((arg = arguments[i++]) && typeof arg === "string") {
      str && (str += " ");
      str += arg;
    }
  }
  return str;
}

export { cx };
export default cx;
