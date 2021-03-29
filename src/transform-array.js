const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let disNext = '--discard-next'
  let disPrev = '--discard-prev'
  let dNext = '--double-next'
  let dPrev = '--double-prev'

  if(!Array.isArray(arr)) throw new Error(`it's not array!`)

  let res = [];
  let notDiscard = (arr, i) => i >= 0 && i < arr.length && arr[i] !== disNext

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case (disNext):
        i++;
        break;
      case (dNext):
        if (i+1 < arr.length) res.push(arr[i+1]);
        break;
      case (disPrev):
        if (notDiscard(arr, i-2)) res.pop();
        break;
      case (dPrev):
        if (notDiscard(arr, i-2)) res.push(arr[i-1]);
        break;
      default:
        res.push(arr[i]);
    }
  }

  return res;
};
