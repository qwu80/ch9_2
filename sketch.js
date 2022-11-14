
let scale_x = 1440;
let scale_y = 789;

let s_x;
let s_y;

let ran_num = 2;

let electron_add = 0;
let hole_add = 0;

var time_count =0;
var time_count_graph =0;

let fade;
var appear1 = 0;

let latticeAtoms = [];
let latticeAtoms_e = [];
let latticeAtoms_h = [];
var globalOrbitalCount = 0;

let free_electron = [];
let free_hole = [];
let random_direction;

////////////////////////////////
let whiteArray = [];
let blackArray = [];

let blackArray_h = [];
let whiteArray_e = [];


let whiteID = [];
let blackID = [];
let blackID_h = [];
let whiteID_e = [];

let white_seek_ball = [];
let black_seek_ball = [];
let global_id = 0;

let global_id_h = 0;
let global_id_e = 0;

let global_id_s1 = 0;

let id_electron_s1 = 0;
let id_hole_s1 = 0;

let frequency_A = 0;
let frequency_B = 0;

let slider_temperature;
let slider_temperature_s1;


let appearArray = [];
let disappearArray = [];
let appearArray_s1 = [];
let disappearArray_s1 = [];

let disappearArray_2 = []; //circles 
let disappearArray_2_pair = []; //circles 
let disappearArray_dot = [];

let generate_num; 

let gap = 200;
let l = 560;
let w = 120;

let scene1_aArray = [];
let scene1_dArray = [];
let scene1_aArray2 = [];
let scene1_dArray2 = [];

let fading = 255;

let loopp = true;

var e_count=0;
var h_count=0;

let change_square = -30
let change_length = 100+change_square;

let temp = 290; 

let ni_s1;
var generation_Rate_s1; 
var current_Electron_s1 = 0;
var current_Hole_s1 = 0; 
var recombination_Rate_s1 = 1;
var constant_beta_s1 = Math.pow(10,-12);

let g_rate;

let stop_s1 = false; 

let numm;

let interval_1 = 2000;
let interval_3 = 2000;
let interval_45 = 2000;
let interval_h;
let interval_e;

var run1;
var run45;
var run3;
var run_h;
var run_e;

var opacity;

let button_reset;

let electronLatticePositions = [];

let random_num1 = [];

let middle_position_Array = [];
let middle_position_Array_fade = [];
let disappear_count = 0;
let disappear_count_fade = 0;
let disappearArray_fade = []
let disappearArray_2_fade =[];
let disappearArray_2_pair_fade =[];

preload = () => {
  electrons_1s = loadJSON('./data/electrons_1s.json');
  electrons_1s_dash = loadJSON('./data/electrons_1s_dash.json');
  electrons_2s = loadJSON('./data/electrons_2s.json');
  electrons_2p = loadJSON('./data/electrons_2p.json');
  
}

setup = () => {

  // hx = -90;
  // hy = 55;
  // goToHole = [{
  //   x: hx,
  //   y: hy
  // }]

  goToHole = [];

  random_hole = [];

  random_direction=[];

  let canvas = createCanvas(199*windowWidth/300, windowHeight);
  canvas.parent('visualization');
  frameRate(10);

  //generate hole
  run_h = setInterval(function(){genBalls_h(1);}, interval_h);

  //generate e
  run_e = setInterval(function(){genBalls_e(1);}, interval_e);

  // generate balls based on frequency
  run45 = setInterval(function(){genBalls(1);}, interval_45); // scene changing T


  // //generate e static
  // run_e1 = setInterval(function(){genBalls_e1(1);}, 3000);

 
  setInterval(timeIt, 1000);
  setInterval(time_graph, 0.00000000002);


  xLimit = ((int)(width / 180));
  yLimit = ((int)(height / 180));



  for (let i = -xLimit - 2; i <= xLimit + 2; i++) {
    latticeAtoms[i] = [];
    latticeAtoms_e[i] = [];
    latticeAtoms_h[i] = [];
    let selected = false;
    for (let j = -yLimit - 2; j <= yLimit + 2; j++) {
      // if ((i == 0  && (j == 1 || j == 0 || j == -1)) || (j == 0 && (i == 0 || i == -1 || i == 1))) {
        selected = true;
      // } else {
      //   selected = false;
      // }
      rx = abs(i * 90);
      ry = abs(j * 90);
      opacity = map(sqrt(rx * rx + ry * ry) / 1.414, sqrt(width * width + height * height) / 5, 0, 0, 255);


      latticeAtoms[i][j] = new LatticeAtom(width / 2 + i * 90, height / 2 + j * 90, selected, opacity, 0);
      latticeAtoms_e[i][j] = new LatticeAtom(width / 2 + i * 90, height / 2 + j * 90, selected, opacity, 1); //e
      latticeAtoms_h[i][j] = new LatticeAtom(width / 2 + i * 90, height / 2 + j * 90, selected, opacity, 2); //h

  
    }
  }

  for (let i=-4; i <= 4; i++) {
    for (let j = -4; j <= 4; j++) {
      electronLatticePositions.push({
        x: width / 2 + i * 90, 
        y: height / 2 + j * 90
      });
    }
  }

  for (let i=-1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) 
    for (let k = -4; k <= 4; k++){
      random_num1.push({
        x: i,
        y: j,
        z: k
      });
    }
  }

  
 
}


