//두 수의 합

const input = require('fs')
  .readFileSync(
    process.platform === 'linux'
      ? '/dev/stdin'
      : '/Users/cwonseo/Desktop/3학년 겨울방학/JS코딩테스트/Algorithm_JS/백준/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

let num = input[0];
let arr = input[1].split(' ');
let target = parseInt(input[2]);
let result = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    if (parseInt(arr[i]) + parseInt(arr[j]) == target) result += 1;
  }
}

console.log(result);
