//종이의 개수

const input = require('fs')
  .readFileSync(
    process.platform === 'linux'
      ? '/dev/stdin'
      : '/Users/cwonseo/Desktop/3학년 겨울방학/JS코딩테스트/Algorithm_JS/백준/input.txt'
  )
  .toString()
  .trim()
  .split('\n');
const N = input[0];
input.reverse().pop();
paper = input.reverse();
let cnt = 0;
for (let x of paper) {
  paper[cnt] = x.replace(/ /g, '');
  cnt++;
}

function solve(paper) {
  let count0 = 0;
  let count1 = 0;

  function cut(x, y, N) {
    let flag = 0;
    for (let i = x; i < x + N; i++) {
      for (let j = y; j < y + N; j++) {
        if (paper[x][y] != paper[i][j]) {
          flag = 1;
          break;
        }
      }
    }
    if (flag == 0) {
      if (paper[x][y] == 0) {
        count0 += 1;
      } else if (paper[x][y] == 1) {
        count1 += 1;
      }
    } else {
      cut(x, y, N / 2);
      cut(x, y + N / 2, N / 2);
      cut(x + N / 2, y, N / 2);
      cut(x + N / 2, y + N / 2, N / 2);
    }
  }

  cut(0, 0, N);
  console.log(count0);
  console.log(count1);
}
// console.log(solve(paper));
solve(paper);
// - [ ] 그대로 사용할 종이를 알 수 있다.
// - [ ]
