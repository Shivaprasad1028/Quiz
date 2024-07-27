const quizData = [
    {
        question: "Q1 My emotion generally have. ?",
        a: "a strong impact on the way I believe",
        b: "little or no impact on the way I believe",
        c: "a little strong impact on the way I believe",
        d: "none of the above",
        correct: "a,b,c,",
    },
    {
        question: "Q2 I am generally guided by. ?",
        a: "my goals",
        b: "my values",
        c: "others goals",
        d: "others values",
        correct: "a,b,c,d",
    },
    {
        question: "Q3 I generally hbave a ?",
        a: "good sense of humor about myself ",
        b: "take myself seriously",
        c: "do the work on time",
        d: "foucs on the work",
        correct: "a,b,c,d",
    },
    {
        question: "Q4 I always likes to ?",
        
        a: "take on new challenges",
        b: "maintain the status",
        c: "do hard work",
        d: "do smart work",
        correct: "a,b,c,d",
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