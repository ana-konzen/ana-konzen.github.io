
class myLetter {
    constructor(word, usercolor, usercolor2, usersize, userweight, inx, iny, inangle){
        this.text = word;
        this.posx = 60;
        this.posy = 100;
        this.color = usercolor;
        this.stroke = usercolor2;
        this.size = usersize;
        this.weight = userweight;
        this.array = [];
        this.inx = inx;
        this.iny = iny;
        this.inangle = inangle;
        this.posHis = [];

        this.points = font.textToPoints(this.text, 0, 0, this.size, { sampleFactor:  0.1, simplifyThreshold: 0 });

        for(let p of this.points){
            let b = Bodies.circle(p.x, p.y, 4, { });
            this.array.push(b);
        }

        this.body = Matter.Body.create({
            parts: this.array,
            friction: 0.01,
            restitution: 0.7,
            mass: 0.1
        });

        Matter.Body.setPosition(this.body, Matter.Vector.create(this.inx, this.iny));
        Matter.Body.setAngle(this.body, this.inangle);
        Composite.add(engine.world, this.body);
    }

    update() {
        let dotsPos = [];

        for (let dot of this.array){
            dotsPos.push([dot.position.x, dot.position.y]);

        }


        if(this.posHis.length > 50){
            this.posHis.splice(0, 1);
        }

        let currentPos = [this.body.position.x, this.body.position.y, this.body.angle, this.body.angularVelocity, dotsPos];

        this.posHis.push(currentPos);

    }

    show(){

        textAlign(CENTER, CENTER);
        textSize(this.size);
        textFont(font);
        strokeWeight(this.weight);
        stroke(this.stroke);
        fill(this.color);


    
        ellipseMode(CENTER);


        for(let i = 0; i < this.posHis.length; i++){

        // push();
        // strokeWeight(1);
        // stroke(0);

            // for (let p of this.posHis[i][4]){
            //     ellipse(p[0], p[1], 1, 1);
            // }   

        // pop();

        push();


                translate(this.posHis[i][0], this.posHis[i][1]);
                rotate(this.posHis[i][2]);
                

                text(this.text, 0, -this.size / 5);

             pop();
        }


        // push();


        // for (let p of this.array){
        //     ellipse(p.position.x, p.position.y, 4, 4);
        // }   

        // pop();

        push();


        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        
   

        text(this.text, 0, -this.size / 5);

     pop();

     
  


    }
}