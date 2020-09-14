let resolution = 50;
const origin_1 = [400,50];
let phase_1 =  0.0;
let phase_2 =  0.0;
let amplitude_1 = Math.PI/4;
let amplitude_2 = 0.0;
let lenght_1 = 250;
let lenght_2 = 250;
let angle_1 = amplitude_1;
let angle_2 = amplitude_2;
let g = 9.81;
let T_1 = 2*Math.PI*Math.sqrt(lenght_1/g)*(1+(amplitude_1**2)/16);
let T_2 = 2*Math.PI*Math.sqrt(lenght_2/g)*(1+(amplitude_2**2)/16);
let arch_1 = 2*lenght_1*amplitude_1;
let t_1 = 0.00;
let t_2 = 0.00;
let omega_1 = Math.sqrt(g/lenght_1);
let omega_2 = Math.sqrt(g/lenght_2);
console.log("La pulsazione del primo pendolo vale: ", omega_1);
console.log("Il periodo di Oscillazione del primo pendolo vale:", T_1);

function setup(){
    createCanvas(800, 800);
    stroke(255);  
}

function mouseClicked(){
    let initial_coordinates_1 = [mouseX,mouseY];
    amplitude_1 = Math.atan(abs((initial_coordinates_1[0]-origin_1[0]))/(initial_coordinates_1[1]-origin_1[1]));
    lenght_1 = Math.sqrt((initial_coordinates_1[0]-origin_1[0])**2 + (initial_coordinates_1[1]-origin_1[1])**2);
    arch_1 = 2*lenght_1*amplitude_1;
    T_1 = 2*Math.PI*Math.sqrt(lenght_1/g)*(1+(amplitude_1**2)/16);
    omega_1 = Math.sqrt(g/lenght_1);
    t_1 = 0.0;
    console.log("La pulsazione del primo pendolo vale: ", omega_1);
    console.log("Il periodo di Oscillazione del primo pendolo vale:", T_1);
}


function draw(){
    background(0);
    // Ceiling
    line(0,50,1000,50); 
    // Drawing the First Pendulum
    line(origin_1[0],origin_1[1], lenght_1*sin(phase_1+angle_1) + origin_1[0], lenght_1*cos(phase_1+angle_1)+origin_1[1]);
    circle(lenght_1*sin(phase_1+angle_1) + origin_1[0], lenght_1*cos(phase_1+angle_1) + origin_1[1], resolution);
    angle_1 = amplitude_1*cos(omega_1*t_1+phase_1);
    //t += 0.020; //This in order to make the pendulum looks more realistic, in terms of oscillation time, without friction
    //otherwise
    t_1 += T_1/arch_1;
    //t_1 += 1;
    //console.log(t_1);
    // Drawing the Second Pendulum
    origin_2 = [lenght_1*sin(phase_1+angle_1) + origin_1[0], lenght_1*cos(phase_1+angle_1) + origin_1[1]];
    line(origin_2[0],origin_2[1], lenght_2*sin(phase_2+angle_2) + origin_2[0], lenght_2*cos(phase_2+angle_2)+origin_2[1]);
    circle(lenght_2*sin(phase_2+angle_2) + origin_2[0], lenght_2*cos(phase_2+angle_2) + origin_2[1], resolution);
    //line(lenght_2*sin(phase_2+angle_1) + origin_2[0], lenght_2*cos(phase_2+angle_1) + origin_2[1], lenght_2*sin(phase_2+angle_2) + origin_2[0], lenght_2*cos(phase_2+angle_2) + origin_2[1]);
    angle_2 = cos(omega_2*t_2+phase_2) + angle_1;
    t_2 = t_1;
}

