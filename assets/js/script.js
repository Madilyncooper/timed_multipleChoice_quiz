
var questions = [
    {
        title: '1. Commonly used data types DO NOT include:',
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts',
    },
    {
        title: '2. The condition in an if / else statement is enclosed within ____.',
        choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
        answer: 'parentheses',
    },
    {
        title: '3. Arrays in JavaScript can be used to store ____.',
        choices: [
            'numbers and strings',
            'other arrays',
            'booleans',
            'all of the above',
        ],
        answer: '4. all of the above',
    },
    {
        title:
            '5. String values must be enclosed within ____ when being assigned to variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: 'quotes',
    },
    {
        title:
            '6. A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
        answer: 'console.log',
    },
];

var timeLeftEl = document.querySelector('#countdown');

var startButtonEl = document.querySelector('#start');

var questionContent = document.querySelector('#question-content');

var indexOfCurrentQuestion = 0;

var timeLeft = 75;

var timer;

var currentQuestion = questions[indexOfCurrentQuestion];

var score = [];

function firstNextQuestion() {

    document.querySelector('h1').innerHTML = '';

    var titleEl = document.createElement('h2');
    titleEl.textContent = currentQuestion.title;
    questionContent.appendChild(titleEl);

    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var buttonEl = document.createElement('button');
        buttonEl.setAttribute('class', 'choice');
        buttonEl.textContent = currentQuestion.choices[i];

        questionContent.appendChild(buttonEl);
    }



}


function nextQuestion(currentQuestion = questions[indexOfCurrentQuestion += 1]) {

    document.querySelector('#question-content').innerHTML = '';

    var titleEl = document.createElement('h2');
    titleEl.textContent = currentQuestion.title;
    questionContent.appendChild(titleEl);

    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var buttonEl = document.createElement('button');
        buttonEl.setAttribute('class', 'choice');
        buttonEl.textContent = currentQuestion.choices[i];

        questionContent.appendChild(buttonEl);
    }



}


startButtonEl.addEventListener('click', function (event) {
    event.preventDefault();
    timer = setInterval(function () {
        timeLeft--;
        timeLeftEl.textContent = timeLeft;

    if (timeLeft === 0) {
        clearInterval(timer);
        // viewHighscore();
    }
    }, 1000);

    firstNextQuestion();

});

questionContent.addEventListener('click', function (event) {
    event.preventDefault();

    if (event.target.matches('.choice')) {

        console.log(event.target.textContent);
        console.log(currentQuestion.answer);

        if (currentQuestion.answer === event.target.textContent) {
            
        }
        else {
            timeLeft -= 10;
        }
        nextQuestion();
    }
});










