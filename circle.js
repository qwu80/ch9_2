class Vehicle{
    constructor(x, y, diameter, id, color) {
      this.x = x;
      this.y = y;
      this.position = createVector(x, y);
      this.diameter = diameter;
      this.isRolling = false; // Is the ball rolling?
      this.time = 0;
      this.id = id;
      this.maxspeed = 5;
      this.velocity = createVector(0, 0);
      this.maxforce = 0.5;
      this.acceleration = createVector(0, 0);
      this.desired = createVector(0, 0);
      this.steer = createVector(0, 0);
      this.color = color;
      this.show = 1;
      this.direction = createVector(random(-1,1), random(-1,1));
      this.movingVelocity = 5;
      this.starting_p = createVector(x, y);
      this.alpha = 255;
      this.appear = 0;
      this.dead = 0;
    
    }

    addTime() {
        this.time += 1;
    }

    deadd() {
        this.dead = 1;
    }

    noShow() {
        this.show = 0;
    }

    disappear() {
        this.appear -=20;
    }

    stop(){
        this.velocity = createVector(0, 0);
        this.acceleartion = createVector(0, 0);
        this.movingVelocity = 0;
        this.maxspeed = 0;
    }

    restart(){
        this.movingVelocity = 5;
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    seek(target) {
        this.target = target;
        this.desired = p5.Vector.sub(target, this.position);

        this.desired.setMag(this.maxspeed);

        this.steer = p5.Vector.sub(this.desired, this.velocity);
        this.steer.limit(this.maxforce);

        this.applyForce(this.steer);
    }

    update() {
      this.velocity.add(this.acceleration);
      this.velocity.limit(this.maxspeed);
      this.position.add(this.velocity);
      this.acceleartion = createVector(0, 0);
    }

    display(){
        if (this.show == 1) {
        if (this.color == 0) {
            //electron
            fill(254,246,182, this.appear);
            stroke(254,246,182, this.appear);

        } else {
        //hole
        noFill();

        stroke(125, 241, 148,  this.appear); //green
        // stroke(254,246,182, this.appear);
        strokeWeight(1);
        }
        ellipse(this.position.x, this.position.y, this.diameter);
        }
    }

    opposite_walk() {
        let uPOS = p5.Vector.mult(this.direction, this.movingVelocity);
        this.position.add(uPOS);

        const r = floor(random(10));
        const r2 = floor(random(10));

        if (floor(this.position.x) % r == 0 && floor(this.position.y) % r2 ==0) {this.direction = createVector(random(-1,1), random(-1,1));}

        if (this.position.x <  this.diameter || this.position.x > 950*s_x - this.diameter) {this.direction.x *= -1;}
        if (this.position.y < this.diameter || this.position.y > 950*s_y - this.diameter) {this.direction.y *= -1;}

    }

    straight_walk() {
        let uPOS = p5.Vector.mult(this.direction, this.movingVelocity);
        this.position.add(uPOS);

        if (this.position.y < 50*s_y) {this.direction = createVector(0, 1);}

    }

    random_walk() {

        let uPOS = p5.Vector.mult(this.direction, this.movingVelocity);
        this.position.add(uPOS);

        const r = floor(random(10));
        const r2 = floor(random(10));

        if (floor(this.position.x) % r == 0 && floor(this.position.y) % r2 ==0) {this.direction = createVector(random(-1,1), random(-1,1));}

        if (this.position.x < (90)*s_x) {this.direction.x = 1;}
        if (this.position.x > 940*s_x) {this.direction.x = -1;}
        if (this.position.y < 20*s_y) {this.direction.y = 1;}
        if (this.position.y > 770*s_y) {this.direction.y = -1;}
        

    }

    tube_walk() {
        let uPOS = p5.Vector.mult(this.direction, this.movingVelocity);
        this.position.add(uPOS);
        
        if (this.time<100) {
            this.direction = createVector(0,1);
            this.time++
        }
    }

    alpha_update(){
        this.alpha -= 10;
    }

    appear_update(){
        this.appear += 20;
    }

    
   
}

class Appear{
    constructor(x, y, length, color, id) {
        this.x = x;
        this.y = y;
        this.position = createVector(x, y);
        this.length = length;
        this.time = 0;
        this.color = color;
        this.show = 1;
        this.starting_p = createVector(x, y);
        this.alpha = 255;
        this.beta = 0;
        this.disappear = 255;
        this.d = 1;
        this.dd = 50;
        this.alpha2 = 0;
        this.id =id;

        // this.id = id

        this.acceleration = createVector(0, 0);
        this.desired = createVector(0, 0);
        this.steer = createVector(0, 0);
        this.velocity = createVector(0, 0);
        this.maxforce = 0.1;
        this.maxspeed = 0.8;
      } 

    display(){
        if (this.show == 1) {
        if (this.color == 0) {
            noStroke();
            fill(254,246,182, this.alpha);
            //fill(125, 241, 148, this.alpha);
           
            ellipse(this.position.x, this.position.y, this.d);
        } else if (this.color == 1){
        
        stroke(125, 241, 148, this.alpha);
        //stroke(255, 121, 97, this.alpha);
        strokeWeight(2);
        noFill();

        // line(this.position.x-10,this.position.y-10,this.position.x+10,this.position.y+10);
        // line(this.position.x-10,this.position.y+10,this.position.x+10,this.position.y-10);

        // noStroke();
        // fill(125, 241, 148, this.alpha);

        ellipse(this.position.x, this.position.y, this.dd);

        // }
        // ellipse(this.position.x, this.position.y, this.diameter);
        } else if (this.color == 2) {
            strokeWeight(1);
            fill(254,246,182, this.disappear);
            stroke(254,246,182, this.disappear);
            ellipse(this.position.x, this.position.y, 10);
        } else if (this.color == 3) {

            //hollow
            strokeWeight(1);
            noFill();
            stroke(254,246,182, this.disappear);
            ellipse(this.position.x, this.position.y, 10);

        } else if (this.color ==4) {
            //plus sign add electron
            stroke(255,this.beta)
            strokeWeight(5);
            line(this.x-10, this.y, this.x+10, this.y)
            line(this.x, this.y-10, this.x, this.y+10)
            noStroke();
            strokeWeight(1);
            
       
        }else if (this.color ==5) {
           //minus sign add electron
           stroke(255,this.beta)
           strokeWeight(5);
           line(this.x-10, this.y, this.x+10, this.y)
           noStroke();
           strokeWeight(1);
        }

        
    }
    }


    noShow() {
        this.show = 0;
    }

    stop(){
        this.velocity = createVector(0, 0);
        this.acceleartion = createVector(0, 0);
        this.movingVelocity = 0;
        this.maxspeed = 0;
    }

    update(){
        if (this.color ==0) {
        this.alpha -= 15;
        this.d += 5;
        } else if (this.color ==1) {
            this.alpha -= 15;
            this.dd -= 3;
        } else if (this.color ==4 ||this.color ==5) {
            if (this.beta<100) {
                this.beta += 30;
                // this.d += 4;
            }
            
        }
        
    }

    update_location() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxspeed);
        this.position.add(this.velocity);
        this.acceleartion = createVector(0, 0);
      }

    update_circle(){
        this.disappear -= 20;
    }


    seek(target) {
        this.target = target;
        this.desired = p5.Vector.sub(target, this.position);

        this.desired.setMag(this.maxspeed);

        this.steer = p5.Vector.sub(this.desired, this.velocity);
        this.steer.limit(this.maxforce);

        this.applyForce(this.steer);

        // if(abs(this.position.x-target.x)<1 
        // && abs(this.position.y-target.y)<1 ){
        //     this.disappear -= 20;
        //     this.acceleration = createVector(0, 0);
        //     this.velocity = createVector(0, 0);
        //     // console.log("ssss")
        // }
    }
    
    applyForce(force) {
        this.acceleration.add(force);
    }
    
}

