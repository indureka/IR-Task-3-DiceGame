
let player1 = 'Player1';
let player2 = 'Player2';

let editButton = document.querySelector('.edit-btn');

 //set the player names
function EditName() {
    player1 = prompt("Change Player1 name");
    player2 = prompt("Change Player2 name");

    if(player1.length<1 || player2.length<1) {
        alert('please eneter a valid name');
        return;
    }

    document.querySelector('p.player1').innerHTML = player1;
    document.querySelector('p.player2').innerHTML = player2;
}

editButton.addEventListener('click', EditName);

// roll dice

function rollDice() {

let diceNumber1 = document.querySelector('.img1');
let diceNumber2 = document.querySelector('.img2');

diceNumber1.setAttribute('src', './images/diceroll.gif');
diceNumber2.setAttribute('src', './images/diceroll.gif');

let winner = document.querySelector('.winner');

// random function for rolling dice

setTimeout(() => {
    let randomNumber1 = Math.floor(Math.random() *6) +1;
    let randomNumber2 = Math.floor(Math.random() *6) +1;

    diceNumber1.setAttribute('src','./images/dice'+randomNumber1+'.png');
    diceNumber2.setAttribute('src','./images/dice'+randomNumber2+'.png');

    if(randomNumber1 === randomNumber2) {
        winner.innerHTML ="🏆Draw🏆";
    }
    else if(randomNumber1 > randomNumber2) {
        winner.innerHTML = player1 +" Wins 🏆";
    }

    else {
        winner.innerHTML = player2 +" Wins 🏆";
    }

}, 2500);

}

let rollButton = document.querySelectorAll('.btn');
    rollButton.forEach(button => {
    button.addEventListener('click',rollDice);    
})








