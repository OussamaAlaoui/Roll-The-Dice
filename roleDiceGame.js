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
let winner = document.querySelector('.player-name');
const whoStarts = function () {
  active = Math.floor(Math.random() * 2) + 1;
};

start.addEventListener('click', function () {
  whoStarts();
  roll.classList.remove('hidden');
  hold.classList.remove('hidden');

  //console.log(active);
  start.classList.add('hidden');
  player = document.querySelector('.player' + active);
  player.classList.add('active');
  //console.log('here where the add active staty activated');

  //-------------------------------------------------------------
  let currentScore = 0;
  let totalScore = 0;
  roll.addEventListener('click', function () {
    diceImage.classList.remove('hidden');
    dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);
    // const passRole = function () {
    //   if (active === 1) {
    //     player.classList.remove('active');
    //     active = 2;
    //     player = document.querySelector('.player' + active);
    //     player.classList.add('active');
    //   } else {
    //     player.classList.remove('active');
    //     active = 1;
    //     player = document.querySelector('.player' + active);
    //     player.classList.add('active');
    //   }
    //   console.log('PassRle: -> ', active);
    // };
    // console.log(active);
    // console.log(`The active player is player${active}`);
    // console.log(player.classList);
    diceImage.src = `images/dice-${dice}.png`;
    total = document.querySelector('#' + totalScoreId + active);
    current = document.querySelector('#' + currentScoreId + active);

    currentScore += dice;
    current.textContent = currentScore;
    //console.log('->', currentScore);
    if (dice === 1) {
      currentScore = 0;
      current.textContent = 0;

      if (active === 1) {
        player.classList.remove('active');
        active = 2;
        player = document.querySelector('.player' + active);
        player.classList.add('active');
      } else {
        player.classList.remove('active');
        active = 1;
        player = document.querySelector('.player' + active);
        player.classList.add('active');
      }
    }
    console.log('->', active);
  });
  hold.addEventListener('click', function () {
    //console.log(player);
    totalScore = Number(total.textContent);
    totalScore += currentScore;
    total.textContent = totalScore;
    if (total.textContent >= 20) {
      player.classList.add('winner');
      winner = document.querySelector('.player-name' + active);
      console.log(`${winnerName} IS THE WINNER 🎉`);

      roll.classList.add('hidden');
      hold.classList.add('hidden');
    }

    if (active === 1) {
      player.classList.remove('active');
      active = 2;
      player = document.querySelector('.player' + active);
      player.classList.add('active');
    } else if (active === 2) {
      player.classList.remove('active');
      active = 1;
      player = document.querySelector('.player' + active);
      player.classList.add('active');
    }

    currentScore = 0;
    current.textContent = 0;
  });
});
restart.addEventListener('click', function () {
  let totScore = document.querySelectorAll('.total-score');
  for (let i = 0; i < allPlayers.length; i++) {
    if (allPlayers[i].classList.contains('winner')) {
      allPlayers[i].classList.remove('winner');

      totScore[i].textContent = 0;
    }
  }
  diceImage.classList.add('hidden');
  totalScore = 0;
  currentScore = 0;
  totScore.textContent = '0';
  roll.classList.remove('hidden');
  hold.classList.remove('hidden');
});

// console.log(whoStarts());

// console.log(player);
