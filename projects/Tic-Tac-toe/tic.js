let origBoard;//the board that played sides will be stored
const huPlayer = 'O';//the human player symbols
const aiPlayer = 'X';//the ai player symbols
const winCombos = [
    //this are the winnings conditons
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
]

const cells = document.querySelectorAll('.cell');//selects all the elements with cell as class
startGame();//the startGame function is called at first

function startGame(){//this function is called when replay is clicked
    document.querySelector(".endgame").style.display = "";
    document.querySelector('.text').innerHTML = ''
    origBoard = Array.from(Array(9).keys())//setting the original board to an array from 0-8
    for(let i = 0; i < cells.length; i++){//looping through the cells
        cells[i].innerHTML = ''//setting display to emply immediately startGame is clicked
        cells[i].style.removeProperty('background-color');//removing the backgroung color when startGame is clicked
        cells[i].addEventListener('click', turnClick, false);//adding event listener  to all cells
    }
    // document.querySelector('button').style.display = ''
}

function turnClick(square){
    if(typeof origBoard[square.target.id] === 'number'){//checking origBoard element is not empty
    turn(square.target.id, huPlayer);//the human player turn 
    if(!checkTie()) turn(bestSpot(), aiPlayer);//if not tie the ai player turn
    }
}

function turn(squareId, player){
    origBoard[squareId] = player;//sets the clicked cells to the player symbol
    document.getElementById(squareId).innerText = player;//displays the symbol in the clicked cell
    let gameWon = checkWin(origBoard, player);//Collects if game is won 
    if(gameWon) gameOver(gameWon);//if game is won calls gameWon function
} 
function checkWin(board, player){
    let plays = board.reduce((a, e, i) =>
    (e === player) ? a.concat(i) : a, []);//checking where player has played
    let gameWon = null;//setting gameWon to null
    for(let [index, win] of winCombos.entries()){//defining the index and win conditions
        if(win.every(elem => plays.indexOf(elem) > -1)){//checking if player has played in all win conditions
            gameWon = {index: index, player: player};
            break;
        }
    }
    return gameWon;
}
function gameOver(gameWon){
    for(let i = 0; i < cells.length; i++){
        cells[i].removeEventListener('click', turnClick, false)
    }
    declareWinner(gameWon.player === huPlayer ? "You Win!" : "A.i Wins")
}
function declareWinner(who){
    document.querySelector('.endgame').style.display = ''
    document.querySelector('.endgame .text').innerText = who
}
function emptySquares(){
   return origBoard.filter(s => typeof s === 'number')
}
//checking the bestspot available to play on
function bestSpot() {
    return minimax(origBoard, aiPlayer).index;
}
//checeking if there's a tie
function checkTie(){
    if(emptySquares().length === 0){
        for(let i = 0; i < cells.length; i++){
         cells[i].removeEventListener('click', turnClick, false)  
        }
        declareWinner("Tie Game!")
        return true
    }
    return false
}

function minimax(newBoard, player){
    let availSpots = emptySquares(newBoard);

    if(checkWin(newBoard, huPlayer)){//checking if human player is winning
        return {score: -10};//return -10 if human player is winning
    }else if(checkWin(newBoard, aiPlayer)){//checking if a.i is winning
        return {score: 10}//return 10 if a.i is winning
    }else if(availSpots.length === 0){//else if available spots length is 0, means it's a tie 
        return {score: 0}//returns zero
    }

    let moves = [];//sets an empty array for the new moves
    for(let i = 0; i < availSpots.length; i++){
        let move = {};
        move.index = newBoard[availSpots[i]];//sets empty sport to index property of move object
        newBoard[availSpots[i]] = player;//sets empty spot to player
        if(player == aiPlayer){
            let result = minimax(newBoard, huPlayer);//gets score which is returned from minimax function for human player
            move.score =  result.score;//sets score property of move object to minimax score
        }else{
            let result = minimax(newBoard, aiPlayer);//gets score which is returned from minimax function for ai player
            move.score =  result.score;//sets score property of move object to minimax score
        }
        newBoard[availSpots[i]] = move.index;//sets available spot in board to index property of move object

        moves.push(move);//push move object to moves array
    }

    let bestMove;
    if(player === aiPlayer){
        let bestScore = -Infinity;
        for(let i = 0; i < moves.length; i++){
            if(moves[i].score > bestScore){
                bestScore = moves[i].score;
                bestMove = i;
                // console.log(i, bestScore)
            }
        }
    }else{
        let bestScore = Infinity;
        for(let i = 0; i < moves.length; i++){
            if(moves[i].score < bestScore){
                bestScore = moves[i].score;
                bestMove = i;
            }
    }
}
return moves[bestMove];
} 