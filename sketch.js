//Create variables here
var dog, sad_dog, happy_dog;
var database;
var foodS, foodStock;

function preload()
{
  //load images here
  var dog_img = loadImage("images/dogImg1.png");
  var happy_dog_img = loadImage("images/dogImg.png");
}

function setup() {

  database = firebase.database();

  createCanvas(800, 700);

  dog = createSprite(250,300,150,150);
  //dog.addImage(dog_img);

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

}

function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    //dog.addImage(happy_dog_img);
  }

  drawSprites();
  //add styles here
  textSize(30);
  fill("black")
  text("Food remaining : "+ foodS,170,200);
  text("Press the Up Arrow key to feeg Drago Milk",130,30);  

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x <= 0){
    x = 0;
  }
  else {
    x = x - 1;
  }
  database.ref('/').update({
    Food:x
  })
}

