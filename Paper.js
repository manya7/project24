class Paper {
    constructor(x, y,radius) {
      var options = {
          isStatic:false,
          'restitution':0.8,
         // 'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      
      World.add(world, this.body);

    }
    display(){
      var pos =this.body.position;
      
      
     
      ellipse(pos.x,pos.y,50,50)

     
    }
  };
  