var gameState = "start";
var gameState2 = "1";
var background_img;
var buttons;
var form;
var database;
var playerIndex;
var game,player;
var playerCount;
var cardboard1,cardboard2,cardboard3,cardboard4,cardboard5,cardboard6,cardboard7,cardboard8,cardboard9,cardboard10,cardboard11,cardboard12,cardboard13,cardboard14,cardboard15,cardboard16,cardboard17,cardboard18,cardboard19,cardboard20,cardboard21,cardboard22,cardboard23,cardboard24,cardboard25,cardboard26,cardboard27,cardboard28,cardboard29,cardboard30,cardboard31,cardboard32,cardboard33,cardboard34,cardboard35,cardboard36;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var doorImg,door;
var boyImg,boyImg2,boyImg3,boy;
var bg_img2,bgImg3;
var wall_img,wall_img2,wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8;
var invisibleGround,invisibleGround2,invisibleGround3,invisibleGround4,invisibleGround5;
var leftArrow,rightArrow,upArrow,downArrow,leftArrow_img,rightArrow_img,upArrow_img,downArrow_img;
var fire1,fire2,fire3,fire4,fire5,fire6,fire7,fire8,fire_img;
var monster,monsterImg; 
var slingshot;
var stone,stone_Img;
var stone2;
var keyImg,key,key2,key3;
var ground;
var obstacle,obstacle_Img,obstacleGroup;
var spine,spine2,spine3,spine4,spine5,spine_img,spine_img2,spine_img3,spine_img4;
var visible = false;
var startTimehr,startTimemin,startTimesec,endTimehr,endTimemin,endTimesec,timerhr,timermin,timersec,timehr,timemin,timesec;

function preload() {
  background_img = loadImage("Background img.png");
  doorImg = loadImage("Door Img.png");
  boyImg = loadAnimation("download.png","download2.png","download3.png","download4.png","download5.png","download6.png");
  boyImg2 = loadAnimation("download7.png","download8.png","download9.png","download10.png","download11.png","download12.png");
  boyImg3 = loadAnimation("download3.png");
  bg_img2 = loadImage("Mario game bg.png");
  wall_img = loadImage("Brick.gif");
  wall_img2 = loadImage("Brick2.jpeg");
  leftArrow_img = loadImage("left arrow.png");
  rightArrow_img = loadImage("right arrow.png");
  upArrow_img = loadImage("up arrow.png");
  downArrow_img = loadImage("down arrow.png");
  fire_img = loadImage("fire.png");
  monsterImg = loadImage("Monster.png");
  bgImg3 = loadImage("download (1).png");
  stone_Img = loadImage("stone.png");
  keyImg = loadImage("key.png");
  obstacle_Img = loadImage("Stone1.png");
  spine_img = loadImage("cactus.png");
  spine_img2 = loadImage("cactus2.png");
  spine_img3 = loadImage("cactus3.png");
  spine_img4 = loadImage("cactus4.png");
}

