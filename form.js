class Form {
    constructor() {
        this.input = createInput("Name");
        this.button = createButton("START GAME");
        if(gameState==="start") {
            this.input.position(-200,-400);
            this.button.position(-300,-300);
        }
    }

    display() {
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.input.position(135,300);
        this.button.style('width', '80px');
        this.button.style('height', '40px');
        this.button.style('background', 'orange');
        this.button.position(200,400);
        this.button.mousePressed(()=> {
            this.input.hide();
            this.button.hide(); 
            player.getCount();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            player.name = this.input.value();
            gameState = "countdown";
        });
    }
}