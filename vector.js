let x = 100;
let y = 100;
let xspeed = 2.5;
let yspeed = 2;
let radius = 24;


const sketch1 = (p) => {
    p.setup = function () {
        p.createCanvas(640, 240).parent("sketch1");
    }
    p.draw = function () {
        p.background(100);
        x += xspeed;
        y += yspeed;
        p.circle(x, y, radius);
        if (x > p.width - radius) {
            xspeed *= -1;
            x = p.width - radius;
        } else if (x < 0 + radius) {
            xspeed *= -1;
            x = radius;
        } else if (y > p.height - radius) {
            yspeed *= -1;
            y = p.height - radius;
        } else if (y < 0 + radius) {
            yspeed *= -1;
            y = radius;
        }
        // p.circle(x, y, radius);
    }
}

new p5(sketch1);