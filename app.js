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
            answer: "b"  
        },
        {
            id: 1,
            question: "In the story of Jack and the Beanstalk, which of these items is not an item that Jack stole from the giant?",
            a: "A bag of gold",
            b: "A harp",
            c: "A sword",
            d: "The goose",
            answer: "c"  
        },
        {
            id: 2,
            question: "Which of these fairy tale characters loses a shoe?",
            a: "Red Rose",
            b: "Belle",
            c: "Snow White",
            d: "Cinderella",
            answer: "d"  
        },
        {
            id: 3,
            question: "In which popular story would you find a talking cricket?",
            a: "Peter Pan",
            b: "Pinocchio",
            c: "Cinderella",
            d: "Briar Rose",
            answer: "b"  
        },
        {
            id: 4,
            question: "The character of Maleficent appears in which fairy tale?",
            a: "Snow White",
            b: "Thumbelina",
            c: "Red Rose",
            d: "Sleeping Beauty",
            answer: "d"  
        }
    ]
};

//State Functions



//Render-State Functions



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