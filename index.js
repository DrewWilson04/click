document.getElementById("clicks").innerHTML = localStorage.getItem("clicks");
var clicks = Number(localStorage.getItem("clicks")) || 0

function onClick() {
	clicks += 1;
	document.getElementById("clicks").innerHTML = clicks;
	localStorage.setItem("clicks", clicks);
	document.getElementById("clicks").innerHTML = localStorage.getItem("clicks");

	if (clicks > 1000) {
		document.querySelector("body").style.background = "#ff0000"
	}

	if (clicks > 2000) {
		document.querySelector("body").style.background = "#00ff00"
	}

	if (clicks > 3000) {
		document.querySelector("body").style.background = "#0000ff"
	}

	if (clicks > 4000) {
		document.querySelector("body").style.background = "#f0f"
	}

	if (clicks > 5000) {
		document.querySelector("body").style.background = "#ff0"
	}

	if (clicks > 6000) {
		document.querySelector("body").style.background = "#0ff"
	}

	if (clicks > 7000) {
		document.querySelector("body").style.background = "#fff"
	}

	if (clicks > 8000) {
		document.querySelector("body").style.background = "#33ff33"
	}

	if (clicks > 9000) {
		document.querySelector("body").style.background = "#ccccff"
	}

	if (clicks > 10000) {
		document.querySelector("body").style.background = "#000"
	}
};

document.addEventListener('click', function () {
	onClick()
})

console.log ('%cmaking a bot is for fools', 'font-size: 20px;')