
class myLetter {
    constructor(word, inx, iny, inangle, invel){
        this.text = word;
        this.posx = 60;
        this.posy = 100;
        this.color = '#c40404';
        this.size = 100;
        this.font = font;
        this.array = [];
        this.inx = inx;
        this.iny = iny;
        this.inangle = inangle;
        this.invel = invel;

        let options = {
            friction: 0.8,
            restitution: 0.2,
            mass: 0.0005
        }



        this.points = this.font.textToPoints(this.text, 0, 0, this.size, { sampleFactor:  0.4, simplifyThreshold: 0 });

        for(let p of this.points){
            let b = Bodies.circle(p.x, p.y, 1, { });
            this.array.push(b);
        }

        this.body = Matter.Body.create({
            parts: this.array,
            friction: 0.05,
            restitution: 0.7,
            mass: 0.00010,
            // angularVelocity: this.invel
            // frictionAir: 0.05
            // render: {
            //     fillStyle: 'black'
            // }
        });
        Matter.Body.setAngularVelocity(this.body, this.invel);

        Matter.Body.setPosition(this.body, Matter.Vector.create(this.inx, this.iny));
        Matter.Body.setAngle(this.body, this.inangle);
        console.log(this.body);

        // Matter.Body.translate(this.body, Matter.Vector.sub(this.body.bounds.min, this.body.position));
        // Matter.Body.rotate(this.body, this.body.angle);

        // console.log(this.body);


        Composite.add(engine.world, this.body);


    }
    show(){
        push();
    // ellipseMode(CENTER);

        // translate(-50, 0);


            // textAlign(CENTER, CENTER);
            // translate(this.body.position.x - this.body.bounds.min.x, this.body.position.y - this.body.bounds.min.y);
            // translate(this.body.position.x, this.body.position.y);
            // rotate(this.body.angle);



            // noStroke();
            strokeWeight(1);
stroke(0);

// noStroke();


            // text(this.text, 0, 0);

            for (let p of this.array){
                ellipseMode(CENTER);
                ellipse(p.position.x, p.position.y, 1, 1);
            }

            // beginShape();

            // for (let p of this.array){
            //     // ellipseMode(CENTER);
            //     vertex(p.position.x, p.position.y);
            // }

            // endShape(CLOSE);
            

        pop();

        textAlign(CENTER, CENTER);
        textSize(this.size);

         


        push();
    textFont(font);
    noStroke();


        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        fill(this.color);
        stroke(this.color);
        // noStroke();

        // noFill();


        text(this.text, 0, -this.size / 5);

        // console.log(frameCount);

    



        pop();

    }
}