class Game{
    constructor(){
        
    }
    getState()
{ var gameStateRef = database.ref('gamestate');
 gameStateRef.on("value",function(data)
 { gamestate = data.val();}) 
}

update(state)
{ database.ref('/').update({ gamestate: state }); 
}

async start()
{ if(gamestate === 0)
    { player = new Player();
      var playerCountRef = await database.ref('playercount').once("value");
       if(playerCountRef.exists()){
          playercount = playerCountRef.val();
         player.getCount(); 
         console.log(playercount);
        }
    form = new Form();
    form.display();
     }
     trex1 = createSprite (100,300);
     trex1.addAnimation("running",trex)
     trex2 = createSprite (100,600);
     trex2.addAnimation("running",trex)
     trexs = [trex1,trex2]
    }

    play(){ 
        form.hide();
           Player.getPlayerInfo();
       
            if(allPlayers !== undefined){ 
             background("black")
             var index = 0;
             var x = 300 ;
             
             var y;
              for(var plr in allPlayers){
               index = index + 1 ; x = x + 270;
                y = displayHeight - allPlayers[plr].distance;
                 trexs[index-1].x = x;
                 trexs[index-1].y = y;
                   if (index === player.index){
                            stroke(10)
                            fill("red")
                            //ellipse(x,y,65,65)
                            trexs[index - 1].shapeColor = "red";
                         // camera.position.x = displayWidth/2;
                         //  camera.position.y = cars[index-1].y;
                          } 
                         }
                        }
       
    //    if(keyIsDown(UP_ARROW) && player.index !== null)
    //    { player.distance +=50;
    //      player.update(); 
    //    }
    //    if (player.distance > 5300){
    //      gameState = 2
    //      gameState = 2 
    //      player.rank += 1
    //      Player.updateRank(player.rank) 
    //      alert( player.name + "reached the finish line successfully!!!! ur rank is :: " + player.rank);
    //    }
       drawSprites()
    }
}