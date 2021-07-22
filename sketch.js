function setup() {
  createCanvas(500, 500, SVG)
  background(225)
}

function draw() {
  const step = 100

  for (let y = 0; y < height; y += step) {
    for (let x = 0; x < width; x += step) {
      noStroke()
      fill(0)
      translate(x, y)
      rect(0, 0, step / 2, step / 2)
      translate(step / 2, step / 2)
      for (let i = 0; i < 2; i++) {
        rotate(i * PI)
        quad(0, 0, step / 2, -step / 2, step / 2, -step / 4, step / 4, 0)
        triangle(0, -step / 4, 0, -step / 2, step / 4, -step / 2)
      }
    }
  }

  // save("mySVG.svg");
  // print("saved svg");
  // noLoop();
}