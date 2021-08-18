// Function called whenever user tab on any box
player = '';
turn = '';
gameover = 'NO';
function check() {

    // Setting DOM to all boxes or input field
    var b1, b1, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").innerText;
    b2 = document.getElementById("b2").innerText;
    b3 = document.getElementById("b3").innerText;
    b4 = document.getElementById("b4").innerText;
    b5 = document.getElementById("b5").innerText;
    b6 = document.getElementById("b6").innerText;
    b7 = document.getElementById("b7").innerText;
    b8 = document.getElementById("b8").innerText;
    b9 = document.getElementById("b9").innerText;
    // Checking if Player X won or not and after
    // that disabled all the other fields
    if (b1 === 'X' && b2 === 'X' && b3 === 'X') {
        document.getElementById('print2')
                .innerHTML = "Player X won";
        //window.alert('Player X won');
        gameover = 'YES';
        message = "gameover-YES";
        websocket.send(message);
    } else if (b1 === 'X' && b4 === 'X' && b7 === 'X') {
        document.getElementById('print2')
                .innerHTML = "Player X won";
        //window.alert('Player X won');
        gameover = 'YES';
        message = "gameover-YES";
        websocket.send(message);
    } else if (b7 === 'X' && b8 === 'X' && b9 === 'X') {
        document.getElementById('print2')
                .innerHTML = "Player X won";
        //window.alert('Player X won');
        gameover = 'YES';
        message = "gameover-YES";
        websocket.send(message);
    } else if (b3 === 'X' && b6 === 'X' && b9 === 'X') {
        document.getElementById('print2')
                .innerHTML = "Player X won";
        //window.alert('Player X won');
        gameover = 'YES';
        message = "gameover-YES";
        websocket.send(message);
    } else if (b1 === 'X' && b5 === 'X' && b9 === 'X') {
        document.getElementById('print2')
                .innerHTML = "Player X won";
        //window.alert('Player X won');
        gameover = 'YES';
        message = "gameover-YES";
        websocket.send(message);
    } else if (b3 === 'X' && b5 === 'X' && b7 === 'X') {
        document.getElementById('print2')
                .innerHTML = "Player X won";
        //window.alert('Player X won');
        gameover = 'YES';
        message = "gameover-YES";
        websocket.send(message);
    } else if (b2 === 'X' && b5 === 'X' && b8 === 'X') {
        document.getElementById('print2')
                .innerHTML = "Player X won";
        //window.alert('Player X won');
        gameover = 'YES';
        message = "gameover-YES";
        websocket.send(message);
    } else if (b4 === 'X' && b5 === 'X' && b6 === 'X') {
        document.getElementById('print2')
                .innerHTML = "Player X won";
        //window.alert('Player X won');
        gameover = 'YES';
        message = "gameover-YES";
        websocket.send(message);
    }

    // Checking of Player X finsh
    // Checking for Player O starts, Is player O won or
    // not and after that disabled all the other fields
    else if (b1 === 'O' && b2 === 'O' && b3 === 'O') {
        document.getElementById('print2')
                .innerHTML = "Player O won";
        //window.alert('Player O won');
        gameover = 'YES';
        message = "gameover-YES";
        websocket.send(message);
    } else if (b1 === 'O' && b4 === 'O' && b7 === 'O') {
        document.getElementById('print2')
                .innerHTML = "Player O won";
        //window.alert('Player O won');
        gameover = 'YES';
        message = "gameover-YES";
        websocket.send(message);
    } else if (b7 === 'O' && b8 === 'O' && b9 === 'O') {
        document.getElementById('print2')
                .innerHTML = "Player O won";
        //window.alert('Player O won');
        gameover = 'YES';
        message = "gameover-YES";
        websocket.send(message);
    } else if (b3 === 'O' && b6 === 'O' && b9 === 'O') {
        document.getElementById('print2')
                .innerHTML = "Player O won";
        //window.alert('Player O won');
        gameover = 'YES';
        message = "gameover-YES";
        websocket.send(message);
    } else if (b1 === 'O' && b5 === 'O' && b9 === 'O') {
        document.getElementById('print2')
                .innerHTML = "Player O won";
        //window.alert('Player O won');
        gameover = 'YES';
        message = "gameover-YES";
        websocket.send(message);
    } else if (b3 === 'O' && b5 === 'O' && b7 === 'O') {
        document.getElementById('print2')
                .innerHTML = "Player O won";
        //window.alert('Player O won');
        gameover = 'YES';
        message = "gameover-YES";
        websocket.send(message);
    } else if (b2 === 'O' && b5 === 'O' && b8 === 'O') {
        document.getElementById('print2')
                .innerHTML = "Player O won";
        //window.alert('Player O won');
        gameover = 'YES';
        message = "gameover-YES";
        websocket.send(message);
    } else if (b4 === 'O' && b5 === 'O' && b6 === 'O') {
        document.getElementById('print2')
                .innerHTML = "Player O won";
        //window.alert('Player O won');
        gameover = 'YES';
        message = "gameover-YES";
        websocket.send(message);
    }

    // Checking of Player O finsh
    // Here, Checking about Tie
    else if ((b1 === 'X' || b1 === 'O') && (b2 === 'X'
            || b2 === 'O') && (b3 === 'X' || b3 === 'O') &&
            (b4 === 'X' || b4 === 'O') && (b5 === 'X' ||
            b5 === 'O') && (b6 === 'X' || b6 === 'O') &&
            (b7 === 'X' || b7 === 'O') && (b8 === 'X' ||
            b8 === 'O') && (b9 === 'X' || b9 === 'O')) {
        document.getElementById('print2')
                .innerHTML = "Match Tie";
        //window.alert('Match Tie');
        gameover = 'YES';
        message = "gameover-YES";
        websocket.send(message);
    } else {

        // Here, Printing Result
        if (flag === 1) {
            document.getElementById('print')
                    .innerHTML = "Player X Turn";
        } else {
            document.getElementById('print')
                    .innerHTML = "Player O Turn";
        }
    }
}

