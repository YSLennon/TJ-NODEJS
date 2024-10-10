//const dollar = require('./module_number.js');
//console.log(dollar.yen);

const {dollar, yen} = require('./module_number.js');
const {dollarConvert, yenConvert} = require('./module_number_func.js');
console.log(dollar);

dollarConvert(dollar);
yenConvert(yen);
