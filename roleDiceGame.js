// 'use strict';
const roll = document.querySelector('.roll');
const hold = document.querySelector('.hold');
const start = document.querySelector('.start');
const restart = document.querySelector('.restart');
let allPlayers = document.querySelectorAll('.player');
const diceImage = document.querySelector('.dice');
const totalScoreId = 'total-score-p';
const currentScoreId = 'score-p';
let current = document.querySelector('#' + currentScoreId);
let player = document.querySelector('.player');
let total = document.querySelector('#' + totalScoreId);
let dice = 0;
let active = 0;
let winnerName = '';
let playingStat = true;
let winner = document.querySelector('.player-name');
const whoStarts = function () {
  active = Math.floor(Math.random() * 2) + 1;
};
const passRoll = function () {
  currentScore = 0;
  current.textContent = 0;
  player.classList.toggle('active');
  // Give the roll to the other player
  active = active === 1 ? 2 : 1;
  player = document.querySelector('.player' + active);
  player.classList.toggle('active');
};

start.addEventListener('click', function () {
  if (playingStat) {
    whoStarts();
    roll.classList.remove('hidden');
    hold.classList.remove('hidden');
    start.classList.add('hidden');
    player = document.querySelector('.player' + active);
    player.classList.add('active');
    let currentScore = 0;
    let totalScore = 0;
    roll.addEventListener('click', function () {
      // genarting a random dice roll between 1-6
      dice = Math.floor(Math.random() * 6) + 1;
      //display dice image
      diceImage.classList.remove('hidden');
      diceImage.src = `images/dice-${dice}.png`;
      total = document.querySelector('#' + totalScoreId + active);
      current = document.querySelector('#' + currentScoreId + active);
      currentScore += dice;
      current.textContent = currentScore;
      if (dice === 1) {
        passRoll();
      }
    });
    hold.addEventListener('click', function () {
      totalScore = Number(total.textContent);
      totalScore += currentScore;
      total.textContent = totalScore;
      if (total.textContent >= 10) {
        player.classList.add('winner');
        winner = document.querySelector('.player-name' + active);
        console.log(`${winnerName} IS THE WINNER 🎉`);
        roll.classList.add('hidden');
        hold.classList.add('hidden');
        playingStat = false;
      }
      passRoll();
      currentScore = 0;
      current.textContent = 0;
    });
  }
});

restart.addEventListener('click', function () {
  playingSta = true;
  document.querySelector('#total-score-p1').textContent = 0;
  document.querySelector('#total-score-p2').textContent = 0;
  for (let i = 0; i < allPlayers.length; i++) {
    if (allPlayers[i].classList.contains('winner')) {
      allPlayers[i].classList.remove('winner');
    }
  }
  diceImage.classList.add('hidden');
  totalScore = 0;
  currentScore = 0;
  roll.classList.remove('hidden');
  hold.classList.remove('hidden');
});
