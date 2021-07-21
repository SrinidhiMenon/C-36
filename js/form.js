class Form{
    constructor(){

    }
    display(){
    var title = createElement('H2','Car Racing Game');
    title.position(130,0);
    var input = createInput("Name");
    input.position(130,160);
    var button = createButton("PLAY")
    button.position(250,200);

    button.mousePressed(function(){
    input.hide();
    button.hide();
    playerCount = playerCount+1;
    player.updateCount(playerCount);

    var name = input.value();
    player.update(name);

    var greeting = createElement("h3","Hello "+name);
    greeting.position(130,160);
    });
    }
}