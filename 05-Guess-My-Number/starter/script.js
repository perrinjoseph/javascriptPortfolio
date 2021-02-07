'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = "🎉 Correct";
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 19;

document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);
*/
//___________________________________________
let score = 0;
let randomNumber;
document.querySelector('.score').textContent = score;
generateRandomNumber();

const again = function again()
{
    document.querySelector('.guess').value=null;
    generateRandomNumber();
    document.querySelector('.message').textContent = "Start Guessing...";
    document.querySelector('.number').textContent ="?";
    generateRandomNumber();
    document.querySelector('.check').disabled = false;
    document.querySelector('body').style.backgroundColor = '#222';
}

const check = function check()
{
    let guess = Number(document.querySelector('.guess').value);
    if(guess)
    {
        if(guess == randomNumber)
        {   
            document.querySelector('.number').textContent = randomNumber;
            document.querySelector('.message').textContent = "Correct answer!🎉";
            score++;
            document.querySelector('.score').textContent = score;
            document.querySelector('.check').disabled = true;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
        }
        else
        {
            document.querySelector('.number').textContent = randomNumber;
            document.querySelector('.message').textContent = "Wrong Answer🚫";
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.check').disabled = true;
            document.querySelector('body').style.backgroundColor = 'red';

        }
    }
    else
    {
        document.querySelector('.message').textContent = "No Number🚫";
    }

}
function generateRandomNumber()
{
    randomNumber = Math.trunc(Math.random()*5);
}
document.querySelector('.check').addEventListener('click',check);

document.querySelector('.again').addEventListener('click',again);

////////////////////////////////////////////////////

//_____________________________________