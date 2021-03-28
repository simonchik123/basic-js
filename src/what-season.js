const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
  if(!date) return 'Unable to determine the time of year!'
  if (!(date instanceof Date) || date.getMonth !== (new Date()).getMonth) throw Error("Invalid Date")
  
  let m = date.getMonth()  

  if(m==11 || m<=1) return "winter"
  else if (m>1 && m<5) return "spring"
  else if(m>4 && m<8) return "summer"
  else if(m>7 && m<11) return "autumn" 
  else throw Error()
};
