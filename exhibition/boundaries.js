class myBound {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, { isStatic: true,  friction: 1});
        Composite.add(engine.world, this.body);

    }

    update() {
        Matter.Body.setPosition(this.body, Matter.Vector.create(this.x, this.y));
    }

    show() {
        push();
            fill('black');
            noStroke();
            rect(this.body.position.x, this.body.position.y, this.w, this.h);
        pop();
    }
}