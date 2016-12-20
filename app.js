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
    counterIncorrect: 0,
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
function stateReset(state){
    state.currentIndex = 0;
    state.counterCorrect = 0;
    state.counterIncorrect = 0;
    state.answer = "";
    for (var i = 0; i < state.questionSets.length; i++){
        state.questionSets[i].correct = "";
    }
}

function renderQuestionArea(state/*, element*/){
    var index = state.currentIndex;
    $(".initial-text").addClass("hidden");
    $(".initial-text-answer-area").addClass("hidden");
    $("#question-block").removeClass("hidden");
    $("span.question-identifier").text(state.currentIndex + 1);
    $("#question-string").text(state.questionSets[index].question);
    $("#a label").text(" A) " + state.questionSets[index].a);
    $("#b label").text(" B) " + state.questionSets[index].b);
    $("#c label").text(" C) " + state.questionSets[index].c);
    $("#d label").text(" D) " + state.questionSets[index].d);
}

function renderAnswerArea(state/*, element, correct*/){
    var index = state.currentIndex;
    var answerLetter = state.questionSets[index].answer;
    var answer = state.questionSets[index][answerLetter];
    var correct = "";
    if (state.questionSets[index].correct){
        correct = "right";
    }
    else {
        correct = "wrong";
    }
    var answerAreaText = '<p>The correct answer is:</p>'
                        + '<p>' + answerLetter.toUpperCase() 
                        + ") " + answer +'</p>' 
                        + '<p>Your got it <span class="js-right-or-wrong">'
                        + correct + '!</span></p>';
    $(".answer-area p").remove();
    $(".answer-area").append(answerAreaText);
    if (correct == "right"){
        $(".js-right-or-wrong").addClass("js-answer-right");
    }
    else {
        $(".js-right-or-wrong").addClass("js-answer-wrong");
    }
}

function renderScoreArea(state) {
    var answered = state.currentIndex + "/" + state.questionSets.length;
    var score = state.counterCorrect + " correct, " 
                + state.counterIncorrect + " incorrect";
    //console.log(state.counterCorrect, state.currentIndex);
    $("#num-answered").text(answered);
    $("#score").text(score);
}


//Event Listeners
function onStart(){
    $("button#start").on("click", function(event){
        $("input:checked").prop("checked", false);
        $("#submit").removeClass("hidden");
        $("#start").addClass("hidden");
        renderQuestionArea(state);
        renderScoreArea(state);
        $(".answer-area p").remove();
        //renderAnswerArea(state);
    });
}

function checkAnswer(state){
    var index = state.currentIndex;
    var answer = $("input:checked").val();
    if (answer == state.questionSets[index].answer){
        state.questionSets[index].correct = true;
        state.counterCorrect++;
    }
    else{
        state.questionSets[index].correct = false;
        state.counterIncorrect++;
    }
}

function onSubmit(){
    $("button#submit").on("click", function(event){
        if (state.currentIndex < state.questionSets.length-1){
            var answer = $("input:checked").val();
            state.answer = answer;
            $("#submit").addClass("hidden");
            $("#next").removeClass("hidden");
            checkAnswer(state);
            renderAnswerArea(state);
            ++state.currentIndex;
            renderScoreArea(state);
        }
        else {
            var answer = $("input:checked").val();
            state.answer = answer;
            $("#submit").addClass("hidden");
            $("#tryagain").removeClass("hidden");
            checkAnswer(state);
            renderAnswerArea(state);
            ++state.currentIndex;
            renderScoreArea(state);
        }
    });       
}

function onNext(){
    $("button#next").on('click', function(event){
        $("input:checked").prop("checked", false);
        renderQuestionArea(state);
        $("#submit").removeClass("hidden");
        $("#next").addClass("hidden");
    });    
}

function tryAgain(){
    $("button#tryagain").on('click', function(event){
        $("#tryagain").addClass("hidden");
        $("#start").removeClass("hidden");
        stateReset(state);
    });
}

function main(){
    onStart();
    onSubmit();
    onNext();
    tryAgain();
}

$(document).ready(main);