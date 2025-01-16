// keep track of who's turn it is
let activePlayer = 'X'

// store array of moves. used to determine win conditions
let selectedSquares = [];

// function to place an x or o in a square:
function placeXorO(squareNumber){
    // use .some to check that a square hasn't already been selected:
    if(!selectedSquares.some(element => element.includes(squareNumber))){
        // variable set to get HTML element id that was clicked
        let select = document.getElementById(squareNumber);

        // condition to check who's turn it is:
        if(activePlayer === 'X'){
            // if activePlayer = X, the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/dark.JPG")';
            // active player may only be X or O, so if not X, it MUST be O
        } else {
            // place o.png, if not X...
            select.style.backgroundImage = 'url("images/tree.JPG")';
        }
        // squareNumber and activePlayer are concatenated together and added to array
        selectedSquares.push(squareNumber + activePlayer);

        // call function to check for any win conditions:
        checkWinConditions();

        // change the active player:
        if(activePlayer === 'X'){
            // if X, change to O
            activePlayer = 'O';
            // if activePlayer is anything other than X:
        } else {
            activePlayer = 'X'
        }


        // for placement sound:
        audio('./media/Cassette808_Tom03.wav');

        // check if it's computer's turn:
        if(activePlayer === 'O'){
            // disables clicking for computer turn:
            disableClick();
            // wait 1 second before computer places and image and enables click again:
            setTimeout(function () { computersTurn(); }, 1000);
        }
        // for computersTurn() to work:
        return true;
    }

    // for computer to select random square:
    function computersTurn(){
        // needed for while loop:
        let success = false;
        // store number 0-8:
        let pickASquare;
        // allow while loop to keep trying if a square is selected already:
        while(!success){
            pickASquare = String(Math.floor(Math.random() * 9));
            // if the random number being evaluated returns true, the square is not yet selected
            if(placeXorO(pickASquare)){
                placeXorO(pickASquare);
                // this changes our boolean and ends the loop:
                success = true;
            }
        }
    }
}


// parse selectedSquares to drawWinLine if 3 in a row..
function checkWinConditions(){
    if(arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    else if(arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    else if(arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    else if(arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    else if(arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    else if(arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    else if(arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    else if(arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    else if(arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    else if(arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    else if(arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    else if(arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    else if(arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    else if(arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    else if(arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    else if(arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }

    // check for a tie:
    else if(selectedSquares.length >= 9){
        audio('./media/Cassette808_BD03.wav');
        setTimeout(function () { resetGame(); }, 500)
    }

    // check for each win condition if array includes 3 strings:
    function arrayIncludes(squareA, squareB, squareC){
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);

        // if the 3 variables we pass are all included in our array,
        // then true is returned and our else if condition executes the drawLine() function
        if(a === true && b === true && c === true) { return true; }
    }
}

function disableClick(){
    // make body unclickable
    body.style.pointerEvents = 'none';
    // then clickable after 1 second
    setTimeout(function (){ body.style.pointerEvents = 'auto'; }, 1000);
}

function audio(audioUrl){
    let audio = new Audio(audioUrl);
    audio.play();
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2){
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1 = coordX1, 
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;

    // interacts with the canvas:
    function animateLineDrawing(){
        const animationLoop = requestAnimationFrame(animateLineDrawing);

        // clear last loop iteration
        c.clearRect(0, 0, 608, 608);
        // new path
        c.beginPath();
        // starting point
        c.moveTo(x1, y1);
        // line end point
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, 0.8)';

        // draws everything laid out above
        c.stroke();

        //check if we've reached endpoints
        if(x1 <= x2 && y1 <= y2){
            // add 10 to previous end x endpoint.
            if(x < x2) { x += 10; }
            // add 10 to previous end y endpoint.
            if(y < y2) { y += 10; }
            // for the 6, 4, 2 win conditions:
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }

        //similar to above, necessary for the 6, 4, 2 win condition:
        if(x1 <= x2 && y1 >= y2){
            if(x < x2) { x += 10; }
            if(y > y2) { y -= 10; }
            if(x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    // clear canvas after win line is drawn
    function clear(){
        // starts animation loop
        const animationLoop = requestAnimationFrame(clear);
        // clears canvas
        c.clearRect(0, 0, 608, 608);
        // stops animation loop
        cancelAnimationFrame(animationLoop);
    }

    // disallow clicking while win sound is playing
    disableClick();
    
    audio('./media/Chant Oh 001.wav');
    //call main animation loop
    animateLineDrawing();
    // wait one secon,clear canvas, reset game, re-allow clicking
    setTimeout(function() { clear(); resetGame(); }, 1000);
}

function resetGame(){
    // iterate through each HTML square element
    for(let i = 0; i < 9; i++){
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    // reset array:
    selectedSquares = [];
}