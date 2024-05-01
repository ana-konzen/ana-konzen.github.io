function Box(x, y, w, h){
    let options = {
        friction: 0.8,
        restitution: 0.2
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.fill = random(255);
    this.fill1 = random(255);
    this.fill2 = random(255);
    Composite.add(world, this.body);

    this.show = function() {
        let pos = this.body.position;
        let angle = this.body.angle;

        push();
        rectMode(CENTER);
        fill(this.fill, this.fill1, this.fill2);


        translate(pos.x, pos.y);
        rotate(angle);

        rect(0, 0, this.w, this.h);

        pop();

    }
}