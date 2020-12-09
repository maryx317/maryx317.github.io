var body = document.body;
// var oldWidth = body.innerWidth();

// g1: waterboy adventures
var g1 = document.getElementById("g1");
var g1_modal = document.getElementById("g1-modal");
var g1_close = document.getElementById("g1-close");
g1.onclick = function() {
  g1_modal.style.display = "block";
  body.style.overflow = "hidden";
  body.style.height = "100%";
}
g1_close.onclick = function() {
  g1_modal.style.display = "none";
  body.style.overflow = "auto";
}

// g2: lumberjack jack
var g2 = document.getElementById("g2");
var g2_modal = document.getElementById("g2-modal");
var g2_close = document.getElementById("g2-close");
g2.onclick = function() {
  g2_modal.style.display = "block";
  body.style.overflow = "hidden";
  body.style.height = "100%";
}
g2_close.onclick = function() {
  g2_modal.style.display = "none";
  body.style.overflow = "auto";
}

// g3: Escape to Elysium
var g3 = document.getElementById("g3");
var g3_modal = document.getElementById("g3-modal");
var g3_close = document.getElementById("g3-close");
g3.onclick = function() {
  g3_modal.style.display = "block";
  body.style.overflow = "hidden";
  body.style.height = "100%";
}
g3_close.onclick = function() {
  g3_modal.style.display = "none";
  body.style.overflow = "auto";
}

// i1: WAC
var i1 = document.getElementById("i1");
var i1_modal = document.getElementById("i1-modal");
var i1_close = document.getElementById("i1-close");
i1.onclick = function() {
  i1_modal.style.display = "block";
  body.style.overflow = "hidden";
  body.style.height = "100%";
}
i1_close.onclick = function() {
  i1_modal.style.display = "none";
  body.style.overflow = "auto";
}

// i2: Sharepoint
var i2 = document.getElementById("i2");
var i2_modal = document.getElementById("i2-modal");
var i2_close = document.getElementById("i2-close");
i2.onclick = function() {
  i2_modal.style.display = "block";
  body.style.overflow = "hidden";
  body.style.height = "100%";
}
i2_close.onclick = function() {
  i2_modal.style.display = "none";
  body.style.overflow = "auto";
}

// i3: CFA
var i3 = document.getElementById("i3");
var i3_modal = document.getElementById("i3-modal");
var i3_close = document.getElementById("i3-close");
i3.onclick = function() {
  i3_modal.style.display = "block";
  body.style.overflow = "hidden";
  body.style.height = "100%";
}
i3_close.onclick = function() {
  i3_modal.style.display = "none";
  body.style.overflow = "auto";
}

// i4: PACE
var i4 = document.getElementById("i4");
var i4_modal = document.getElementById("i4-modal");
var i4_close = document.getElementById("i4-close");
i4.onclick = function() {
  i4_modal.style.display = "block";
  body.style.overflow = "hidden";
  body.style.height = "100%";
}
i4_close.onclick = function() {
  i4_modal.style.display = "none";
  body.style.overflow = "auto";
}

// i5: Goprocure
var i5 = document.getElementById("i5");
var i5_modal = document.getElementById("i5-modal");
var i5_close = document.getElementById("i5-close");
i5.onclick = function() {
  i5_modal.style.display = "block";
  body.style.overflow = "hidden";
  body.style.height = "100%";
}
i5_close.onclick = function() {
  i5_modal.style.display = "none";
  body.style.overflow = "auto";
}

// h1: Goprocure
var h1 = document.getElementById("h1");
var h1_modal = document.getElementById("h1-modal");
var h1_close = document.getElementById("h1-close");
h1.onclick = function() {
  h1_modal.style.display = "block";
  body.style.overflow = "hidden";
  body.style.height = "100%";
}
h1_close.onclick = function() {
  h1_modal.style.display = "none";
  body.style.overflow = "auto";
}

// h2: Goprocure
var h2 = document.getElementById("h2");
var h2_modal = document.getElementById("h2-modal");
var h2_close = document.getElementById("h2-close");
h2.onclick = function() {
  h2_modal.style.display = "block";
  body.style.overflow = "hidden";
  body.style.height = "100%";
}
h2_close.onclick = function() {
  h2_modal.style.display = "none";
  body.style.overflow = "auto";
}

window.onclick = function(event) {
  if (event.target == g1_modal) {
    g1_modal.style.display = "none";
    body.style.overflow = "auto";
  } else if (event.target == g2_modal) {
    g2_modal.style.display = "none";
    body.style.overflow = "auto";
  } else if (event.target == g3_modal) {
    g3_modal.style.display = "none";
    body.style.overflow = "auto";
  } else if (event.target == i1_modal) {
    i1_modal.style.display = "none";
    body.style.overflow = "auto";
  } else if (event.target == i2_modal) {
    i2_modal.style.display = "none";
    body.style.overflow = "auto";
  } else if (event.target == i3_modal) {
    i3_modal.style.display = "none";
    body.style.overflow = "auto";
  } else if (event.target == i4_modal) {
    i4_modal.style.display = "none";
    body.style.overflow = "auto";
  } else if (event.target == i5_modal) {
    i5_modal.style.display = "none";
    body.style.overflow = "auto";
  } else if (event.target == h1_modal) {
    h1_modal.style.display = "none";
    body.style.overflow = "auto";
  } else if (event.target == h2_modal) {
    h2_modal.style.display = "none";
    body.style.overflow = "auto";
  }
}