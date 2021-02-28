var canvas;
var music;
var o1,o2,o3,o4,o5
var e1,e2,e3,e4

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    o2 = createSprite(100,580,200,30);
    o2.shapeColor = "red";

    o3 = createSprite(300,580,200,30);
    o3.shapeColor = "yellow";

    o4 = createSprite(500,580,200,30);
    o4.shapeColor = "blue";

    o5 = createSprite(700,580,200,30);
    o5.shapeColor = "green";
    

    //create box sprite and give velocity

    o1 = createSprite(40,400,30,30)
    o1.velocityX = 4;
    o1.velocityY = 4;
    o1.shapeColor = "white";  
    o1.x = random(50,750);

    e1 = createSprite(800,300,10,600);
  
    e2 = createSprite(0,300,10,1000);

    e3 = createSprite(400,0,800,10);



}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
  

   
    //add condition to check if box touching surface and make it box
    
    function isTouching(o1,o2){

        if (o1.x - o2.x < o2.width/2 + o1.width/2
          && o2.x - o1.x < o2.width/2 + o1.width/2
          && o1.y - o2.y < o2.height/2 + o1.height/2
          && o2.y - o1.y < o2.height/2 + o1.height/2) {
         
            return true;
               
        }
      else {
        
        return false;
      
      }
      }
      
      if(o1.isTouching(e1)){
        o1.velocityX = o1.velocityX * (-1);
 
      }

      if(o1.isTouching(e2)){
        o1.velocityX = o1.velocityX * (-1);
 
      }

      if(o1.isTouching(e3)){
        o1.velocityY = o1.velocityY * (-1);
 
      }
       
      if(o1.isTouching(o3)){
        o1.velocityY = 0;
        o1.velocityX = 0;
         music.stop();
        o1.shapeColor = "yellow"
        }
      
      if(o1.isTouching(o2)){
        o1.velocityY = o1.velocityY * (-1);
        music.play(); 
        o1.shapeColor = "red"; 
    }
        
      if(o1.isTouching(o4)){
        o1.velocityY = o1.velocityY * (-1);
        o1.shapeColor = "blue";
     } 

      if(o1.isTouching(o5)){
        o1.velocityY = o1.velocityY * (-1);
        o1.shapeColor = "green"  
    }

      function isTouching(o1,o3){

        if (o1.x - o3.x < o3.width/2 + o1.width/2
          && o3.x - o1.x < o3.width/2 + o1.width/2
          && o1.y - o3.y < o3.height/2 + o1.height/2
          && o3.y - o1.y < o3.height/2 + o1.height/2) {
         
            return true;
                 
            o1.x = 500
        }

      else {
        
        return false;
      
      }
      }
    
    
    drawSprites();

}
