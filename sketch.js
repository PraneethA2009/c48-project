
var PLAY=1;
var END=0;
var gameState=PLAY;

var ground;
var appleImage,melonImage,mangoImage,orangeImage,bombImage;
var fruitGroup,bombGroup;
var backgroundImage;
var mute_btn;
var knifeImage;
var bomb;
var score;
var gameOverImage;
var bk_song;


function preload()
{
  appleImage = loadImage('apple.jpg');
  mangoImage = loadImage('mango.png');
  melonImage = loadImage('melon.png');
  orangeImage = loadImage('orange.jpg');
  backgroundImage = loadImage('background.jpg');
  bombImage = loadImage('bomb.png');
  knifeImage = loadImage('knife.png');
  gameOverImage = loadImage('gameover.png');

  bk_song = loadSound('sound1.mp3');

}

function setup() 
{
  createCanvas(1900,950);
  //frameRate(80);
  fruitGroup = createGroup();
  bombGroup = createGroup();

  bk_song.play();
  bk_song.setVolume(0.15);




  knife = createSprite(800,475,20,20);
  knife.addImage(knifeImage);
  knife.scale = 0.9;
  knife.setCollider("rectangle",0,0,40,40);



  mute_btn = createImg('mute.png');
  mute_btn.position(width-50,20);
  mute_btn.size(50,50);
  mute_btn.mouseClicked(mute);

  

 /* button = createImg('cut_btn.png');
  button.position(100,90);
  button.size(50,50);
  button.mouseClicked(destroy);

   //btn 2
   button2 = createImg('cut_btn.png');
   button2.position(450,90);
   button2.size(50,50);
   button2.mouseClicked(drop2);
  

  star = createSprite(320,370,20,20);
  star.scale = 0.02;
  star.addImage(star3)

  star2 = createSprite(50,250,20,20);
  star2.scale = 0.02;
  star2.addImage(star3)

star_display = createSprite(50,20,30,30);
star_display.scale = 0.1;
star_display.addAnimation("empty",empty_star);

star_display.addAnimation("one",one_star);
star_display.addAnimation("two",two_star);
star_display.changeAnimation("empty");



  blower = createImg("baloon2.png");
  blower.position(260,370);
  blower.size(120,120);
  blower.mouseClicked(airblow);


  
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);
  fruit_con_2 = new Link(rope2,fruit);*/
  score = 0;

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(0);

  if(gameState === PLAY){
    knife.y = World.mouseY;
    knife.x = World.mouseX;
    
    fruits();
    bomb();
  }
  

   if(fruitGroup.collide(knife)){
    fruitGroup.destroyEach();
     score = score+10;
   }
   else{
     if(bombGroup.collide(knife)){
       gameState = END;
       fruitGroup.destroyEach();
       bombGroup.destroyEach();
       fruitGroup.setVelocityXEach(0);
       bombGroup.setVelocityXEach(0);
       knife.addImage(gameOverImage);
       knife.scale = 1.5;
       knife.x = 950;
       knife.y = 475;
     }
    }



  drawSprites();
  textSize(20);
  text("Score : "+score,1500,800);
}


 function bomb(){
   if(World.frameCount%150===0){
   var bomb = createSprite(1000,400,20,20);
   bomb.addImage(bombImage);
   bomb.velocityX = -6
   bomb.scale =  0.4;
   bomb.y=Math.round(random(100,550));
    if(score%1000===0){
      velocityX +=7
    }
    bomb.y=Math.round(random(50,950));
   bombGroup.add(bomb);
   }
 }

 
function fruits(){
  if(World.frameCount%80===0){
    var fruit = createSprite(1000,400,20,20);
    fruit.x = 0;
    fruit.velocityX = (8+score/500)
    fruit.scale = 0.3

    fruit.debug=true;
   var r=Math.round(random(1,4));
   if (r == 1) {
     fruit.addImage(appleImage);
   } else if (r == 2) {
     fruit.addImage(melonImage);
     fruit.scale = 0.2
   } else if (r == 3) {
     fruit.addImage(orangeImage);
   } else {
     fruit.addImage(mangoImage);
   }
   
   fruit.y=Math.round(random(50,950));

   fruitGroup.add(fruit)

  
 }
}

function mute()
{
  if(bk_song.isPlaying())
     {
      bk_song.stop();
     }
     else{
      bk_song.play();
     }
}
/*if(collide(fruit,bunny,80)==true)
  {
    World.remove(engine.world,fruit);
    fruit = null;
  }

  if(fruit!=null && fruit.position.y>=650)
  {
    bunny.changeAnimation('crying');
    bk_song.stop();
    sad_sound.play();
    fruit=null;
   }

   if(collide(fruit,star,20)==true)
   {
    star.visible = false;
    star_display.changeAnimation("one")
   }

   if(collide(fruit,star2,20)==true)
   {
    star2.visible = false;
    star_display.changeAnimation("two")
   }
  
}

function drop()
{
  cut_sound.play();
  rope.break();
  fruit_con.dettach();
  fruit_con = null; 
}

function drop2()
{
  cut_sound.play();
  rope2.break();
  fruit_con_2.dettach();
  fruit_con_2 = null;
}

function collide(body,sprite,x)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=x)
            {
               return true; 
            }
            else{
              return false;
            }
         }
}

function destroy()
{
  visible = false;
  
}*/

 /* background(51);
  image(background_Image,0,0,width,height);

  push();
  imageMode(CENTER);
  if(fruit!=null){
    image(food,fruit.position.x,fruit.position.y,70,70);
  }
  pop();

  rope.show();
  rope2.show();*/
