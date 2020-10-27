let currentPlayer = 'X';//this the Sign human will play

let won = false;//default until theres a win

let gameState = ["","","","","","","","",""];

let status = document.getElementById('gamestatus')//writing a win in the ui

const winning = [ [ 0 , 1 , 2 ],
                  [ 3 , 4 , 5 ],
                  [ 6 , 7 , 8 ],
                  [ 0 , 3 , 6 ],
                  [ 1 , 4 , 7 ],
                  [ 2 , 5 , 8 ],
                  [ 0 , 4 , 8 ],
                  [ 2 , 4 , 6 ]

]


// //when a cell is clicked this is called
handleCellClick = (cell) =>{
    const box = cell.target;//this is any box clicked

    
    
    let cells = box.dataset.cellIndex//the string cellIndex represents
    

    const cellIndex = parseInt(cells)//parsing this string to integer
        handleHumanPlay(box, cellIndex)//calls the function to verify clicks
        handleWin(box)//after every click it checks
        handleDraw()//when the game is a draw this function is called
        handleRestartGame()//tp restart the game
}
//this function is called when human plays and the handleComputerPlay function to calls
handleHumanPlay = (box, cellIndex) =>{
    if(box.innerHTML === ''){
        box.innerHTML = currentPlayer;//writes in the ui the human player sign
        gameState[cellIndex] = currentPlayer//stores in the gamestate
        handleComputerPlay()
    }
}
//this function is called after human plays
handleComputerPlay = () =>{
    let box = document.getElementById('box')//the box that has all divs in it
    
    let boxCover = box.getElementsByTagName('div');//the div tags


    for(let i = 0; i < 9; i++){
        if(boxCover[i].innerHTML === ''){
                    boxCover[i].innerHTML = 'O'
                    gameState[i] = 'O';
                    return true;
        }
    }
    

}

//this function is called is the game is draw
handleDraw = () => {
    let status = document.getElementById('gamestatus')

    let draw = !gameState.includes('');

        if(won === false & draw){
             status.innerHTML = "It's a draw";
             }
}

//this function is called when there's a win
handleWin = () =>{
        for(let i = 0; i <= 7; i++){
            let winningCondition = winning[i]
            let a = gameState[winningCondition[0]];
            let b = gameState[winningCondition[1]];
            let c = gameState[winningCondition[2]];

            if(a === b && b === c){//to check the three consecutive element
                if(a !== '' && b !== '' && c!== ''){//to check if the boxes are not empty
                    if(a === 'X' && b === 'X' && c === 'X'){//to check if elements in dataset consecutively is x
                        status.innerHTML = "You won"
                        won = true;
                    }else{
                        status.innerHTML = 'Computer won'
                        won = true;
                    }
                    if(won === true){                      
                        document.querySelectorAll('.box')
                        .forEach(cell => cell.removeEventListener('click', handleCellClick))//this will make sure it doesn't allow clicking any more
                    }
                        
                }
                
            }
        } 
}

//this function restarts the game
handleRestartGame = () =>{
    let restart = document.getElementById('game--restart');

    restart.onclick = () =>{

        for(let i = 0; i < gameState.length; i++){
            gameState[i] = ''
        }
        document.querySelectorAll('.cell')
                .forEach(cell => cell.innerHTML = '')
        document.querySelectorAll('.box')
        .forEach(cell => cell.addEventListener('click', handleCellClick))//this will make sure it doesn't allow clicking any more
        status.innerHTML = ''
    }

}

document.querySelectorAll('.box').forEach(cell => cell.addEventListener('click', handleCellClick));