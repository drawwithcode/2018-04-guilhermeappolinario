function preload() {
  // put preload code here
}

var balls = [];

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);

  var minimodiametro = width/60;
  var maximodiametro = width/20;

  var teste = random(10,30);

  var ballNumber = 30;
  for (var i = 0; i < ballNumber; i++) {
    var myBall = new Ball(random(width, 0), random(0, height))

    myBall.diameter = random(minimodiametro, maximodiametro);
    //o valor abaixo vai para cada uma das bolas
    myBall.speed = random(1, 4);
    myBall.color = color(random(0, 255), random(0, 100), random(128, 255));

    balls.push(myBall);
  }
}

function draw() {
  // put drawing code here
  background(mouseX / width * 360, mouseY/height*100, 40);
  textAlign(CENTER);
  drawWords(width * .5);

  for (var j = 2; j < balls.length; j++) {

    balls[j].move();
    balls[j].display();

  }

}

//my object

function Ball(_x, _y, _diameter) {
  this.x = _x;
  this.y = _y;
  this.diameter = _diameter;
  this.color = 'blue'
  this.speed = 2;

  var yDir = 0.5;
  var xDir = 0.5;

  this.display = function() {
    fill(this.color);
    noStroke();
    // ellipse(this.x, this.y, this.diameter);
    ellipse(this.x, this.y, mouseX/10);
  }

  this.move = function() {
    this.x += this.speed * xDir;
    this.y += this.speed * yDir;

    if (this.y > height || this.y < 0) {
      yDir = yDir * -1;
    }

    if (this.x > width || this.x < 0) {
      xDir = xDir * -1;
    }

    function windowResized() {

      resizeCanvas(windowWidth, windowHeight);

    }
  }

}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
}

function drawWords(x) {
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position
  background(0,0);
  fill(255);
  text(floor(mouseX / width * 100) + ", " + floor(mouseY / height * 100), mouseX, mouseY);
}
