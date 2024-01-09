const input = require('fs')
  .readFileSync(
    process.platform === 'linux'
      ? '/dev/stdin'
      : '/Users/cwonseo/Desktop/3학년 겨울방학/JS코딩테스트/백준/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

let str1 = input[0],
  str2 = input[1];
[str1, str2] = [str1.split(''), str2.split('')];
let SameCount = 0;

for (let x = 0; x < str1.length; x++) {
  for (let y = 0; y < str2.length; y++) {
    if (str1[x] != 0 && str1[x] == str2[y]) {
      SameCount += 1;
      str1[x] = 0;
      str2[y] = 0;
    }
  }
}
console.log(str1.length + str2.length - SameCount * 2);
//애너그램 만들기
// 입력
// aabbcc
// xxyybb
// 출력
// 8
// - [ ] 두 단어가 같은 스펠링으로 이루어져 있어야 함.
// - [ ] 같은 스펠링으로 만들기 위해 제거해야하는 문자의 수
// 배운 점 string에서는 str1[x] = 0 이 먹히지 않음.
// 0으로 바꾸면 0으로 바뀐뒤에 같은 것으로 인식
// 길이가 다른 경우
