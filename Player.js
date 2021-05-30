class Player {
   constructor() {
       this.index = 0;
       this.name = form.input.value();
       this.score = 0;
       this.time = 0;
   }

   update() {
    database.ref("players/player" + this.index).set({
        Name:this.name,
        TimeTaken:this.time,
        points:this.score
     }); 
   }

   getCount() {
       database.ref("playerCount").on("value",(data)=> {
          playerCount = data.val();
       });
   }

   updateCount(count) {
     database.ref("/").update({
      playerCount:count
    });
   }
}