const path = require('path');

console.log("<---- Start ---->");
console.log(path.basename('c:/pro_1/ch1/ch1.js'));
console.log(path.basename(__filename));
console.log(path.basename(__filename,'.js'));
console.log("<---- End ---->");
console.log(" ");

// Directery pathe is display as per line of code.
console.log("<---- Start ---->");
console.log(path.dirname('c:/shubham/nagane/ch1/node.js'));
console.log(path.dirname(__filename));
console.log("<---- End ---->");
console.log(" ");

// Extanstion Name.
console.log("<---- Start ---->");
console.log(path.extname(__filename));
console.log("<---- End ---->");
console.log(" ");