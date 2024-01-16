const input = require('fs')
  .readFileSync(
    process.platform === 'linux'
      ? '/dev/stdin'
      : '/Users/cwonseo/Desktop/3학년 겨울방학/JS코딩테스트/Algorithm_JS/백준/input.txt'
  )
  .toString()
  .trim()
  .split('\n')
  .join('');

const GREETING = '어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.';
const QUESTION = '"재귀함수가 뭔가요?"';
const STORY =
  '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.';
const STORY2 =
  '마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.';
const STORY3 =
  '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."';
const ANSWER = '"재귀함수는 자기 자신을 호출하는 함수라네"';
const END = '라고 답변하였지.';

function solve(input) {
  console.log(GREETING);
  let cnt = 0;
  function goToProfessor(num, cnt) {
    if (num === cnt) {
      console.log('____'.repeat(cnt) + QUESTION.trim());
      console.log('____'.repeat(cnt) + ANSWER.trim());
      console.log('____'.repeat(cnt) + END);
      return;
    } else {
      console.log('____'.repeat(cnt) + QUESTION);
      console.log('____'.repeat(cnt) + STORY);
      console.log('____'.repeat(cnt) + STORY2);
      console.log('____'.repeat(cnt) + STORY3);

      goToProfessor(num, cnt + 1);
      console.log('____'.repeat(cnt) + END);
    }
  }
  goToProfessor(parseInt(input), 0);
}

solve(input);
