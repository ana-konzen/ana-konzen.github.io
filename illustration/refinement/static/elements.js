class myCar {
    constructor(p = p5.instance, carX){
        this.color = "white";
        this.p = p;
        this.light = lightColor;
        this.vx = carX;
        this.x = this.vx;
        this.scale = 1;
        this.y = carY;
        this.w = carWidth;
        this.stroke = "rgba(0,0,0,0)";
        this.stroke2 = "rgba(0,0,0,0)";
        this.window = "#edf9fa";
        this.window2 = "#edf9fa";


    }

    show(){
        this.p.push();

            this.p.translate(this.x, this.y);
            this.p.rotate(ang);

            this.p.scale(this.scale, 1);
            this.p.fill(this.color);
            this.p.noStroke();
            this.p.stroke("black");
            this.p.strokeWeight(1.5);

            this.p.beginShape();

                this.p.curveVertex(3, 32);
                this.p.curveVertex(3, 32);

                this.p.curveVertex(5, 20);
                this.p.curveVertex(15, 15);

                this.p.curveVertex(22, 0);

                this.p.curveVertex(48, 0);

                this.p.curveVertex(62, 15);
                this.p.curveVertex(68, 20);

                this.p.curveVertex(72, 32);
                this.p.curveVertex(72, 32);

            this.p.endShape();

            this.p.fill(this.window);

            this.p.beginShape();

                this.p.curveVertex(18, 15);
                this.p.curveVertex(18, 15);

                this.p.curveVertex(22, 3);
                this.p.curveVertex(35, 2);


                this.p.curveVertex(37, 11);
                this.p.curveVertex(35, 15.5);
                this.p.curveVertex(18, 15.5);
                this.p.curveVertex(18, 15);


            this.p.endShape();

            this.p.fill(this.window2);

            this.p.beginShape();

                this.p.curveVertex(41, 15);
                this.p.curveVertex(41, 15);

                this.p.curveVertex(40, 3);
                this.p.curveVertex(49, 3);


                this.p.curveVertex(57, 11);
                this.p.curveVertex(56, 16);
                this.p.curveVertex(41, 15);
                this.p.curveVertex(41, 15);


            this.p.endShape();

            this.p.fill(this.light);


            this.p.beginShape();

                this.p.curveVertex(67, 28);
                this.p.curveVertex(67, 28);

                this.p.curveVertex(66, 23);
                this.p.curveVertex(70, 23);


                this.p.curveVertex(72, 28);
                this.p.curveVertex(72, 28);

                this.p.curveVertex(67, 28);
                this.p.curveVertex(67, 28);


            this.p.endShape();


            this.p.beginShape();

                this.p.curveVertex(3, 28);
                this.p.curveVertex(3, 28);

                this.p.curveVertex(3, 23);
                this.p.curveVertex(7, 23);


                this.p.curveVertex(8, 28);
                this.p.curveVertex(7, 28);

                this.p.curveVertex(3, 28);
                this.p.curveVertex(3, 28);


            this.p.endShape();

            

            // noStroke();

            this.p.fill("#abb0b0");

            this.p.rect(0, 32, this.w, 8, 2.5);



            this.p.fill("#3b3b3b");

            this.p.push();
            this.p.translate(18, 38);
            this.p.rotate(-this.p.frameCount * 8 * this.scale);



            let npoints = 10;
            let radius1 = 10.5;
            let radius2 = 11;

            let angle = this.p.TWO_PI / npoints;
            let halfAngle = angle / 2.0;

            this.p.beginShape();
            for (let a = 0; a < this.p.TWO_PI; a += angle) {
              let sx =  cos(a) * radius2;
              let sy = sin(a) * radius2;
              this.p.vertex(sx, sy);
              sx = cos(a + halfAngle) * radius1;
              sy = sin(a + halfAngle) * radius1;
              this.p.vertex(sx, sy);
            }
            this.p.endShape(this.p.CLOSE);

            this.p.pop();

            this.p.push();
            this.p.translate(57, 38);
            this.p.rotate(-this.p.frameCount * 8 * this.scale);



        this.p.beginShape();
        for (let a = 0; a < this.p.TWO_PI; a += angle) {
          let sx =  + cos(a) * radius2;
          let sy =  sin(a) * radius2;
          this.p.vertex(sx, sy);
          sx =  cos(a + halfAngle) * radius1;
          sy =  sin(a + halfAngle) * radius1;
          this.p.vertex(sx, sy);
        }
        this.p.endShape(this.p.CLOSE);
        this.p.pop();


       
            // this.p.ellipse(18, 38, 22);

            
            // this.p.ellipse(57, 38, 22);

            this.p.fill("#d3d3d3");

            this.p.ellipse(18, 38, 10);
            this.p.ellipse(57, 38, 10);

            this.p.noFill();
            this.p.stroke(this.stroke);

            this.p.beginShape();

            this.p.curveVertex(80, 15);
            this.p.curveVertex(80, 15);
        
            this.p.curveVertex(67, 23);
            this.p.curveVertex(70, 23);
        
            this.p.endShape();

            this.p.stroke(this.stroke2);


            this.p.beginShape();

            this.p.curveVertex(40, 19);
            this.p.curveVertex(40, 19);
        
            this.p.curveVertex(40, 29);
            this.p.curveVertex(45, 29);
        
            this.p.endShape();


    this.p.pop();


      
    }

}



class claw {

    constructor(p = p5.instance){
        this.p = p;
        this.s = claws;
        this.x = clawx;
        this.y = clawy;

    }

    show(){
        this.p.push();

            this.p.translate(this.x, this.y)

            
            this.p.noFill();
            this.p.stroke("black");
            this.p.strokeWeight(10);


            this.p.beginShape();

                this.p.vertex(25 + this.s, 55);
                this.p.vertex(10 + this.s, 35);
                this.p.vertex(75, -100);
                this.p.vertex(100, -100);
                this.p.vertex(100, -700);
                this.p.vertex(100, -100);
                this.p.vertex(125, -100);
                this.p.vertex(190 - this.s, 35);
                this.p.vertex(175 - this.s, 55);


            this.p.endShape();

        this.p.pop();
    }
}