draw = () => {
  background(18, 18, 18);
  if (mouseX > 0) {
    select('body').addClass('noselect');
  } else {
    if (select('body').hasClass('noselect')) {
      select('body').removeClass('noselect');
    }
  }

  
 
  textSize(12);
  fill(255);
  textFont('Bai Jamjuree');

  if (sceneCount !== 0) { 
    if (sceneCount == 0.5) {


      for (let i = -xLimit - 2; i <= xLimit + 2; i++) {
        for (let j = -yLimit - 2; j <= yLimit + 2; j++) {
   
          rx = abs(i * 90);
          ry = abs(j * 90);
          opacity = map(sqrt(rx * rx + ry * ry) / 1.414, sqrt(width * width + height * height) / 5, 0, 0, 255);
    
          stroke(255, 255, 255, opacity-10 );
          line(width / 2 +i * 90, height / 2 +j * 90, width / 2 +i * 90 + 90, height / 2 +j * 90);
          line(width / 2 +i * 90, height / 2 +j * 90, width / 2 +i * 90, height / 2 +j * 90 + 90);
        }
      }



      // checkBoundaryAtoms(latticeAtoms, xLimit, yLimit);

      for (let i = -xLimit; i <= xLimit; i++) {
        for (let j = -yLimit; j <= yLimit; j++) {
          latticeAtoms[i][j].show();
        }
      }



   

    } else if (sceneCount == 1) {
//add box 
      // if (free_electron.length == 0) {
      //   textSize(18);
      
      //   text("Click on ",140*s_x,(640+115)*s_y)
      //   stroke(125, 241, 148,100);
      //   strokeWeight(1);
      //   fill(25,25,25,100)
      //   rect((970-350+50-200)*s_x,(790-200+50)*s_y,(330-50)*s_x,(190-50)*s_y);
      // } else {


        // stroke(125, 241, 148,100);
        // strokeWeight(1);
        // fill(25,25,25,100)
        // rect((970-350+50)*s_x,(790-200+50)*s_y,(330-50)*s_x,(190-50)*s_y);

        textSize(17)
        noStroke()
        strokeWeight(1)
        fill(255);
        text("Donor Atom(s) Added: "+ Math.round(free_electron.length), (970-350+20+50+50)*s_x,(790-200+40+50+60)*s_y);
        text("Total Charge(s): 0", (970-350+20+50+50)*s_x,(790-200+40+50+60+25)*s_y);
        
      
        
      // }
   

      for (let i = -xLimit - 2; i <= xLimit + 2; i++) {
        for (let j = -yLimit - 2; j <= yLimit + 2; j++) {
   
          rx = abs(i * 90);
          ry = abs(j * 90);
          opacity = map(sqrt(rx * rx + ry * ry) / 1.414, sqrt(width * width + height * height) / 5, 0, 0, 255);
    
          stroke(255, 255, 255, opacity-10 );
          line(width / 2 +i * 90, height / 2 +j * 90, width / 2 +i * 90 + 90, height / 2 +j * 90);
          line(width / 2 +i * 90, height / 2 +j * 90, width / 2 +i * 90, height / 2 +j * 90 + 90);
        }
      }


      //electron
 
    checkBoundaryAtoms(latticeAtoms_e, xLimit, yLimit);

    for (let i = -xLimit; i <= xLimit; i++) {
      for (let j = -yLimit; j <= yLimit; j++) {
        latticeAtoms_e[i][j].show();
      }
    }


    for (let i = 0; i < free_electron.length; i++) {

        
      free_electron[i].show_1();
      free_electron[i].update_1();
      if (free_electron[i].count==0) {
      free_electron[i].random_walk_1(); 
   
      }
            
    }
  

    } else if (sceneCount == 2) {
// add box
    
// stroke(125, 241, 148,100);
//         strokeWeight(1);
//         fill(25,25,25,100)
//         rect((970-350+50)*s_x,(790-200+50)*s_y,(330-50)*s_x,(190-50)*s_y);

        textSize(17)
        noStroke()
        strokeWeight(1)
        fill(255);
        text("Donor Atom(s) added: "+ Math.round(free_electron.length), (970-350+20+50+50)*s_x,(790-200+40+50+60)*s_y,);
        text("Acceptor Atom(s) added: "+ Math.round(free_hole.length), (970-350+20+50+50)*s_x,(790-200+40+60+25)*s_y);
        text("Total Charge(s): 0", (970-350+20+50+50)*s_x,(790-200+40+50+60+25)*s_y);
        
        


      //hole

      
      for (let i = -xLimit - 2; i <= xLimit + 2; i++) {
        for (let j = -yLimit - 2; j <= yLimit + 2; j++) {
   
          rx = abs(i * 90);
          ry = abs(j * 90);
          opacity = map(sqrt(rx * rx + ry * ry) / 1.414, sqrt(width * width + height * height) / 5, 0, 0, 255);
    
          stroke(255, 255, 255, opacity-10 );
          line(width / 2 +i * 90, height / 2 +j * 90, width / 2 +i * 90 + 90, height / 2 +j * 90);
          line(width / 2 +i * 90, height / 2 +j * 90, width / 2 +i * 90, height / 2 +j * 90 + 90);
        }
      }
  
     

      for (let i = -xLimit; i <= xLimit; i++) {
        for (let j = -yLimit; j <= yLimit; j++) {
          latticeAtoms_h[i][j].show();
        }
      }
        


      for (let i = 0; i < free_hole.length; i++) {

        
        free_hole[i].show_1();
        free_hole[i].update_1();
        if (free_hole[i].count==0) {
        // random_hole[free_hole[i].id]=createVector(width / 2 + int(ran_num) * 90 +width/45,height / 2 + int(ran_num) * 90);
        // random_direction[free_hole[i].id].x = int(random(-1,2))
        // random_direction[free_hole[i].id].y = int(random(-1,2))
        free_hole[i].random_walk_1(); 
        }
              
      }



    

       //   electron

          checkBoundaryAtoms(latticeAtoms_e, xLimit, yLimit);
          for (let i = -xLimit; i <= xLimit; i++) {
                for (let j = -yLimit; j <= yLimit; j++) {
                  if (latticeAtoms_e[i][j].selected ==false ) {
                  latticeAtoms_e[i][j].show();
                  }
                }
              }

          for (let i = 0; i < free_electron.length; i++) {

        
                free_electron[i].show_1();
                free_electron[i].update_1();
                if (free_electron[i].count==0) {
                free_electron[i].random_walk_1(); 
                }
                      
              }
    
          //


      }  else if (sceneCount == 2.5) {



        // stroke(125, 241, 148,100);
        // strokeWeight(1);
        // fill(25,25,25,100)
        // rect((970-350+50)*s_x,(790-200+50)*s_y,(330-50)*s_x,(190-50)*s_y);

        textSize(17)
        noStroke()
        strokeWeight(1)
        fill(255);
      
        text("Donor Atom(s) added: "+ Math.round(free_electron.length), (970-350+20+50+50)*s_x,(790-200+40+50+60)*s_y,);
        text("Acceptor Atom(s) added: "+ Math.round(free_hole.length), (970-350+20+50+50)*s_x,(790-200+40+60+25)*s_y);
        text("Total Charge(s): 0", (970-350+20+50+50)*s_x,(790-200+40+50+60+25)*s_y);


        for (let i = 0; i < free_hole.length; i++) {

        
          free_hole[i].show_1();
          free_hole[i].update_1();
          if (free_hole[i].count==0) {
          // goToHole[free_hole[i].id]=random(electronLatticePositions);
          free_hole[i].random_walk_1(); 
          }
                
        }

        for (let i = 0; i < free_electron.length; i++) {

        
          free_electron[i].show_1();
          free_electron[i].update_1();
          if (free_electron[i].count==0) {
          free_electron[i].random_walk_1(); 
          }
                
        }


            //disappear
            for (let i = 0; i < free_electron.length; i++) {
              for (let k = 0; k< free_hole.length; k++) {
                if (abs(free_electron[i].position.x-free_hole[k].position.x)<15 
               && abs(free_electron[i].position.y-free_hole[k].position.y)<15  
               && (free_electron[i].show ==1) && (free_hole[k].show ==1)) {
        
                
                //mark
                free_electron[i].stop();
                free_hole[k].stop();
                free_electron[i].noShow();
                free_hole[k].noShow();
        //miumiu
        
                middle_position_Array_fade[disappear_count_fade] = p5.Vector.div(p5.Vector.add(free_electron[i].position, free_hole[k].position),2);
                //original dots
                // whiteArray[i].seek(middle_position_Array[disappear_count]);
                // blackArray[k].seek(middle_position_Array[disappear_count]);
    
      //effects
         
                 disappearArray_fade[disappear_count_fade] =(new Appear( middle_position_Array_fade[disappear_count_fade].x,  middle_position_Array_fade[disappear_count_fade].y,10,1, disappear_count))
                 disappearArray_2_fade[disappear_count_fade] =(new Appear(free_electron[i].position.x, free_electron[i].position.y,10,2, disappear_count_fade))
                 disappearArray_2_pair_fade[disappear_count_fade] =(new Appear(free_hole[k].position.x, free_hole[k].position.y,10,3, disappear_count_fade))
      
                disappear_count_fade++
                //  whiteArray.splice(whiteArray[i], 1);
                //  blackArray.splice(blackArray[k], 1);
                 break       
               }
           }
        
            }

/////////new effects 
for (let i = 0 ; i<disappearArray_fade.length; i++) {
  if (typeof disappearArray_fade[i] != "undefined") {
  if (disappearArray_fade[i].alpha<1) {
    disappearArray_fade.splice(disappearArray_fade[i], 1);
  }
}
}

for (let i = 0 ; i<disappearArray_2_pair_fade.length; i++) {
  if (typeof disappearArray_2_pair_fade[i] != "undefined") {
  if (disappearArray_2_pair_fade[i].disappear<1) {
    disappearArray_2_pair_fade.splice(disappearArray_2_pair_fade[i], 1);
  }
}
}

for (let i = 0 ; i<disappearArray_2_fade.length; i++) {
  if (typeof disappearArray_2_fade[i] != "undefined") {
  if (disappearArray_2_fade[i].disappear<1) {
    disappearArray_2_fade.splice(disappearArray_2_fade[i], 1);
  }
}
}

for (let i = 0 ; i<disappearArray_2_pair_fade.length; i++) {
  if (typeof disappearArray_2_pair_fade[i] != "undefined") {
  if (disappearArray_2_pair_fade[i].disappear<1) {
    disappearArray_2_pair_fade.splice(disappearArray_2_pair_fade[i], 1);

  } else {
    continue
  }
}
}

for (let i = 0; i < disappearArray_fade.length; i++) {
  if (typeof disappearArray_fade[i] != "undefined") {
  disappearArray_fade[i].display();
  disappearArray_fade[i].update();
  }
}
// new  double circle
for (let i = 0; i < disappearArray_2_fade.length; i++) {
  if (typeof disappearArray_2_fade[i] != "undefined") {
  disappearArray_2_fade[i].display();
  disappearArray_2_fade[i].update_circle();
  disappearArray_2_fade[i].update_location();
  // disappearArray_2[i].seek(middle_position_Array[i]);
  
  }
}

for (let i = 0; i < disappearArray_2_pair_fade.length; i++) {
  if (typeof disappearArray_2_pair_fade[i] != "undefined") {

disappearArray_2_pair_fade[i].display();
disappearArray_2_pair_fade[i].update_circle();
disappearArray_2_pair_fade[i].update_location();
// disappearArray_2_pair[i].seek(middle_position_Array[i]);

  }
}

for (let i = 0; i < disappearArray_2_pair_fade.length; i++) {
  if (typeof disappearArray_2_pair_fade[i] != "undefined") {
    for (let k = 0; k < disappearArray_2_fade.length; k++) {
      if (typeof disappearArray_2_fade[k] != "undefined") {
       if (disappearArray_2_pair_fade[i].id == disappearArray_2_fade[k].id) {
        disappearArray_2_fade[k].seek(p5.Vector.div(p5.Vector.add(disappearArray_2_fade[k].position, disappearArray_2_pair_fade[i].position),2));
        disappearArray_2_pair_fade[i].seek(p5.Vector.div(p5.Vector.add(disappearArray_2_fade[k].position, disappearArray_2_pair_fade[i].position),2));

       }
      
      
      
      }}}}




/////////




      for (let i = -xLimit; i <= xLimit; i++) {
        for (let j = -yLimit; j <= yLimit; j++) {
          latticeAtoms_h[i][j].show();
          
        }
      }



      checkBoundaryAtoms(latticeAtoms_e, xLimit, yLimit);
          for (let i = -xLimit; i <= xLimit; i++) {
                for (let j = -yLimit; j <= yLimit; j++) {
                  if (latticeAtoms_e[i][j].selected ==false ) {
                  latticeAtoms_e[i][j].show();
                  }
                }
              }

      checkBoundaryAtoms(latticeAtoms_h, xLimit, yLimit);
          for (let i = -xLimit; i <= xLimit; i++) {
                    for (let j = -yLimit; j <= yLimit; j++) {
                      if (latticeAtoms_h[i][j].selected ==false ) {
                      latticeAtoms_h[i][j].show();
                      }
                    }
                  }
        

    //disappear
          for (let i = 0; i < whiteArray.length; i++) {
          for (let k = 0; k< blackArray.length; k++) {
            if (abs(whiteArray[i].position.x-blackArray[k].position.x)<15 
           && abs(whiteArray[i].position.y-blackArray[k].position.y)<15 && (whiteArray[i].id != blackArray[k].id) 
           && (whiteArray[i].show ==1) && (blackArray[k].show ==1)) {
    
            
            //mark
             whiteArray[i].stop();
             blackArray[k].stop();
             whiteArray[i].noShow();
             blackArray[k].noShow();
    
    
            middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray[k].position, whiteArray[i].position),2);
            //original dots
            // whiteArray[i].seek(middle_position_Array[disappear_count]);
            // blackArray[k].seek(middle_position_Array[disappear_count]);

  //effects
     
             disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
             disappearArray_2[disappear_count] =(new Appear(whiteArray[i].position.x, whiteArray[i].position.y,10,2, disappear_count))
             disappearArray_2_pair[disappear_count] =(new Appear(blackArray[k].position.x, blackArray[k].position.y,10,3, disappear_count))
  
            disappear_count++
            //  whiteArray.splice(whiteArray[i], 1);
            //  blackArray.splice(blackArray[k], 1);
             break       
           }
       }
    
        }
     


      }else if (sceneCount ==3 ||sceneCount ==3.1 || sceneCount ==3.2 ) {
    
        s_x = windowWidth/scale_x;
        s_y = windowHeight/scale_y;
  // console.log(Math.pow(100,((Math.log10(current_Electron_c)-8)/2)))/10
    
        drawingContext.setLineDash([0]);


        
        
 
  
      
        //temp draw
  
        // fill(235, 177, 52);
        fill(255)
        rect(110*s_x, 640*s_y, 10*s_x,105*s_y, 30*s_x);
        ellipse(115*s_x, (640+105)*s_y,30*s_x)
        // line(110,640,160,640)
  
        fill(235, 58, 52)
        ellipse(115*s_x, (640+105)*s_y,20*s_y)
    
        rect(112.5*s_x, (640+10+(-0.7*temp+245))*s_y, 5*s_x, (105-(-0.7*temp+245))*s_y, 30*s_x);
  
        fill(255)
        textSize(18);
      
        text(temp+"K",140*s_x,(640+115)*s_y)
  
  
        
  
        // g_rate = 0.000000112099*generation_Rate_c+0.999998791
    
  
          // g_rate = 0.000002036*generation_Rate_c+0.99999
        
          g_rate = generation_Rate_c/10000+1
  
       
        var target = createVector(300, 300);
        
    
         //////// new code dead
    for (let i = 0; i < whiteArray.length; i++) {
      if (whiteArray[i].dead == 0){
      whiteArray[i].display();
      whiteArray[i].appear_update();
      whiteArray[i].update();

     

      if (whiteArray[i].appear>255) {
        whiteArray[i].random_walk();
      }

    }
    }
  
    for (let i = 0; i < blackArray.length; i++) {
      if (blackArray[i].dead == 0){
    blackArray[i].display();
    blackArray[i].appear_update();
    blackArray[i].update();


    
    if (blackArray[i].appear>255) {
      blackArray[i].random_walk();
    }
  
  }
}

// //////
  
        for (let i = 0; i < blackArray_h.length; i++) {
          // whiteArray[i].display();
          // whiteArray[i].appear_update();
          // whiteArray[i].update();
    
          
          blackArray_h[i].display();
          blackArray_h[i].appear_update();
          blackArray_h[i].update();
    
          // if (whiteArray[i].appear>255) {
          //   whiteArray[i].random_walk();
          // }
          if (blackArray_h[i].appear>255) {
            blackArray_h[i].straight_walk()
            if (blackArray_h[i].position.y > 49*s_y) {
            blackArray_h[i].random_walk();
            }
          }
        
    
         
        }
  
  
        for (let i = 0; i < whiteArray_e.length; i++) {
          // whiteArray[i].display();
          // whiteArray[i].appear_update();
          // whiteArray[i].update();
    
          
          whiteArray_e[i].display();
          whiteArray_e[i].appear_update();
          whiteArray_e[i].update();
    
          // if (whiteArray[i].appear>255) {
          //   whiteArray[i].random_walk();
          // }
          if (whiteArray_e[i].appear>255) {
            whiteArray_e[i].straight_walk()
            if (whiteArray_e[i].position.y > 49*s_y) {
              whiteArray_e[i].random_walk();
            }
          }
        
    
         
        }
  
  
    
        for (let i = 0 ; i<disappearArray.length; i++) {
          if (typeof disappearArray[i] != "undefined") {
          if (disappearArray[i].alpha<1) {
            disappearArray.splice(disappearArray[i], 1);
          }
        }
      }
    
        for (let i = 0 ; i<disappearArray_2_pair.length; i++) {
          if (typeof disappearArray_2_pair[i] != "undefined") {
          if (disappearArray_2_pair[i].disappear<1) {
            disappearArray_2_pair.splice(disappearArray_2_pair[i], 1);
          }
        }
        }
  
    
    
    
        for (let i = 0 ; i<appearArray.length; i++) {
          if (appearArray[i].alpha<1) {
            appearArray.splice(appearArray[i], 1);
          }
        }
  
        for (let i = 0 ; i<disappearArray_2.length; i++) {
          if (typeof disappearArray_2[i] != "undefined") {
          if (disappearArray_2[i].disappear<1) {
            disappearArray_2.splice(disappearArray_2[i], 1);
          }
        }
      }
  
        for (let i = 0 ; i<disappearArray_2_pair.length; i++) {
          if (typeof disappearArray_2_pair[i] != "undefined") {
          if (disappearArray_2_pair[i].disappear<1) {
            disappearArray_2_pair.splice(disappearArray_2_pair[i], 1);
      
          } else {
            continue
          }
        }
        }
    
        for (let i = 0; i < appearArray.length; i++) {
          appearArray[i].display();
          appearArray[i].update();
    
         
        }
  
        for (let i = 0; i < appearArray_s1.length; i++) {
          appearArray_s1[i].display();
          appearArray_s1[i].update();
         
        }
        for (let i = 0; i < disappearArray.length; i++) {
          if (typeof disappearArray[i] != "undefined") {
          disappearArray[i].display();
          disappearArray[i].update();
          }
        }
    
  
        for (let i = 0; i < disappearArray_dot.length; i++) {
          if (typeof disappearArray[i] != "undefined") {
          disappearArray_dot[i].display();
          // disappearArray_dot[i].update();
          }
        }
  
  
        
        // new  double circle
        for (let i = 0; i < disappearArray_2.length; i++) {
          if (typeof disappearArray_2[i] != "undefined") {
          disappearArray_2[i].display();
          disappearArray_2[i].update_circle();
          disappearArray_2[i].update_location();
          // disappearArray_2[i].seek(middle_position_Array[i]);
          
          }
        }
  
        for (let i = 0; i < disappearArray_2_pair.length; i++) {
          if (typeof disappearArray_2_pair[i] != "undefined") {
  
        disappearArray_2_pair[i].display();
        disappearArray_2_pair[i].update_circle();
        disappearArray_2_pair[i].update_location();
        // disappearArray_2_pair[i].seek(middle_position_Array[i]);
       
          }
        }
  
        for (let i = 0; i < disappearArray_2_pair.length; i++) {
          if (typeof disappearArray_2_pair[i] != "undefined") {
            for (let k = 0; k < disappearArray_2.length; k++) {
              if (typeof disappearArray_2[k] != "undefined") {
               if (disappearArray_2_pair[i].id == disappearArray_2[k].id) {
                disappearArray_2[k].seek(p5.Vector.div(p5.Vector.add(disappearArray_2[k].position, disappearArray_2_pair[i].position),2));
                disappearArray_2_pair[i].seek(p5.Vector.div(p5.Vector.add(disappearArray_2[k].position, disappearArray_2_pair[i].position),2));
  
               }
              
              
              
              }}}}
  
  
  
    
  
    
    //disappear
          for (let i = 0; i < whiteArray.length; i++) {
          for (let k = 0; k< blackArray.length; k++) {
            if (abs(whiteArray[i].position.x-blackArray[k].position.x)<15 
           && abs(whiteArray[i].position.y-blackArray[k].position.y)<15 && (whiteArray[i].id != blackArray[k].id) 
           && (whiteArray[i].show ==1) && (blackArray[k].show ==1)) {
    
            
            //mark
             whiteArray[i].stop();
             blackArray[k].stop();
             whiteArray[i].noShow();
             blackArray[k].noShow();
             whiteArray[i].deadd();
         blackArray[k].deadd();
    
    
            middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray[k].position, whiteArray[i].position),2);
            //original dots
            // whiteArray[i].seek(middle_position_Array[disappear_count]);
            // blackArray[k].seek(middle_position_Array[disappear_count]);

  //effects
     
             disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
             disappearArray_2[disappear_count] =(new Appear(whiteArray[i].position.x, whiteArray[i].position.y,10,2, disappear_count))
             disappearArray_2_pair[disappear_count] =(new Appear(blackArray[k].position.x, blackArray[k].position.y,10,3, disappear_count))
  
            disappear_count++
            
             whiteArray.splice(whiteArray[i], 1);
             blackArray.splice(blackArray[k], 1);
             break       
           }
       }
    
        }
  
  
        //disappear white & black new h 
        for (let i = 0; i < whiteArray.length; i++) {
          for (let k = 0; k< blackArray_h.length; k++) {
            if (abs(whiteArray[i].position.x-blackArray_h[k].position.x)<15 
           && abs(whiteArray[i].position.y-blackArray_h[k].position.y)<15 && (whiteArray[i].id != blackArray_h[k].id) 
           && (whiteArray[i].show ==1) && (blackArray_h[k].show ==1)) {
    
            
            //mark
             whiteArray[i].stop();
             blackArray_h[k].stop();
             whiteArray[i].noShow();
             blackArray_h[k].noShow();
              // whiteArray[i].update();
              // blackArray[k].update();
    
    
            middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray_h[k].position, whiteArray[i].position),2);
            //original dots
            // whiteArray[i].seek(middle_position_Array[disappear_count]);
            // blackArray[k].seek(middle_position_Array[disappear_count]);
  
         
  
  //effects
     
             disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
             disappearArray_2[disappear_count] =(new Appear(whiteArray[i].position.x, whiteArray[i].position.y,10,2, disappear_count))
             disappearArray_2_pair[disappear_count] =(new Appear(blackArray_h[k].position.x, blackArray_h[k].position.y,10,3, disappear_count))
  
            disappear_count++
            //  whiteArray.splice(whiteArray[i], 1);
            //  blackArray.splice(blackArray[k], 1);
             break
         
           }
       }
     
        }
  
  
             //disappear new white e & black 
             for (let i = 0; i < whiteArray_e.length; i++) {
              for (let k = 0; k< blackArray.length; k++) {
                if (abs(whiteArray_e[i].position.x-blackArray[k].position.x)<15 
               && abs(whiteArray_e[i].position.y-blackArray[k].position.y)<15 && (whiteArray_e[i].id != blackArray[k].id) 
               && (whiteArray_e[i].show ==1) && (blackArray[k].show ==1)) {
        
                
                //mark
                 whiteArray_e[i].stop();
                 blackArray[k].stop();
                 whiteArray_e[i].noShow();
                 blackArray[k].noShow();
                  // whiteArray[i].update();
                  // blackArray[k].update();
        
        
                middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray[k].position, whiteArray_e[i].position),2);
                //original dots
                // whiteArray[i].seek(middle_position_Array[disappear_count]);
                // blackArray[k].seek(middle_position_Array[disappear_count]);
      
             
      
      //effects
         
                 disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
                 disappearArray_2[disappear_count] =(new Appear(whiteArray_e[i].position.x, whiteArray_e[i].position.y,10,2, disappear_count))
                 disappearArray_2_pair[disappear_count] =(new Appear(blackArray[k].position.x, blackArray[k].position.y,10,3, disappear_count))
      
                disappear_count++
                //  whiteArray.splice(whiteArray[i], 1);
                //  blackArray.splice(blackArray[k], 1);
                 break
             
               }
           }
        
            }
  
  
            //disappear new white e & new black h
            for (let i = 0; i < whiteArray_e.length; i++) {
              for (let k = 0; k< blackArray_h.length; k++) {
                if (abs(whiteArray_e[i].position.x-blackArray_h[k].position.x)<15 
               && abs(whiteArray_e[i].position.y-blackArray_h[k].position.y)<15 && (whiteArray_e[i].id != blackArray_h[k].id) 
               && (whiteArray_e[i].show ==1) && (blackArray_h[k].show ==1)) {
        
                
                //mark
                 whiteArray_e[i].stop();
                 blackArray_h[k].stop();
                 whiteArray_e[i].noShow();
                 blackArray_h[k].noShow();
                  // whiteArray[i].update();
                  // blackArray[k].update();
        
        
                middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray_h[k].position, whiteArray_e[i].position),2);
                //original dots
                // whiteArray[i].seek(middle_position_Array[disappear_count]);
                // blackArray[k].seek(middle_position_Array[disappear_count]);
      
             
      
      //effects
         
                 disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
                 disappearArray_2[disappear_count] =(new Appear(whiteArray_e[i].position.x, whiteArray_e[i].position.y,10,2, disappear_count))
                 disappearArray_2_pair[disappear_count] =(new Appear(blackArray_h[k].position.x, blackArray_h[k].position.y,10,3, disappear_count))
      
                disappear_count++
                //  whiteArray.splice(whiteArray[i], 1);
                //  blackArray.splice(blackArray[k], 1);
                 break
             
               }
           }
        
            }
  
  
  
  
  
    
      
        // temp = slider_temperature.value();
    
    
        stroke(125, 241, 148,100);
        strokeWeight(1);
        fill(25,25,25,100)
        rect((970-350+20)*s_x,(790-200+80)*s_y,(330-20)*s_x,(190-80)*s_y);
    
        noFill();
        rect((10+100+change_square)*s_x,10*s_y,(940-change_length)*s_x,770*s_y);

        if (sceneCount==3.1) {
          textSize(17)
        noStroke()
        strokeWeight(1)
        fill(255);
        if (electron_add>0){
          // text("Donor Density Added:   "+electron_add.toExponential(1), (970-350+50)*s_x,(30)*s_y)

          // textSize(12*s_x)
          // text("pairs/sec*cm",(970-350+20+190+37-10)*s_x,(30)*s_y )

          // textSize(10*s_x)
          // text("3",(970-350+20+190+100+11-10)*s_x,(30-8)*s_y )
        }

        } else if (sceneCount==3.2) {
          textSize(17)
          noStroke()
          strokeWeight(1)
          fill(255);

          if(hole_add>0) {
            // text("Acceptor Density Added:   "+hole_add.toExponential(1), (970-350+50)*s_x,(30)*s_y)
  
            // textSize(12*s_x)
            // text("pairs/sec*cm",(970-350+20+190+37-10)*s_x,(30)*s_y )
  
            // textSize(10*s_x)
            // text("3",(970-350+20+190+100+11-10)*s_x,(30-8)*s_y )
          }
            
        } else if (sceneCount ==3) {

          if (hole_add>electron_add) {
            textSize(17)
          noStroke()
          strokeWeight(1)
          fill(255);
            // text("Acceptor Density Added:   "+(hole_add-electron_add).toExponential(1), (970-350+50)*s_x,(30)*s_y)
  
            // textSize(12*s_x)
            // text("pairs/sec*cm",(970-350+20+190+37-10)*s_x,(30)*s_y )
  
            // textSize(10*s_x)
            // text("3",(970-350+20+190+100+11-10)*s_x,(30-8)*s_y )
          } else if (electron_add>hole_add){
            textSize(17)
            noStroke()
            strokeWeight(1)
            fill(255);
              // text("Donor Density Added:   "+(electron_add-hole_add).toExponential(1), (970-350+50)*s_x,(30)*s_y)
    
              // textSize(12*s_x)
              // text("pairs/sec*cm",(970-350+20+190+37-10)*s_x,(30)*s_y )
    
              // textSize(10*s_x)
              // text("3",(970-350+20+190+100+11-10)*s_x,(30-8)*s_y )
          }
        
        }
    
    
    
        textSize(17)
        noStroke()
        strokeWeight(1)
        fill(255);
        // text("Generation Rate:   "+ generation_Rate_c.toExponential(1), (970-350+20+30)*s_x,(790-200+40)*s_y);
        // text("Recombination Rate:   "+ recombination_Rate_c.toExponential(1),(970-350+20+30)*s_x,(790-200+80)*s_y);
        text("Number of Electrons:    "+ current_Electron_c.toExponential(1),(970-350+20+30)*s_x,(790-200+120)*s_y);
        text("Number of Holes:    "+ current_Hole_c.toExponential(1),(970-350+20+30)*s_x,(790-200+160)*s_y);
        
  
        textSize(12*s_x)
          // text("pairs/sec*cm",(970-350+20+190+37-10)*s_x,(790-200+40)*s_y )
          // text("pairs/sec*cm",(970-350+20+190+37-10)*s_x,(790-200+80)*s_y )
          text("per cm",(970-350+20+190+58+15-10)*s_x,(790-200+80+40)*s_y )
          text("per cm",(970-350+20+190+58+15-10)*s_x,(790-200+80+40+40)*s_y )

      
    
          textSize(10*s_x)
          // text("3",(970-350+20+190+100+11-10)*s_x,(790-200+80-8)*s_y )
          text("3",(970-350+20+190+100+11-10)*s_x,(790-200+80+40-8)*s_y )
          text("3",(970-350+20+190+100+11-10)*s_x,(790-200+80+40-8+40)*s_y )
          // text("3",(970-350+20+190+100+11-10)*s_x,(790-200+40-8)*s_y )

        
  
        //restart
      
  
        // fill(255, 58, 23,210);
        // rect((970-350-55+323-2.5)*s_x,(790-200+185-15)*s_y,(55+5)*s_x,18*s_y,5)
      
  
  
        // textSize(17*s_x)
        // noStroke()
        // strokeWeight(2)
        // fill(255);
        // text("RESET",(970-350-55+325)*s_x,(790-200+185)*s_y);
  
  
        if (abs(generation_Rate_c.toExponential(1)-recombination_Rate_c.toExponential(1))< 10) {
        //   fill(125, 241, 148,210);
        // rect((970-350-55+325-55-2.5)*s_x,(30-15)*s_y,(105+5)*s_x,22*s_y,5)
      
        textSize(17*s_x)
        noStroke()
        strokeWeight(2)
        fill(255);
        text("In Equilibrium",(970-350-55-55)*s_x,(790-200+185-5)*s_y);
        }
    
        } else if (sceneCount == 7) {
  

  
  
  } else if (sceneCount == 8) {
   
  
  }


}
    

  
 
}



