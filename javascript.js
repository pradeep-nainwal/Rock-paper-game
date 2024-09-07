let wins = 0;
let losses = 0;
let ties = 0;

function playgame(playermove) {
  const computermove = pickComputermove();
  let result = '';

  if (playermove === 'rock') {
    if (computermove === 'rock') {
      result = 'tie';
      ties++;
    } else if (computermove === 'paper') {
      result = 'you lose';
      losses++;
    } else if (computermove === 'scissors') {
      result = 'you win';
      wins++;
    }
  }

  if (playermove === 'paper') {
    if (computermove === 'rock') {
      result = 'you win';
      wins++;
    } else if (computermove === 'paper') {
      result = 'tie';
      ties++;
    } else if (computermove === 'scissors') {
      result = 'you lose';
      losses++;
    }
  }

  if (playermove === 'scissors') {
    if (computermove === 'rock') {
      result = 'you lose';
      losses++;
    } else if (computermove === 'paper') {
      result = 'you win';
      wins++;
    } else if (computermove === 'scissors') {
      result = 'tie';
      ties++;
    }
  }

  document.querySelector('.moves').innerHTML = `
    You
    <img src="images/${playermove}.jpg" class="hand-icon">
    <img src="images/${computermove}.jpg" class="hand-icon"> Computer`; 

  document.getElementById('result').innerText = `Result: ${result}`;
  document.getElementById('score').innerText = `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;
  document.getElementById('resetmessage').innerText = '';
}

function pickComputermove() {
  const random = Math.random();
  let computermove = '';

  if (random < 1/3) {
    computermove = 'rock';
  } else if (random < 2/3) {
    computermove = 'paper';
  } else {
    computermove = 'scissors';
  }
  return computermove;
}

function reset() {
  wins = 0;
  losses = 0;
  ties = 0;

  document.getElementById('score').innerText = `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;

  document.getElementById('result').innerText='';
  document.querySelector('.moves').innerHTML='';
}
