//Create variables here
var dog,happyDog,database,foodS,foodStock
foodS=0
function preload()
{
	//load images here
  dog=loadImage("Images/dogImageRest.png")
  happyDog=loadImage("Images/dogImg1.png")

 
}

function setup() {
	createCanvas(500,500);
  database = firebase.database();
  foodStock=database.ref("food");
  foodStock.on("value",readstock);
  dogs=createSprite(350,300,20,20)
  dogs.scale=0.5
}


function draw() {  
background ("Green")
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dogs.addImage("happyDog",happyDog);
}
  drawSprites();
  fill("rose")
  stroke('black')
  text("food  Remaining: " +foodS,170,200)
  textSize(15)
  text("press UP_ARROW to feed the dog",130,10,300,20)
  //add styles here

}

function readstock(data){
foodS=data.val();
}

function writeStock(x){

  if(x<=0){
x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
  food:x
})
}


