class Lettuce extends Base {
    constructor(x, y, width, height) {
        super(x, y, width, height)
        this.image = loadImage("lettuce.png");
    }
}


/*class lettuce {
    constructor(x, y, width) {
        var options = {
            restitution: 0.001,
            friction: 10.0,
            density: 0.9
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
        fill("green");
        ellipse(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
    }
}*/