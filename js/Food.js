class Food {
 constructor() {
    this.foodStock = 0;
    this.image = [];
    this.lastFedTime = 0;
 }

 preloadImage(imagePath) {
    const image = new Image();
    image.src = loadImage("images/Milk.png");
    this.image.push(image);
 }

 getFoodStock() {
    return this.foodStock;
 }

 updateFoodStock(amount) {
    this.foodStock += amount;
 }

 deductFood(amount) {
    this.foodStock -= amount;
 }

 display() {
    if(this.foodStock!= 0){
        for(var i = 0;i<this.foodStock;i++){
            if(i%10==0){
                x=80;
                y =y+50;
            }
            image(this.image, x, y, 50, 50);
            x = x+30
        }
    }
    textSize(20);
    fill(255);
    text("Food Stock: " + this.foodStock, 10, 30)
    text("Last Fed: " + this.lastFedTime + "mins ago", 10, 60);
 }

}

const food = new Food();
food.preloadImage('images/Milk.png');