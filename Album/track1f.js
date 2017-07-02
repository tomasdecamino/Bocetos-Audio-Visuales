//Tomas de Camino Beck

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
  base.amp(0.5);
}

function draw() {
  noFill();

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

  //distance from center
  var d = dist(mouseX,mouseY,width/2,height/2);

  //play the main track
  if (mouseIsPressed) {
    track.play();
    ellipse(mouseX,mouseY,d,d);
  }

  //panning
  var panning = map(mouseX, 0., width,-1.0, 1.0);
  track.pan(panning);


  // Set the volume
  var volume = map(mouseX, 0, width, 0, 1);
  volume = constrain(volume, 0, 1);
  track.amp(volume);

  // Set the rate (pitch)
  var speed = map(d, 0.1, width/2, 4, 0);
  speed = constrain(speed, 0.01, 4);
  track.rate(speed);

  base.amp(1.0);
}
