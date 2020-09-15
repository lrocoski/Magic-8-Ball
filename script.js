$(document).ready(function(){
    $("#answer").hide();
    var magic8Ball = {};
    magic8Ball.listOfAnswers = ["Yes – definitely", "Signs point to yes", "Reply hazy", "Better not tell you now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Indubitably", "In your dreams."];
    
    magic8Ball.askQuestion = function(question){
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];
        // $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
     
        $("#answer").text( answer );
     
        console.log(question);
        console.log(answer);
    };
    var onClick = function() {
        var question = prompt("ASK A YES/NO QUESTION!");
        magic8Ball.askQuestion(question);
        // $("#answer").hide();
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
        $("#8ball").effect("shake");
        setTimeout (
            function() {
                var question = prompt("Ask a yes or no question")
                magic8Ball.askQuestion(question)
            }, 500);
    };
    $("#questionButton").click( onClick );
    $("#answer").fadeIn(4000); 
    });