function setup() { 
  createCanvas(800,600); 

  database = firebase.database(); 

  engine = Engine.create(); 
  world = engine.world; 

  obstacleGroup = new Group();

  boy = createSprite(380,30); 
  boy.addAnimation("boy",boyImg);
  boy.addAnimation("boy2",boyImg2); 
  boy.addAnimation("boy3",boyImg3);
  boy.scale = 0.3;

  ground = createSprite(400,580,800000000,40);
  
  game = new Game(); 
  
  door = createSprite(410,565);
  door.addImage("door",doorImg);
  door.scale = 0.175;
  door.setCollider("rectangle",0,0,230,290);

  stone = new Stone(100,335,40,40);

  stone2 = createSprite(0,0,20,20);
  stone2.visible = false;

  slingshot = new Slingshot(stone.body,{x:130,y:525});
  
  invisibleGround = createSprite(240,220,30,70);
  invisibleGround.visible = false;

  invisibleGround2 = createSprite(530,220,30,70);
  invisibleGround2.visible = false;

  invisibleGround3 = createSprite(400,520,16000000,20);
  invisibleGround3.visible = false;

  invisibleGround4 = createSprite(700,200,30,70);
  invisibleGround4.visible = false;

  invisibleGround5 = createSprite(1040,200,30,70);
  invisibleGround5.visible = false;

    wall1 = createSprite(150,380);
    wall1.addImage(wall_img);
    wall1.scale = 0.7;

    wall2 = createSprite(450,220);
    wall2.addImage(wall_img);
    wall2.scale = 0.7;
    wall2.velocityX = -5;

    wall3 = createSprite(520,440);
    wall3.addImage(wall_img2);
    wall3.scale = 0.7;

    wall4 = createSprite(630,440);
    wall4.addImage(wall_img2);
    wall4.scale = 0.7;

    wall5 = createSprite(960,200);
    wall5.addImage(wall_img);
    wall5.scale = 0.7;
    wall5.velocityX = -5;

    wall6 = createSprite(1080,360);
    wall6.addImage(wall_img);
    wall6.scale = 0.7;

    wall7 = createSprite(1240,430);
    wall7.addImage(wall_img2);
    wall7.scale = 0.8;

    key = createSprite(575,470);
    key.addImage("key",keyImg);
    key.scale = 0.4;

    key2 = createSprite(450,90);
    key2.addImage("key2",keyImg);
    key2.scale = 0.3;

    key3 = createSprite(1200,470);
    key3.addImage("key3",keyImg);
    key3.scale = 0.3;

    spine = createSprite(1280,390);
    spine.addImage("spine",spine_img3);
    spine.scale = 0.15;

    spine3 = createSprite(520,340);
    spine3.addImage("spine3",spine_img2);
    spine3.scale = 0.15;

    buttons = new Buttons();
    buttons.display();

    form = new Form();

    cardboard1 = createSprite(790,300,20,600);
    cardboard2 = createSprite(10,300,20,600);
    cardboard3 = createSprite(170,590,340,20);
    cardboard4 = createSprite(630,590,340,20);
    cardboard5 = createSprite(330,560,20,80);
    cardboard6 = createSprite(305,530,150,20);
    cardboard7 = createSprite(240,420,20,200);
    cardboard8 = createSprite(245,310,310,20);
    cardboard9 = createSprite(100,350,20,100);
    cardboard10 = createSprite(170,10,340,20);
    cardboard11 = createSprite(630,10,340,20);
    cardboard12 = createSprite(470,40,20,80);
    cardboard13 = createSprite(220,40,20,80);
    cardboard14 = createSprite(100,160,20,160);
    cardboard15 = createSprite(215,230,250,20);
    cardboard16 = createSprite(330,155,20,150);
    cardboard17 = createSprite(400,90,160,20);
    cardboard18 = createSprite(175,160,150,20);
    cardboard19 = createSprite(570,125,20,90);
    cardboard20 = createSprite(495,230,170,20);
    cardboard21 = createSprite(495,170,170,20);
    cardboard22 = createSprite(420,200,20,80);
    cardboard23 = createSprite(390,340,20,80);
    cardboard24 = createSprite(430,370,100,20);
    cardboard25 = createSprite(490,300,20,160);
    cardboard26 = createSprite(325,410,20,60);
    cardboard27 = createSprite(397.5,450,165,20);
    cardboard28 = createSprite(470,515,20,150);
    cardboard29 = createSprite(85,470,170,20);
    cardboard30 = createSprite(160,510,20,60);
    cardboard31 = createSprite(715,135,130,20);
    cardboard32 = createSprite(660,170,20,200);
    cardboard33 = createSprite(590,415,20,210);
    cardboard34 = createSprite(630,400,100,20);
    cardboard35 = createSprite(670,455,20,130);
    cardboard36 = createSprite(720,510,120,20);  

    monster = createSprite(900,490);
    monster.addAnimation("monster",monsterImg);
    monster.addAnimation("monster2",keyImg);
    monster.scale = 0.4;

    /*for(var i = wall1.x-60; i<wall1.x+70;i+=40) {
      spine2 = createSprite(i,wall1.y+40);
      spine2.addImage("spine2",spine_img);
      spine2.scale = 0.15;
      spine2.visible = false;
    }
  
    for(var i = wall4.y-20; i<wall4.y+70;i+=50) {
      spine4 = createSprite(wall4.x+40,i);
      spine4.addImage("spine4",spine_img3);
      spine4.scale = 0.15;
      spine4.visible = false;
    }
  
    for(var i = 800; i<1000;i+=40) {
      spine5 = createSprite(i,470);
      spine5.addImage("spine5",spine_img2);
      spine5.scale = 0.15;
      spine5.visible = false;
    }*/

   /* for(var i = wall1.x-60; i<wall1.x+70;i+=40) {
      spine2 = createSprite(i,wall1.y+40);
      spine2.addImage("spine2",spine_img);
      spine2.scale = 0.15;
    }
  
    for(var i = wall4.y-20; i<wall4.y+70;i+=50) {
      spine4 = createSprite(wall4.x+40,i);
      spine4.addImage("spine4",spine_img3);
      spine4.scale = 0.15;
    }
  
    for(var i = 800; i<1000;i+=40) {
      spine5 = createSprite(i,470);
      spine5.addImage("spine5",spine_img2);
      spine5.scale = 0.15;
    }*/
} 

