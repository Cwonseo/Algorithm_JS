//팰린드롬 만들기

const input = require('fs')
  .readFileSync(
    process.platform === 'linux'
      ? '/dev/stdin'
      : '/Users/cwonseo/Desktop/3학년 겨울방학/JS코딩테스트/Algorithm_JS/백준/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

let str = input[0];
let back = [];
let temp = [];
str = str.split('').sort().join('');

for (let i = 0; i < str.length; i++) {
  if (str[i] == str[i + 1]) {
    // 다음 문자와 같으면 str에서 삭제하고 back 배열에 그 값을 넣어준다.
    back.push(str[i]);
    str = str.replace(str[i], '');
  } else if (str[i] != str[i + 1]) {
    // 다음 문자와 다르면 str에서 삭제하고 temp 배열에 그 값을 넣어준다.
    temp.push(str[i]);
    str = str.replace(str[i], '');
    i--;
  }
}

if (temp.length >= 2)
  //temp의 길이가 2 이상인 경우 :  홀수개인 문자가 2개 이상인 경우
  console.log("I'm Sorry Hansoo");
else console.log(str + temp + back.reverse().join(''));

//정렬 먼저 하자.

//홀수인 경우
// 홀수개인 문자는 1개

// 짝수인 경우
//  (홀수개인 문자는 0개)
