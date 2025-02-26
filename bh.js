const quizData = [
    {
        question: "Q1 What is your preferred style of dress. ?",
        a: "casual and conforming",
        b: "formal and conservative",
        c: "businesslike and functional",
        d: "fashionable and stylish",
        correct: "d",
    },
    {
        question: "Q2 How would you describe your workplace?",
        a: "slow/easy",
        b: "slosw/systematic",
        c: "fast/decisive",
        d: "fast/spontaneous",
        correct: "b",
    },
    {
        question: "Q3 What is most important to you to maintain?",
        a: "Relationships",
        b: "Success",
        c: "Status",
        d: "Credibility",
        correct: "a",
    },
    {
        question: "Q4 How would others describe you?",
        a: "Pleasant",
        b: "Precise",
        c: "to the point",
        d: "stimulating",
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
          
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})


