let resolution = 50;
const origin = [300,50];
let phase =  0.0;
let amplitude = Math.PI/4;
let lenght = 250;
let angle = amplitude;
let g = 9.81;
let T = 2*Math.PI*Math.sqrt(lenght/g)*(1+(amplitude**2)/16);
let arch = 2*lenght*amplitude;
let t = 0.00;
//Trying to draw the arch. Not so good, and no continuous drawing, Just the entire arch printed at the start
// const a = origin[0];
// const b = origin[1] + lenght*Math.cos(amplitude);
// const w = 2*lenght*Math.sin(amplitude);
// const h = lenght;
let omega = Math.sqrt(g/lenght);
console.log("La pulsazione vale: ", omega);
console.log("Il periodo di Oscillazione vale:", T);

function setup(){
    createCanvas(600, 600);
    stroke(255);  
}

function mouseClicked(){
    let initial_coordinates = [mouseX,mouseY];
    amplitude = Math.atan(abs((initial_coordinates[0]-origin[0]))/(initial_coordinates[1]-origin[1]));
    lenght = Math.sqrt((initial_coordinates[0]-origin[0])**2 + (initial_coordinates[1]-origin[1])**2);
    arch = 2*lenght*amplitude;
    T = 2*Math.PI*Math.sqrt(lenght/g)*(1+(amplitude**2)/16);
    omega = Math.sqrt(g/lenght);
    t = 0.0;
    // const a = origin[0];
    // const b = origin[1] + lenght*Math.cos(amplitude);
    // const w = 2*lenght*Math.sin(amplitude);
    // const h = lenght;
    console.log("La pulsazione vale: ", omega);
    console.log("Il periodo di Oscillazione vale:", T);
}


function draw(){
    background(0);
    // Ceiling
    line(0,50,600,50); 
    // Drawing the Pendulum
    line(origin[0],origin[1], lenght*sin(phase+angle) + origin[0], lenght*cos(phase+angle)+origin[1]);
    circle(lenght*sin(phase+angle) + origin[0], lenght*cos(phase+angle) + origin[1], resolution);
    //noFill();
    //arc(a, b, w, h, Math.PI/2 - amplitude,  Math.PI/2 + amplitude);
    //fill(255);
    angle = amplitude*cos(omega*t+phase);
    t += 0.020; //This in order to make the pendulum looks more realistic, in terms of oscillation time, without friction
    //otherwise
    //t += T/arch;
    //console.log(t);
}

