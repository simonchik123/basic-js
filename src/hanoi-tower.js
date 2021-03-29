const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here

  let turns = (disksNumber)=> 2**disksNumber-1
  
  let seconds = (turnsSpeed) => Math.floor(turns(disksNumber)/turnsSpeed*3600)
  
  return {turns:turns(disksNumber),seconds:seconds(turnsSpeed)}  
};
