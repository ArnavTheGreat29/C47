//VAR FOR ALL CREATIONS

var platform1, platform2, platform3, platform4, platform5, platform6, platform7, platform8;
var box, box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var player1Health = 3, player2Health = 3;
var player1HealthSprite, player2HealthSprite;
var player1, player2;
var bullet1, bullet2;


//VAR FOR ALL IMAGES

var platformImg, platformImg2 ;
var boxImg;
var backgroundImg;

//PLAYER IMAGES

var player1HealthImg, player2HealthImg;

//STRAIGHT IMAGES
var player1JumpingImg, player2JumpingImg;
var player1RunningImg, player2RunningImg;
var player1ShootingImg, player2ShootingImg;
var player1StillImg, player2StillImg;


//FLIPPED IMAGES
var player1JumpingFlipImg, player2JumpingFlipImg;
var player1RunningFlipImg, player2RunningFlipImg;
var player1ShootingFlipImg, player2ShootingFlipImg;



//VAR FOR ALL GROUPS

var platformGroup;
var bullet1Group;
var bullet2Group;

//VAR FOR GAMESTATE

var gameState = "play"

//VAR FOR SOUNDS

var shootingSound , runningSound , jumpingSound;
var bulletHitSound;
var gameOverSound;
var player1WinSound , player2WinSound;


function preload(){



//BACKGROUND IMAGES

  platformImg = loadImage("Background/Platform.png") 
  platformImg2 = loadImage("Background/Ground.png")
  boxImg = loadImage("Background/Wooden Box.png")
  backgroundImg = loadImage("Background/background.jpg")




//PLAYER 1 ANIMATIONS

  player1JumpingImg = loadAnimation("Player1/Jumping/tile003.png")
  player1ShootingImg = loadAnimation("Player1/Shooting/tile000.png" , "Player1/Shooting/tile001.png", "Player1/Shooting/tile003.png", "Player1/Shooting/tile004.png",  )
  player1RunningImg = loadAnimation("Player1/Running/tile000.png" , "Player1/Running/tile001.png", "Player1/Running/tile002.png", "Player1/Running/tile004.png", "Player1/Running/tile005.png" , "Player1/Running/tile006.png" )
  player1StillImg = loadAnimation("Player1/Still.png")


//PLAYER 2 ANIMATIONS

  player2JumpingImg = loadAnimation("Player2/Jumping/tile004.png")
  player2ShootingImg = loadAnimation("Player2/Shooting/tile000.png" , "Player2/Shooting/tile001.png", "Player2/Shooting/tile002.png", "Player2/Shooting/tile003.png",  )
  player2RunningImg = loadAnimation("Player2/Running/tile000.png" , "Player2/Running/tile001.png", "Player2/Running/tile002.png", "Player2/Running/tile004.png", "Player2/Running/tile005.png" , "Player2/Running/tile006.png" )
  player2StillImg = loadAnimation("Player2/Still.png")


//PLAYER 1 ANIMATION - FLIP

//player1JumpingFlipImg = loadAnimation("Player1/Jumping-Reverse/tile003.png")
//player1ShootingFlipImg = loadAnimation("Player1/Shooting-Reverse/tile000.png" , "Player1/Shooting-Reverse/tile001.png", "Player1/Shooting-Reverse/tile003.png", "Player1/Shooting-Reverse/tile004.png",  )
player1RunningFlipImg = loadAnimation("Player1/Running-Reverse/tile000.png" , "Player1/Running-Reverse/tile001.png", "Player1/Running-Reverse/tile002.png", "Player1/Running-Reverse/tile004.png", "Player1/Running-Reverse/tile005.png" , "Player1/Running-Reverse/tile006.png" )



//PLAYER 2 ANIMATIONS - FLIP

//player2JumpingFLipImg = loadAnimation("Player2/Jumping-Reverse/tile004.png")
//player2ShootingFlipImg = loadAnimation("Player2/Shooting-Reverse/tile000.png" , "Player2/Shooting-Reverse/tile001.png", "Player2/Shooting-Reverse/tile002.png", "Player2/Shooting-Reverse/tile003.png",  )
player2RunningFlipImg = loadAnimation("Player2/Running-Reverse/tile000.png" , "Player2/Running-Reverse/tile001.png", "Player2/Running-Reverse/tile002.png", "Player2/Running-Reverse/tile004.png", "Player2/Running-Reverse/tile005.png" , "Player2/Running-Reverse/tile006.png" )


   //GAME SOUNDS

   shootingSound = loadSound("Sounds/Shooting.mp3")
   runningSound = loadSound("Sounds/Running.mp3")
   bulletHitSound = loadSound("Sounds/Bullet Hit.mp3")
   jumpingSound = loadSound("Sounds/jumping.mp3")
   player1WinSound = loadSound("Sounds/Player 1 wins.mp3")
   player2WinSound = loadSound("Sounds/Player 2 wins.mp3")
}



