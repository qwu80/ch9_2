let sceneCount = 0;

let StartScroll = () => {
  let controller = new ScrollMagic.Controller();
  electronHoleGraph_tot();

  let scene_0_5 = new ScrollMagic.Scene({
    triggerElement: '#scene_0_5'
  })
  .setClassToggle('#scene_0_5', 'fade-in')
  // .addIndicators({
  //   name: 'fade scene',
  //   colorTrigger: 'white',
  //   colorStart: '#FFF7AE'
  // })
  .on('start', () => {
    if (sceneCount == 0) {
      sceneCount = 0.5;

 
      
    } else {
      sceneCount = 0;
    }
  })
  .addTo(controller);

  let scene_1 = new ScrollMagic.Scene({
      triggerElement: '#scene_1'
    })
    .setClassToggle('#scene_1', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 0.5) {
        sceneCount = 1;

        // electronHoleGraph();
        // // electronHoleGraph()();
   
        // electronHoleGraph_tot();
        
      } else {
        sceneCount = 0.5;
      }
    })
    .addTo(controller);

    let scene_2 = new ScrollMagic.Scene({
      triggerElement: '#scene_2'
    })
    .setClassToggle('#scene_2', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 1) {
        sceneCount = 2;
     
        

    
        

      } else {
        sceneCount = 1;
      }
    })
    .addTo(controller);

    let scene_2_5 = new ScrollMagic.Scene({
      triggerElement: '#scene_2_5'
    })
    .setClassToggle('#scene_2_5', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 2) {
        sceneCount = 2.5;
        update_opacity();
        

    
        

      } else {
        sceneCount = 2;
      }
    })
    .addTo(controller);

    let scene_3_1 = new ScrollMagic.Scene({
      triggerElement: '#scene_3_1'
    })
    .setClassToggle('#scene_3_1', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 2.5) {
        sceneCount = 3.1;
       
  add_e(80)
        hole_add =0;
        electronHoleGraph();
 
        // electronHoleGraph_tot();
  
       
  
      } else {
        sceneCount = 2.5;

        // reset_electronHoleGraph_tot();

      }
    })
    .addTo(controller);


    let scene_3_2 = new ScrollMagic.Scene({
      triggerElement: '#scene_3_2'
    })
    .setClassToggle('#scene_3_2', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 3.1) {
        sceneCount = 3.2;
        add_h(80)
        reset_scroll();
        // reset_electronHoleGraph_tot();

        electronHoleGraph();
 
        // electronHoleGraph_tot();


        // electronHoleGraph_tot_2();

        electron_add =0;
       
  
      } else {
        sceneCount = 3.1;
        document.getElementById("slider_1").value=80
        reset_scroll();
        hole_add =0;
        electron_add =0
        add_e(80);
        
        // reset_electronHoleGraph_tot();
      
      }
    })
    .addTo(controller);


    let scene_3 = new ScrollMagic.Scene({
      triggerElement: '#scene_3'
    })
    .setClassToggle('#scene_3', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 3.2) {
        sceneCount = 3;
        reset_scroll();
        hole_add =0;
        electron_add =0;
        // reset_electronHoleGraph_tot();

        electronHoleGraph();
 
        // electronHoleGraph_tot();
  
      } else {
        sceneCount = 3.2;
        document.getElementById("slider_2").value=80
        reset_scroll();
        hole_add =0
        electron_add = 0
        add_h(80)
        // reset_electronHoleGraph_tot();

      }
    })
    .addTo(controller);

    let scene_4 = new ScrollMagic.Scene({
      triggerElement: '#scene_4'
    })
    .setClassToggle('#scene_4', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      potentialEnergyGraph2();
      potentialEnergyGraph3(1000,100);
      if (sceneCount == 3) {
        sceneCount = 4;
      
     
      } else {
        sceneCount = 3;
      }
    })
    .addTo(controller);

    let scene_5 = new ScrollMagic.Scene({
      triggerElement: '#scene_5'
    })
    .setClassToggle('#scene_5', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {

      if (sceneCount == 4) {
        sceneCount = 5;
      } else {
        sceneCount = 4;
      }
    })
    .addTo(controller);


    let scene_6 = new ScrollMagic.Scene({
      triggerElement: '#scene_6'
    })
    .setClassToggle('#scene_6', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {

      if (sceneCount == 5) {
        sceneCount = 6;
        effectiveGraph(1000,100);
        
      } else {
        sceneCount = 5;
      }
    })
    .addTo(controller);

    let scene_7 = new ScrollMagic.Scene({
      triggerElement: '#scene_7'
    })
    .setClassToggle('#scene_7', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {

      if (sceneCount == 6) {
        sceneCount = 7;
        effectiveGraph2(1000,100);
      } else {
        sceneCount = 6;
      }
    })
    .addTo(controller);


  
  

  let scene_8 = new ScrollMagic.Scene({
    triggerElement: '#scene_8'
  })
  .setClassToggle('#scene_8', 'fade-in')
  // .addIndicators({
  //   name: 'fade scene',
  //   colorTrigger: 'white',
  //   colorStart: '#FFF7AE'
  // })
  .on('start', () => {

    if (sceneCount == 7) {
      sceneCount = 8;
      effectiveGraph(1000,100);
    } else {
      sceneCount = 7;
    }
  })
  .addTo(controller);


}
