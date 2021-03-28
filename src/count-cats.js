const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
//  throw new CustomError('Not implemented');
  // remove line with error and write your code here
  return matrix.reduce( (acc, el) => el.filter( cat => cat === '^^').length + acc, 0);
};
