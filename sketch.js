var dog,sadDog,happyDog;
let addFoodButton;
let feedPetButton;
let foodObj;
 


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  firebase = firebase.database();
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  foodObj = new Food();

  feed = createButton("Feed the Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  drawSprites();
  foodObj.display();
  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
  text("Last Feed: "+ lastFed%12 + " PM", 350,30);
  }else if(lastFed==0){
  text("Last Feed: 12 AM",350,30);
  }else{
  text("Last Feed: "+ lastFed + "AM", 350,30);
  }
}

function updateFoodStock(stock) {
 foodStock = stock;
 database.ref("/").update({
    FoodStock: foodStock,
    LastFed: lastFed
 });
}

function addFoods() {
 foodS++;
 database.ref("/").update({
    Food: foodS
 });
}

function feedDog() {
 dog.addImage(happyDog);

 if (foodObj.getFoodStock() <= 0) {
    foodObj.updateFoodStock(foodObj.getFoodStock() * 0);
 } else {
    foodObj.updateFoodStock(foodObj.getFoodStock() - 1);
 }

 lastFed = hour() + " AM";
 updateFoodStock(foodObj.getFoodStock());
}