function setup() {
  createCanvas(800,400);

//CREATION OF PLATFORMS

platform1 = createSprite(100,150,600,20)
platform1.addImage(platformImg)
platform1.width = 375
platform1.height = 20

platform2 = createSprite(400,100,400,20)
platform2.addImage(platformImg);
platform2.width = 200
platform2.height = 20

platform3 = createSprite(700,150,600,20)
platform3.addImage(platformImg);
platform3.width = 375
platform3.height = 20

platform4 = createSprite(535,300,100,20)
platform4.addImage(platformImg);
platform4.width = 100
platform4.height = 20

platform6 = createSprite(265,300,100,20)
platform6.addImage(platformImg);
platform6.width = 100
platform6.height = 20



//CREATION OF GROUND

platform7 = createSprite(200,400,400,20)
platform7.addImage(platformImg2);
platform7.width = 400
platform7.height = 20

platform8 = createSprite(600,400,400,20)
platform8.addImage(platformImg2);
platform8.width = 400
platform8.height = 20




//CREATION OF PLAYER 1

player1 = createSprite(100,365,40,40)

player1.addAnimation("p1" , player1RunningImg)
player1.addAnimation("p1-jump" , player1JumpingImg)
player1.addAnimation("p1-shoot" , player1ShootingImg)
player1.addAnimation("p1-still" , player1StillImg)

player1.addAnimation("p1-flip" , player1RunningFlipImg)
//player1.addAnimation("p1-jump-flip" , player1JumpingFlipImg)
//player1.addAnimation("p1-shoot-flip" , player1ShootingFlipImg)


player1.scale = 0.25



//CREATION OF PLAYER 2

player2 = createSprite(700,365,40,40)

player2.addAnimation("p2" , player2RunningImg)
player2.addAnimation("p2-jump" , player2JumpingImg)
player2.addAnimation("p2-shoot" , player2ShootingImg)
player2.addAnimation("p2-still" , player2StillImg)

player2.addAnimation("p2-flip" , player2RunningFlipImg)
//player2.addAnimation("p2-jump-flip" , player2JumpingFlipImg)
//player2.addAnimation("p2-shoot-flip" , player2ShootingFlipImg)

player2.scale = 0.25




//CREATION OF BOXES

 box = createSprite(350,375,25,25);
 box.addImage(boxImg);
 box.scale = 0.05

 box2 = createSprite(450,375,25,25);
 box2.addImage(boxImg);
 box2.scale = 0.05

 box3 = createSprite(350,350,25,25);
 box3.addImage(boxImg);
 box3.scale = 0.05

 box4 = createSprite(450,350,25,25);
 box4.addImage(boxImg);
 box4.scale = 0.05

 box5 = createSprite(325,275,25,25);
 box5.addImage(boxImg);
 box5.scale = 0.05

 box6 = createSprite(475,275,25,25);
 box6.addImage(boxImg);
 box6.scale = 0.05

 box7 = createSprite(325,75,25,25);
 box7.addImage(boxImg);
 box7.scale = 0.05

 box8 = createSprite(475,75,25,25);
 box8.addImage(boxImg);
 box8.scale = 0.05

 box9 = createSprite(25,125,25,25);
 box9.addImage(boxImg);
 box9.scale = 0.05

 box10 = createSprite(775,125,25,25);
 box10.addImage(boxImg);
 box10.scale = 0.05

 box11 = createSprite(25,375,25,25);
 box11.addImage(boxImg);
 box11.scale = 0.05

 box12 = createSprite(775,375,25,25);
 box12.addImage(boxImg);
 box12.scale = 0.05

 box13 = createSprite(25,350,25,25);
 box13.addImage(boxImg);
 box13.scale = 0.05

 box14 = createSprite(775,350,25,25);
 box14.addImage(boxImg);
 box14.scale = 0.05

 box15 = createSprite(25,325,25,25);
 box15.addImage(boxImg);
 box15.scale = 0.05

 box16 = createSprite(775,325,25,25);
 box16.addImage(boxImg);
 box16.scale = 0.05



// CREATES ALL GROUPS
 platformGroup = new Group() 
 bullet1Group = new Group()
 bullet2Group = new Group()



 //ADDS ALL PLATFORMS TO THE GROUP

 platformGroup.add(platform1)
 platformGroup.add(platform2)
 platformGroup.add(platform3)
 platformGroup.add(platform4)
 platformGroup.add(platform6)
 platformGroup.add(platform7)
 platformGroup.add(platform8)



 //ADDS ALL BOXES TO THE GROUP

 platformGroup.add(box)
 platformGroup.add(box2)
 platformGroup.add(box3)
 platformGroup.add(box4)
 platformGroup.add(box5)
 platformGroup.add(box6)
 platformGroup.add(box7)
 platformGroup.add(box8)
 platformGroup.add(box9)
 platformGroup.add(box10)
 platformGroup.add(box11)
 platformGroup.add(box12)
 platformGroup.add(box13)
 platformGroup.add(box14)
 platformGroup.add(box15)
 platformGroup.add(box16)


 //GROUP FOR BULLETS


}


