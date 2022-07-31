
//1.1 define colors object
const colors {
    'null': 'black',
    'player1': 'pink',
    'player2': 'dodgerblue',
  }
  
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
  let playerTurn;
//2.3 create winner variable
  let winner;
  
  //4.1 initialize board array, set winner to null, set to start with player1 (x)
  initGame();

  function initGame() {
    board = [
      "", "", "",
      "", "", "",
      "", "", ""
    ];
    winner = null;
    playerTurn = 'player1';
    render();
  }

//4.2



  
  
  