document.getElementById("clicks").innerHTML = localStorage.getItem("clicks");
var clicks = Number(localStorage.getItem("clicks")) || 0

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
  localStorage.setItem("clicks", clicks);
  document.getElementById("clicks").innerHTML = localStorage.getItem("clicks");
};

document.addEventListener('click', function () {
  onClick()
})