
// DOM
const cardElement = document.querySelector('.card');
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const newQuestionButton = document.getElementById('new-question');
const categoryListElement = document.getElementById('category-list');

const categories = ['JavaScript', 'HTML', 'CSS'];
const questions = [
    {
        question: 'What is the use of <em>isNaN function</em>?',
        answer: 'isNan function returns true if the argument is not a number otherwise it is false',
        category: categories[0]
    },
    {
        question: 'What is "this" keyword in JavaScript?',
        answer: '"this" keyword refers to the object from where it was called',
        category: categories[0]
    },
    {
        question: 'Operators: What is the <em>===</em> operator?',
        answer: '=== is called as strict equality operator which returns true when the two operands are having the same value without any type conversion',
        category: categories[0]
    },
    {
        question: 'What are all the <em>looping</em> structures in JavaScript?',
        answer: 'Following are looping structures in Javascript: for while, do-while',
        category: categories[0]
    },
    {
        question: 'Explain the difference between <em>"=="</em> and <em>"==="</em>?',
        answer: '"==" checks only for equality in value whereas "===" is a stricter equality test and returns false if either the value or the type of the two variables are different',
        category: categories[0]
    },
    {
        question: 'What do we mean by <em>NULL</em> in Javascript?',
        answer: 'The NULL value is used to represent no value or no object. It implies no object or null string, no valid boolean value, no number and no array object',
        category: categories[0]
    },
    {
        question: 'What are all the types of Pop up boxes available in JavaScript?',
        answer: 'Alert(), Confirm() and Prompt()',
        category: categories[0]
    },
    {
        question: 'What does CSS stand for?',
        answer: 'Cascading Style Sheets',
        category: categories[2]
    }
];
function displayCategories() {

    for(let i = 0; i < categories.length; i++) {
        const categoryButton = document.createElement('button');
        categoryButton.setAttribute('id', 'cat-' + categories[i]);
        categoryButton.setAttribute('onclick', 'filterByCategory();');
        categoryButton.className = "category";
        
        categoryButton.innerHTML = categories[i];
        console.log(categoryButton);
        console.log(categories[i]);
        categoryListElement.appendChild(categoryButton);
    }
}
// Functions
function displayRandomQuestion() {

    // always show the question side of the card first
    cardElement.classList.remove('is-flipped');

    let randNum =  Math.floor(Math.random() * questions.length);
    
    questionElement.innerHTML = questions[randNum].question;
    answerElement.innerHTML = questions[randNum].answer;
}

function toggleCard() {
    cardElement.classList.toggle('is-flipped');
}

function filterByCategory() {
    
}

displayCategories();
// eventListeners
newQuestionButton.addEventListener('click', displayRandomQuestion);
cardElement.addEventListener('click', toggleCard);