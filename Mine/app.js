var row = 10;
var col = 10;
var landmines = 10;
var tb = document.getElementById("tb");

var isGameOver = false;

var temp = [];
var alltds = [];

for (var i = 0; i < row; i++) {
	var tr = document.createElement("tr");
	tb.appendChild(tr);
	var trArr = [];
	for (var j = 0; j < col; j++) {
		var td = document.createElement("td");

		// 		td.style.width=(100/col)+"%";
		// 		td.style.paddingTop=(100/col)+"%";

		td.style.width = (100 / col) + "%";
		td.style.height = (100 / row) + "%";

		tr.appendChild(td);
		td.setAttribute("state", "blank");
		td.onclick = tdClick;

		td.oncontextmenu = function(e) {
			if (!isGameOver) {
				if (e.target.getAttribute("state") == "blank") {
					e.target.setAttribute("state", "flag");
				} else if (e.target.getAttribute("state") == "flag") {
					e.target.setAttribute("state", "blank");
				}
				e.preventDefault();
			}
		}

		temp.push(td);
		trArr.push(td);
		td.row = i;
		td.col = j;
	}
	alltds.push(trArr);
}

for (var i = 0; i < landmines; i++) {
	var index = Math.floor(Math.random() * temp.length);
	temp[index].setAttribute("hasLandmine", "true");
	temp.splice(index, 1);
}


function tdClick(e) {
	if (!isGameOver) {
		if (e.target.getAttribute("state") != "flag") {
			if (e.target.getAttribute("hasLandmine") == "true") {

				gameOver(e.target);

			} else {
				calNum(e.target);

			}

			if (checkWin()) {
				isGameOver = true;
				alert("Win!");
			}

		}
	}
}

function calNum(e) {
	var cnt = 0;
	var ti = e.row;
	var tj = e.col;

	for (var i = ti - 1; i <= ti + 1; i++) {
		for (var j = tj - 1; j <= tj + 1; j++) {
			if ((i != ti || j != tj) && i >= 0 && i < row && j >= 0 && j < col) {
				if (alltds[i][j].getAttribute("hasLandmine") == "true")
					cnt++;
			}

		}
	}
	e.setAttribute("state", cnt);
	if (cnt == 0) {
		for (var i = ti - 1; i <= ti + 1; i++) {
			for (var j = tj - 1; j <= tj + 1; j++) {
				if ((i != ti || j != tj) && i >= 0 && i < row && j >= 0 && j < col) {
					if (alltds[i][j].getAttribute("state") == "blank" && alltds[i][j].getAttribute("hasLandmine") != "true")
						calNum(alltds[i][j]);
				}
			}
		}
	}
	return cnt;
}

function checkWin() {

	return temp.every(function(e) {
		if (e.getAttribute("hasLandmine") != "true") {
			return e.getAttribute("state") != "blank";
		}

	});
}

function gameOver(boom) {
	isGameOver = true;
	var booms = document.querySelectorAll("[hasLandmine=true]");
	for (var i = 0; i < booms.length; i++) {
		if (booms[i] == boom) {
			booms[i].classList.add("boom");
		} else {
			booms[i].classList.add("landmine");
		}
	}
	alert("GameOver!");
}
