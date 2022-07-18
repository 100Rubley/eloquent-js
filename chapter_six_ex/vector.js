class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(anotherVec) {
    return new Vec(this.x + anotherVec.x, this.y + anotherVec.y)
  }

  minus(anotherVec) {
    return new Vec(this.x - anotherVec.x, this.y - anotherVec.y)
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }
}
