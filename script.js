// Get necessary DOM elements

const cardElement = document.querySelector('.card');
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const categoryListElement = document.getElementById('category-list');
const userFlashcardFormElement = document.querySelector('.user-flashcard-form');

const newFlashcardButton = document.getElementById('new-flashcard');
const deleteFlashcardButton = document.getElementById('delete-flashcard');
const addFlashcardButton = document.getElementById('add-flashcard');
const resetFlashCardsButton = document.getElementById('reset-flashcards');

const categoriesOptions = document.getElementById('categories-options');


// setting the local storage
userStorage = window.localStorage;

// defining questions and categories

let categories = ['JS', 'HTML', 'CSS'];

let questions = []

let questionsData = [{
        id: 1,
        question: 'What is the use of <em>isNaN function</em>?',
        answer: 'isNan function returns true if the argument is not a number otherwise it is false',
        category: 'JS'
    },
    {
        id: 2,
        question: 'Explain what is pop()method in JavaScript?',
        answer: 'The pop() method is similar as the shift() method but the difference is that the Shift method works at the start of the array. Also the pop() method take the last element off of the given array and returns it. The array on which is called is then altered.',
        category: 'JS'
    },
    {
        id: 3,
        question: 'What is "this" keyword in JavaScript?',
        answer: '"this" keyword refers to the object from where it was called',
        category: 'JS'
    },
    {
        id: 4,
        question: 'Operators: What is the <em>===</em> operator?',
        answer: '=== is called as strict equality operator which returns true when the two operands are having the same value without any type conversion',
        category: 'JS'
    },
    {
        id: 5,
        question: 'What are all the <em>looping</em> structures in JavaScript?',
        answer: 'Following are looping structures in Javascript: for while, do-while',
        category: 'JS'
    },
    {
        id: 6,
        question: 'Explain the difference between <em>"=="</em> and <em>"==="</em>?',
        answer: '"==" checks only for equality in value whereas "===" is a stricter equality test and returns false if either the value or the type of the two variables are different',
        category: 'JS'
    },
    {
        id: 7,
        question: 'What do we mean by <em>NULL</em> in Javascript?',
        answer: 'The NULL value is used to represent no value or no object. It implies no object or null string, no valid boolean value, no number and no array object',
        category: 'JS'
    },
    {
        id: 8,
        question: 'What are all the types of Pop up boxes available in JavaScript?',
        answer: 'Alert(), Confirm() and Prompt()',
        category: 'JS'
    },
    {
        id: 9,
        question: 'What does CSS stand for?',
        answer: 'Cascading Style Sheets',
        category: 'CSS'
    },
    {
        id: 10,
        question: 'What is HTML?',
        answer: 'HTML stands for Hyper Text Markup Language. It is a language of World Wide Web. It is a standard text formatting language which is used to create and display pages on the Web. It makes the text more interactive and dynamic. It can turn text into images, tables, links.',
        category: 'HTML'
    },
    {
        id: 11,
        question: 'What is the use of Canvas element?',
        answer: 'The canvas element helps to build charts, graphs, bypass Photoshop to create 2D images and place them directly into HTML5 code',
        category: 'HTML'
    }
];


// check if localStorage exists: if so get saved user questions, otherwise get data from API
if (userStorage.getItem('questions')) {
    questions = JSON.parse(userStorage.getItem('questions'));
} else {
    questions = questionsData;
    userStorage.setItem('questions', JSON.stringify(questions));
}


// empty localStorage
function clearLocalUserStorage() {
    confirmedClear = confirm("Are you sure you want to delete all the flashcards you added?");
    if (confirmedClear) {
        userStorage.clear();
        jumpToAnchor('top')
        alert('And we\'re back to the standard flashcards!');
    }
}


// display categories dynamically 
function displayCategories() {

    for (let i = 0; i < categories.length; i++) {
        const categoryButton = document.createElement('button');
        categoryButton.setAttribute('id', 'cat-' + categories[i]);
        categoryButton.setAttribute('onclick', 'displayRandomQuestion(\'' + categories[i] + '\');');
        categoryButton.className = "category";

        categoryButton.innerHTML = categories[i];
        categoryListElement.appendChild(categoryButton);

        const categoryOption = document.createElement('option');
        categoryOption.setAttribute('value', categories[i]);
        categoryOption.innerText = categories[i];
        categoriesOptions.appendChild(categoryOption);
    }
}

// display a random card 
function displayRandomFlashcard(category=false) {
    // always show the question side of the card first
    cardElement.classList.remove('is-flipped');

    if (category) {
        let filteredQuestions = [];
        newFlashcardButton.setAttribute('onclick', 'displayRandomQuestion(\'' + category + '\')');

        for (let i = 0; i < questions.length; i++) {
            if (questions[i].category === category) {
                filteredQuestions.push(questions[i]);
            }
        }

        if (filteredQuestions === undefined || filteredQuestions.length == 0) {
            alert('There are no flashcards in this category. Why don\'t you add some?');
        } else {
            let randNum = Math.floor(Math.random() * filteredQuestions.length);
            questionElement.innerHTML = filteredQuestions[randNum].question;
            answerElement.innerHTML = filteredQuestions[randNum].answer;
            deleteFlashcardButton.setAttribute('onclick', 'deleteFlashcard(\'' + filteredQuestions[randNum].id + '\')');
        }
    } else {
        let randNum = Math.floor(Math.random() * questions.length);
        questionElement.innerHTML = questions[randNum].question;
        answerElement.innerHTML = questions[randNum].answer;

        deleteFlashcardButton.setAttribute('onclick', 'deleteFlashcard(\'' + questions[randNum].id + '\')');
        newFlashcardButton.setAttribute('onclick', 'displayRandomQuestion()');
    }

    userFlashcardFormElement.classList.remove('visible');
    userFlashcardFormElement.classList.add('invisible');
}

function addFlashcard(formData) {
    const userQuestion = formData.question.value;
    const userAnswer = formData.answer.value;
    const userCategory = formData.category.value;

    const generatedID = questions.length + 1;

    const userFlashcard = {
        id: generatedID,
        question: userQuestion,
        answer: userAnswer,
        category: userCategory
    }

    questions.push(userFlashcard);

    userStorage.setItem('questions', JSON.stringify(questions));

    alert('You added a new flashcard!');

    userFlashcardFormElement.classList.remove('visible');
    userFlashcardFormElement.classList.add('invisible');
    jumpToAnchor('top');
}

function deleteFlashcard(flashcardID) {

    const confirmedDelete = confirm("Are you sure you want to delete the current flashcard?");
    if (confirmedDelete) {

        for (let i = 0; i < questions.length; i++)

            if (questions[i].id == flashcardID) {
                questions.splice(i, 1);
                displayRandomFlashcard();
                alert("The flashcard was deleted!");
                userStorage.setItem('questions', JSON.stringify(questions));
                break;
            }
    }


    jumpToAnchor('top');
}

function toggleFlashcard() {
    cardElement.classList.toggle('is-flipped');
}

function toggleUserFlashcardForm() {
    userFlashcardFormElement.classList.add('visible');
    userFlashcardFormElement.classList.remove('invisible');

    jumpToAnchor('flashcard-form');
}

function jumpToAnchor(anchor) {
    window.location.href = '#' + anchor;
}

displayCategories();

cardElement.addEventListener('click', toggleFlashcard);
addFlashcardButton.addEventListener('click', toggleUserFlashcardForm);
newFlashcardButton.addEventListener('click', displayRandomFlashcard());
resetFlashCardsButton.addEventListener('click', clearLocalUserStorage);