function draw() { 
  background(background_img);
  Engine.update(engine);
  
  for(var i = 1;i<10;i+=1) {
    var fire = "fire" + i;
    fire.debug = true;
  }

  wall2.bounceOff(invisibleGround);
  wall2.bounceOff(invisibleGround2);
  wall5.bounceOff(invisibleGround4);
  wall5.bounceOff(invisibleGround5);
  
  if((gameState!=="start" || gameState!=="form") && gameState!=="level2" && gameState!=="level3") {
    if(displayWidth<1500) {
      if(mousePressedOver(leftArrow) || keyDown("left")) {
        boy.x-=10;
        boy.changeAnimation("boy2",boyImg2);
      }
  
      if(mousePressedOver(upArrow) || keyDown("up")) {
        boy.y-=10;
      }
  
      if(mousePressedOver(downArrow) || keyDown("down")) {
        boy.y+=10;
      }
  
      if(mousePressedOver(rightArrow) || keyDown("right")) {
        boy.x+=10;
        boy.changeAnimation("boy",boyImg);
      }
    }
  }

  stone2.x = stone.body.position.x;
  stone2.y = stone.body.position.y;

  cardboard1.shapeColor = rgb(0,50,0);
  cardboard2.shapeColor = rgb(0,50,0);
  cardboard3.shapeColor = rgb(0,50,0);
  cardboard4.shapeColor = rgb(0,50,0);
  cardboard5.shapeColor = rgb(0,50,0);
  cardboard6.shapeColor = rgb(0,50,0);
  cardboard7.shapeColor = rgb(0,50,0);
  cardboard8.shapeColor = rgb(0,50,0);
  cardboard9.shapeColor = rgb(0,50,0);
  cardboard10.shapeColor = rgb(0,50,0);
  cardboard11.shapeColor = rgb(0,50,0);
  cardboard12.shapeColor = rgb(0,50,0);
  cardboard13.shapeColor = rgb(0,50,0);
  cardboard14.shapeColor = rgb(0,50,0);
  cardboard15.shapeColor = rgb(0,50,0);
  cardboard16.shapeColor = rgb(0,50,0);
  cardboard17.shapeColor = rgb(0,50,0);
  cardboard18.shapeColor = rgb(0,50,0);
  cardboard19.shapeColor = rgb(0,50,0);
  cardboard20.shapeColor = rgb(0,50,0);
  cardboard21.shapeColor = rgb(0,50,0);
  cardboard22.shapeColor = rgb(0,50,0);
  cardboard23.shapeColor = rgb(0,50,0);
  cardboard24.shapeColor = rgb(0,50,0);
  cardboard25.shapeColor = rgb(0,50,0);
  cardboard26.shapeColor = rgb(0,50,0);
  cardboard27.shapeColor = rgb(0,50,0);
  cardboard28.shapeColor = rgb(0,50,0);
  cardboard29.shapeColor = rgb(0,50,0);
  cardboard30.shapeColor = rgb(0,50,0);
  cardboard31.shapeColor = rgb(0,50,0);
  cardboard32.shapeColor = rgb(0,50,0);
  cardboard33.shapeColor = rgb(0,50,0);
  cardboard34.shapeColor = rgb(0,50,0);
  cardboard35.shapeColor = rgb(0,50,0);
  cardboard36.shapeColor = rgb(0,50,0);

  if(gameState==="start") { 
    game.start(); 
  } 
  
  if(gameState==="form") { 
    form.display();
    game.start2();
  } 
  
  if(gameState==="level1") { 
    game.play1(); 

    boy.setCollider("rectangle",0,0,boy.width+50,boy.height+80);

    boy.collide(cardboard1);
    boy.collide(cardboard2);
    boy.collide(cardboard3);
    boy.collide(cardboard4);
    boy.collide(cardboard5);
    boy.collide(cardboard6);
    boy.collide(cardboard7);
    boy.collide(cardboard8);
    boy.collide(cardboard9);
    boy.collide(cardboard10);
    boy.collide(cardboard11);
    boy.collide(cardboard12);
    boy.collide(cardboard13);
    boy.collide(cardboard14);
    boy.collide(cardboard15);
    boy.collide(cardboard16);
    boy.collide(cardboard17);
    boy.collide(cardboard18);
    boy.collide(cardboard19);
    boy.collide(cardboard20);
    boy.collide(cardboard21);
    boy.collide(cardboard22);
    boy.collide(cardboard23);
    boy.collide(cardboard24);
    boy.collide(cardboard25);
    boy.collide(cardboard26);
    boy.collide(cardboard27);
    boy.collide(cardboard28);
    boy.collide(cardboard29);
    boy.collide(cardboard30);
    boy.collide(cardboard31);
    boy.collide(cardboard32);
    boy.collide(cardboard33);
    boy.collide(cardboard34);
    boy.collide(cardboard35);
    boy.collide(cardboard36);

    if(boy.isTouching(door)) {
      boy.x = 50;
      boy.y = 470;
      gameState = "level2";
    }
  }

   if(gameState==="level2") {
    game.play2();

    camera.x = boy.x +300;

    if(displayWidth<1500) {
      if(mousePressedOver(leftArrow) || keyDown("left")) {
        boy.x-=20;
        boy.changeAnimation("boy2",boyImg2);
      }
  
      if(mousePressedOver(upArrow) || keyDown("up")) {
        boy.y-=20;
      }
  
      if(mousePressedOver(downArrow) || keyDown("down")) {
        boy.y+=20;
      }
  
      if(mousePressedOver(rightArrow) || keyDown("right")) {
        boy.x+=20;
        boy.changeAnimation("boy",boyImg);
      }
    } 

    boy.velocityY = 8;

    boy.collide(wall1);
    boy.collide(wall2);
    boy.collide(wall3);
    boy.collide(wall4);
    boy.collide(wall5);
    boy.collide(wall6);
    boy.collide(wall7);
    boy.collide(invisibleGround3);

    boy.scale = 0.5;
    door.x = 1270;
    door.y = 480;

    for(var i = wall1.x-60; i<wall1.x+70;i+=40) {
      spine2 = createSprite(i,wall1.y+40);
      spine2.addImage("spine2",spine_img);
      spine2.scale = 0.15;
    }
  
    for(var i = wall4.y-20; i<wall4.y+70;i+=50) {
      spine4 = createSprite(wall4.x+40,i);
      spine4.addImage("spine4",spine_img3);
      spine4.scale = 0.15;
    }
  
    for(var i = 800; i<1000;i+=40) {
      spine5 = createSprite(i,470);
      spine5.addImage("spine5",spine_img2);
      spine5.scale = 0.15;
    }

    if(boy.isTouching(key)) {
      key.destroy();
    }

    if(boy.isTouching(key2)) {
      key2.destroy();
    }

    if(boy.isTouching(key3)) {
      key3.destroy();
    }

    if(boy.isTouching(door)) {
      boy.x = 100;
      boy.y = 510;
      gameState = "level3";
    }
  }
  
  if(gameState==="level3") {
    game.play3();

    spawnStones();

    if(obstacleGroup.isTouching(ground)) {
       obstacleGroup.destroyEach();
    }

    if(obstacleGroup.isTouching(boy)) {
      obstacleGroup.destroyEach();
    }

    slingshot.pointB.x = boy.x + 20;
    slingshot.pointB.y = boy.y + 5;

    buttons.hide();

    boy.changeAnimation("boy3",boyImg3);

    if(displayWidth<1500 && boy.y > 350) {
      if(mousePressedOver(leftArrow) || keyDown("left")) {
        boy.x-=20;
        boy.changeAnimation("boy2",boyImg2);
      }
  
      if(mousePressedOver(upArrow) || keyDown("up")) {
        boy.y-=20;
      }
  
      if(mousePressedOver(downArrow) || keyDown("down")) {
        boy.y+=20;
      }
  
      if(mousePressedOver(rightArrow) || keyDown("right")) {
        boy.x+=20;
        boy.changeAnimation("boy",boyImg);
      }
    }

    camera.x = boy.x +300;

    boy.collide(ground);

    boy.velocityY = 12;

    if(keyDown("space")) {
      slingshot.attach(stone.body);
    }

    if(stone2.isTouching(monster)) { 
       monster.changeAnimation("monster2",keyImg);
       monster.scale = 0.5;
    }

    stone.display();
    slingshot.display();

    boy.scale = 0.7;
    door.destroy();
  }
  
  drawSprites(); 
 
  fill(0);
  text(mouseX + "," + mouseY + "," + camera.x,200,200);
}

function mouseDragged() {
  if(gameState==="level3") {
    if(slingshot.body.bodyA) {
      Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
    }
  }
}

function mouseReleased(){
  if(gameState==="level3") {
   slingshot.fly();
  }
}

function spawnStones() {
  if(frameCount%80===0) {
   obstacle = createSprite(Math.round(random(camera.x-400,camera.x+400)),0);
   obstacle.addImage("obstacle",obstacle_Img);
   obstacle.velocityY = 7;
   obstacle.scale = 0.5;
   obstacle.lifetime = 200;
   obstacleGroup.add(obstacle);
  }
}