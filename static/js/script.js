//challenge1: your age in days
function ageInDays(){
var birthyear=prompt('what year were you born');
var ageInDayss=(2020-birthyear)*365;
var h1=document.createElement('h1');
var textAnswer=document.createTextNode('you are '+ageInDayss+ ' days old');
h1.setAttribute('id','ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}
//challenge 2 cat generator

function generateCat(){
    var image=document.createElement('img');
    var div=document.getElementById('flex-cat-gen');
    image.src="https://thecatapi.com/api/images/get?format=src&type=gif&small";
    div.appendChild(image);
}

//Challenge 3: Rock, Paper, Scissors

function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;

    //humanChoice=yourChoice.id;
    //botChoice=
    //results=decideWinner(humanChoice, botChoice); // [0,1] human lost and computer won
    //message=finalResult(results); // 'You Won'
    rpsFrontEnd(yourChoice.id, botChoice, message);
}