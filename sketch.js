let size = 100;
let off = 10;
let gridW;
let gridH;


function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  gridW = width / size;
  gridH = height / size;
  //rect(10, 10, size - off);
  stroke(0)
  for(let i = 0; i < gridW; i++) {
    for(let j = 0; j < gridH; j++) {
      let x = (i * size) + off / 2;
      let y = (j * size) + off / 2;
      let retSize = size - 10;
      rect(x, y, size - off);
      for(let k = 3; k < gridW * gridH; k++) {
        push();
        
        x = x + round(random(k)) ;
        y = y + round(random(k)) ;
        retSize = retSize - k > 0?retSize - k : 0;
        
        let centerX = x / retSize;
        let centerY = y / retSize; 
        
        let angle = 3
        let rAngle = 180
        translate(centerX, centerY);
        //rotate(round(random(rAngle)))
        shearX(round(random(-angle, angle)));
        shearY(round(random(-angle, angle)));
        rect(x, y, retSize);
        pop();
      }
    }
  }
}