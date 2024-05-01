function Boundary(x, y, w, h){

    let options = {
        isStatic: true,
        angle: PI / 4
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    Composite.add(world, this.body);

    this.show = function() {
        let pos = this.body.position;
        let angle = this.body.angle;

        push();
        rectMode(CENTER);
        fill(0);


        translate(pos.x, pos.y);
        rotate(angle);

        rect(0, 0, this.w, this.h);

        pop();

    }
}