updateTemp= (a) =>{
  temp = a;

}

updateTemp_s4= (a) =>{
  temp = a;

}

add_e= (a) =>{
  electron_add = Math.pow(10,a/10);
  let nn = electron_add.toExponential(1)
  document.getElementById("add_e_text").value=nn
  document.getElementById("add_e_text_2").value=nn

  time_count = 0;

  appearArray_s1 = [];

  
  

  if (sceneCount ==3.1 ||sceneCount ==3) {
//add donor reset
time_count = 3;
whiteArray = [];
blackArray = [];

current_Electron_c = 0;
current_Hole_c = 0;
recombination_Rate_c = 0;

generation_Rate_c = 0
recombination_Rate = 0;
current_Electron = 0;
current_Hole = 0;

recombination_Rate_c = 0;


appearArray_s1 = []
whiteArray_e = [];
whiteID_e  = [];

appearArray_s1 = []
blackArray_h = [];
blackID_h  = [];

  } 


  if (sceneCount == 3.1 || sceneCount==3.2) {
    if (electron_add - hole_add >=0) {
      //more e
      
      current_Electron_c = Math.round(electron_add ) - Math.round(hole_add);
      // e_count  = ((100-1)/2*Math.log10(current_Electron_c)+1-(100-1)*10/2+1); 
  e_count = Math.pow(100,((Math.log10(current_Electron_c)-8)/2))/10
  //x 10-12
  //y 1-100 
  // 1=10a+b
  //100=12*a+b
  //100-1=2a
  //a=(100-1)/2
  //b=1-(100-1)*10/2
    
      for (let i=0; i < e_count; i ++){
  
        let a = random(120*s_x,900*s_x);
        let b = random(30*s_y,730*s_y);  
        appearArray_s1.push(new Appear(a,b,10,4));
    
        whiteArray_e.push(new Vehicle(a, b, 10, global_id, 0));
        whiteID_e.push(global_id);
        global_id += 1;
        }
      
  
  
    } else {
  
      // more h
      current_Hole_c = Math.round(hole_add) - Math.round(electron_add);
      // h_count  = (100-0.01)/4*Math.log10(current_Hole_c)+0.01-(100-0.01)*8/4; 
      h_count = Math.pow(100,((Math.log10(current_Hole_c)-8)/2))/10
      for (let i=0; i < h_count; i ++){
  
        let a = random(120*s_x,900*s_x);
        let b = random(30*s_y,730*s_y);
      
        appearArray_s1.push(new Appear(a,b,10,5));
    
        blackArray_h.push(new Vehicle(a, b, 10, global_id, 1));
        blackID_h.push(global_id);
        global_id += 1;
        }
      
    }
  }

  if (sceneCount==3) {
    // if (electron_add - hole_add >=0) {
      //more e
      
      current_Electron_c = Math.round(electron_add ) 
      // e_count  = ((100-1)/2*Math.log10(current_Electron_c)+1-(100-1)*10/2+1); 
  e_count = Math.pow(100,((Math.log10(current_Electron_c)-8)/2))/10
  //x 10-12
  //y 1-100 
  // 1=10a+b
  //100=12*a+b
  //100-1=2a
  //a=(100-1)/2
  //b=1-(100-1)*10/2
    
      for (let i=0; i < e_count; i ++){
  
        let a = random(120*s_x,900*s_x);
        let b = random(30*s_y,730*s_y);  
        appearArray_s1.push(new Appear(a,b,10,4));
    
        whiteArray_e.push(new Vehicle(a, b, 10, global_id, 0));
        whiteID_e.push(global_id);
        global_id += 1;
        }
      
  
  
    // } else {
  
      // more h
      current_Hole_c = Math.round(hole_add) 
      // h_count  = (100-0.01)/4*Math.log10(current_Hole_c)+0.01-(100-0.01)*8/4; 
      h_count = Math.pow(100,((Math.log10(current_Hole_c)-8)/2))/10
      for (let i=0; i < h_count; i ++){
  
        let a = random(120*s_x,900*s_x);
        let b = random(30*s_y,730*s_y);
      
        appearArray_s1.push(new Appear(a,b,10,5));
    
        blackArray_h.push(new Vehicle(a, b, 10, global_id, 1));
        blackID_h.push(global_id);
        global_id += 1;
        // }
      
    }
  }
 

  //background: #2a6495;

  
       
   
  
  
  
  
  

}

