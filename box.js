  
class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
    
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("cyan");
      rect(0, 0, this.width, this.height);
      pop();

      if(this.body.speed<3){
        super.display()
      }
      else{
        World.remove(world,this.body)
        this.Visibility=this.Visibility-5
        tint(255, this.Visibility)
        this.image(this.image, this.body.position.x, this.body. position.y,50,50)
        
      }
    }
  }