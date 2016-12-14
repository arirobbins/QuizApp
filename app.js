//State Object
var state = {
    questionSets: [
        {
            id: 1,
            question: "Which of these is not one of the seven dwarves?",
            a: "Happy",
            b: "Dippy",
            c: "Grumpy",
            d: "Dopey",
            answer: "b"  
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