//Tomas de Camino Beck
//proyecto experimental audio-visual

var ang=0;
var angInc=0.01;
var s=300;
var c=30;
var l=0;
var track;

function preload() {
  // Load a sound files
  track = loadSound('assets/ciclo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rectMode(CENTER);
}

function draw() {
  track.play();
  l = map(mouseX, 0., width,0, 500);
  var speed = map(mouseX, 0, width, 0, 4);
  track.rate(speed);
  s = map(mouseY, 0., height,10, 500);
  fill(255, 10);
  stroke(0, 100);
  push();
  translate(width/2+sin(ang-PI)*50, height/2+cos(ang-PI)*50);
  rotate(ang);
  rect(c, c+l, s, s, 20);
  ang+=angInc;
  pop();

  if (mouseIsPressed) {
    track.stop();
    background(255);
  }

}

