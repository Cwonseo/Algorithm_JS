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
  let answer = [];
  let word = '';
  let str = input[0];
  let flag = 0;

  if (!str.includes('<')) {
    return str
      .split(' ')
      .map((e) => {
        return e.split('').reverse().join('');
      })
      .join(' ');
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] != '>' && i == str.length - 1) {
      word += str[i];
      let reverseWords = word.split(' ');
      reverseWords = reverseWords.map((e) => {
        return e.split('').reverse().join('');
      });
      answer.push(reverseWords.join(' '));
    } else if (str[i] == '<' && i != 0) {
      let reverseWords = word.split(' ');
      reverseWords = reverseWords.map((e) => {
        return e.split('').reverse().join('');
      });

      answer.push(reverseWords.join(' '));
      word = str[i];
    } else if (str[i] == '>') {
      word += str[i];
      answer.push(word);
      word = '';
    } else {
      word += str[i];
    }
  }
  return answer.join('');
}
console.log(solve(input));
