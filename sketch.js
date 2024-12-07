const diameter = 50;

//crea variable de velocidad para la pelota
let vx = 5; 
let vy = 5;

//función setup del p5.js
function setup() {
  createCanvas(800, 400);
}

//función draw del p5.js
function draw() {
  background(0);
  //dibuja la pelota del juego usando la función circle de p5.js
  circle(x, y, diameter);
  //mueve la pelota usando la variable de velocidad
  x = x + vx;
  y = y + vy;

  //si la pelota llega a los bordes de la pantalla, cambia la dirección
  if(x > width - diameter / 2 || x < diameter / 2){
    vx = -vx; 
  }
  if(y > height - diameter / 2 || y < diameter / 2){
    vy = -vy;
  }
}
class Pelota {
  constructor(x, y, diameter, vx, vy) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.vx = vx;
    this.vy = vy;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x > width - this.diameter / 2 || this.x < this.diameter / 2) {
      this.vx = -this.vx;
    }
    if (this.y > height - this.diameter / 2 || this.y < this.diameter / 2) {
      this.vy = -this.vy;
    }
  }

  reset(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    circle(this.x, this.y, this.diameter);
  }
}

let pelota = new Pelota(100, 100, diameter, vx, vy);

function draw() {
  background(0);
  pelota.update();
  pelota.draw();
}

  
   
