//Challenge 1: Your age in days
function ageInDays(){
    var birthYear = prompt("What year were you born...dear friend (gave creeps, isn't it?) ? ");
    var totaldays = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + totaldays + ' days old.');
    h1.setAttribute('id', 'totaldays'); //<h1 id = "ageInDays"></h1>
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

//Challenge 2: Cat Generator
function reset(){
    document.getElementById("totaldays").remove();
}

function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById("flex-cat-gen");
    image.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=smallg";
    div.appendChild(image);
}

//Challenge 3: Rock, Paper, Scissors
function rpsGame(yourChoice){
    
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    
    
    botChoice = numToChoice(randToRpsInt());      //humanwon,    tie ,   botwon
    
    results = decideWinner(humanChoice, botChoice); //[1,0], [0.5, 0.5], [0,1]
    
    message = finalMessage(results); //{message: 'You won!', 'color':'green'}
     
    rpsFrontEnd(humanChoice, botChoice, message);
}

function randToRpsInt(){
    return Math.floor(Math.random() * 3);   
}

function numToChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice){
     var rpsDatabase = {
         'rock': {'scissors': 1,'rock':0.5, 'paper': 0},
         'paper': {'rock': 1, 'paper': 0.5, 'scissors':0 },
         'scissors': {'paper': 1, 'scissors':0.5, 'rock': 0}
     }

      var yourScore = rpsDatabase[yourChoice][computerChoice];
      var computerScore = rpsDatabase[computerChoice][yourChoice];

      return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if (yourScore === 0){
        return{'message': 'You lost!', 'color': 'red'};
    }
    else if(yourScore===0.5){
        return {'message': 'You tied', 'color': 'blue'};
    }
    else{
        return {'message': 'You won!', 'color': 'green'}
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    //let's remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice]  + "' height = 200 width = 200>"
    messageDiv.innerHTML= "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px;'>" + finalMessage['message'] +"</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] +"' height = 200 width = 200>"



    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

} 

