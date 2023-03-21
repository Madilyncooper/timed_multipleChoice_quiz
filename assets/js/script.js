
var questions = [
    {
        title: '1. Commonly used data types DO NOT include:',
        choices: ['a. strings', 'b. booleans', 'c. alerts', 'd. numbers'],
        answer: 'c. alerts',
    },
    {
        title: '2. The condition in an if / else statement is enclosed within ____.',
        choices: ['a. quotes', 'b. curly brackets', 'c. parentheses', 'd. square brackets'],
        answer: 'c. parentheses',
    },
    {
        title: '3. Arrays in JavaScript can be used to store ____.',
        choices: [
            'a. numbers and strings',
            'b. other arrays',
            'c. booleans',
            'd. all of the above',
        ],
        answer: 'd. all of the above',
    },
    {
        title: '4. String values must be enclosed within ____ when being assigned to variables.',
        choices: ['a. commas', 'b. curly brackets', 'c. quotes', 'd. parentheses'],
        answer: 'c. quotes',
    },
    {
        title: '5. A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['a. JavaScript', 'b. terminal / bash', 'c. for loops', 'd. console.log'],
        answer: 'd. console.log',
    },
];

var highScoreSavedEl;

var inputEl;

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

var scoresHistory = JSON.parse(localStorage.getItem(scoresHistory)) || [];

function updateInitials(event) {

    var tmpScoreObj = {
        score: score,
        initial: event.target.value
    };

    scoresHistory.push(tmpScoreObj);

    localStorage.setItem('scoresHistory', scoresHistory);


};

function nextQuestion() {

    headingEl.innerHTML = '';
    questionContentEl.innerHTML = '';

    var titleEl = document.createElement('h2');
    titleEl.textContent = currentQuestion.title;
    titleEl.setAttribute('style', 'color: rgb(26, 26, 37); font-family: Arial, Helvetica, sans-serif;');
    questionContentEl.appendChild(titleEl);

    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var buttonEl = document.createElement('button');
        buttonEl.setAttribute('class', 'choice');
        buttonEl.setAttribute('style', 'border-radius: 8px; width: 150px; font-size: 20px; margin-bottom: 10px; background-color: rgb(135,206,235); color: white;')
        buttonEl.textContent = currentQuestion.choices[i];

        questionContentEl.appendChild(buttonEl);
    }
};


startButtonEl.addEventListener('click', function (event) {
    event.preventDefault();
    timer = setInterval(function () {
        timeLeft--;
        timeLeftEl.textContent = timeLeft;

        if (timeLeft <= 0 || indexOfCurrentQuestion === questions.length) {
            clearInterval(timer);

            timeLeft.textContent = 0;

            questionContentEl.innerHTML = '';
            var titleEl = document.createElement('h2');
            titleEl.textContent = 'Your Score: ';
            titleEl.setAttribute('style', 'font-size: 20px; margin-top: 15px;')
            questionContentEl.appendChild(titleEl);

            var scoreEl = document.createElement('p');
            scoreEl.textContent = score;
            scoreEl.setAttribute('style', 'font-size: 25px;');
            questionContentEl.appendChild(scoreEl);

            var initialEl = document.createElement('p');
            initialEl.textContent = 'Submit your initials to save your score: ';
            initialEl.setAttribute('style', 'font-size: 25px');
            inputEl = document.createElement('INPUT');
            inputEl.setAttribute('type', 'input[name="initials"');

            headingEl.appendChild(initialEl);
            headingEl.appendChild(inputEl);

            var grabInputEl = document.querySelector('INPUT');

            grabInputEl.addEventListener('change', updateInitials);


        }
    }, 1000);

    nextQuestion();
});


questionContentEl.addEventListener('click', function (event) {
    event.preventDefault();

    if (event.target.matches('.choice')) {



        if (currentQuestion.answer === event.target.textContent) {

            score += 1;

        }

        else {
            timeLeft -= 10;

        }


        indexOfCurrentQuestion += 1;
        if (indexOfCurrentQuestion < questions.length) {
            nextQuestion(currentQuestion = questions[indexOfCurrentQuestion]);
        }
    }

});


highScoreEl.addEventListener('click', function (event) {
    event.preventDefault();

    headingEl.innerHTML = '';
    questionContentEl.innerHTML = '';
    highScoreEl.innerHTML = '';

    var titleEl = document.createElement('h1');
    titleEl.textContent = 'High Scores: ';
    titleEl.setAttribute('style', 'font-size: 30px; margin-top: 15px;');
    headingEl.appendChild(titleEl);


    highScoreSavedEl = document.createElement('ul');
    headingEl.appendChild(highScoreSavedEl);

    var personalScoreEl = document.createElement('li');

    for (var i =0; i < tmpScoreObj.length; i++) {
        
        personalScoreEl.textContent = scoresHistory;
        personalScoreEl.setAttribute('style', 'font-size: 20px; font-weight: 300; list-style-type: square; margin-left: -65px; background-color: rgb(240,230,140); padding-left: 50px; padding-right: 50px;');
        highScoreSavedEl.appendChild(personalScoreEl);
    }

});
















