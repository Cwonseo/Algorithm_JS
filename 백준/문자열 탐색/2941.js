//크로아티아 알파벳

const input = require('fs')
  .readFileSync(
    process.platform === 'linux'
      ? '/dev/stdin'
      : '/Users/cwonseo/Desktop/3학년 겨울방학/JS코딩테스트/Algorithm_JS/백준/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

function solve(input) {
  let str = input[0];
  let result = 0;
  let check = '';
  let deleted = [];
  const CROATIA = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
  for (let i = 0; i < str.length; i++) {
    check += str[i];
    CROATIA.map((e) => {
      if (check.includes(e)) {
        deleted.push(check);
        check = '';
        result += 1;
      }
    });
  }
  check = '';

  for (let i = 0; i < str.length; i++) {
    check += str[i];

    CROATIA.map((e) => {
      if (check.includes(e)) {
        str = str.replace(e, ' ');
        check = '';
        i -= 1;
        if (e == 'dz=') i--;
      }
    });
  }

  return result + str.replace(/ /g, '').length;
}
console.log(solve(input));

// replace를 이용하여 모든 공백 제거
