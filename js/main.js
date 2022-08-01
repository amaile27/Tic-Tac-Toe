
//1.1 define colors object
const colors = {
    'null': "black",
    'player1': 'pink',
    'player2': 'blue'
  };
  
  //1.2 define winning combinations
  const winningCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];

  
  
//2.1 create board array
  let board = [];
//2.2 create turn variable
  let turn;
//2.3 create winner variable
  let winner;

  const playerTurn = 'player1';

  // not in instructions but i think i need different messages for winner and tie outcomes.
  const winMsg = `${winner} is the winner!`; //figured this fancy thing `${}` out in office hours to grab that function. Maybe can also use for currentPlayer?
  const tieMsg = 'Game over. Tie.';
 

//   event listeners, added other one below with initGame
// need something  to listen for click box on board to get next turn
  document.getElementById('1').addEventListener('click', playerBoxClick);
  document.getElementById('2').addEventListener('click', playerBoxClick);
  document.getElementById('3').addEventListener('click', playerBoxClick);
  document.getElementById('4').addEventListener('click', playerBoxClick);
  document.getElementById('5').addEventListener('click', playerBoxClick);
  document.getElementById('6').addEventListener('click', playerBoxClick);
  document.getElementById('7').addEventListener('click', playerBoxClick);
  document.getElementById('8').addEventListener('click', playerBoxClick);
  document.getElementById('9').addEventListener('click', playerBoxClick);


  //3. DOM elements? need to grab boxes 
  const boxes = document.getElementById('board');


  //4.1 initialize board array, set winner to null, set to start with player1 (x), adding whose turn it is (not sure if this is the right way to do it.)
  // should be able to call function before because declaration function.
  initGame();

  // need something to listen for click button to restart game
  document.getElementById('restartgame').addEventListener('click', initGame);

  function initGame() {
    board = [
      [{id:'1'},{id:'2'},{id:'3'},
       {id:'4'},{id:'5'},{id:'6'},
       {id:'7'},{id:'8'},{id:'9'}]
    ];
    winner = null;
    return playerTurn;
    render();
  };

  
  //4.2 render the board, loop over all 9 boxes 
  // not understanding the whole background color thing in the instructions 
  // I think as long as I'm checking through the array for what box has been marked and then returing result messages, I should be ok?
  function render() {
    board.forEach(function(markBox){
        for (let i = 1; i < board.length; i++); {
        return (markBox[i]);
      };
    });  
        if (winner !== null) {
            return `${turn} it is your turn.`;
        }else if (winner) {
            return winMsg;
        }else {
            return tieMsg; 
    };
};



 //4.3 wait for player to click a box
// Here i need to have the player pick the box, get id of that box, check if available, update board, and check for winner?


function playerBoxClick(event) {
    let index = boxes.findIndex(function(box) {
    return boxes === event.target;  
  });
  board[index] = turn;
  if (turn === "player1") {
    return turn = 'player2';
  }else {
    return turn = 'player1';
  };
};



//I'm getting so lost and have too many errors but I'll just try to go ahead with the check winner function.

function checkForWinner() {
  winningCombos.forEach(function(combo)) {
    if (combo === winningCombos[0] || winningCombos[1] || winningCombos[2] 
               || winningCombos[3] || winningCombos[4] || winningCombos[5]
               || winningCombos[6] || winningCombos[7] || winningCombos[8]) {
      return winMsg;
    }else {
      return turn;
    };
  };
};


//Game not working :( ... I think I have too many errors in my render function. 
   