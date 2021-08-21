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
    clear();
    drawboard();
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

//function place3(id, player) {
//    document.getElementById(id).innerText = player;
//check();
//}

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
    if (evt.data.indexOf("leave") != -1) {
        //window.alert(evt.data);
        words = evt.data.split("-");
        //window.alert(words[1]);
        player = words[1];
        //window.alert(player);
        document.getElementById("print2")
                .innerHTML = "玩家" + player+"已离开游戏,请退出游戏";
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
                .innerHTML = "当前由玩家" + turn + "放置棋子";
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



players = 2;
cell_count = 3;
winCount = 3;
cell_size = 100;
size = cell_size * cell_count;


var canvas = document.getElementById('canvas');
canvas.width = size;
canvas.height = size;

canvas.addEventListener('click', click, false);


var ctx = canvas.getContext('2d');

ctx.imageSmoothingEnabled = false;
ctx.lineWidth = 3;


function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function line(x, y, w, h, color = '#ccc') {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + w, y + h);
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();
}

function click(e) {
    if (gameover === "NO") {
        if (turn === player) {
            i = e.offsetX / cell_size | 0;
            j = e.offsetY / cell_size | 0;
            id = "";
            if (i == 0 && j == 0) {
                id = "b1";
            }
            if (i == 1 && j == 0) {
                id = "b2";
            }
            if (i == 2 && j == 0) {
                id = "b3";
                ;
            }
            if (i == 0 && j == 1) {
                id = "b4";
            }
            if (i == 1 && j == 1) {
                id = "b5";
            }
            if (i == 2 && j == 1) {
                id = "b6";
            }
            if (i == 0 && j == 2) {
                id = "b7";
            }
            if (i == 1 && j == 2) {
                id = "b8";
            }
            if (i == 2 && j == 2) {
                id = "b9";
            }
            message = "place-" + id + "-" + player;
            websocket.send(message);
        }
    }
}
function place3(id, player) {
    i = 0;
    j = 0;
    if (id === "b1") {
        i = 0;
        j = 0;
    }
    if (id === "b2") {
        i = 1;
        j = 0;
    }
    if (id === "b3") {
        i = 2;
        j = 0;
    }
    if (id === "b4") {
        i = 0;
        j = 1;
    }
    if (id === "b5") {
        i = 1;
        j = 1;
    }
    if (id === "b6") {
        i = 2;
        j = 1;
    }
    if (id === "b7") {
        i = 0;
        j = 2;
    }
    if (id === "b8") {
        i = 1;
        j = 2;
    }
    if (id === "b9") {
        i = 2;
        j = 2;
    }

    if (player === "X") {
//         window.alert("X");
        // draw X figure
        color = '#3F51B5';

        left = (i + 0.1) * cell_size;
        up = (j + 0.1) * cell_size;
        size = 0.8 * cell_size;
//        window.alert(left);
//        window.alert("up="+up);
//        window.alert(size);

        line(left, up, size, size, color);
        line(left + size, up, -size, size, color);
    }
    if (player === "O") {
        color = '#FF5722';
        left = (i + 0.1) * cell_size;
        up = (j + 0.1) * cell_size;
        size = 0.8 * cell_size;
        ctx.beginPath();
        ctx.arc((i + 0.5) * cell_size, (j + 0.5) * cell_size, 0.4 * cell_size, 0, Math.PI * 2, false);
        ctx.strokeStyle = color;
        ctx.stroke();
        ctx.closePath();
    }
}

function drawboard() {
    for (let i = 0; i < cell_count; i++) {
        for (let j = 0; j < cell_count; j++) {
            left = i * cell_size;
            up = j * cell_size;
            size = cell_size;
            ctx.beginPath();
            ctx.lineWidth = "6";
            ctx.strokeStyle = "gray";
            ctx.rect(left, up, size, size);
            ctx.stroke();
        }

    }

}
drawboard();


window.addEventListener("load", init, false);
