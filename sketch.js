var canvas;
var music;
var B1;
var B2;
var B3;
var B4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    B1=createSprite(55,580,120,30);
    B1.shapeColor="Blue";

    B2=createSprite(200,580,120,30);
    B2.shapeColor="Green";

    B3=createSprite(370,580,120,30);
    B3.shapeColor="Yellow";

    B4=createSprite(540,580,120,30);
    B5.shapeColor="Orange";



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    edgeSprite();

    drawSprites();

    //add condition to check if box touching surface and make it box
}
