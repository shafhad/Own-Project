class Slingshot {
   constructor(bodyA,pointB) {
       var options = {
           bodyA:bodyA,
           pointB:pointB,
           stiffness: 10,
           length:5
       }

       this.body = Constraint.create(options);
       this.pointB = pointB;
       World.add(world,this.body);
   }

   attach(body){
     
     Matter.Body.setPosition(stone.body,{x:boy.x,y:boy.y});
     this.body.bodyA = body;
   }

   fly(){
     this.body.bodyA = null;
   }

   display() {
     if(this.body.bodyA) {
      var pointA = this.body.bodyA.position;
      var pointB = this.pointB;
      stroke(0,0,0);
      fill(0,0,0);
      line(pointA.x,pointA.y,pointB.x,pointB.y);
     }
   }
}