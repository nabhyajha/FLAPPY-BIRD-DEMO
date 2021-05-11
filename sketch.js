var bird,count=0;
var pipes = [];
var isOver = false;
var score = 0;
function setup() {
  createCanvas(1100, 400);
 bird = new Bird();
  pipes.push(new Pipe());
}
function draw() {
  background(0);

  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

  if (pipes[i].hits(bird)) {
   gameover();  
    } 
    if (pipes[i].pass(bird)) {
      score++;
    }
  }

  bird.update();
  bird.show();
  if (frameCount % 75 == 0) {
    pipes.push(new Pipe());
  }
  showScores();
}
function showScores() {
  textSize(32);
  text('score: ' + score, 1, 32);
}
function gameover() {
  textSize(64);
  textAlign(RIGHT, CENTER);
  fill(255,0,0);
  text('GAMEOVER', 600, 110);
  textAlign(LEFT, BASELINE);
  isOver = true;
  noLoop();
}
function keyPressed() {
  if (key == ' ') {
    bird.up();
  }
}
