let x = 400;
let y = 200;

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
  //dibuja la pelota del juego usando la función cirrcle de p5.js
  circle(x, y, 50);
  //mueve la pelota usando la variable de velocidad
  x = x + vx;
  y = y + vy;


  //si la pelota llega a los bordes de la pantalla, cambiua la dirección
  if(x > width - 25 || x < 25){
    vx = -vx; 
  }
  if(y > height - 25 || y < 25){
    vy = -vy;
  }
}

  
   
