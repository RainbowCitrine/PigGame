'use strict'; 

// Selecting Elements 
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); 
const DiceEl = document.querySelector('.dice'); 
const btnNew = document.querySelector('.btn--new'); 
const currentl0El = document.getElementById('current--0'); 
const current1El = document.getElementById('current--1'); 
const btnRoll = document.querySelector('.btn--roll'); 
const btnHold = document.querySelector('.btn--hold'); 
const player0El = document.querySelector('.player--0'); 
const player1El = document.querySelector('.player--1'); 

// Must declare these as global variables to use in the function 

let scores, currentScore, activePlayer, playing; 

const init = function(){
    score0El.textContent = 0; 
    score1El.textContent = 0; 
    currentl0El.textContent = 0; 
    current1El.textContent = 0; 
    score0El.textContent = 0; 
    score1El.textContent = 0; 
    scores = [0, 0]; 
    currentScore = 0; 
    activePlayer = 0; 
    playing = true;

    // Do both players because either one of them can win the game 
    DiceEl.classList.add('hidden'); 
    player0El.classList.remove('player--winner'); 
    player1El.classList.remove('player--winner'); 
    player0El.classList.add('player--active'); 
    player1El.classList.remove('player--active'); 
}

init(); 

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0; 
            currentScore = 0; 
            activePlayer = activePlayer == 0 ? 1 : 0; 
            player0El.classList.toggle('player--active'); 
            player1El.classList.toggle('player--active'); 
}

btnRoll.addEventListener('click', function(){
    // 1. Generating a Random dice roll 
    if(playing)
    {

    
    const dice = Math.trunc(Math.random() * 6 ) + 1; 
    console.log(dice); 

    // 2. Display the dice 
    DiceEl.classList.remove('hidden'); 
    DiceEl.src = `imgs/dice-${dice}.png`

    // 3. Check for rolled 1: if true, swithc to next player 
        if(dice != 1)
        {
            // Add dice to the current score 
            currentScore += dice; 
            document.getElementById(`current--${activePlayer}`).textContent = currentScore; 
        }
        else
        {
            // Switch to next player
            switchPlayer();
        }
    }
    // 4. 
});


btnHold.addEventListener('click', function(){
    if(playing)
    {

    
    // 1. Add currents score to active player's score 
    scores[activePlayer] += currentScore
    console.log(scores[activePlayer]); // Used for debugging to find logical errors within the code base
    //scores[1] = scores[1] + currentScore; 
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]; 

    // 2. Check if player's score is >= 100 
    // Finish the game 
    if(scores[activePlayer] >= 20)
    {
        playing = false; 
        DiceEl.classList.add('hidden'); 
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }
    else
    {
        switchPlayer();
    }
    // Switch to the next player 
}
});

btnNew.addEventListener('click', init);