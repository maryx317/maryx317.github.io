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
var g2 = document.getElementById("g2");
var g2_modal = document.getElementById("g2-modal");
var g2_close = document.getElementById("g2-close");
g2.onclick = function() {
  g2_modal.style.display = "block";
}
g2_close.onclick = function() {
  g2_modal.style.display = "none";
}

// g3: Escape to Elysium
var g3 = document.getElementById("g3");
var g3_modal = document.getElementById("g3-modal");
var g3_close = document.getElementById("g3-close");
g3.onclick = function() {
  g3_modal.style.display = "block";
}
g3_close.onclick = function() {
  g3_modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == g1_modal) {
    g1_modal.style.display = "none";
  } else if (event.target == g2_modal) {
    g2_modal.style.display = "none";
  } else if (event.target == g3_modal) {
    g3_modal.style.display = "none";
  }
}