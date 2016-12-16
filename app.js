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

//Start Over (onLast)


//Render-State Functions
function renderStart(state, element){

}

function renderQuestionArea(state, element){
    var index = state.currentIndex;
    //var inputLabel = Object.keys(state.questionSets[index].)
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

function renderAnswerArea(state, element){
    var index = state.currentIndex;
    var answerAreaText = '<p class="initial-text-answer-area">The correct answer is:</p>' +
                '<p class="initial-text-answer-area">'+ state.questionSets[index].answer +'</p>' +
                '<p class="initial-text-answer-area">answer goes <span class="js-right-or-wrong">here!</span></p>'
    $(".answer-area p").remove();
    $(".answer-area").append(answerAreaText);
}


//Event Listeners
function main(){
    $("button").attr("name", "start").on("click", function(event){
        $("#submit").removeClass("hidden");
        $("#next").removeClass("hidden");
        $("#start").addClass("hidden");
    });
}

window.onload = function(){
    console.log("page loaded...");
};


$(document).ready(main);