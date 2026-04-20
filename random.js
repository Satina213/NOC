const windowsize = 400;
const screencolor = [29, 235, 166];

class RandomWalker {
    constructor(p) {
        this.p = p;
        this.x = p.width / 2;
        this.y = p.height / 2;

    }
    show() {
        this.p.stroke(0);
        this.p.strokeWeight(2);
        this.p.point(this.x, this.y);
    }
    step() {
        this.x += this.p.random(-2, 2);
        this.y += this.p.random(-1, 1);
    }
    reset() {
        if (this.x < 0 || this.x > this.p.width || this.y < 0 || this.y > this.p.height) {
            this.x = this.p.width / 2;
            this.y = this.p.height / 2;
            this.p.background(29, 235, 166);
        }
    }
}


const randomDis = (p) => {
    p.setup = function () {
        p.createCanvas(windowsize, windowsize).parent("randomDis");
        p.background(screencolor);
        p.stroke(0);
        p.strokeWeight(2);
        for (let i = 0; i < 1000; i++) {
            p.point(p.random(windowsize), p.random(windowsize));
        }
    }
    p.draw = function () {

    }
}
new p5(randomDis);

const highGaus = (p) => {
    p.setup = function () {
        p.createCanvas(windowsize, windowsize).parent("highGaus");
        p.background(screencolor);
        p.stroke(0);
        p.strokeWeight(2);
        for (let i = 0; i < 1000; i++) {
            p.point(p.randomGaussian(windowsize / 2, windowsize / 6), p.randomGaussian(windowsize / 2, windowsize / 6));
        }
    }
    p.draw = function () {

    }
}
new p5(highGaus);
const lowGaus = (p) => {
    p.setup = function () {
        p.createCanvas(windowsize, windowsize).parent("lowGaus");
        p.background(screencolor);
        p.stroke(0);
        p.strokeWeight(2);
        for (let i = 0; i < 1000; i++) {
            p.point(p.randomGaussian(windowsize / 2, windowsize / 12), p.randomGaussian(windowsize / 2, windowsize / 12));
        }
    }
    p.draw = function () {

    }
}
new p5(lowGaus);

class NoiseWalker {
    constructor(p) {
        this.p = p;
        this.x = p.width / 2;
        this.y = p.height / 2;
        this.t = 0;
    }
    show() {
        this.p.stroke(0);
        this.p.strokeWeight(2);
        this.p.point(this.x, this.y);
    }
    step() {
        this.x += this.p.map(this.p.noise(this.t), 0, 1, -2, 2)
        this.y += this.p.map(this.p.noise(this.t + 100000), 0, 1, -2, 2);
        this.t += 0.01
    }
    reset() {
        if (this.x < 0 || this.x > this.p.width || this.y < 0 || this.y > this.p.height) {
            this.x = this.p.width / 2;
            this.y = this.p.height / 2;
            this.p.background(29, 235, 166);
        }
    }
}
const perlinSketch = (p) => {
    p.setup = function () {
        p.createCanvas(windowsize, windowsize).parent("perlinSketch");
        p.background(29, 235, 166);
        p.walker = new NoiseWalker(p);
    }
    p.draw = function () {
        p.walker.step();
        p.walker.show();
        p.walker.reset();
        p.background(29, 235, 166, 1);

    }
}
new p5(perlinSketch);

class NoiseCircle {
    constructor(p) {
        this.p = p;
        this.x = p.width / 2;
        this.y = p.height / 2;
    }
    show() {
        this.p.stroke(0);
        this.p.strokeWeight(1);
        this.p.circle(this.x, this.y, 30);
    }
    update() {
        this.x = this.p.map(this.p.noise(this.p.frameCount / 500), 0, 1, 0, this.p.width);
        this.y = this.p.map(this.p.noise((this.p.frameCount + 10000) / 100), 0, 1, 0, this.p.height);
    }
}
const circleSketch = (p) => {
    p.setup = function () {
        p.createCanvas(windowsize, windowsize).parent("circleSketch");
        p.background(29, 235, 166);
        p.noiseCircle = new NoiseCircle(p);
    }
    p.draw = function () {
        p.background(29, 235, 166);
        p.noiseCircle.show();
        p.noiseCircle.update();

    }
}
new p5(circleSketch);

