var mouseEvent = "empty";

var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

var color = "black";
var width_of_line = 1;
var radius = 10;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;

    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_X = e.clientX - canvas.offsetLeft;
    current_position_Y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_X, current_position_Y, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e){
    mouseEvent = "mouseLeave";
}

function clearArea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}