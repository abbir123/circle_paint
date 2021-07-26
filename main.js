canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");



var mouseEvent="empty";
color="red";
width_of_line=2;
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){

    mouseEvent="mouseDown";

}
canvas.addEventListener("mousemove",my_mousemove);
 
function my_mousemove(e){
    current_position_x=e.clientX-canvas.offsetLeft;
    current_position_y=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle="red";
        ctx.lineWidth=3;
        ctx.arc(current_position_x,current_position_y,40,0,2*Math.PI);
        ctx.stroke();  

    }

}
canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){

    mouseEvent="mouseUp";

}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){

    mouseEvent="mouseLeave";

}