class Disappear{
    constructor(x, y, length, color, target) {
        this.x = x;
        this.y = y;
        this.position = createVector(x, y);
        this.length = length;
        this.time = 0;
        this.maxspeed = 5;
        this.color = color;
        this.show = 1;
        this.starting_p = createVector(x, y);
        this.alpha = 255;
        this.disappear = 255;
        this.d = 1;
        this.dd = 50;
        this.alpha2 = 0;
        this,target = target
      } 

    display(){
        if (this.show == 1) {
        if (this.color == 0) {
            noStroke();
            fill(254,246,182, this.alpha);
            //fill(125, 241, 148, this.alpha);
           
            ellipse(this.position.x, this.position.y, this.d);
        } else if (this.color == 1){
        
        stroke(125, 241, 148, this.alpha);
        //stroke(255, 121, 97, this.alpha);
        strokeWeight(2);
        noFill();

        // line(this.position.x-10,this.position.y-10,this.position.x+10,this.position.y+10);
        // line(this.position.x-10,this.position.y+10,this.position.x+10,this.position.y-10);

        // noStroke();
        // fill(125, 241, 148, this.alpha);

        ellipse(this.position.x, this.position.y, this.dd);

        // }
        // ellipse(this.position.x, this.position.y, this.diameter);
        } else if (this.color == 2) {
            strokeWeight(1);
            fill(254,246,182, this.disappear);
            stroke(254,246,182, this.disappear);
            ellipse(this.position.x, this.position.y, 10);
        }
    }
    }

