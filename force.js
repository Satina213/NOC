class Balloon {
    constructor(p) {
        this.p = p;
        this.position = p.createVector(p.width / 2, 9 * p.height / 10);
        this.velocity = p.createVector(0, 0);
        this.acceleration = p.createVector(0, 0);
    }
    show() {
        this.p.stroke(255);
        this.p.circle(this.position.x, this.position.y, 24);
    }
    applyForce(force) {
        this.acceleration.add(force);
    }
    update() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
        this.position.add(this.velocity);
        this.acceleration.mult(0);

    }
}
diameter = 24;
const sketch1 = (p) => {
    p.setup = function () {
        p.createCanvas(640, 240).parent("sketch1");
        p.balloon = new Balloon(p);
    }
    p.draw = function () {
        p.background(100);
        p.balloon.show();
        p.balloon.applyForce(p.createVector(0, -0.01))
        p.balloon.update();
        if (p.balloon.position.x > p.width - diameter / 2) {
            p.balloon.velocity.x *= -1;
            p.balloon.position.x = p.width - diameter / 2;
        } else if (p.balloon.position.x < 0 + diameter / 2) {
            p.balloon.velocity.x *= -1;
            p.balloon.position.x = diameter / 2;
        } else if (p.balloon.position.y > p.height - diameter / 2) {
            p.balloon.velocity.y *= -1;
            p.balloon.position.y = p.height - diameter / 2;
        } else if (p.balloon.position.y < 0 + diameter / 2) {
            p.balloon.velocity.y *= -1;
            p.balloon.position.y = diameter / 2;
        }
    }
    p.mousePressed = function () {
        p.balloon.applyForce(p.createVector(p.balloon.position.x - p.mouseX, p.balloon.position.y - p.mouseY).setMag(1))
    }
}
new p5(sketch1);