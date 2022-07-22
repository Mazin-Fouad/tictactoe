let fields = [];
let currentShape = 'Cross';
let gameOver = false;
let click = new Audio('./sounds/click-effect.mp3');
let success = new Audio('./sounds/success.mp3');

function init() {
  document.getElementById('start-screen').classList.remove('d-none');
  document.getElementById('table').style.display = 'none';
  document.getElementById('player-panel').style.display = 'none';
}

function start() {
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('table').style.display = '';
  document.getElementById('player-panel').style.display = '';
}

function fillShape(id) {
  if (!fields[id] && !gameOver) {
    if (currentShape == 'Cross') {
      currentShape = 'Circle';
      document.getElementById('player-1').classList.remove('player-inactive');
      document.getElementById('player-2').classList.add('player-inactive');
    } else {
      currentShape = 'Cross';
      document.getElementById('player-2').classList.remove('player-inactive');
      document.getElementById('player-1').classList.add('player-inactive');
    }
    fields[id] = currentShape;
    //console.log(fields);
    draw();
    checkForWinn();
  }
}

function draw() {
  for (let i = 0; i < fields.length; i++) {
    if (fields[i] == 'Circle') {
      document.getElementById('circle-' + i).classList.remove('d-none');
    }
    if (fields[i] == 'Cross') {
      document.getElementById('cross-' + i).classList.remove('d-none');
    }
  }
  click.play();
}

function checkForWinn() {
  let winner;

  if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
    winner = fields[0];
    document.getElementById('line-1').style.transform = 'scaleX(1.1)';
  }

  if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
    winner = fields[3];
    document.getElementById('line-2').style.transform = 'scaleX(1.1)';
  }

  if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
    winner = fields[6];
    document.getElementById('line-3').style.transform = 'scaleX(1.1)';
  }

  if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
    winner = fields[0];
    document.getElementById('line-4').style.transform = 'rotate(90deg) scale(1.1)';
  }

  if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
    winner = fields[1];
    document.getElementById('line-5').style.transform = 'rotate(90deg) scale(1.1)';
  }

  if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
    winner = fields[2];
    document.getElementById('line-6').style.transform = 'rotate(90deg) scale(1.1)';
  }

  if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
    winner = fields[0];
    document.getElementById('line-7').style.transform = 'rotate(45deg) scale(1.1)';
  }

  if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
    winner = fields[2];
    document.getElementById('line-8').style.transform = 'rotate(-45deg) scale(1.2)';
  }
  youHaveWon(winner);
}

function youHaveWon(winner) {
  if (winner) {
    gameOver = true;
    console.log(winner);
    setTimeout(showEndScreen, 2000, winner);
  }
}

function showEndScreen(winner) {
  document.getElementById('the-winner').innerHTML = generateEndScreenContent(winner);
  document.getElementById('end-screen').classList.remove('d-none');
  document.getElementById('player-panel').style.display = 'none';
  document.getElementById('table').style.display = 'none';
  hideLines();
  success.play();
}

function generateEndScreenContent(winner) {
  return /*html*/ `The winner is <span class="the-winner-span">'${winner} Player'</span>`;
}

function hideLines() {
  document.getElementById('line-1').classList.add('d-none');
  document.getElementById('line-2').classList.add('d-none');
  document.getElementById('line-3').classList.add('d-none');
  document.getElementById('line-4').classList.add('d-none');
  document.getElementById('line-5').classList.add('d-none');
  document.getElementById('line-6').classList.add('d-none');
  document.getElementById('line-7').classList.add('d-none');
  document.getElementById('line-8').classList.add('d-none');
}

function restart() {
  gameOver = false;
  fields = [];
  document.getElementById('end-screen').classList.add('d-none');
  document.getElementById('table').style.display = 'flex';
  for (let i = 0; i < 9; i++) {
    document.getElementById('cross-' + i).classList.add('d-none');
    document.getElementById('circle-' + i).classList.add('d-none');
  }
  showLines();
  resetScaleAndRotate();
  showPlayerPanel();
}

function showPlayerPanel() {
  document.getElementById('player-panel').style.display = '';
}

function showLines() {
  document.getElementById('line-1').classList.remove('d-none');
  document.getElementById('line-2').classList.remove('d-none');
  document.getElementById('line-3').classList.remove('d-none');
  document.getElementById('line-4').classList.remove('d-none');
  document.getElementById('line-5').classList.remove('d-none');
  document.getElementById('line-6').classList.remove('d-none');
  document.getElementById('line-7').classList.remove('d-none');
  document.getElementById('line-8').classList.remove('d-none');
}

function resetScaleAndRotate() {
  document.getElementById('line-1').style.transform = 'scaleX(0)';
  document.getElementById('line-2').style.transform = 'scaleX(0)';
  document.getElementById('line-3').style.transform = 'scaleX(0)';
  document.getElementById('line-4').style.transform = 'rotate(0) scale(0)';
  document.getElementById('line-5').style.transform = 'rotate(0) scale(0)';
  document.getElementById('line-6').style.transform = 'rotate(0) scale(0)';
  document.getElementById('line-7').style.transform = 'rotate(0) scale(0)';
  document.getElementById('line-8').style.transform = 'rotate(0) scale(0)';
}
