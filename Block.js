class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        
        if (this.body.speed < 5) {
          var angle = this.body.angle;
          var pos= this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          pop();
        }
        else {
          push();
          this.visibility = this.visibility - 5
          tint(0, this.visibility);
          //image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
          pop();
          World.remove(world, this.body);
        }
      }
}