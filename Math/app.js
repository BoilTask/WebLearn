function GenMul() {
	var div = document.getElementById("mulquestion");
	var divres = document.getElementById("mulanswer");
	var cnt = document.getElementById("mulNum").value;

	for (var i = 0; i < cnt; i++) {
		var item = document.createElement("div");
		item.classList.add("item");

		var res = document.createElement("div");
		res.classList.add("item-res");

		var a = Math.random() * 100;
		a = a.toFixed(2);

		var b = Math.random() * 10;
		b = b.toFixed(1);

		item.innerHTML = a + " × " + b + " =";

		c = a * b;
		c = c.toFixed(4);
		res.innerHTML = c;



		div.appendChild(item);
		divres.appendChild(res);
	}

}

function GenDiv() {
	var div = document.getElementById("divquestion");
	var divres = document.getElementById("divanswer");
	var cnt = document.getElementById("divNum").value;

	for (var i = 0; i < cnt; i++) {
		var item = document.createElement("div");
		item.classList.add("item");

		var res = document.createElement("div");
		res.classList.add("item-res");

		var a = Math.random() * 100;
		a = a.toFixed(2);

		var b = Math.random() * 10;
		b = b.toFixed(1);
		while (b == 0.0) {
			b = Math.random() * 10;
			b = b.toFixed(1);
		}

		item.innerHTML = a + " ÷ " + b + " =";

		c = a / b;
		c = c.toFixed(6);
		res.innerHTML = c;



		div.appendChild(item);
		divres.appendChild(res);
	}

}

function getRand(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function gcd(a, b) {
	return !b ? a : gcd(b, a % b);
}

function GenGen() {
	var div = document.getElementById("genquestion");
	var divres = document.getElementById("genanswer");
	var cnt = document.getElementById("genNum").value;

	for (var i = 0; i < cnt; i++) {
		var item = document.createElement("div");
		item.classList.add("item");

		var res = document.createElement("div");
		res.classList.add("item-res");

		var a1 = getRand(1, 100);
		var a2 = getRand(1, 100) * 2;
		var b1 = getRand(1, 100);
		var b2 = getRand(1, 100) * 2;

		var item_num = document.createElement("div");
		item_num.innerHTML = a1;
		item.appendChild(item_num);
		item_num = document.createElement("div");
		item_num.innerHTML = b1;
		item.appendChild(item_num);
		item_num = document.createElement("div");
		item_num.innerHTML = a2;
		item.appendChild(item_num);
		item_num = document.createElement("div");
		item_num.innerHTML = b2;
		item.appendChild(item_num);

		var c = a2 * b2 / gcd(a2, b2);
		a1 = c / a2 * a1;
		b1 = c / b2 * b1;

		item_num = document.createElement("div");
		item_num.innerHTML = a1;
		res.appendChild(item_num);
		item_num = document.createElement("div");
		item_num.innerHTML = b1;
		res.appendChild(item_num);
		item_num = document.createElement("div");
		item_num.innerHTML = c;
		res.appendChild(item_num);
		item_num = document.createElement("div");
		item_num.innerHTML = c;
		res.appendChild(item_num);

		div.appendChild(item);
		divres.appendChild(res);
	}
}

function GenApp() {
	var div = document.getElementById("appquestion");
	var divres = document.getElementById("appanswer");
	var cnt = document.getElementById("appNum").value;

	for (var i = 0; i < cnt; i++) {
		var item = document.createElement("div");
		item.classList.add("item");

		var res = document.createElement("div");
		res.classList.add("item-res");

		var a = getRand(1, 100) * 2;
		var b = getRand(1, 100) * 2;

		var item_num = document.createElement("div");
		item_num.innerHTML = a;
		item.appendChild(item_num);
		item_num = document.createElement("div");
		item_num.innerHTML = b;
		item.appendChild(item_num);

		var c = gcd(a, b);
		a = a / c;
		b = b / c;

		item_num = document.createElement("div");
		item_num.innerHTML = a;
		res.appendChild(item_num);
		item_num = document.createElement("div");
		item_num.innerHTML = b;
		res.appendChild(item_num);

		div.appendChild(item);
		divres.appendChild(res);
	}
}
