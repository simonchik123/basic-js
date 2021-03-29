const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here

  if (typeof sampleActivity != 'string') return false
  if (isNaN(parseFloat(sampleActivity.trim()))) return false

   sampleActivity = parseFloat(sampleActivity.trim())

  if (sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY) return false
   
    let rate_k = Math.log(2)/HALF_LIFE_PERIOD
    t = Math.log(MODERN_ACTIVITY/sampleActivity)/rate_k

    return Math.ceil(t)
   
};
