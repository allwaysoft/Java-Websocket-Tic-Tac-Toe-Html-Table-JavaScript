// Function called whenever user tab on any box
player = "";
turn = "";
gameover = "NO";
// Function to reset game
function reset() {
    message = "reset";
    websocket.send(message);
    message = "turn-X";
    websocket.send(message);
}
function reset2() {
    //location.reload();
    document.getElementById("b1").innerText = "";
    document.getElementById("b2").innerText = "";
    document.getElementById("b3").innerText = "";
    document.getElementById("b4").innerText = "";
    document.getElementById("b5").innerText = "";
    document.getElementById("b6").innerText = "";
    document.getElementById("b7").innerText = "";
    document.getElementById("b8").innerText = "";
    document.getElementById("b9").innerText = "";
    gameover = "NO";
    document.getElementById("print2")
            .innerHTML = "游戏开始, 请开始放置棋子";
}

// Here onwards, functions check turn of the player
// and put accordingly innerText X or O
flag = 1;
function place(id) {
    if (gameover === "NO") {
        if (flag === 1) {
            if (document.getElementById(id).innerText === "") {
                document.getElementById(id).innerText = "X";
                flag = 0;
            }
        } else {
            if (document.getElementById(id).innerText === "") {
                document.getElementById(id).innerText = "O";
                flag = 1;
            }
        }
    }
    check();
}
function place2(id) {
    if (gameover === "NO") {
        if (turn === player) {
            if (document.getElementById(id).innerText === "") {
                message = "place-" + id + "-" + player;
                websocket.send(message);
            }
        }
    }
}

function place3(id, player) {
    document.getElementById(id).innerText = player;
    //check();
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
    if (evt.data == "roomfull") {
        document.getElementById("print")
                .innerHTML = "游戏玩家已满";
        websocket.close(-1);
    }
    if (evt.data == "reset") {
        reset2();
    }
    if (evt.data == "wait") {
        //window.alert("Waiting for Second Player");
        document.getElementById("print2")
                .innerHTML = "等待第二个玩家";

    }
    if (evt.data == "start") {
        reset();
    }
    if (evt.data == "xwon") {
        document.getElementById("print2")
                .innerHTML = "玩家X赢了";

    }
    if (evt.data == "owon") {
        document.getElementById("print2")
                .innerHTML = "玩家O赢了";

    }
    if (evt.data == "tie") {
        document.getElementById("print2")
                .innerHTML = "平局";

    }
    if (evt.data.indexOf("player") != -1) {
        //window.alert(evt.data);
        words = evt.data.split("-");
        //window.alert(words[1]);
        player = words[1];
        //window.alert(player);
        document.getElementById("player")
                .innerHTML = "你是玩家" + player;
    }
    if (evt.data.indexOf("turn") != -1) {
        //window.alert(evt.data);
        words = evt.data.split("-");
        //window.alert(words[1]);
        turn = words[1];
        //window.alert(turn);
        document.getElementById("print")
                .innerHTML = "当前由玩家" + turn+"放置棋子";
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
        document.getElementById("print")
                .innerHTML = "游戏结束！";
    }
}

function onOpen(evt) {
}
function onError(evt) {
}

window.addEventListener("load", init, false);
