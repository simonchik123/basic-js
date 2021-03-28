const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here

  if (!Array.isArray(members)) return false
  members.forEach(el => {
    if(typeof el != 'string') return false
  });

  word = members.reduce((acc,el)=> typeof el == 'string' ? el.trim().slice(0,1) + acc : acc,'').toUpperCase()
  word = word.split('').sort().join('')   //.filter((el, i) => (word.indexOf(el) == i))


  return (word != '') ? word : false

};
