
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
        answer: 'all of the above',
    },
    {
        title:
            '4. String values must be enclosed within ____ when being assigned to variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: 'quotes',
    },
    {
        title:
            '5. A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
        answer: 'console.log',
    },
];

var timeLeftEl = document.querySelector('#countdown');

var startButtonEl = document.querySelector('#start');

var questionContentEl = document.querySelector('#question-content');

var highScoreEl = document.querySelector('#high-score');

var headingEl = document.querySelector('#heading');

var indexOfCurrentQuestion = 0;

var timeLeft = 50;

var timer;

var currentQuestion = questions[indexOfCurrentQuestion];

var score = 0;

function firstNextQuestion() {

    headingEl.innerHTML = '';
    questionContentEl.innerHTML = '';

    var titleEl = document.createElement('h2');
    titleEl.textContent = currentQuestion.title;
    titleEl.setAttribute('style', 'color: rgb(26, 26, 37); font-family: Arial, Helvetica, sans-serif;');
    questionContentEl.appendChild(titleEl);

    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var buttonEl = document.createElement('button');
        buttonEl.setAttribute('class', 'choice');
        buttonEl.setAttribute('style', 'border-radius: 8px; width: 150px; font-size: 20px; margin-bottom: 10px; background-color: rgb(156, 178, 241); color: white;')
        buttonEl.textContent = currentQuestion.choices[i];

        questionContentEl.appendChild(buttonEl);
    }



}


startButtonEl.addEventListener('click', function (event) {
    event.preventDefault();
    timer = setInterval(function () {
        timeLeft--;
        timeLeftEl.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);

            timeLeft.textContent = 0;

            questionContentEl.innerHTML = '';
            var titleEl = document.createElement('h2');
            titleEl.textContent = 'Your Score: ';
            titleEl.setAttribute('style', 'font-size: 30px; margin-top: 15px;')
            questionContentEl.appendChild(titleEl);

            var scoreEl = document.createElement('p');
            scoreEl.textContent = score;
            scoreEl.setAttribute('style', 'font-size: 25px;');
            questionContentEl.appendChild(scoreEl);

            var initialEl = document.createElement('p');
            initialEl.textContent = 'Submit your initials to save your score: ';
            initialEl.setAttribute('style', 'font-size: 15px');
            var inputEl = document.createElement('INPUT');
            inputEl.setAttribute("type", "text");

            headingEl.appendChild(initialEl);
            headingEl.appendChild(inputEl);


        }
    }, 100);

    firstNextQuestion();

});

questionContentEl.addEventListener('click', function (event) {
    event.preventDefault();

    if (event.target.matches('.choice')) {

        console.log(event.target.textContent);
        console.log(currentQuestion.answer);

        if (currentQuestion.answer === event.target.textContent) {
            score += 1;

        }
        else {
            timeLeft -= 10;
        }

        firstNextQuestion(currentQuestion = questions[indexOfCurrentQuestion += 1]);
    }
});

highScoreEl.addEventListener('click', function (event) {
    event.preventDefault();

    headingEl.innerHTML = '';
    questionContentEl.innerHTML = '';
    var titleEl = document.createElement('h1');
    titleEl.textContent = 'High Scores: ';
    titleEl.setAttribute('style', 'font-size: 30px; margin-top: 15px;');
    headingEl.appendChild(titleEl);

    var highScoreSavedEl = document.createElement('ul');
    headingEl.appendChild(highScoreSavedEl);

    var personalScoreEl = document.createElement('li');
    personalScoreEl.textContent = score; //name +// 
    personalScoreEl.setAttribute('style', 'font-size: 20px; font-weight: 300; list-style-type: square; margin-left: -65px; background-color: white; padding-left: 50px; padding-right: 50px;');
    highScoreSavedEl.appendChild(personalScoreEl);


    // var highScoreSavedEl = document.createElement('ul');
    // headingEl.appendChild(highScoreEl);

    // var personalScores = document.createElement('li');
    // personalScores.textContent = inputEl.value();
    // highScoreSavedEl.appendChild(personalScores);
    // headingEl.appendChild(highScoreEl);




    headingEl.appendChild(scoreEl);


    // inputEl.addEventListener('submit', function(event){
    //     event.preventDefault();
    //     localStorage.setItem('HighSCore', score);

    // })


});