    update(){
        if (this.color ==0) {
        this.alpha -= 15;
        this.d += 5;
        } else if (this.color ==1) {
            this.alpha -= 15;
            this.dd -= 3;
        }
    }

    update_circle(){
        this.disappear -= 20;
    }
    
    
}

class LatticeAtom {
    constructor(x, y, selected, opacity, num) {
      this.x = x;
      this.y = y;
  
      this.selected = selected;
      this.boundary = false;
      this.opacity = opacity;
      this.fadee = opacity;
      this.num = num;
      this.appear1 = appear1;
      this.count = 100;
  
      this.r = 30;
    }
  

    mouseHover() {
      let d = dist(mouseX, mouseY, this.x, this.y);
      return d < this.r;
    }
  
    show() {
        if (sceneCount == 2.5) {
            stroke(255, 255, 255, this.fadee );
            line(this.x, this.y, this.x + 90, this.y);
            line(this.x, this.y, this.x, this.y + 90);
            noStroke();
            this.fadee -=5;
        }


        if (this.selected ==false ) {
            //selected !!!
            if (sceneCount == 1 ) {
                      
     
                drawingContext.setLineDash([]);
                noStroke();
                fill(254,246,182,this.opacity)
                ellipse(this.x+30, this.y, 10, 10);
                ellipse(this.x-30, this.y, 10, 10);
                ellipse(this.x, this.y+30, 10, 10);
                ellipse(this.x, this.y-30, 10, 10);

                
        
                
            } else if (sceneCount == 2 ) {
         
                


                if (this.num ==1) {
                    drawingContext.setLineDash([]);
                    noStroke();
                    // fill(255, 92, 255, 250); //e
                    fill(198, 92, 255, this.opacity); //e
                    ellipse(this.x, this.y, 30, 30);
                } else if (this.num ==2) {
                    drawingContext.setLineDash([]);
                    noStroke();
                    fill(254,246,182,this.opacity)
                    ellipse(this.x+30, this.y, 10, 10);
                    ellipse(this.x-30, this.y, 10, 10);
                    ellipse(this.x, this.y+30, 10, 10);
                    ellipse(this.x, this.y-30, 10, 10);


                    fill(71, 172, 255, this.opacity); //h
                    ellipse(this.x, this.y, 30, 30);

                    stroke(255, this.appear1);
                    strokeWeight(5);
                    line(this.x-10, this.y, this.x + 10, this.y);
                    // line(this.x, this.y-10, this.x, this.y+10);
                    strokeWeight(1);
        
                    this.count -=10;
                    if (this.count <0) {
                    this.appear1 +=20;
                    }

                    
                }
                // fill(71, 172, 255, this.opacity);
            }else if (sceneCount == 2.5 ) {
             
                if (this.num ==1) {
                    fill(198, 92, 255, this.fadee); //e
                    ellipse(this.x, this.y, 30, 30);

                    stroke(255, this.appear1);
                    strokeWeight(5);
                    line(this.x-10, this.y, this.x + 10, this.y);
                    line(this.x, this.y-10, this.x, this.y+10);
                    strokeWeight(0);

                    this.count -=10;
                    if (this.count <0) {
                    this.appear1 +=20;

            }

                } else if (this.num ==2) {
                    // drawingContext.setLineDash([]);
                    noStroke();
                    fill(254,246,182,this.fadee)
                    ellipse(this.x+30, this.y, 10, 10);
                    ellipse(this.x-30, this.y, 10, 10);
                    ellipse(this.x, this.y+30, 10, 10);

                    stroke(255, this.appear1);
                    strokeWeight(5);
                    line(this.x-10, this.y, this.x + 10, this.y);
                    // line(this.x, this.y-10, this.x, this.y+10);
                    strokeWeight(0);

                    
                    
                    
                }

               
            }
        }



      if (this.selected) {
          if (sceneCount == 0.5) {
              //normal
            drawingContext.setLineDash([]);
            noStroke();
            fill(254,246,182,this.opacity)
            ellipse(this.x+30, this.y, 10, 10);
            ellipse(this.x-30, this.y, 10, 10);
            ellipse(this.x, this.y+30, 10, 10);
    
          
            ellipse(this.x, this.y-30, 10, 10); 
    
            
            noStroke();
            fill(148, 163, 243, this.opacity);
            ellipse(this.x, this.y, 30, 30);
          } else if (sceneCount == 1) {
              
           
            //electron
              drawingContext.setLineDash([]);
            noStroke();
            fill(254,246,182,this.opacity)
            ellipse(this.x+30, this.y, 10, 10);
            ellipse(this.x-30, this.y, 10, 10);
            ellipse(this.x, this.y+30, 10, 10);
            ellipse(this.x, this.y-30, 10, 10);
    
            // free_electron.push(new freeElectron(this.x+width/45, this.y-width/45));
            // ellipse(this.x+width/45, this.y-width/45, 10, 10);  //new item to move around
            
            noStroke();
            fill(148, 163, 243, this.opacity);
            ellipse(this.x, this.y, 30, 30);

            

          } else if (sceneCount ==2 ) {
              //hole
              drawingContext.setLineDash([]);
              noStroke();
              fill(254,246,182,this.opacity)
              ellipse(this.x+30, this.y, 10, 10);
              ellipse(this.x-30, this.y, 10, 10);
              ellipse(this.x, this.y+30, 10, 10);
              ellipse(this.x, this.y-30, 10, 10);
      
              // free_electron.push(new freeElectron(this.x+width/45, this.y-width/45));
              // ellipse(this.x+width/45, this.y-width/45, 10, 10);  //new item to move around
              
              noStroke();
              fill(148, 163, 243, this.opacity);
              ellipse(this.x, this.y, 30, 30);


          }else if (sceneCount ==2.5 ) {
            //hole
            drawingContext.setLineDash([]);
            noStroke();
            fill(254,246,182,this.fadee)
            ellipse(this.x+30, this.y, 10, 10);
            ellipse(this.x-30, this.y, 10, 10);
            ellipse(this.x, this.y+30, 10, 10);
            ellipse(this.x, this.y-30, 10, 10);
    
            // free_electron.push(new freeElectron(this.x+width/45, this.y-width/45));
            // ellipse(this.x+width/45, this.y-width/45, 10, 10);  //new item to move around

            // this.fadee -=5;
         
           
            
            noStroke();
            noFill();
            fill(148, 163, 243, this.fadee);
            ellipse(this.x, this.y, 30, 30);

           
            
          




        }
       
      } else if (this.boundary) {
          // clicked
   
          if (sceneCount==1) {
            fill(198, 92, 255, this.opacity+30);
            ellipse(this.x, this.y, 30, 30);

            stroke(255, this.appear1);
            strokeWeight(5);
       
            line(this.x-10, this.y, this.x + 10, this.y);
            line(this.x, this.y-10, this.x, this.y+10);
            strokeWeight(1);

            this.count -=10;
            if (this.count <0) {
            this.appear1 +=20;
            }

       
          }  else if (sceneCount==2) {

            if (this.num ==1) {
                fill(198, 92, 255, this.opacity+30); //e
                ellipse(this.x, this.y, 30, 30);

                stroke(255, this.appear1);
                strokeWeight(5);
                line(this.x-10, this.y, this.x + 10, this.y);
                line(this.x, this.y-10, this.x, this.y+10);
                strokeWeight(1);
    
                this.count -=10;
                if (this.count <0) {
                this.appear1 +=20;
                }

                

            } else if (this.num ==2) {
                // fill(71, 172, 255, this.opacity+30); //h
                // ellipse(this.x, this.y, 30, 30);

           
            }
            // fill(71, 172, 255, this.opacity+30);
          }else if (sceneCount==2.5) {

            if (this.num ==1) {
                fill(198, 92, 255, this.fadee); //e
                ellipse(this.x, this.y, 30, 30);
            } else if (this.num ==2) {
                fill(71, 172, 255, this.fadee); //h
                ellipse(this.x, this.y, 30, 30);
            }
            // this.fadee -=3;
          }
          
       
    
      } else {
        // fill(225, 163, 243, 50);
        // noStroke();
        // fill(228, 163, 243, this.opacity);
      }
      
    //   drawingContext.setLineDash([, ]);
  
      if (this.mouseHover() && (this.opacity>0)) {
          if (sceneCount ==1  ) {
            textAlign(CENTER, CENTER);
            textSize(18);
            fill(255);
            noStroke();
            text("Replace Silicon Atom with Donor Atom", this.x, this.y + 50);
            textAlign(LEFT, BASELINE);
          } 
          else if (sceneCount ==2  ) {
            textAlign(CENTER, CENTER);
            textSize(18);
            fill(255);
            noStroke();
            text("Replace Silicon Atom with Acceptor Atom", this.x, this.y + 50);
            textAlign(LEFT, BASELINE);

          }
       
      }



    }

  
  
