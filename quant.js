const quizData = [
    {
        question: "Q1 Write the numbers that follows the series:- 17,22,27,32,__",
        a: "35",
        b: "36",
        c: "40",
        d: "37",
        correct: "d",
    },
    {
        question: "Q2 Write the numbers that follows the series:- 25,22,19,16,__",
        a: "10",
        b: "13",
        c: "11",
        d: "14",
        correct: "b",
    },
    {
        question: "Q3 Write the numbers that follows the series:- 4,7,11,18,29,__",
        a: "47",
        b: "40",
        c: "44",
        d: "35",
        correct: "a",
    },
    {
        question: "Q4 Write the numbers that follows the series:- 1/2,1/2,0/2,-1/2,-1/2,__",
        a: "1/2",
        b: "0/2",
        c: "-1/2",
        d: "none of the above",
        correct: "b",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})