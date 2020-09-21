let resolution = 50;
const origin = [500,50];
let phase =  0.0;
let amplitude = Math.random()*Math.PI/4;
let lenght = 250;
let angle = amplitude;
let g = 9.81;
let T = 2*Math.PI*Math.sqrt(lenght/g)*(1+(amplitude**2)/16);
let arch = 2*lenght*amplitude;
let t = 0.00;

let buffer;
let px2 = 0.0;
let py2 = 0.0;

let omega = Math.sqrt(g/lenght);
console.log("La pulsazione vale: ", omega);
console.log("Il periodo di Oscillazione vale:", T);

function setup(){
    createCanvas(1000, 1000);
    stroke(255);  
    pixelDensity(1);
    buffer = createGraphics(width, height);
    buffer.background(255);
    buffer.translate(origin[0], origin[1]);
}

function mouseClicked(){
    background(255);
    frameCount = 0;
    clear();
    buffer.clear();
    buffer.background(255);

    let initial_coordinates = [mouseX,mouseY];
    amplitude = Math.atan(abs((initial_coordinates[0]-origin[0]))/(initial_coordinates[1]-origin[1]));
    lenght = Math.sqrt((initial_coordinates[0]-origin[0])**2 + (initial_coordinates[1]-origin[1])**2);
    arch = 2*lenght*amplitude;
    T = 2*Math.PI*Math.sqrt(lenght/g)*(1+(amplitude**2)/16);
    omega = Math.sqrt(g/lenght);
    t = 0.0;

    console.log("La pulsazione vale: ", omega);
    console.log("Il periodo di Oscillazione vale:", T);
}


function draw(){
    //Display of the pendulum oscillation 
    background(0);
    imageMode(CORNER);
    image(buffer, 0, 0, width, height);

    translate(origin[0], origin[1]);
    stroke(0);
    strokeWeight(2);

    // Ceiling
    line(-origin[0],0,1000-origin[0],0); 

    // Drawing the Pendulum
    let x2 = lenght*sin(phase+angle);
    let y2 = lenght*cos(phase+angle);
    line(0,0, x2, y2);
    circle(x2, y2, resolution);

    angle = amplitude*cos(omega*t+phase);
    //t += 0.020; //This in order to make the pendulum looks more realistic, in terms of oscillation time, without friction
    //otherwise
    t += T/arch;
    //console.log(t);
    buffer.stroke(0);
    if (frameCount > 25) {
        buffer.line(px2, py2, x2, y2);
    }

    px2 = x2;
    py2 = y2;
}

