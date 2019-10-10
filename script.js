
// DOM
const cardElement = document.querySelector('.card');
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const newQuestionButton = document.getElementById('new-question');
const categoryListElement = document.getElementById('category-list');
const userQuestionFormElement = document.querySelector('.user-question');

const categories = ['JavaScript', 'HTML', 'CSS'];
const questions = [
    {
        question: 'What is the use of <em>isNaN function</em>?',
        answer: 'isNan function returns true if the argument is not a number otherwise it is false',
        category: categories[0]
    },
    {
        question: 'Explain what is pop()method in JavaScript?',
        answer: 'The pop() method is similar as the shift() method but the difference is that the Shift method works at the start of the array. Also the pop() method take the last element off of the given array and returns it. The array on which is called is then altered.',
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
    },
    {
        question: 'What is HTML?',
        answer: 'HTML stands for Hyper Text Markup Language. It is a language of World Wide Web. It is a standard text formatting language which is used to create and display pages on the Web. It makes the text more interactive and dynamic. It can turn text into images, tables, links.',
        category: categories[1]
    },
    {
        question: 'What is the use of Canvas element?',
        answer: 'The canvas element helps to build charts, graphs, bypass Photoshop to create 2D images and place them directly into HTML5 code',
        category: categories[1]
    }
];
function displayCategories() {

    for(let i = 0; i < categories.length; i++) {
        const categoryButton = document.createElement('button');
        categoryButton.setAttribute('id', 'cat-' + categories[i]);
        categoryButton.setAttribute('onclick', 'displayRandomQuestion(' + i + ');');
        categoryButton.className = "category";
        
        categoryButton.innerHTML = categories[i];
        console.log(categoryButton);
        console.log(categories[i]);
        categoryListElement.appendChild(categoryButton);
    }
}

function displayRandomQuestion(category=false) {

    // always show the question side of the card first
    cardElement.classList.remove('is-flipped');

    let randNum =  Math.floor(Math.random() * questions.length);
    

    questionElement.innerHTML = questions[randNum].question;
    answerElement.innerHTML = questions[randNum].answer;

    userQuestionFormElement.classList.remove('visible');
    userQuestionFormElement.classList.add('invisible');
}

function toggleCard() {
    cardElement.classList.toggle('is-flipped');
}

function toggleUserQuestionForm() {
    userQuestionFormElement.classList.add('visible');
    userQuestionFormElement.classList.remove('invisible');
    window.location.href = '#flashcard-form';
}

function addFlashcard(form){

}


displayCategories();


// eventListeners
newQuestionButton.addEventListener('click', displayRandomQuestion);
cardElement.addEventListener('click', toggleCard);