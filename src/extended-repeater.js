const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  str = '' + str
  const addition = 'addition' in options ? '' + options.addition : '';
  let separator = options.separator || '+'
  let additionSeparator = options.additionSeparator || '|'
  let repeatTimes = options.repeatTimes || 1    
  let additionRepeatTimes = options.additionRepeatTimes || 1

  let addStr = Array(additionRepeatTimes).fill(addition).join(additionSeparator)
  str = Array(repeatTimes).fill(str+addStr).join(separator)
  
  return str
};
  