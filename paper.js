class Paper {
    constructor(x, y) {
      var options = {
        isStatic:false,
        friction:0.3,
        density:1.0
      }
      this.body = Bodies.circle(x, y,30, options);
      this.radius=30

      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
    ellipse(pos.x,pos.y,30)
    }
  };