// Function to reset game
function reset() {
    message = "reset";
    websocket.send(message);
    message = "turn-X";
    websocket.send(message);
}
function reset2() {
    //location.reload();
    document.getElementById('b1').innerText = '';
    document.getElementById("b2").innerText = '';
    document.getElementById("b3").innerText = '';
    document.getElementById("b4").innerText = '';
    document.getElementById("b5").innerText = '';
    document.getElementById("b6").innerText = '';
    document.getElementById("b7").innerText = '';
    document.getElementById("b8").innerText = '';
    document.getElementById("b9").innerText = '';
    gameover = 'NO';
            document.getElementById('print2')
                .innerHTML = "Game Started, Let's go!";
}

// Here onwards, functions check turn of the player
// and put accordingly innerText X or O
flag = 1;

function place(id) {
    if (gameover === 'NO') {
        if (flag === 1) {
            if (document.getElementById(id).innerText === '') {
                document.getElementById(id).innerText = "X";
                flag = 0;
            }
        } else {
            if (document.getElementById(id).innerText === '') {
                document.getElementById(id).innerText = "O";
                flag = 1;
            }
        }
    }
    check();
}

function place2(id) {
    if (gameover === 'NO') {
        if (turn === player) {
            if (document.getElementById(id).innerText === '') {
                message = "place-" + id + "-" + player;
                websocket.send(message);
            }
        }

    }


}

function place3(id, player) {

    document.getElementById(id).innerText = player;
    check();

}








function getRootUri() {
    return "ws://" + (document.location.hostname == "" ? "localhost" : document.location.hostname) + ":" +
            (document.location.port == "" ? "8080" : document.location.port);
}

function init() {
    output = document.getElementById("output");
    websocket = new WebSocket(getRootUri() + "/TicTacToeWebSocket/tictactoe");
    websocket.onopen = function (evt) {
        onOpen(evt)
    };
    websocket.onmessage = function (evt) {
        onMessage(evt)
    };
    websocket.onerror = function (evt) {
        onError(evt)
    };
}






function onMessage(evt) {
    console.log(evt.data);
    if (evt.data == 'roomfull') {
        window.alert(evt.data);
        document.getElementById('print')
                .innerHTML = evt.data;
        websocket.close(-1);
    }
    if (evt.data == 'reset') {
        reset2();
    }
    if (evt.data == 'wait') {
    	//window.alert("Waiting for Second Player");
        document.getElementById('print2')
                .innerHTML = "Waiting for Second Player";

    }
    if (evt.data == 'start') {
        //window.alert("Game Started, Let's go!");
        //document.getElementById('print2')
        //        .innerHTML = "Game Started, Let's go!";
        reset();

    }
    if (evt.data.indexOf("player") != -1) {
        //window.alert(evt.data);
        words = evt.data.split("-");
        //window.alert(words[1]);
        player = words[1];
        //window.alert(player);
        document.getElementById('player')
                .innerHTML = "You are Player " + player;
    }
    if (evt.data.indexOf("turn") != -1) {
        //window.alert(evt.data);
        words = evt.data.split("-");
        //window.alert(words[1]);
        turn = words[1];
        //window.alert(turn);
        document.getElementById('print')
                .innerHTML = " It's turn of " + turn;
    }
    if (evt.data.indexOf("place") != -1) {
        //window.alert(evt.data);
        words = evt.data.split("-");
        //window.alert(words[1]);
        place3(words[1], words[2]);
    }
    if (evt.data.indexOf("gameover") != -1) {
        //window.alert(evt.data);
        words = evt.data.split("-");
        //window.alert(words[1]);
        gameover = words[1];
        //window.alert(turn);
        document.getElementById('print')
                .innerHTML = "Game Over!";
    }
    if (evt.data.indexOf("获胜") != -1) {
        eval(evt.data);
    } else {

    }
}

function onOpen(evt) {
}
function onError(evt) {
}

window.addEventListener("load", init, false);
