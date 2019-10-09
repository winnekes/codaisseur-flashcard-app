let card = document.querySelector('.card');
card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
});

// Collection of questions
const questions = [
    {
        question: 'What is the use of <em>isNaN function</em>?',
        answer: 'isNan function returns true if the argument is not a number otherwise it is false'
    },
    {
        question: 'What is "this" keyword in JavaScript?',
        answer: '"this" keyword refers to the object from where it was called'
    },
    {
        question: 'Operators: What is the === operator?',
        answer: '=== is called as strict equality operator which returns true when the two operands are having the same value without any type conversion'
    },
    {
        question: 'What are all the looping structures in JavaScript?',
        answer: 'Following are looping structures in Javascript: for while, do-while'
    },
    {
        question: 'Explain the difference between "==" and "==="?',
        answer: '"==" checks only for equality in value whereas "===" is a stricter equality test and returns false if either the value or the type of the two variables are different'
    },
    {
        question: 'What do we mean by NULL in Javascript?',
        answer: 'The NULL value is used to represent no value or no object. It implies no object or null string, no valid boolean value, no number and no array object'
    },
    {
        question: 'What are all the types of Pop up boxes available in JavaScript?',
        answer: 'Alert(), Confirm() and Prompt()'
    }
];

const questionField = document.getElementById('question');
const answerField = document.getElementById('answer');

function displayRandomQuestion() {

    let randNum =  Math.floor(Math.random() * questions.length);
    
    questionField.innerHTML = questions[randNum].question;
    answerField.innerHTML = questions[randNum].answer;
}

displayRandomQuestion();