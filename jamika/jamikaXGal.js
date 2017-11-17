var img;
var lineX = 124;
var lineY = 136;
var x = new Array();
var y = new Array();
var j = 0;

function preload (){ 
  img = loadImage ("images/jamika.png");
}

function setup() {
  createCanvas(448, 252)
  background(0);
  x[0] = 0;
  y[0] = height/2;
}

function draw() {
  j++;
  append(x,j*4);
  append(y,random(width,height));
  
  // if(mouseX >= 50 && mouseX <= 200 && mouseY <= 100 && mouseY >= 10){
  // var r = random(0,200);
  // var g = random(100,255);
  // var b = random(150,220); 
  // fill (r, g, b, 500);
  // ellipse(125, 60, 400, 200);
  }
  
  image(img, 0, 0);
  
  stroke(10,255,10);
  line(x[j-1],y[j-1],x[j],y[j]);
  
//   if(mouseX >= 50 && mouseX <= 200 && mouseY <= 100 && mouseY >= 10){
//   stroke("yellow");
//   strokeWeight(random(0,4));
//   line(122,133,lineX,lineY);
//   lineX = lineX + 1;
//   lineY = lineY + 0.5;
//   line(150,133,lineX+27,lineY);
// }
  else{ 
    lineX = 122;
    lineY = 133;
  }
  if (lineY >= height) {
    lineX = 122;
    lineY = 133;
  
  }

}
  