class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trajectory = [];
    this.smokeImg = loadImage("sprites/smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    if(this.body.position.x>210 && this.body.velocity.x>10){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);

    }

    
    //console.log(this.trajectory);

    // this. trajectory = [ [x1,y1], [x2, y2], [x3,y3].....n]

    for(var i =0; i<this.trajectory.length; i++){
        image(this.smokeImg, this.trajectory[i][0],this.trajectory[i][1]);
    }
    super.display();
  }
}
