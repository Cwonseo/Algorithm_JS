// 방 번호

const input = require('fs')
  .readFileSync(
    process.platform === 'linux'
      ? '/dev/stdin'
      : '/Users/cwonseo/Desktop/3학년 겨울방학/JS코딩테스트/백준/input.txt'
  )
  .toString()
  .trim()
  .split('\n');
