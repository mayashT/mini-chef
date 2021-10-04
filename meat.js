class Meat extends Base {
    constructor(x, y, width, height) {
        super(x, y, width, height)
        this.image = loadImage("meat1.png");

    }
}


/*class Carne {
    constructor(x, y, width) {
        var options = {
            // restitution: 1.0,
            friction: 0.8,
            density: .005,
            stiffness: 8
        }

        this.body = Bodies.circle(x, y, width, options);
        this.x = x;
        this.y = y;
        this.width = width;
        //this.height = height;

        World.add(world, this.body);
    }

    display() {
        push();
        ellipseMode(RADIUS);
        fill("red");
        ellipse(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
    }
}*/