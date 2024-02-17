const audio=new Audio("sounds/cash.mp3");
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
    
}
async function fighterGame(selectItem) {
    
var myFighter=selectItem.id;
var myFighterSrc=selectItem.src;
    
var randomFighter=randomItem();
   
var scores=competition(myFighter,randomFighter);
   
var results=result(scores);
  
    await sleep(500);
    removeShow(myFighterSrc,randomFighter,results);
    
audio.play();
}

function randomItem() {
    var items=['aniab','musaad','abd'];
    var random=items[Math.floor(Math.random()*3)];
    return random;
}

function competition(myFighter,randomFighter) {
    var result = {
        'aniab':{'abd':1 , 'aniab':0.5, 'musaad':0},
        'musaad':{'aniab':1 , 'musaad':0.5, 'abd':0},
        'abd':{'musaad':1 , 'abd':0.5, 'aniab':0},    
    }
    
    var myScore=result[myFighter][randomFighter];
    var computerScore=result[randomFighter][myFighter];
    return [myScore,computerScore];
}

function result([myScore,computerScore]) {
    var message,color;
    
    if(myScore==1){
        return {'message': ' তুমি জিতেছ ', 'color':'green'}
        
        
    }
    if(myScore==0.5){
        return {'message':' মেচ পাতানো হইছে ','color':'white'}
        
    }
    if(myScore==0){
        return {'message':' বলদ হেরে গেছ ','color':'red'}
    }
    
}

function removeShow(myFighterSrc,randomFighter,results) {
    
    var image={
        'aniab':document.getElementById('aniab'),
        'musaad':document.getElementById('musaad'),
        'abd':document.getElementById('abd')
        
        
    }
    
   
    
    var myDiv =document.createElement('div');
    var pcDiv =document.createElement('div');
    var msgDiv =document.createElement('div');
    
     document.getElementById('aniab').remove();
    document.getElementById('musaad').remove();
    document.getElementById('abd').remove();

    myDiv.innerHTML="<img src='" + myFighterSrc + "' style='box-shadow: 5px 5px 15px 5px blue;' >";
    msgDiv.innerHTML="<h1 style='color: " + results['color'] + "; font-size:60px; padding:30px; '>" + results['message'] + "</h1>";
    pcDiv.innerHTML="<img src='" + image[randomFighter].src + "' style='box-shadow: 5px 5px 15px 5px red;' >";
    
    document.getElementById('imageId').appendChild(myDiv);
    document.getElementById('imageId').appendChild(msgDiv);
    document.getElementById('imageId').appendChild(pcDiv);
}