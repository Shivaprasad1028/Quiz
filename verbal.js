const quizData = [
    {
        question: "Q1 Select the pair that has a different relationship between its words when compared to the rest of the pairs. ?",
        a: "Up:Down",
        b: "Left:Right",
        c: "Cold:Hot",
        d: "Blue:red",
        correct: "d",
    },
    {
        question: "Q2 Select the pair that has a different relationship between its words when compared to the rest of the pairs. ?",
        a: "Dog:Bark",
        b: "Cat:Scratch",
        c: "Squirrel:Squeak",
        d: "Snake:Hiss",
        correct: "b",
    },
    {
        question: "Q3 The first one is what neccessarily happens to a person when the second one happens to another person. ?",
        a: "Win:Lose",
        b: "Lead:Follow",
        c: "Take:Give",
        d: "Cry:Laugh",
        correct: "b",
    },
    {
        question: "Q4 The first one is what neccessarily happens to a person when the second one happens to another person. ?",
        
        a: "Defend:Protect",
        b: "Damage:Destroy",
        c: "Speak:Scream",
        d: "Warm:Burn",
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