$(document).ready(function(){
    var magic8Ball = {};
    magic8Ball.listOfAnswers = ["It is certain", "It is decidedly so, Without a doubt", "Yes – definitely", "Signs point to yes", "Reply hazy", "Better not tell you now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Indubitably", "In your dreams."];
    magic8Ball.askQuestion = function(question){
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];
     
        $("#answer").text( answer );
     
        console.log(question);
        console.log(answer);
    };
    var onClick = function() {
        var question = prompt("ASK A YES/NO QUESTION!");magic8Ball.askQuestion(question);
    };
    $("#questionButton").click( onClick ); 
    });