function draw() {

background(backgroundImg);  

if(gameState == "start"){

}
if(gameState == "play"){


   //PLAYER 1

if(keyIsDown(87) && player1.collide(platformGroup)){
  jumpingSound.play()
  player1.velocityY = -15;
  player1.changeAnimation("p1-jump")
  
}


//PLAYER 2
if(keyDown(38) && player2.collide(platformGroup)){
  jumpingSound.play()
  player2.velocityY = -15;
 player2.changeAnimation("p2-jump")
 
}



//COLLISION FOR PLAYER 1

if(player1.collide(platformGroup)){
  player1.changeAnimation("p1-still")
} 





//COLLISION FOR PLAYER 2

if(player2.collide(platformGroup)){
  player2.changeAnimation("p2-still")
} 

player2.velocityY = player2.velocityY + 0.75
player2.collide(platformGroup)





  //MOVEMENTS FOR PLAYER 1 MOVEMENTS



//PLAYER 1 LEFT

if(keyIsDown(65)){              
  player1.x = player1.x - 3;
  player1.changeAnimation("p1-flip")
  runningSound.play()
}

//PLAYER 1 RIGHT

if(keyIsDown(68)){
  player1.x = player1.x + 3;
  runningSound.play()
  if(!player1.isTouching(platform7)){
    
    player1.changeAnimation("p1-jump")
    console.log("hi")
   

  }else{
    player1.changeAnimation("p1")
  }
  
}

//PLAYER 1 SHOOT

if(keyIsDown(83)){
    Shoot(1)
   
}


    
  //MOVEMENTS FOR PLAYER 2 MOVEMENTS



//PLAYER 2 LEFT

  if(keyDown(37) ){
    player2.x = player2.x - 3;
    player2.changeAnimation("p2")
    runningSound.play()
    
  }
  
//PLAYER 2 RIGHT

  if(keyDown(39)){
    player2.x = player2.x + 3;
    player2.changeAnimation("p2-flip")
    runningSound.play()
  }


  //PLAYER 2 SHOOT

if(keyIsDown(40)){
  Shoot(2)
}

//COLLISION FOR PLATFORMS AND BOXES

platform1.debug = true;
platform1.setCollider("rectangle",0,0,185,20)

platform2.debug = true;
platform2.setCollider("rectangle",0,0,185,20)

platform3.debug = true;
platform3.setCollider("rectangle",0,0,185,20)

platform4.debug = true;
platform4.setCollider("rectangle",0,0,185,20)

platform6.debug = true;
platform6.setCollider("rectangle",0,0,185,20)

platform7.debug = true;
platform7.setCollider("rectangle",0,0,400,20)

platform8.debug = true;
platform8.setCollider("rectangle",0,0,400,20)

player1.debug = true;
player1.setCollider("rectangle",0,10,150,190)

player2.debug = true;
player2.setCollider("rectangle",0,0,150,230)


player1.velocityY = player1.velocityY + 0.75
player1.collide(platformGroup)



// TO REDUCE HEALTH



if(bullet1Group.isTouching(player2)){
  bullet1Group.destroyEach()
  player2Health--
}

if(bullet2Group.isTouching(player1)){
  bullet2Group.destroyEach()
  player1Health--
}

if(player1Health <= 0 || player2Health <= 0){
    gameState = "end"
    
}

drawSprites();

  text(player1Health,100,100)
  text(player2Health,700,100)

  
}


if(gameState == "end"){
  
  stroke(0)
  fill(0)
  textSize(25)
  text("GAME OVER" , 200,200 )

  if(player2Health > player1Health){
    text("PLAYER 2 WON" , 400 , 200)
  }
  else if(player2Health < player1Health){
    text("PLAYER 1 WON" , 400 , 200)
  }

}

drawSprites();
}



function Shoot(player){
  if(player == 1){

    if(frameCount%10 == 0){

    
    bullet1 = createSprite(player1.x,player1.y,10,10)
    bullet1.velocityX = 20;
    shootingSound.play()
    

    bullet1Group.add(bullet1)
    player1.changeAnimation("p1-shoot")
    player1.scale = 0.25
    
  }
}

  else if(player == 2){


    if(frameCount%10 == 0){

    bullet2 = createSprite(player2.x,player2.y,10,10)
    bullet2.velocityX = -20;
    shootingSound.play()

    bullet2Group.add(bullet2)
    player2.changeAnimation("p2-shoot")
    player2.scale = 0.35
  }
}
}