let x = 100;
let y = 100;
let xspeed = 2.5;
let yspeed = 2;
let diameter = 24;

const vecDemo = (p) => {
    p.setup = function () {
        p.createCanvas(640, 240).parent("vecDemo");
        spot = p.createVector(400, 100);

    }
    p.draw = function () {
        p.background(100);

        let origin = p.createVector(spot.x, spot.y);
        p.stroke(0, 255, 0);
        p.line(0, 0, origin.x, origin.y);
        let centerVec = p.createVector(p.width / 2, p.height / 2);
        p.stroke(0, 0, 255);
        p.line(0, 0, centerVec.x, centerVec.y);
        let createdVec = p.createVector(spot.x - centerVec.x, spot.y - centerVec.y);
        p.translate(p.width / 2, p.height / 2)
        p.stroke(255, 255, 0);
        p.line(0, 0, createdVec.x, createdVec.y);

    }
    p.mousePressed = function () {
        spot.x = p.mouseX;
        spot.y = p.mouseY;
    }
}
new p5(vecDemo);
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
        acceleration.setMag(1);
        acceleration.div(mouse.sub(position));
        velocity.add(acceleration);
        velocity.limit(10);
        position.add(velocity);
        if (position.x > p.width - diameter / 2) {
            velocity.x *= -1;
            position.x = p.width - diameter / 2;
        } else if (position.x < 0 + diameter / 2) {
            velocity.x *= -1;
            position.x = diameter / 2;
        } else if (position.y > p.height - diameter / 2) {
            velocity.y *= -1;
            position.y = p.height - diameter / 2;
        } else if (position.y < 0 + diameter / 2) {
            velocity.y *= -1;
            position.y = diameter / 2;
        }


    }
}

new p5(sketch2);