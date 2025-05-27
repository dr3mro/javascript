class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  set width(width) {
    if (typeof width !== "number") {
      throw new TypeError("width must be a number");
    }
    if (width <= 0) {
      throw new RangeError("width must be positive");
    }
    this._width = width;
  }
  set height(height) {
    if (typeof height !== "number") {
      throw new TypeError("height must be a number");
    }
    if (height <= 0) {
      throw new RangeError("height must be positive");
    }
    this._height = height;
  }

  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
}
const rectangle1 = new Rectangle(10, 20);
console.log(rectangle1.height);
console.log(rectangle1.width);
