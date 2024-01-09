// 방 번호

const input = require('fs')
  .readFileSync(
    process.platform === 'linux'
      ? '/dev/stdin'
      : '/Users/cwonseo/Desktop/3학년 겨울방학/JS코딩테스트/Algorithm_JS/백준/input.txt'
  )
  .toString()
  .trim()
  .split('\n');
let result = 0;
let numArray = Array(10).fill(0);

const num = input[0].split('');
for (let i = 0; i < num.length; i++) {
  numArray[num[i]] += 1;
}
let sixNine = 0;
let max = numArray[0];
numArray.filter((e, i) => {
  if (i == 9 || i == 6) {
    if (max < Math.ceil((numArray[6] + numArray[9]) / 2)) {
      max = Math.ceil((numArray[6] + numArray[9]) / 2);
    }
  } else if (max < e) {
    max = e;
  }
});

console.log(max);
//같은 숫자의 개수를 구한다.
// 겹치는 숫자 한개당 1세트가 필요.
// 6과 9는 두개가 겹치면 1세트가 필요한 것으로 한다.

//0~9까지의 각각 필요한 개수를 구한다.
// 그 중 max 값을 구한다.
// 단, 6과 9는 합하여 2로 나눈 후 올림처리하여 max값에 적용한다.
