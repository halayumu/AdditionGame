const q1 = Math.floor(Math.random() * 10);
const q2 = Math.floor(Math.random() * 10);

let answer = parseInt(prompt(`${q1}+${q2}=?`));
if (q1 + q2 === answer) {
    document.write('正解');
} else {
    document.write('不正解');
}