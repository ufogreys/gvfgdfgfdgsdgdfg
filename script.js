let squares = document.querySelectorAll('.square');
let currentPlayer = '69';
let gameOver = false;

function handleClick(e) {
  if (gameOver) {
    return;
  }
  if (e.target.classList.contains('69') || e.target.classList.contains('420')) {
    return;
  }
  e.target.classList.add(currentPlayer);
  e.target.textContent = currentPlayer;
  checkWin();
  currentPlayer = currentPlayer === '69' ? '420' : '69';
}

function checkWin() {
  let winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < winningCombos.length; i++) {
    let combo = winningCombos[i];
    if (squares[combo[0]].classList.contains(currentPlayer) && 
        squares[combo[1]].classList.contains(currentPlayer) && 
        squares[combo[2]].classList.contains(currentPlayer)) {
      let result = document.querySelector('#result');
      result.textContent = currentPlayer === '69' ? '69 WINS!' : '420 WINS!';
      gameOver = true;
      document.querySelector('#reset').style.display = 'block';
      return;
    }
  }
  let fullBoard = true;
  for (let i = 0; i < squares.length; i++) {
    if (!squares[i].classList.contains('69') && !squares[i].classList.contains('420')) {
      fullBoard = false;
      break;
    }
  }
  if (fullBoard) {
    let result = document.querySelector('#result');
    result.textContent = 'TIE GAME!';
    gameOver = true;
    document.querySelector('#reset').style.display = 'block';
  }
}

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', handleClick);
}

document.querySelector('#reset').addEventListener('click', function() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].classList.remove('69', '420');
    squares[i].textContent = '';
  }
  document.querySelector('#result').textContent = '';
  document.querySelector('#reset').style.display = 'none';
  currentPlayer = '69';
  gameOver = false;
});
