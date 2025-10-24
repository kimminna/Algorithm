const fs = require('fs');
const file = process.platform === "linux" ? "/dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split('\n');

const arr = input[1].split(' ').map(Number);
const max = Math.max(...arr);
const min = Math.min(...arr);
let result = max * min;

console.log(result);