add_h= (a) =>{
  hole_add = Math.pow(10,a/10)

  let pp = hole_add.toExponential(1)
  document.getElementById("add_h_text").value=pp
  document.getElementById("add_h_text_2").value=pp

  time_count = 0;
  appearArray_s1 = [];
  if (sceneCount ==3.2 ||sceneCount ==3) {
    //add donor reset
    time_count = 3;
    whiteArray = [];
    blackArray = [];
    
    current_Electron_c = 0;
    current_Hole_c = 0;
    recombination_Rate_c = 0;
    
    generation_Rate_c = 0
    recombination_Rate = 0;
    current_Electron = 0;
    current_Hole = 0;
    
    recombination_Rate_c = 0;
    
    
    appearArray_s1 = []
    whiteArray_e = [];
    whiteID_e  = [];
    
    appearArray_s1 = []
    blackArray_h = [];
    blackID_h  = [];
    
      } 
  

  // appearArray_s1 = []
  //   whiteArray_e = [];
  //   whiteID_e  = [];
  //   appearArray_s1 = []
  //   blackArray_h = [];
  //   blackID_h  = [];
if (sceneCount==3.1 || sceneCount==3.2){
  if (electron_add - hole_add >0) {

    //more e
    current_Electron_c = Math.round(electron_add) - Math.round(hole_add);
    // e_count  = (100-0.01)/4*Math.log10(current_Electron_c)+0.01-(100-0.01)*8/4; 
    e_count = Math.pow(100,((Math.log10(current_Electron_c)-8)/2))/10

    for (let i=0; i < e_count; i ++){

      let a = random(120*s_x,900*s_x);
      let b = random(30*s_y,730*s_y);  
      appearArray_s1.push(new Appear(a,b,10,4));
  
      whiteArray_e.push(new Vehicle(a, b, 10, global_id, 0));
      whiteID_e.push(global_id);
      global_id += 1;
      }
    
    
  } else {
    // more h
    current_Hole_c = Math.round(hole_add) - Math.round(electron_add);
    // h_count  = (100-0.01)/4*Math.log10(current_Hole_c)+0.01-(100-0.01)*8/4; 
    h_count = Math.pow(100,((Math.log10(current_Hole_c)-8)/2))/10
    for (let i=0; i < h_count; i ++){

      let a = random(120*s_x,900*s_x);
      let b = random(30*s_y,730*s_y);
    
      appearArray_s1.push(new Appear(a,b,10,5));
  
      blackArray_h.push(new Vehicle(a, b, 10, global_id, 1));
      blackID_h.push(global_id);
      global_id += 1;
      }
    

  }
}

if (sceneCount==3) {
  // if (electron_add - hole_add >0) {

    //more e
    current_Electron_c = Math.round(electron_add) 
    // e_count  = (100-0.01)/4*Math.log10(current_Electron_c)+0.01-(100-0.01)*8/4; 
    e_count = Math.pow(100,((Math.log10(current_Electron_c)-8)/2))/10

    for (let i=0; i < e_count; i ++){

      let a = random(120*s_x,900*s_x);
      let b = random(30*s_y,730*s_y);  
      appearArray_s1.push(new Appear(a,b,10,4));
  
      whiteArray_e.push(new Vehicle(a, b, 10, global_id, 0));
      whiteID_e.push(global_id);
      global_id += 1;
      }
    
    
  // } else {
    // more h
    current_Hole_c = Math.round(hole_add) 
    // h_count  = (100-0.01)/4*Math.log10(current_Hole_c)+0.01-(100-0.01)*8/4; 
    h_count = Math.pow(100,((Math.log10(current_Hole_c)-8)/2))/10
    for (let i=0; i < h_count; i ++){

      let a = random(120*s_x,900*s_x);
      let b = random(30*s_y,730*s_y);
    
      appearArray_s1.push(new Appear(a,b,10,5));
  
      blackArray_h.push(new Vehicle(a, b, 10, global_id, 1));
      blackID_h.push(global_id);
      global_id += 1;
      // }
    

  }
}
  
  


 
  

    

}

