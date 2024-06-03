var randomNumber= Math.floor(Math.random()*101);
// console.log(randomNumber)
var tries = 10;
var previousguess=[];
// console.log(document.getElementById("button1").DOCUMENT_TYPE_NODE);
document.getElementById("button1").addEventListener('click',function() {
    let user = document.getElementById('input').value;
   if (isNaN(user) || user<0 || user >100 || user == ""){
    alert("enter a valid number between 0 and 100");
    return;
}

previousguess.push(user);
document.getElementById("previousguess").textContent= previousguess.join(',');
tries--;
document.getElementById('tries').textContent=tries;

if (user== randomNumber){
    alert("you won");
  endgame();    
}
else if (tries==0){
        alert("you lost");
        endgame();
    }
    document.getElementById('playagain').addEventListener('click',function(){
        resetgame();
    })
    document.getElementById('input').value='';
});



function endgame(){
    document.getElementById('input').disabled=true;
    document.getElementById('button1').disabled=true;
    document.getElementById('playagain').style.display='inline-block';
}

function resetgame(){
    randomNumber = Math.floor(Math.random() * 101);
    triesLeft = 10;
    previousGuesses = [];
    document.getElementById('input').disabled=false;
    document.getElementById('button1').disabled=false;
    document.getElementById('tries').textContent=tries;
    document.getElementById('previousguess').textContent="";
    document.getElementById('input').value="";
    document.getElementById('playagain').style.display= "none";

}








