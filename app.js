//State Object
var state = {
    questionSets: [
        {
            id: 0,
            question: "Which of these is not one of the seven dwarves?",
            a: "Happy",
            b: "Dippy",
            c: "Grumpy",
            d: "Dopey",
            answer: "b",
            correct: ""  
        },
        {
            id: 1,
            question: "In the story of Jack and the Beanstalk, which of these items is not an item that Jack stole from the giant?",
            a: "A bag of gold",
            b: "A harp",
            c: "A sword",
            d: "The goose",
            answer: "c",
            correct: ""    
        },
        {
            id: 2,
            question: "Which of these fairy tale characters loses a shoe?",
            a: "Red Rose",
            b: "Belle",
            c: "Snow White",
            d: "Cinderella",
            answer: "d",
            correct: ""    
        },
        {
            id: 3,
            question: "In which popular story would you find a talking cricket?",
            a: "Peter Pan",
            b: "Pinocchio",
            c: "Cinderella",
            d: "Briar Rose",
            answer: "b",  
            correct: ""
        },
        {
            id: 4,
            question: "The character of Maleficent appears in which fairy tale?",
            a: "Snow White",
            b: "Thumbelina",
            c: "Red Rose",
            d: "Sleeping Beauty",
            answer: "d",
            correct: ""    
        }
    ],
    answer: "",
    correct: "",
    counterCorrect: 0,
    currentIndex: 0,
    route: ""
};

//State Functions
function setStart(state, route){
    state.route = route;
}
//Update answer correct
function updateAnswer(state, questionIndex, answer){
    state.questionSets[questionIndex].correct = answer;
}

// Update all variables
function updateVariables(state){

}

//Start Over (onLast)


//Render-State Functions
function renderStart(state, element){

}

function renderQuestionArea(state/*, element*/){
    var index = state.currentIndex;
    //var inputLabel = Object.keys(state.questionSets[index].)
    $(".initial-text").addClass("hidden");
    $(".initial-text-answer-area").addClass("hidden");
    $("#question-block").removeClass("hidden");
    $("span.question-identifier").text(state.currentIndex + 1);
    $("#question-string").text(state.questionSets[index].question);
    //&nbspA) Happy
    console.log(state.questionSets[index].a);
    $("#a label").text(" A) " + state.questionSets[index].a);
    $("#b label").text(" B) " + state.questionSets[index].b);
    $("#c label").text(" C) " + state.questionSets[index].c);
    $("#d label").text(" D) " + state.questionSets[index].d);
    //state.currentIndex++;
}

function renderAnswerArea(state/*, element, correct*/){
    var index = state.currentIndex;
    var answerLetter = state.questionSets[index].answer;
    var answer = state.questionSets[index][answerLetter]; 
    var answerAreaText = '<p>The correct answer is:</p>'
                        + '<p>' + answerLetter.toUpperCase() 
                        + ") " + answer +'</p>' 
                        + '<p>Your got it <span class="js-right-or-wrong">'
                        + state.correct + '!</span></p>';
    $(".answer-area p").remove();
    $(".answer-area").append(answerAreaText);
}

function renderScoreArea(state/*, element*/) {
    var answered = state.currentIndex + "/" + state.questionSets.length;
    var score = state.counterCorrect + " correct, " 
                + (state.currentIndex - state.counterCorrect)
                + " incorrect";
    //console.log(state.counterCorrect, state.currentIndex);
    $("#num-answered").text(answered);
    $("#score").text(score);
}


//Event Listeners
function onStart(){
    $("button#start").on("click", function(event){
        $("#submit").removeClass("hidden");
        $("#start").addClass("hidden");
        renderQuestionArea(state);
    });
}

function getSetAnswer(state){
    $("input").on("change", function(event){
       $(this).attr("value").val();
    });
}

function checkAnswer(state){
    var index = state.currentIndex;
    if (state.answer == state.questionSets[index].answer){
        state.questionSets[index].correct = true;
    }
    else{
        state.questionSets[index].correct = false;
    }
}

function onSubmit(){
    $("button#submit").on("click", function(event){
        getSetAnswer(state);
        $("#submit").addClass("hidden");
        $("#next").removeClass("hidden");
        getSetAnswer(state);
        checkAnswer(state);
        renderAnswerArea(state);
        renderScoreArea(state);
    });
}

function onNext(){
    ++state.currentIndex;
}

function main(){
    onStart();
    onSubmit();
}

window.onload = function(){
    console.log("page loaded...");
};


$(document).ready(main);