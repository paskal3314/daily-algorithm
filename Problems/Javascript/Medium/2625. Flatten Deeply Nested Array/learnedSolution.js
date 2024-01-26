/**
 * Beats 60.26%
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  const stack = arr.map((el) => ({ el, depth: n }));
  const result = [];

  while (stack.length > 0) {
    const { el, depth } = stack.pop();

    if (Array.isArray(el) && depth > 0) {
      stack.push(...el.map((innerEl) => ({ el: innerEl, depth: depth - 1 })));
    } else {
      result.push(el);
    }
  }
  return result.reverse();
};
