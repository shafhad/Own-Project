class Slingshot {
   constructor(bodyA,pointB) {
       var options = {
           bodyA:bodyA,
           pointB:pointB,
           stiffness: 0.4,
           length:10
       }

       this.body = Constraint.create(options);
       this.pointB = pointB;
       World.add(world,this.body);
   }

   attach(body){
     this.body.bodyA = body;
     Matter.Body.setPosition(stone.body,{x:130,y:525});
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