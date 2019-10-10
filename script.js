const cardElement = document.querySelector('.card');
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const newQuestionButton = document.getElementById('new-question');
const categoryListElement = document.getElementById('category-list');
const userQuestionFormElement = document.querySelector('.user-question');
const categoriesOptions = document.getElementById('categories-options');

const categories = ['JS', 'HTML', 'CSS'];
const questions = [
    {
        question: 'What is the use of <em>isNaN function</em>?',
        answer: 'isNan function returns true if the argument is not a number otherwise it is false',
        category: 'JS'
    },
    {
        question: 'Explain what is pop()method in JavaScript?',
        answer: 'The pop() method is similar as the shift() method but the difference is that the Shift method works at the start of the array. Also the pop() method take the last element off of the given array and returns it. The array on which is called is then altered.',
        category: 'JS'
    },
    {
        question: 'What is "this" keyword in JavaScript?',
        answer: '"this" keyword refers to the object from where it was called',
        category: 'JS'
    },
    {
        question: 'Operators: What is the <em>===</em> operator?',
        answer: '=== is called as strict equality operator which returns true when the two operands are having the same value without any type conversion',
        category: 'JS'
    },
    {
        question: 'What are all the <em>looping</em> structures in JavaScript?',
        answer: 'Following are looping structures in Javascript: for while, do-while',
        category: 'JS'
    },
    {
        question: 'Explain the difference between <em>"=="</em> and <em>"==="</em>?',
        answer: '"==" checks only for equality in value whereas "===" is a stricter equality test and returns false if either the value or the type of the two variables are different',
        category: 'JS'
    },
    {
        question: 'What do we mean by <em>NULL</em> in Javascript?',
        answer: 'The NULL value is used to represent no value or no object. It implies no object or null string, no valid boolean value, no number and no array object',
        category: 'JS'
    },
    {
        question: 'What are all the types of Pop up boxes available in JavaScript?',
        answer: 'Alert(), Confirm() and Prompt()',
        category: 'JS'
    },
    {
        question: 'What does CSS stand for?',
        answer: 'Cascading Style Sheets',
        category: 'CSS'
    },
    {
        question: 'What is HTML?',
        answer: 'HTML stands for Hyper Text Markup Language. It is a language of World Wide Web. It is a standard text formatting language which is used to create and display pages on the Web. It makes the text more interactive and dynamic. It can turn text into images, tables, links.',
        category: 'HTML'
    },
    {
        question: 'What is the use of Canvas element?',
        answer: 'The canvas element helps to build charts, graphs, bypass Photoshop to create 2D images and place them directly into HTML5 code',
        category: 'HTML'
    }
];

function displayCategories() {

    for(let i = 0; i < categories.length; i++) {
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

function displayRandomQuestion(category=false) {
    // always show the question side of the card first
    cardElement.classList.remove('is-flipped');
    
    if(category){
        newQuestionButton.setAttribute('onclick', 'displayRandomQuestion(\'' + category + '\')');

        let filteredQuestions = [];
        for (let i = 0; i < questions.length; i++) {
            if (questions[i].category === category) {
                filteredQuestions.push(questions[i]);
            }
        }
        let randNum = Math.floor(Math.random() * filteredQuestions.length);
        questionElement.innerHTML = filteredQuestions[randNum].question;
        answerElement.innerHTML = filteredQuestions[randNum].answer;
    }
    else {
        let randNum = Math.floor(Math.random() * questions.length);
        questionElement.innerHTML = questions[randNum].question;
        answerElement.innerHTML = questions[randNum].answer;
        newQuestionButton.setAttribute('onclick', 'displayRandomQuestion()');
    }
    
    userQuestionFormElement.classList.remove('visible');
    userQuestionFormElement.classList.add('invisible');
}

function addFlashcard(form) {
    const userQuestion = form.question.value;
    const userAnswer = form.answer.value;
    const userCategory = form.category.value;

    const userFlashcard = {
            question: userQuestion,
            answer: userAnswer,
            category: userCategory
        }
    
    questions.push(userFlashcard);
}

function toggleCard() {
    cardElement.classList.toggle('is-flipped');
}

function toggleUserQuestionForm() {
    userQuestionFormElement.classList.add('visible');
    userQuestionFormElement.classList.remove('invisible');
    window.location.href = '#flashcard-form';
}

displayCategories();
// eventListeners
newQuestionButton.addEventListener('click', displayRandomQuestion());
cardElement.addEventListener('click', toggleCard);