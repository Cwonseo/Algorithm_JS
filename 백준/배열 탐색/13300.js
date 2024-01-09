//방배정
const input = require('fs')
  .readFileSync(
    process.platform === 'linux'
      ? '/dev/stdin'
      : '/Users/cwonseo/Desktop/3학년 겨울방학/JS코딩테스트/백준/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

const [studentNum, K] = input[0].split(' ');
let girls = [0, 0, 0, 0, 0, 0];
let boies = [0, 0, 0, 0, 0, 0];
let room = 0;
input.map((e, i) => {
  if (i != 0) {
    if (parseInt(e[0]) == 0) girls[parseInt(e[2]) - 1] += 1;
    else boies[parseInt(e[2]) - 1] += 1;
  }
});
girls.forEach((e) => {
  room += Math.ceil(e / K);
});
boies.forEach((e) => {
  room += Math.ceil(e / K);
});

console.log(room);
