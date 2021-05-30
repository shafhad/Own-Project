class Buttons {
    constructor() {
      this.play = createButton("Play");
      this.rank = createButton("Top Rankers");
      this.rules = createButton("Rules");   
    }

    hide() {
      this.play.hide();
      this.rank.hide();
      this.rules.hide();
    }

    display() {
        this.play.style('width', '80px');
        this.play.style('height', '40px');
        this.play.style('background', 'orange');
        this.play.position(200,400);
        this.rank.style('width', '80px');
        this.rank.style('height', '40px');
        this.rank.style('background', 'orange');
        this.rank.position(300,300);
        this.rules.style('width', '80px');
        this.rules.style('height', '40px');
        this.rules.style('background', 'orange');
        this.rules.position(100,300);

        this.play.mousePressed(()=> {
          this.play.hide();
          this.rank.hide();
          this.rules.hide();
          gameState = "level2";
        });
    }
}