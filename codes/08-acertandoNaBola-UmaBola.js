//** versão com objetos - uma bola

class Bola {
  constructor(x, y, d) { 
    this.x = x;
    this.y = y;
    this.d = d;
  }

  desenhar() {
    circle(this.x, this.y, this.d);
  }

  atualizar() {
    this.d--;
    if (this.d <= 5) {
      this.randomizarPosEDiametro()
    }
  }
  
  randomizarPosEDiametro() {
      this.x = random(0, 400);
      this.y = random(0, 400);
      this.d = random(0, 200);
  }  

  dentro(x, y) {
    const r = this.d/2;
    return (this.x - x)**2 + (this.y - y)**2  <=  r**2;  
  }
}

let placar = 0, bola = new Bola(0, 0, 0);

function setup() { 
  bola.randomizarPosEDiametro();
  createCanvas(400, 400);
}

function draw() {
  background(220);
  bola.desenhar();
  text(`Placar: ${placar}`, 180, 20);
  bola.atualizar();
}

function mouseClicked() {
  if (bola.dentro(mouseX, mouseY)) {
    placar ++;
    bola.randomizarPosEDiametro();
  }
}