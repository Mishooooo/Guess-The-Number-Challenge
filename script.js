'use strict';

let checkBtn = document.querySelector('.check');
let message = document.querySelector('.message')
let guessInput = document.querySelector('input')
let score = document.querySelector('.score')
let highscoreL = document.querySelector('.label-highscore')
let again = document.querySelector('.again')
let numbValue = document.querySelector('.number')
let tryIndic = document.querySelector('.tryLeft');


let randomNum = Math.round(Math.random() * 20 );

const checkFunction = checkBtn.addEventListener('click', function () {
    
    if (guessInput.value === '' || !typeof(guessInput.value) === Number ){
    message.textContent = '!!! No number !!!'
    message.style.color = 'red'
    } 
    else if (score.textContent > 9 || tryIndic.textContent == 1){
        message.textContent = '💥You lost the game!';
        tryIndic.textContent = 0;
        score.textContent  = 10;
       }

    else if(guessInput.value > 20 || guessInput.value <  0) {
        message.textContent = '! Between 0 to 20 !'
        message.style.color = 'red'
    } 
    else if(randomNum == guessInput.value) {
        message.textContent = '🎉Correct Number!🎉';
        message.style.color = 'blue';
    numbValue.textContent = randomNum;
    numbValue.style.color = 'green';
        document.querySelector('body').style.backgroundColor = '#dfaf45';
        document.querySelector('body').style.transition = '1.5s';
    
     checkBtn.disabled = true;

    highscoreL.textContent = `🥇 Highscore:  ${score.textContent}`;
    }
     else if(randomNum > guessInput.value) {
        message.textContent = '📉 Too low!';
        message.style.color = 'white';

        score.textContent++;
           tryIndic.textContent = tryIndic.textContent -1;
           tryIndic.style.color = 'red';

    checkBtn.disabled = true;
    guessInput.onmouseover = () => checkBtn.disabled = false;
    }
    else if(randomNum < guessInput.value) {
        message.textContent = '📈 Too high! '
        message.style.color = 'white';
      
        score.textContent++
       
            tryIndic.textContent = tryIndic.textContent -1;
            tryIndic.style.color = 'red';

    checkBtn.disabled = true;
    guessInput.onmouseover = () => checkBtn.disabled = false;
    }  
       
})

