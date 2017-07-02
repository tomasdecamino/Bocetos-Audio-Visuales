//Tomas de Camino Beck
//proyecto experimental audio-visual

var A,C,D,E,G,A2,C2,D2,E2,G2,A3;
var head=0;
var noteX = [0,0,0,0,0,0,0,0,0,0,0];
var noteY = [0,0,0,0,0,0,0,0,0,0,0];
var current=0;

function preload() {
  // Load a sound files
  A = loadSound('assets/A.mp3');
  C = loadSound('assets/C.mp3');
  D = loadSound('assets/D.mp3');
  E = loadSound('assets/E.mp3');
  G = loadSound('assets/G.mp3');
  A2 = loadSound('assets/A2.mp3');
  C2 = loadSound('assets/C2.mp3');
  D2 = loadSound('assets/D2.mp3');
  E2 = loadSound('assets/E2.mp3');
  G2 = loadSound('assets/G2.mp3');
  A3 = loadSound('assets/A3.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rectMode(CENTER);
}

function draw() {
  noFill();
  noStroke();
  background(230, 242, 255);
  //Moving play line
  stroke(0, 255);
  strokeWeight(2);
  line(head, 0, head, windowHeight);
  head=(head+1)%windowWidth;

  strokeWeight(1);
  for (var i = noteX.length - 1; i >= 0; i--) {
    if (noteX[i]>0) {
    var d = dist(head,0,noteX[i],0);
    if (d==0) {
      background(255);
      stroke(244,i*2,47,80);
      fill(244,i*2,47,100);
      var panning = map(noteY[i], 0., windowHeight,-1.0, 1.0);
        switch (i) {
      case 0:
          A.play();
          A.pan(panning);
          break;
      case 1:
          C.play();
          C.pan(panning);
          break;
      case 2:
          D.play();
          D.pan(panning);
          break;
      case 3:
          E.play();
          E.pan(panning);
          break;
      case 4:
          G.play();
          G.pan(panning);
          break;
      case 5:
          A2.play();
          A2.pan(panning);
          break;
      case 6:
          C2.play();
          C2.pan(panning);
          break;
      case 7:
          D2.play();
          D2.pan(panning);
          break;
      case 8:
          E2.play();
          E2.pan(panning);
          break;
      case 9:
          G2.play();
          G2.pan(panning);
          break;
      case 10:
          A3.play();
          A3.pan(panning);      
  }

    } 
    else{
      stroke(0, 255, 0,100);
      fill(69, 166, 244,100);
    };
    strokeWeight(10);
    line(noteX[i],0,noteX[i],windowHeight);
    rect(noteX[i],noteY[i],i*50,i*50);
  };
  };

}


function mouseReleased() {
    noteX[current]=mouseX;
    noteY[current]=mouseY;
    current=(current+1)%noteX.length;
}