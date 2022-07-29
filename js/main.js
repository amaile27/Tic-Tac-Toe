// 1) Define required constants:
// 	1.1) Define a colors object with keys of 'null' (when the square is empty), and players 1 & -1. The value assigned to each key represents the color to display for an empty square (null), player 1 and player -1.
// 	1.2) Define the 8 possible winning combinations, each containing three indexes of the board that make a winner if they hold the same player value.


//1.
const colors = {
    null: 'red',
    playerOne: 'black',
    playerTwo: 'white' 
};

//1.2 Thinking I'll make an object of win option objects that contain strings of all 8 winning possibilities.
// const winningCombos = {
//    winOne: ('one', 'two', 'three'),
//    winTwo: ('four', 'five', 'six'),
//    winThree: ('seven', 'eight', 'nine'),
//    winFour: ('one', 'four', 'seven'),
//    winFive: ('two', 'five', 'eight'),
//    winSix: ('three', 'six', 'nine'),
//    winSeven: ('one', 'five', 'nine'),
//    winEight: ('three', 'five', 'seven'),
// }
// probably better done with arrays?

const winningCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];


// 2) Define required variables used to track the state of the game:
// 	2.1) Use a board array to represent the squares.	2.2) Use a turn variable to remember whose turn it is.
// 	2.3) Use a winner variable to represent three different possibilities - player that won, a tie, or game in play.

// 2.1
const boardArr = [

]

let turn = 