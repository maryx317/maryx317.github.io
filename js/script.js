// g1: waterboy adventures
var g1 = document.getElementById("g1");
var g1_modal = document.getElementById("g1-modal");
var g1_close = document.getElementById("g1-close");
g1.onclick = function() {
  g1_modal.style.display = "block";
}
g1_close.onclick = function() {
  g1_modal.style.display = "none";
}

// g2: lumberjack jack

window.onclick = function(event) {
  if (event.target == g1_modal) {
    g1_modal.style.display = "none";
  }
}