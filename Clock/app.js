var clockObj = document.getElementById("clock");
var r = 350;
for (var i = 0; i < 60; i++) {
	var dot = document.createElement("div");
	dot.classList.add("dot");

	var ang = i * 5;
	ang = ang / 100 * Math.PI;
	var x = 400 + r * Math.cos(ang);
	var y = 400 + r * Math.sin(ang);
	
	if(i%5==0){
		dot.style.width="20px";
		dot.style.height="20px";
		x = 390 + r * Math.cos(ang);
		y = 390 + r * Math.sin(ang);
	}
	
	

	

	dot.style.left = x + "px";
	dot.style.top = y + "px";

	clockObj.appendChild(dot);
}

var dot = document.createElement("div");
dot.style.width="25px";
dot.style.height="25px";
dot.classList.add("dot");
dot.style.left = "390px";
dot.style.top = "390px";

clockObj.appendChild(dot);