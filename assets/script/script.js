var body = document.body;
var startBtn = document.querySelector(".start");
var displayRandomQuiz = document.querySelector(".card-contents");
var n5KanjiRepo = "";
var directionsEl = document.querySelector("#specific-directions");
var questionTextEl = document.querySelector("#question-text");
var potentSolu1El1 = document.querySelector("#potentSolu1")
var potentSolu1El2 = document.querySelector("#potentSolu2")
var potentSolu1El3 = document.querySelector("#potentSolu3")
var potentSolu1El4 = document.querySelector("#potentSolu4")
var potentSolu1El1final = "";
var potentSolu1El2final = "";
var potentSolu1El3final = "";
var potentSolu1El4final = "";

// body.appendChild(displayRandomQuiz);
// body.appendChild(startBtn);

function startQuiz() {
    startBtn.setAttribute("style", "display:none;");
    displayRandomQuiz.setAttribute("style", "display:flex;");
}


startBtn.addEventListener("click", function () {
    startQuiz();
    pullRandomN5KanjiQuestion();
});

function pullRandomN5KanjiQuestion() {
    directionsEl.textContent = n5KanjiDirections1;
    getRandomN5KanjiQuestionContent();
    questionTextEl.textContent= getRandomN5KanjiQuestionContent();
    getRandomN5KanjiSolution();
    potentSolu1El1.textContent = getRandomN5KanjiSolution();
    potentSolu1El2.textContent = getRandomN5KanjiSolution();
    potentSolu1El3.textContent = getRandomN5KanjiSolution();
    potentSolu1El4.textContent = getRandomN5KanjiSolution();
    
};



// Create several variables that are all linked together in a single body
// Must include the directions for the question, a Kanji question, and four possible answers, a solution.


var n5KanjiDirections1 = "Select the correct reading for the Kanji below.";
var n5KanjiQuestion1 = ["先生", "学生", "人生", "先月"];
var n5KanjiPossibleSolutions = ["せんせい", "がくせい", "じんせい", "せんげつ"];

// MATH AREA
function getRandomN5KanjiSolution() {
    return n5KanjiPossibleSolutions[Math.floor(Math.random() * n5KanjiPossibleSolutions.length)];

};

function getRandomN5KanjiQuestionContent() {
    return n5KanjiQuestion1[Math.floor(Math.random() * n5KanjiQuestion1.length)];
};
