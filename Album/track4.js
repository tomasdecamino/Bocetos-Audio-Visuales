//Tomas de Camino Beck
//proyecto experimental audio-visual

var ang=0;
var angInc=0.01;
var inc=200;
var A;
var B;
var C;
var D;
var E;
var base;
var head=0;
var x;
var y;

function preload() {
  // Load a sound files
  base = loadSound('assets/base4.mp3');
  A = loadSound('assets/A4.mp3');
  B = loadSound('assets/B4.mp3');
  C = loadSound('assets/C4.mp3');
  D = loadSound('assets/D4.mp3');
  E = loadSound('assets/E4.mp3');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  base.loop();
  base.amp(0.5);
}

function draw() {
  fill(255, 5);
  var square = map(mouseX, 0., width,50, 200);
  strokeWeight(1);
  stroke(0, 50);
  for (var i = 0 ; i <width; i+=inc) {
      for (var j = 0; j < height; j+=inc) {
        push();
          translate(i,j);
          var d=dist(x,y,i,j);
          if (d<10) {
            stroke(255,0,0, 50);
          } else{stroke(0, 50);};
          rotate(ang+i/3+j/3);
          rect(0,0,square,square);
        pop();
      };
  };


  if (mouseIsPressed) {
    x= mouseX;
    y= mouseY;
  }

  ang+=angInc;
  stroke(0,150);
  strokeWeight(10);
  line(0,head,width,head);
  head=(head+1)%height;
  if ((head-y)==0) {
            A.stop();
            B.stop();
            C.stop();
            D.stop();
            E.stop();
            //A.play();
            var panning = map(mouseX, 0., windowWidth,-1.0, 1.0);
            var r=y%5;
            switch (r) {
              case 0:
                A.play();
                A.pan(panning);
                break;
              case 1:
                B.play();
                B.pan(panning);
                break;
              case 2:
                C.play();
                C.pan(panning);
                break;
              case 3:
                D.play();
                D.pan(panning);
                break;
              case 4:
                E.play();
                E.pan(panning);
                break;
              };
            };
  base.amp(0.5);
}

