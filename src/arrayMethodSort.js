'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const isInvalidCompareFunction =
      compareFunction !== undefined && typeof compareFunction !== 'function';

    if (isInvalidCompareFunction) {
      throw new TypeError('compareFunction must be a function');
    }

    const compare = compareFunction
      ? (a, b) => compareFunction(a, b) > 0
      : (a, b) => String(a) > String(b);

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (compare(this[j], this[j + 1])) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
