//Tomas de Camino Beck

var base;
var track;
var head=0;
var noteX = [0,0,0,0,0,0,0,0,0,0,0,0,0];
var noteY = [0,0,0,0,0,0,0,0,0,0,0,0,0];
var current=0;

//function preload() {
//  // Load a sound files
//  base = loadSound('assets/base.mp3');
//  track = loadSound('assets/t1.mp3');
//}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //let the base loop
 // base.loop();
  background(255);
}

function draw() {
  noFill();
  noStroke();
  background(255);
  //Moving play line
  stroke(0, 255);
  strokeWeight(2);
  line(head, 0, head, windowHeight);
  head=(head+1)%windowWidth;


  //play the main track
  if (mouseIsPressed) {
 //   track.play();
    noteX[current]=mouseX;
    noteY[current]=mouseY;
    current=(current+1)%noteX.length;
  }

  strokeWeight(1);
  for (var i = noteX.length - 1; i >= 0; i--) {
    if (noteX[i]>0) {
    var d = dist(head,0,noteX[i],0);
    if (d<(i*50)/2) {
      fill(244,i,47,100);
    } 
    else{
      fill(69, 66, 244,100);
    };
    ellipse(noteX[i],noteY[i],i*50,i*50);
  };
  };

  //panning
//  var panning = map(mouseX, 0., width,-1.0, 1.0);
//  track.pan(panning);


  // Set the volume
//  var volume = map(mouseX, 0, width, 0, 1);
//  volume = constrain(volume, 0, 1);
//  track.amp(volume);

  // Set the rate (pitch)
//  var speed = map(d, 0.1, width/2, 4, 0);
//  speed = constrain(speed, 0.01, 4);
//  track.rate(speed);

//  base.amp(1.0);
}