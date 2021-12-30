const path = require('path');

console.log(path.basename('c:/pro_1/ch1/ch1.js'));
console.log(path.basename(__filename));
console.log(path.basename(__filename,'.js'));