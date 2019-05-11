// var clickCount = 0;
// function clickHandler(evt){
//    clickCount++;
//    console.log(evt);
//    var str = "Thanks for clicking " + clickCount;
//    this.innerText = str;
// }

// var p = document.getElementById("pElement");
// p.addEventListener("click", clickHandler);


// function bodyClick(evt){
//     clickCount++;
//     var str = "Clicked at X: " + evt.pageX + ", Y: " + evt.pageY;
//     this.innerText = str;
//  }
//  var p = document.getElementById("pElement").addEventListener;
//  window.onclick = bodyClick;
 
// function bodyClick(evt) {
//     console.log(evt.pageX, evt.pageY);
//  }
//  window.onclick = bodyClick;
 
//  function mouseClicked() {
//     console.log(mouseX, mouseY);
//  }
 
// function setup() {

// }

// function draw() {
//     ellipse(50, 50, 80, 80);
// }

// function mouseClicked() {
//     console.log(mouseX, mouseY);
//  }
function main() {
    var socket = io();
   
     
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
 
    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    button.onclick = handleSubmit;
    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
}

socket.on('display message', handleMessage);
} // main closing bracket

window.onload = main;   
