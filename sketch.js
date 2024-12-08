class Pelota {
    constructor(x, y, diameter, vx, vy) {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        //velocidad del sentido incial de la pelota sea un valor aleatorio, utliza Math.random()
        this.vx = vx * (Math.random() < 0.5 ? -1 : 1);
        this.vy = vy * (Math.random() < 0.5 ? -1 : 1);

       
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x > width - this.diameter / 2 || this.x < this.diameter / 2) {
            this.reset();
        }

        if (this.y > height - this.diameter / 2 || this.y < this.diameter / 2) {
            this.vy *= -1;
        }
    }

    reset() {
        this.x = 400;
        this.y = 200;
    }

    draw() {
        circle(this.x, this.y, this.diameter);
    }
}

class Raqueta {
    constructor(x, y, width, height, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
    }

    update() {
       //quiero mover la raqueta con el mouse,de arriba hacia abajo
       this.y += mouseY - this.y;
       //limitar el movimiento de la raqueta, para que no se salga de la pantalla
       this.y = constrain(this.y, 0, height - this.height); 
    }

    draw() {
        rect(this.x, this.y, this.width, this.height);
    }
}

let pelota;
let raqueta;

function setup() {
    createCanvas(800, 400);
    pelota = new Pelota(400, 200, 50, 5, 5);
    raqueta = new Raqueta(30, 150, 20, 100, 5);
}

function draw() {
    background(0);
    pelota.update();
    pelota.draw();
    raqueta.update();
    raqueta.draw();
}
   
