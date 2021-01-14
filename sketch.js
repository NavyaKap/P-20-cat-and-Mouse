var cat,jerry;
var catImage,catImg2,catImage3, jerryImage,jerryImageFour;
var garden, gardenImage;
function preload() {
    catImage = loadAnimation("images/tomOne.png");
    catImg2 = loadAnimation("images/tomTwo.png","images/tomThree.png");
    catImage3 = loadAnimation ("images/tomFour.png");
    gardenImage = loadImage("images/garden.png");
    jerryImage = loadImage("images/jerryTwo.png");
    jerryImageFour = loadImage("images/jerryFour.png");

}


function setup(){
    createCanvas(1200,800);
    garden = createSprite(600,400);
    garden.addImage(gardenImage);
    
   jerry = createSprite(300,600);
    jerry.addImage(jerryImage);
    jerry.scale = 0.1;

    cat = createSprite(870,600);
    cat.addAnimation("cats",catImage);
    cat.scale = 0.1;
    //cat.velocityX = 0;
    cat.debug = true;
    jerry.debug = true;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    //cat.x = World.mouseX;
    // console.log (cat.x-jerry.x);
    if(cat.x-jerry.x < (cat.width-jerry.width)/2){
        console.log("colliion Detected");
        cat.velocityX = 0;
        cat.x = 350;
        cat.addAnimation("catLastImage",catImage3);
        cat.scale = 0.1;
        cat.changeAnimation("catLastImage");
        jerry.addImage(jerryImageFour);
      //  jerry.frameDelay = 25;
    }
    //cat.y = World.mouseY;

    drawSprites();
   //text(mouseX+','+ mouseY,10,45);
}

function keyPressed(){
    if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("catRunning",catImg2);
       cat.changeAnimation("catRunning");
       }        
if(keyCode === RIGHT_ARROW){
    cat.velocityX = 5;
    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning");
    }        
}
  //For moving and changing animation write code here
  


