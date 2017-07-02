//Tomas de Camino Beck
//proyecto experimental audio-visual

var head = 0;
var base;
var A;

function preload() {
  // Load a sound files
  base = loadSound('assets/base5.mp3');
  A = loadSound('assets/A5.mp3');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0);
  base.loop();
  A.loop();
}

function draw(){
 noFill();
 stroke(255,10);
 bezier(mouseX,mouseY, mouseX+randomGaussian(10,15),mouseY+randomGaussian(10,15),mouseX+randomGaussian(10,15),mouseY+randomGaussian(10,15),mouseX+random(-500,500),mouseY+random(-500,500));
 stroke(255, 255, 0,10);
 ellipse(0,0,head,head);
 stroke(0,30);
 ellipse(-2,-2,head,head);
 head=(head+1)%(windowWidth*2);


  // Set the rate (pitch)
  var speed = map(mouseX, 0.1, width, 4, 0);
  speed = constrain(speed, 0.01, 4);
  A.rate(speed);

}

