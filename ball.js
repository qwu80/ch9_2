class Jitter {
    constructor(x, y, mass, diameter) {
      this.x = x;
      this.y = y;
      this.position = createVector(x, y);
      this.mass = mass;
      this.diameter = diameter;
      this.isRolling = false; // Is the ball rolling?
      this.time = 0;
      this.velocity = 0;
    }
  
    setIsRolling(isRolling) {
      console.log("start rolling");
  
      this.isRolling = isRolling;
    }
  
    roll() {
      if (this.isRolling) {
        this.time++;
     //   adjMM_pe = rSlider_pe.value();
        this.velocity = adjMM_pe/this.mass;
        if (this.position.x > (738-this.diameter/2+x_change) && this.position.x < 1000) {
          this.velocity = this.velocity/2 ;
         
          // valuet1 += this.velocity;
          // valuex1 -= this.velocity;
        
        }
       // console.log(this.velocity);
        this.position.add(createVector(this.velocity, 0));
    
  
        new_x = Math.pow(0.5*this.mass*(Math.pow(this.velocity,2))/(0.5*k),1/2);
  
      }
  
      if (this.position.x > (new_x+808-(this.diameter)+x_change) && this.isRolling) {
    
        this.setIsRolling(false);
       
        graphdots();
        // momentumData.push({x:this.velocity * this.mass, y:((this.mass*(Math.pow(this.velocity, 2)))/2)});
        // updatePotentialEnergyGraph();
       
      }
  
      if (this.position.x > (new_x+808-(this.diameter)+x_change) && (bug_pe1.isRolling == false)&& (bug_pe2.isRolling == false) && (bug_pe3.isRolling == false)) {
        fill(255);
        strokeWeight(1);
        textStyle(NORMAL);
        textSize(15);
  
        text("Kinetic Energy:"+ round((((bug_pe1.mass*5)*(Math.pow(adjMM_pe/(5*bug_pe1.mass), 2)))/2),2) + " J", 808, 290);
        text("Kinetic Energy:"+ round((((bug_pe2.mass*5)*(Math.pow(adjMM_pe/(5*bug_pe2.mass), 2)))/2),2)+ " J", 808, 430-95+120);
        text("Kinetic Energy:"+ round((((bug_pe3.mass*5)*(Math.pow(adjMM_pe/(5*bug_pe3.mass), 2)))/2),2)+ " J", 808, 500+120);
      }
    }
  
    reset() {
      console.log("resetting bug");
      this.isRolling = false;
      this.time = 0;
      this.position = createVector(this.x, this.y);
      valuet1 = 750+x_change;
      valuex1 = 200;
  
      valuet2 = 750+x_change;
      valuex2 = 200;
  
      valuet3 = 750+x_change;
      valuex3 = 200;
    }
  
  
    update() {
      this.roll();
      noStroke();
      fill(color(this.color));
      ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
    }
  
  
    
  }



class Square {
  constructor(x, y, diameter, id) {
    this.x = x;
    this.y = y;
    this.position = createVector(x, y);
    this.diameter = diameter;
    this.isRolling = false; // Is the ball rolling?
    this.time = 0;
    this.id = id;
    this.maxspeed = 5;
    this.velocity = createVector(0, -2);
    this.maxforce = 0.5;
    this.acceleration = createVector(0, 0);
  }

  applyForce(force) {
      this.acceleration.add(force);
  }

  seek(target) {
      var desired = target.sub(this.position);

      desired.setMag(this.maxspeed);

      var steer = desired.sub(this.velocity);
      steer.limit(this.maxforce);

      this.applyForce(steer);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    this.acceleartion.mult(0);
  }

  display(){

  }
}
  

