const windowsize = 200;
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


const sketch1 = (p) => {
    p.setup = function () {
        p.createCanvas(window.screen.width, windowsize).parent("sketch1");
        p.background(screencolor);
        p.walker = new RandomWalker(p);
    }
    p.draw = function () {

        p.walker.step();
        p.walker.show();
        p.walker.reset();
        p.background(screencolor[0], screencolor[1], screencolor[2], 3);
    }
}

new p5(sketch1);



class GaussianWalker {
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
        let xstep = this.p.randomGaussian(0, 3);
        let ystep = this.p.randomGaussian(0, 1);
        this.x += xstep;
        this.y += ystep;
    }
    reset() {
        if (this.x < 0 || this.x > this.p.width || this.y < 0 || this.y > this.p.height) {
            this.x = this.p.width / 2;
            this.y = this.p.height / 2;
            this.p.background(29, 235, 166);
        }
    }
}
const sketch2 = (p) => {
    p.setup = function () {
        p.createCanvas(window.screen.width, windowsize).parent("sketch2");
        p.background(29, 235, 166);
        p.walker = new GaussianWalker(p);
    }
    p.draw = function () {
        p.walker.show();
        p.walker.step();
        p.walker.reset();
        p.background(29, 235, 166, 3);

    }
}

new p5(sketch2);



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

const sketch3 = (p) => {
    p.setup = function () {
        let windowsize = 200;
        p.createCanvas(window.screen.width, windowsize).parent("sketch3");
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


new p5(sketch3);



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

const circlesketch = (p) => {
    p.setup = function () {
        let windowsize = 200;
        p.createCanvas(window.screen.width, windowsize).parent("circlesketch");
        p.background(29, 235, 166);
        p.noiseCircle = new NoiseCircle(p);
    }
    p.draw = function () {
        p.background(29, 235, 166);
        p.noiseCircle.show();
        p.noiseCircle.update();

    }
}

new p5(circlesketch);