    selectAtom() {
      this.selected = false;
    }
  }



  class freeElectron {
    constructor(x, y, scene, id) {
        this.x = x;
        this.y = y;
        this.r = 10;
        this.count = 10;
        this.scene = scene;
        this.id = id;
  
        this.position = createVector(x, y);
        this.maxspeed = 10;
        this.velocity = createVector(0, 0);
        this.maxforce = 0.5;
        this.acceleration = createVector(0, 0);
        this.show = 1;
        this.direction = createVector(random(-1,1), random(-1,1));
        this.movingVelocity = 15;
      }
  
    stop(){
        this.velocity = createVector(0, 0);
        this.acceleartion = createVector(0, 0);
        this.movingVelocity = 0;
        this.maxspeed = 0;
    }

    noShow() {
        this.show = 0;
    }

    show_1(){
        
        if (this.show ==1) {
            if (this.scene ==1) {
                noStroke();
            fill(254,246,182,190)
            ellipse(this.position.x, this.position.y, 10, 10);
            } else if (this.scene ==2) {
            fill(18);
            strokeWeight(2);
            stroke(125, 241, 148, 225);  //green
       
            ellipse(this.position.x, this.position.y, 10, 10);
        }
        }
            

     
    }
  
    update_1(){
        if (this.count>0){
            this.count--;
        }
       
    }
  
    random_walk_1(){


        if (this.show==1){
            if (this.scene ==1) {
  
                let uPOS = p5.Vector.mult(this.direction, this.movingVelocity);
                this.position.add(uPOS);
          
                const r = floor(random(10));
                const r2 = floor(random(10));
          
                if (floor(this.position.x) % r == 0 && floor(this.position.y) % r2 ==0) {this.direction = createVector(random(-1,1), random(-1,1));}
          
                if (this.position.x < (90)*s_x) {this.direction.x = 1;}
                if (this.position.x > 940*s_x) {this.direction.x = -1;}
                if (this.position.y < 20*s_y) {this.direction.y = 1;}
                if (this.position.y > 770*s_y) {this.direction.y = -1;}
               }
        
                if (this.scene ==2) {
                    
        
                // let ran_num = random(-7,7);
               
                // let random_direction = createVector(width / 2 + 2 * 90 +width/45,height / 2 + 2 * 90);
        
                // let d = int(dist(this.position.x, this.position.y, goToHole[this.id].x, goToHole[this.id].y));
                //     if (d < 2) {
                //         goToHole[this.id] = random(electronLatticePositions);
                //       }
        
            //     random_hole[this.id] = createVector(width / 2 +ran_x*int(random(-3,3)) * 90 ,height/2 + ran_y*int(random(-3,3))* 90+width/45);
        
            //     random_hole[this.id] = createVector(this.position.x+random(random_num1).x*random(random_num1).z* 90 ,this.position.y + random(random_num1).y*random(random_num1).z* 90);
                let d = int(dist(this.position.x, this.position.y, random_hole[this.id].x, random_hole[this.id].y));
            
        
                if (this.position.x <= (width / 2-6*90)) {
                  
                    random_hole[this.id] = createVector(width / 2+3* 90 ,height/2+width/45 + random(random_num1).y*1* 90);
                }
                if (this.position.x >= (width / 2+6*90)) {random_hole[this.id] = createVector(width / 2-3* 90 ,height/2+width/45 + random(random_num1).y*1* 90);}
                if (this.position.y <= (height/2 - 6* 90+width/45)) {random_hole[this.id] = createVector(width / 2+random(random_num1).x*2* 90 ,height/2+width/45 + 1* 90);}
                if (this.position.y >= (height/2 + 6* 90+width/45)) {random_hole[this.id] = createVector(width / 2+random(random_num1).x*1* 90 ,height/2+width/45 + 1* 90);}
               
                if (d < 15) {
                    this.position = random_hole[this.id];
                    let numm = int(random(-5,5));
                    // this.direction  = createVector(this.position.x+random(random_num1).x*numm* 90 ,this.position.y + random(random_num1).y*numm* 90);
                    random_hole[this.id] = createVector(this.position.x+random(random_num1).x*numm* 90 ,this.position.y + random(random_num1).y*numm* 90);
                    
                    
                      } 
        
            //    this.position.x = lerp(this.position.x, random_hole[this.id].x, 0.5);
            //     this.position.y = lerp(this.position.y, random_hole[this.id].y, 0.5);
          
                // this.position.x = lerp(this.position.x, goToHole[this.id].x, 0.2);
                // this.position.y = lerp(this.position.y, goToHole[this.id].y, 0.2);
        
                this.direction = p5.Vector.sub(random_hole[this.id],this.position).normalize();
                    let uPOS = p5.Vector.mult(this.direction, this.movingVelocity);
                    this.position.add(uPOS);
             
                    // console.log(d )
        
        
          
            }
        
        }
       
    
  
    }
  }