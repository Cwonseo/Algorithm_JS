const input = require('fs')
  .readFileSync(
    process.platform === 'linux'
      ? '/dev/stdin'
      : '/Users/cwonseo/Desktop/3학년 겨울방학/JS코딩테스트/백준/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

// 안되는 경우 : 길이가 다른 경우, 서로 다른 경우(정렬하고 같은지 보자)

let tryNum = input[0];
let POSSIBLE = 'Possible';
let IMPOSSIBLE = 'Impossible';
for (let i = 1; i <= tryNum; i++) {
  let [str1, str2] = input[i].split(' ');
  if (str1.length != str2.length) console.log(IMPOSSIBLE);
  else if (
    JSON.stringify(str1.split('').sort()) !=
    JSON.stringify(str2.split('').sort())
  ) {
    console.log(IMPOSSIBLE);
  } else console.log(POSSIBLE);
}
//Strfry
// 자바스크립트 문자열 정렬
// 비교하기 위해서 JSON.sringfy로 문자열로 만들고 비교한다.
