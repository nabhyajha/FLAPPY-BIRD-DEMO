function Pipe() {
  this.spacing = 175;
  this.top = random(height / 6, (3 / 4) * height);
  this.bottom = height - (this.top + this.spacing);
  this.x = width;
  this.w = 80;
  this.speed = 6;
  this.passed = false;
  this.hits = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.passed = true;
        return true;
      }
    }
    return false;
  };

  this.pass = function(bird) {
    if (bird.x > this.x && !this.passed) {
      this.passed = true;
      return true;
    }
    return false;
  }
  this.show = function() {
    fill(100);
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.bottom);
  };

  this.update = function() {
    this.x -= this.speed;
  };
}