genBalls = (num) =>{
  clearInterval(run45);
  interval_45 = 2000/g_rate;
  run45 = setInterval(function(){genBalls(1);}, interval_45);

  // generate *num* balls
  if (sceneCount == 3 || sceneCount == 3.1 || sceneCount == 3.2 ){
    if (time_count>0) {
      whiteArray = [];
      blackArray = [];
    

      recombination_Rate_c = 0;
    
      recombination_Rate = 0;
 

      recombination_Rate_c = 0;

    } else if (time_count==0){
  for (let i=0; i < num; i ++){
    let a = random(120*s_x,900*s_x);
    let b = random(30*s_y,730*s_y);

    appearArray.push(new Appear(a,b,10,0));

    whiteArray.push(new Vehicle(a, b, 10, global_id, 0));
    blackArray.push(new Vehicle(a, b, 10, global_id, 1));
    whiteID.push(global_id);
    blackID.push(global_id);
    global_id += 1;
  }
}
  }


 


}


genBalls_h = (num) =>{
  s_x = windowWidth/scale_x;
      s_y = windowHeight/scale_y;

  clearInterval(run_h);
  interval_h = 380;
  run_h = setInterval(function(){genBalls_h(1);}, interval_h);

  // generate *num* balls
  if (sceneCount == 1 ){
    if (mouseX>380*s_x && mouseX<410*s_x && mouseY<50*s_y&& mouseY>10*s_y) {
  for (let i=0; i < num; i ++){
    // let a = random(120*s_x,900*s_x);
    // let b = random(30*s_y,730*s_y);

    // appearArray.push(new Appear(400*s_x,30*s_y,10,0));

    // whiteArray.push(new Vehicle(a, b, 10, global_id, 0));
    blackArray_h.push(new Vehicle(400*s_x, 30*s_y, 10, global_id_h, 1));
    // whiteID.push(global_id);
    blackID_h.push(global_id_h);
    global_id_h += 1;
    current_Hole_c += Math.pow(10,10);
  }
}
  }
}

