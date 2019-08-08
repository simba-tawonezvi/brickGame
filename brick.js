var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//draw rectangle on canvas
ctx.beginPath();
ctx.rect(100, 100, 100, 50);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

// draw arc on canvas
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();