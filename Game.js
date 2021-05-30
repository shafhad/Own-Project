class Game {
    constructor() {

    }

    start() {
      key.visible = false;
      key2.visible = false;
      key3.visible = false;

      cardboard1.visible = false;
      cardboard2.visible = false;
      cardboard3.visible = false;
      cardboard4.visible = false;
      cardboard5.visible = false;
      cardboard6.visible = false;
      cardboard7.visible = false;
      cardboard8.visible = false;
      cardboard9.visible = false;
      cardboard10.visible = false;
      cardboard11.visible = false;
      cardboard12.visible = false;
      cardboard13.visible = false;
      cardboard14.visible = false;
      cardboard15.visible = false;
      cardboard16.visible = false;
      cardboard17.visible = false;
      cardboard18.visible = false;
      cardboard19.visible = false;
      cardboard20.visible = false;
      cardboard21.visible = false;
      cardboard22.visible = false;
      cardboard23.visible = false;
      cardboard24.visible = false;
      cardboard25.visible = false;
      cardboard26.visible = false;
      cardboard27.visible = false;
      cardboard28.visible = false;
      cardboard29.visible = false;
      cardboard30.visible = false;
      cardboard31.visible = false;
      cardboard32.visible = false;
      cardboard33.visible = false;
      cardboard34.visible = false;
      cardboard35.visible = false;
      cardboard36.visible = false;

      ground.visible = false;
      monster.visible = false;
      boy.visible = false; 
      door.visible = false;
      wall1.visible = false;
      wall2.visible = false;
      wall3.visible = false;
      wall4.visible = false;
      wall5.visible = false;
      wall6.visible = false;
      wall7.visible = false;
      spine.visible = false;
      //spine2.visible = false;
      spine3.visible = false;
      //spine4.visible = false;
      //spine5.visible = false;
   }

   start2() {
      buttons.hide();
      player = new Player();
      player.getCount();

      if(displayWidth<1500) {
        leftArrow.visible = false;
        rightArrow.visible = false;
        upArrow.visible = false;
        downArrow.visible = false;
      }
   }

   play1() {
     background("green");

     cardboard1.visible = true;
     cardboard2.visible = true;
     cardboard3.visible = true;
     cardboard4.visible = true;
     cardboard5.visible = true;
     cardboard6.visible = true;
     cardboard7.visible = true;
     cardboard8.visible = true;
     cardboard9.visible = true;
     cardboard10.visible = true;
     cardboard11.visible = true;
     cardboard12.visible = true;
     cardboard13.visible = true;
     cardboard14.visible = true;
     cardboard15.visible = true;
     cardboard16.visible = true;
     cardboard17.visible = true;
     cardboard18.visible = true;
     cardboard19.visible = true;
     cardboard20.visible = true;
     cardboard21.visible = true;
     cardboard22.visible = true;
     cardboard23.visible = true;
     cardboard24.visible = true;
     cardboard25.visible = true;
     cardboard26.visible = true;
     cardboard27.visible = true;
     cardboard28.visible = true;
     cardboard29.visible = true;
     cardboard30.visible = true;
     cardboard31.visible = true;
     cardboard32.visible = true;
     cardboard33.visible = true;
     cardboard34.visible = true;
     cardboard35.visible = true;
     cardboard36.visible = true;

     boy.visible = true; 
     door.visible = true;

     if(displayWidth<1500) {
       leftArrow.visible = true;
       rightArrow.visible = true;
       upArrow.visible = true;
       downArrow.visible = true;
     }   
   }

   play2() {
     background(bg_img2);
     cardboard1.visible = false;
     cardboard2.visible = false;
     cardboard3.visible = false;
     cardboard4.visible = false;
     cardboard5.visible = false;
     cardboard6.visible = false;
     cardboard7.visible = false;
     cardboard8.visible = false;
     cardboard9.visible = false;
     cardboard10.visible = false;
     cardboard11.visible = false;
     cardboard12.visible = false;
     cardboard13.visible = false;
     cardboard14.visible = false;
     cardboard15.visible = false;
     cardboard16.visible = false;
     cardboard17.visible = false;
     cardboard18.visible = false;
     cardboard19.visible = false;
     cardboard20.visible = false;
     cardboard21.visible = false;
     cardboard22.visible = false;
     cardboard23.visible = false;
     cardboard24.visible = false;
     cardboard25.visible = false;
     cardboard26.visible = false;
     cardboard27.visible = false;
     cardboard28.visible = false;
     cardboard29.visible = false;
     cardboard30.visible = false;
     cardboard31.visible = false;
     cardboard32.visible = false;
     cardboard33.visible = false;
     cardboard34.visible = false;
     cardboard35.visible = false;
     cardboard36.visible = false;

     wall1.visible = true;
     wall2.visible = true;
     wall3.visible = true;
     wall4.visible = true;
     wall5.visible = true;
     wall6.visible = true;
     wall7.visible = true;
     visible = true;
     spine.visible = true;
     boy.visible = true; 
     door.visible = true;

     //key.visible = true;
     key2.visible = true;
     key3.visible = true;
   }

   play3() {
     background(bgImg3);
     boy.visible = true; 
     door.visible = true;
     wall1.visible = false;
     wall2.visible = false;
     wall3.visible = false;
     wall4.visible = false;
     wall5.visible = false;
     wall6.visible = false;
     wall7.visible = false;
     visible = false;
     spine.visible = false;
     monster.visible = true;
     ground.visible = true;
     spine.visible = false;
     spine3.visible = false;
   }
}