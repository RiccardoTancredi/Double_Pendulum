let resolution = 50;

function setup(){
    createCanvas(600, 600);
    stroke(255);  
}

let origin = [300,50]
let angle =  Math.PI/4;
let lenght = 250;
let angular_velocity = 0;
let angular_acc = 0;
let g = 9.81;
//let T = 2*Math.Pi*Math.sqrt(lenght/g);
let t = 0.00;
let omega = Math.sqrt(g/lenght);
;
console.log(omega);

function draw(){
    background(0);
    line(0,50,600,50);
    line(origin[0],origin[1], lenght*sin(angle) + origin[0], lenght*cos(angle)+origin[1]);
    circle(lenght*sin(angle) + origin[0], lenght*cos(angle) + origin[1], resolution);
    angular_acc = sin(angle) * g;
    angle = angle*cos(omega*t+angle);
    //angular_velocity += -angle*sin(omega*t+angle)*omega;
    t += 0.01
    // let angle = 
    //circle()
    // circle(mouseX, mouseY, resolution);
}