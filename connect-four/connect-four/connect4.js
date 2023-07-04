/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

var WIDTH = 7;
var HEIGHT = 6;

var currPlayer = 1; // active player: 1 or 2
var board = []; // array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */

function makeBoard() {
    for (var y = 0; y < HEIGHT; y++) {
        board[y] = [];
        for (var x = 0; x < WIDTH; x++) {
            board[y][x] = null;
        }
    }
}

/** makeHtmlBoard: make HTML table and row of column tops. */

function makeHtmlBoard() {
    var htmlBoard = document.getElementById('board');

// This code block creates the top clickable area of the game board. Each cell in this row
// corresponds to a column in the game board.
  var top = document.createElement("tr");
  top.setAttribute("id", "column-top");
  top.addEventListener("click", handleClick);

  for (var x = 0; x < WIDTH; x++) {
    var headCell = document.createElement("td");
    headCell.setAttribute("id", x);
    top.append(headCell);
  }
  htmlBoard.append(top);

// This code block creates the main game board. It creates rows and within each row, it creates
// cells (or columns). Each cell is given an id corresponding to its position in the board, which
// will be useful for updating game state later on.
  for (var y = 0; y < HEIGHT; y++) {
    const row = document.createElement("tr");
    for (var x = 0; x < WIDTH; x++) {
      const cell = document.createElement("td");
      cell.setAttribute("id", `${y}-${x}`);
      row.append(cell);
    }
    htmlBoard.append(row);
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */

function findSpotForCol(x) {
    for (let y = HEIGHT - 1; y >= 0; y--) {
        if (!board[y][x]) {
            return y;
        }
    }
    return null;
}

/** placeInTable: update DOM to place piece into HTML table of board */

function placeInTable(y, x) {
    var piece = document.createElement("div");
    piece.classList.add("piece");
    piece.classList.add(`p${currPlayer}`); // add class for color styling

    var cell = document.getElementById(`${y}-${x}`);
    cell.append(piece);
}

/** endGame: announce game end */

function endGame(msg) {
    alert(msg);
}

/** handleClick: handle click of column top to play piece */

/** handleClick: handle click of column top to play piece */
function handleClick(evt) {
    var x = +evt.target.id;
    var y = findSpotForCol(x);
    if (y === null) {
        return;
    }

// place piece in board and add to HTML table
    board[y][x] = currPlayer; // update the board
    placeInTable(y, x);

// check for win
    if (checkForWin()) {
        return endGame(`Player ${currPlayer} won!`);
    }

// check for tie
    if (board.every(row => row.every(cell => cell))) {
        return endGame("Tie!");
    }

// switch players
    currPlayer = currPlayer === 1 ? 2 : 1;
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */
function checkForWin() {
    function _win(cells) {
// Check four cells to see if they're all color of current player
//  - cells: list of four (y, x) cells
//  - returns true if all are legal coordinates & all match currPlayer

        return cells.every(
            ([y, x]) =>
                y >= 0 &&
                y < HEIGHT &&
                x >= 0 &&
                x < WIDTH &&
                board[y][x] === currPlayer
        );
    }

// This function checks every cell in the board to see if a winning condition starts from there.
// A winning condition can be in the horizontal direction, vertical direction, or along the diagonals.
    for (var y = 0; y < HEIGHT; y++) {
        for (var x = 0; x < WIDTH; x++) {
// These arrays represent the coordinates for 4 cells in different directions
            var horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
            var vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
            var diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
            var diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

// If the 4 cells represented by any of the above arrays are all occupied by the current player,
// then it means the player has won
            if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
                return true;
            }
        }
    }
}

makeBoard();
makeHtmlBoard();
