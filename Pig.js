class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visibility = 255;
  }

  score(){
    if(this.Visibility<0 && this.Visibility > -105){
      score++
    }

  }

  display(){
    if(this.body.speed < 2.5){
      super.display();
      
    }
    else{
      
      World.remove(world, this.body);
      // Do nothing
      this.Visibility = this.Visibility - 5;
      push()
      tint(255, this.Visibility);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
      
    }
    
    

  }

};