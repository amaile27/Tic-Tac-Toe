
//1.1 define colors object
const colors = {
    'null': 'black',
    'player1': 'pink',
    'player2': 'dodgerblue',
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

  // not in instructions but i think i need different messages for winner and tie outcomes.
  const winMsg = `${winner} is the winner!`; //figured this fancy thing `${}` out in office hours to grab that function. Maybe can also use for currentPlayer?
  const tieMsg = 'Game over. Tie.';
  const playerTurn = `It's ${turn}'s turn!`; 


  //3. DOM elements? need to grab boxes 
  const boxes = document.getElementById('board');


  //4.1 initialize board array, set winner to null, set to start with player1 (x), adding whose turn it is (not sure if this is the right way to do it.)
  // should be able to call function before because declaration function.
  initGame();

  function initGame() {
    board = [
      '', '', '',
      '', '', '',
      '', '', ''
    ];
    winner = null;
    playerTurn = 'player1';
    render();
  };

  
  //4.2 render the board, loop over all 9 boxes 
  // not understanding the whole background color thing in the instructions 

  function render() {
    board.forEach(function(boxMarked){
        boxMarked = 0;
        if(i = 0, i < board.length, i++);
        return boxMarked[i];
    });
        if (winner !== null) {
            return turn = playerTurn;
        }else if (winner) {
            return winMsg;
        }else {
            return tieMsg; 
    }
};





