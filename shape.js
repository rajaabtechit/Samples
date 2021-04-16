var time = 3000;
var position = 0;
var velocity = 5;
function myFunction() {
    var ball = document.getElementById('circles');
   
    position = position + velocity;
    console.log(position); 
}
setInterval(() => {
    setTimeout(
        myFunction(),3000); 
}, 3000);
