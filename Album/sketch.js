var base;
var track;
var a=0;

function preload() {
  // Load a sound files
  base = loadSound('assets/base.mp3');
  track = loadSound('assets/t1.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //let the base loop
  base.loop();
  background(255);
}

function draw() {

  push();
  translate(width/2, height/2);
  rotate(a);
  stroke(255, 255);
  strokeWeight(5);
  line(-1, 0, -1, width);
  stroke(0, 255);
  strokeWeight(1);
  line(0, 0, 0, width);
  pop();
  a+=0.02;

  // Set the volume to a range between 0 and 1.0
  var volume = map(mouseX, 0, width, 0, 1);
  volume = constrain(volume, 0, 1);
  track.amp(volume);

  // Set the rate to a range between 0.1 and 4
  // Changing the rate alters the pitch
  var speed = map(mouseY, 0.1, height, 0, 2);
  speed = constrain(speed, 0.01, 4);
  track.rate(speed);
}
