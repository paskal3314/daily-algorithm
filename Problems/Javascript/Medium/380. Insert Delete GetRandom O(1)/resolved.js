var RandomizedSet = function () {
  this.hash = {};
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.hash[val]) {
    return false;
  } else {
    this.hash[val] = true;
    return true;
  }
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.hash[val]) {
    delete this.hash[val];
    return true;
  } else {
    return false;
  }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const values = Object.keys(this.hash).map((el) => parseInt(el));
  const result = values[Math.floor(Math.random() * values.length)];
  // console.log("[T]", values, result)
  return result;
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
