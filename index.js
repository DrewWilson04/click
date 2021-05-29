var clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};

document.addEventListener('click', function () {
  onClick()
})