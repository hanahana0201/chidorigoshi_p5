function setup() {
  createCanvas(5000, 5000, SVG)
  background(233, 203, 130)
}

function draw() {
  let step = width / 20
  for (let y = 0; y < height; y += step) {
    for (let x = 0; x < width; x += step) {
      push()
        noStroke()
        fill(158, 122, 70)
        translate(x, y)
        rect(0, 0, step / 2, step / 2)
        translate(step / 2, step / 2)
        for (let i = 0; i < 2; i++) {
          rotate(i * PI)
          quad(0, 0, step / 2, -step / 2, step / 2, -step / 4, step / 4, 0)
          triangle(0, -step / 4, 0, -step / 2, step / 4, -step / 2)
        }
      pop()
    }
  }

  // save("chidorigoshi_01.svg");
  // print("saved svg");
  // noLoop();
}