genBalls_e = (num) =>{
  s_x = windowWidth/scale_x;
      s_y = windowHeight/scale_y;

  clearInterval(run_e);
  interval_e = 380;
  run_e = setInterval(function(){genBalls_e(1);}, interval_e);

  // generate *num* balls
  if (sceneCount == 1 ){
    if (mouseX>480*s_x && mouseX<510*s_x && mouseY<50*s_y&& mouseY>10*s_y) {
  for (let i=0; i < num; i ++){
    // let a = random(120*s_x,900*s_x);
    // let b = random(30*s_y,730*s_y);

    // appearArray.push(new Appear(400*s_x,30*s_y,10,0));

    // whiteArray.push(new Vehicle(a, b, 10, global_id, 0));
    whiteArray_e.push(new Vehicle(500*s_x, 30*s_y, 10, global_id_e, 0));
    // whiteID.push(global_id);
    whiteID_e.push(global_id_e);
    global_id_e += 1;
    current_Electron_c += Math.pow(10,10);
  }
}
}
}


disBalls = (num) => {

  if (sceneCount == 4) {
  for (let i =0; i < num; i ++) {
    if (whiteID.length > 0){
      const random_white_id = floor(random(whiteID.length));
      const random_black_id = floor(random(blackID.length));

      //console.log(random_white_id);
      
      // to disappear
      white_seek_ball.push(whiteID[random_white_id]);
      black_seek_ball.push(blackID[random_black_id]);
      
      // remaining balls
      whiteID.splice(random_white_id, 1);
      blackID.splice(random_black_id, 1);
    }
  }
}
}

