let x = 100;
let y = 100;
let xspeed = 2.5;
let yspeed = 2;
let diameter = 24;


const sketch1 = (p) => {
    p.setup = function () {
        p.createCanvas(640, 240).parent("sketch1");
    }
    p.draw = function () {
        p.background(100);
        x += xspeed;
        y += yspeed;
        p.circle(x, y, diameter);
        if (x > p.width - diameter / 2) {
            xspeed *= -1;
            x = p.width - diameter / 2;
        } else if (x < 0 + diameter / 2) {
            xspeed *= -1;
            x = diameter / 2;
        } else if (y > p.height - diameter / 2) {
            yspeed *= -1;
            y = p.height - diameter / 2;
        } else if (y < 0 + diameter / 2) {
            yspeed *= -1;
            y = diameter / 2;
        }
        // p.circle(x, y, radius);
    }
}

new p5(sketch1);

const sketch2 = (p) => {
    p.setup = function () {
        p.createCanvas(640, 240).parent("sketch2");
        p.background(100);
        acceleration = p.createVector(0, 0);
        velocity = p.createVector(0, 0);
        position = p.createVector(p.width / 2, p.height / 2);
        mouse = p.createVector(p.mouseX, p.mouseY);
    }
    p.draw = function () {
        p.background(100);
        p.circle(position.x, position.y, diameter);
        mouse.x = p.mouseX;
        mouse.y = p.mouseY;

        acceleration.set(mouse.sub(position));
        acceleration.normalize();
        velocity.add(acceleration);
        velocity.div(1.15);
        position.add(velocity);


    }
}

new p5(sketch2);