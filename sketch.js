function setup() {
    createCanvas(400, 400);
    background ("white");
  }
  
  function draw() {
    circle (30,30,20);
  }
  
  function draw () {
   fill ("red");
    circle (200,200, 50);
  }
  
  let cor;
  function setup() {
    createCanvas(400, 400);
    background ("white");
  }
  
  function draw () {
   fill ("red");
    circle (200,200, 50);
  }
  
  function setup() {
    createCanvas(400, 400);
    background ("white");
    cor = "red";
  }
  
  function draw() {
    fill (cor);
    circle (200, 200,50)
  }
  
  function setup() {
   createCanvas(400, 400);
   background ("white");
   cor = color(10, 250, 250);
  }
  
  function draw() {
    fill (cor);
    circle (200, 200,50)
  }
  
  function setup() {
   createCanvas(400, 400);
   background ("white");
   cor = color(random(0, 255), random(0, 255), random(0, 255));
  }
  
  function setup() {
   createCanvas(400, 400);
   background ("white");
   cor = color(random(0, 255), random(0, 255), random(0, 255));
   posicaoHorizontal = 200;
   posicaoVertical = 200;
  }
  
  function draw() {
   fill(cor);
   circle(posicaoHorizontal, posicaoVertical, 50);
  }
  
  function draw() {
   fill(cor);
   circle(posicaoHorizontal,
   posicaoVertical, 50);
  if(mouseX < posicaoHorizontal) {
   posicaoHorizontal--;
  }
  if(mouseX > posicaoHorizontal) {
   posicaoHorizontal++;
  }
  if(mouseY < posicaoVertical) {
  posicaoVertical--;
  }
  if(mouseY > posicaoVertical) {
  posicaoVertical++;
  }
  
  if(mouseIsPressed) {
  cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
  
  }
  