randomWalkBalls = () => {
  for (let i = 0; i < whiteArray.length; i++) {
    whiteArray[i].random_walk();
    blackArray[i].random_walk();
  }
}

addTimeBalls = () => {
  for (let i = 0; i < whiteArray.length; i++) {
    whiteArray[i].addTime();
    blackArray[i].addTime();
  }
}



updateTemperature =() => {
  change_diameter = true;
  
}


// mousePressed = () => { 
//   // if (sceneCount==4) {

//   //   current_Electron_c += Math.power(10,18);
//   // }



//   if (mouseX > (970-350-55+325)*s_x && mouseY > (790-200+170)*s_y && mouseX < (970-350-55+60+325)*s_x && mouseY < (790-200+170+60)*s_y) {

//     time_count = 3;

//     if (sceneCount==3.1 ||sceneCount==3.2 ||sceneCount==3) {
//       whiteArray = [];
//       blackArray = [];
    
//       current_Electron_c = 0;
//       current_Hole_c = 0;
//       recombination_Rate_c = 0;
    
//       generation_Rate_c = 0
//       recombination_Rate = 0;
//       current_Electron = 0;
//       current_Hole = 0;

//       recombination_Rate_c = 0;


//       appearArray_s1 = []
//     whiteArray_e = [];
//     whiteID_e  = [];

