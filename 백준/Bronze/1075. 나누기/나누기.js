const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputData = fs.readFileSync(file).toString().trim().split('\n').map(Number);

const [n, f] = inputData;

function solution(n, f) {
  // 마지막 두 자리 00
  let number = Math.floor(n / 100) * 100;

  while (true) {
    if (number % f === 0) {
      break;
    }
    number++;
  }

  // 마지막 두 자리 출력
  const answer = String(number).slice(-2);
  console.log(answer.padStart(2, '0'));
}

solution(n, f);