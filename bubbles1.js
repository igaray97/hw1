var x;
var y;
var radius;

function setup() {
  createCanvas(1000, 1000);
  x = random(width);
  y = random(height);
  radius = 300;
  
}

function draw() {
  background(1);

  if (dist(mouseX, mouseY, x, y) < radius) {
    if (mouseIsPressed) {
      x = random(width);
      y = random(height);
    }
    fill(20, 65, 50, 225);
  }
  else {
    fill(225, 200, 2, 200);
  }

  ellipse(x, y, radius * 2);
  x += random(-6, 6);
  y += random(-12, 12);
}
