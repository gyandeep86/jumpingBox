var canvas;
var music;
var box , box1 , box2 , box3 , box4


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     box1 = createSprite(475,575,100,25);
     box2 = createSprite(225,575,100,25);
     box3 = createSprite(350,575,100,25);
     box4 = createSprite(600,575,100,25);
    //coolor
     box1.shapeColor = "red";
     box2.shapeColor = "yellow";
     box3.shapeColor = "blue";
     box4.shapeColor = "green";

     //create box sprite and give velocity

     box = createSprite(random(20,750),300,50,50);
     box.shapeColor = "white";    
    box.velocityX = 4;
    box.velocityY = 9;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);

    

    //add condition to check if box touching surface and make it box
    if(box1.isTouching(box) && box.bounceOff(box1)){
    box.shapeColor = "cyan";
    music.play();   
    
    }
    if(box2.isTouching(box)){
        box.shapeColor = "brown";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();   
    
        }
     if(box3.isTouching(box) && box.bounceOff(box3)){
            box.shapeColor = "pink";
   
        
            }
     if(box4.isTouching(box) && box.bounceOff(box4)){
                box.shapeColor = "black";
       
            
                }
    drawSprites(); 
}