//     appearArray_s1 = []
//     blackArray_h = [];
//     blackID_h  = [];
    

    
//       text("RESET",(970-350-55+325)*s_x,(790-200+185)*s_y);

      
//     }
//     if (sceneCount==10) {

//       whiteArray = [];
//   blackArray = [];

//   current_Electron_s1 = 0;
//   current_Hole_s1 = 0;
//   recombination_Rate_s1 = 0;

//   recombination_Rate = 0;
//   current_Electron = 0;
//   current_Hole = 0;


//   appearArray_s1 = []
//     whiteArray_e = [];
//     whiteID_e  = [];

//     appearArray_s1 = []
//     blackArray_h = [];
//     blackID_h  = [];


//   text("RESET",(970-350-55+325)*s_x,(790-200+185)*s_y);
  

//     } else{
//   whiteArray = [];
//   blackArray = [];

//   current_Electron_s1 = 0;
//   current_Hole_s1 = 0;
//   recombination_Rate_s1 = 0;

//   recombination_Rate = 0;
//   current_Electron = 0;
//   current_Hole = 0;

//   appearArray_s1 = []
//     whiteArray_e = [];
//     whiteID_e  = [];

//     appearArray_s1 = []
//     blackArray_h = [];
//     blackID_h  = [];

//   text("RESET",(970-350-55+325)*s_x,(790-200+185)*s_y);
//     }
//   }

 


// }


reset_scene2 = () => {
  whiteArray = [];
  blackArray = [];

  current_Electron_s1 = 0;
  current_Hole_s1 = 0;
  recombination_Rate_s1 = 0;

  recombination_Rate = 0;
  current_Electron = 0;
  current_Hole = 0;

  // electronHoleGraph_s2_reset();
  // electronHoleGraph_s2_update();


  // electronHoleGraph_s2_pairs_reset();
  // electronHoleGraph_s2_pairs_update();
}


timeIt = () => {
  if (time_count > 0) {
    time_count-=1;
  }
}

time_graph = () => {
  if (time_count_graph > 0) {
    time_count_graph-=1;
  }
}




checkBoundaryAtoms = (latticeAtoms, xLimit, yLimit) => {
  for (let i = -xLimit; i <= xLimit; i++) {
    for (let j = -yLimit; j <= yLimit; j++) {
      if (latticeAtoms[i][j].selected) {
        latticeAtoms[i][j].boundary = false;
      } else if (latticeAtoms[i - 1][j].selected || latticeAtoms[i + 1][j].selected || latticeAtoms[i][j - 1].selected || latticeAtoms[i][j + 1].selected) {
        latticeAtoms[i][j].boundary = true;
      } else {
        latticeAtoms[i][j].boundary = false;
      }
    }
  }
}

resetLattice = () => {
  for (let i = -xLimit - 2; i <= xLimit + 2; i++) {
    latticeAtoms[i] = [];
    let selected = false;
    for (let j = -yLimit - 2; j <= yLimit + 2; j++) {
      if ((i == 0 && (j == 1 || j == 0 || j == -1)) || (j == 0 && (i == 0 || i == -1 || i == 1))) {
        selected = true;
      } else {
        selected = false;
      }
      latticeAtoms[i][j] = new LatticeAtom(width / 2 + i * 90, height / 2 + j * 90, selected);
    }
  }
}

update_opacity = () => {
xLimit = ((int)(width / 180));
        yLimit = ((int)(height / 180));
        for (let i = -xLimit; i <= xLimit; i++) {
          for (let j = -yLimit; j <= yLimit; j++) {
            rx = abs(i * 90);
            ry = abs(j * 90);
            opacity = map(sqrt(rx * rx + ry * ry) / 1.414, sqrt(width * width + height * height) / 5, 0, 0, 255);
            latticeAtoms_h[i][j].fadee = opacity;
            
          }
        }
}


function mouseClicked() {
  // console.log("kkkk");
  if (sceneCount == 0.5) {
    for (let i = -xLimit; i <= xLimit; i++) {
      for (let j = -yLimit; j <= yLimit; j++) {
        if (latticeAtoms[i][j].mouseHover()) {
          if (latticeAtoms[i][j].boundary) {
            latticeAtoms[i][j].selectAtom();
          }
        }
      }
    }
  }
  if (sceneCount == 1) {
    for (let i = -xLimit; i <= xLimit; i++) {
      for (let j = -yLimit; j <= yLimit; j++) {
        if (latticeAtoms_e[i][j].mouseHover()) {
         if (latticeAtoms_e[i][j].selected==true) {

          latticeAtoms_e[i][j].selectAtom();
    
          free_electron.push(new freeElectron(latticeAtoms_e[i][j].x+30, latticeAtoms_e[i][j].y-30, 1, id_electron_s1));
          id_electron_s1++;
         }
         
            
        
        }
      }
    }
  }
  if (sceneCount == 2) {
    for (let i = -xLimit; i <= xLimit; i++) {
      for (let j = -yLimit; j <= yLimit; j++) {
        if (latticeAtoms_h[i][j].mouseHover()) {
          if (latticeAtoms_h[i][j].selected==true) {
          
            latticeAtoms_h[i][j].selectAtom();
            free_hole.push(new freeElectron(latticeAtoms_e[i][j].x, latticeAtoms_e[i][j].y-30, 2, id_hole_s1));
            // goToHole[id_hole_s1] = random(electronLatticePositions);
            let nummm = int(random(-3,3))
            random_hole[id_hole_s1] = createVector(width / 2+random(random_num1).x*nummm* 90 ,-30+height / 2 + random(random_num1).y*nummm* 90);
            // random_direction[id_hole_s1]= createVector(int(random(-1,2)),int(random(-1,2)))
            id_hole_s1++;
          }
          
        }
      }
    }
  }




}



reset_scroll = () => {
  time_count = 2;

  whiteArray = [];
  blackArray = [];

  current_Electron_c = 0;
  current_Hole_c = 0;
  recombination_Rate_c = 0;

  generation_Rate_c = 0
  recombination_Rate = 0;
  current_Electron = 0;
  current_Hole = 0;

  recombination_Rate_c = 0;


  appearArray_s1 = []
whiteArray_e = [];
whiteID_e  = [];

appearArray_s1 = []
blackArray_h = [];
blackID_h  = [];
}