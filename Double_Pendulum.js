let resolution = 50;
const origin_1 = [500,50];
// let phase_1 =  0.0;
// let phase_2 =  0.0;
let a1 = 0.0;
let a2 = 0.0;
let a1_v = 0;
let a2_v = 0;
let lenght_1 = 250;
let lenght_2 = 250;
// let angle_1 = amplitude_1;
// let angle_2 = amplitude_2;
let g = 1;
// let T_1 = 2*Math.PI*Math.sqrt(lenght_1/g);
// let T_2 = 2*Math.PI*Math.sqrt(lenght_2/g);
// let arch_1 = 2*lenght_1*a1;
// let t_1 = 0.00;
// let t_2 = 0.00;
// let omega_1 = Math.sqrt(g/lenght_1);
// let omega_2 = Math.sqrt(g/lenght_2);
// console.log("La pulsazione del primo pendolo vale: ", omega_1);
// console.log("Il periodo di Oscillazione del primo pendolo vale:", T_1);

let buffer;
let px2 = -1;
let py2 = -1;


function setup(){
    createCanvas(1000, 1000);
    stroke(255);  
    pixelDensity(1);
    a1 = PI / 2;
    a2 = PI / 4;
    buffer = createGraphics(width, height);
    buffer.background(255);
    buffer.translate(origin_1[0], origin_1[1]);
}

function mouseClicked(){
    background(255);
    //buffer.stroke(255);
    //buffer.background(255);
    clear();
    buffer.clear();
    buffer.background(255);
    let initial_coordinates_1 = [mouseX,mouseY];
    a1 = Math.atan(abs((initial_coordinates_1[0]-origin_1[0]))/(initial_coordinates_1[1]-origin_1[1]));
    lenght_1 = Math.sqrt((initial_coordinates_1[0]-origin_1[0])**2 + (initial_coordinates_1[1]-origin_1[1])**2);
    // arch_1 = 2*lenght_1*a1;
    // T_1 = 2*Math.PI*Math.sqrt(lenght_1/g);
    // omega_1 = Math.sqrt(g/lenght_1);
    // t_1 = 0.0;

    // console.log("La pulsazione del primo pendolo vale: ", omega_1);
    // console.log("Il periodo di Oscillazione del primo pendolo vale:", T_1);
}


function draw(){
    background(0);
    imageMode(CORNER);
    image(buffer, 0, 0, width, height);
    // Ceiling
    line(0,50,1000,50); 
    let num1 = -g * (2 * resolution + resolution) * sin(a1);
    let num2 = -resolution * g * sin(a1 - 2 * a2);
    let num3 = -2 * sin(a1 - a2) * resolution;
    let num4 = a2_v * a2_v * lenght_2 + a1_v * a1_v * lenght_1 * cos(a1 - a2);
    let den = lenght_1 * (2 * resolution + resolution - resolution * cos(2 * a1 - 2 * a2));
    let a1_a = (num1 + num2 + num3 * num4) / den;
  
    num1 = 2 * sin(a1 - a2);
    num2 = a1_v * a1_v * lenght_1 * (resolution + resolution);
    num3 = g * (resolution + resolution) * cos(a1);
    num4 = a2_v * a2_v * lenght_2 * resolution * cos(a1 - a2);
    den = lenght_2 * (2 * resolution + resolution - resolution * cos(2 * a1 - 2 * a2));
    let a2_a = (num1 * (num2 + num3 + num4)) / den;
    

    translate(origin_1[0], origin_1[1]);
    stroke(0);
    strokeWeight(2);

    let x1 = lenght_1 * sin(a1);
    let y1 = lenght_1 * cos(a1);

    let x2 = x1 + lenght_2 * sin(a2);
    let y2 = y1 + lenght_2 * cos(a2);

    // Drawing the First Pendulum

    line(0, 0, x1, y1);
    fill(0);
    circle(x1, y1, resolution);

    // Drawing the Second Pendulum
    
    line(x1, y1, x2, y2);
    fill(0);
    circle(x2, y2, resolution);

    a1_v += a1_a;
    a2_v += a2_a;
    a1 += a1_v;
    a2 += a2_v;
    
    // Drawing the First Pendulum
    // line(origin_1[0],origin_1[1], lenght_1*sin(phase_1+angle_1) + origin_1[0], lenght_1*cos(phase_1+angle_1)+origin_1[1]);
    // circle(lenght_1*sin(phase_1+angle_1) + origin_1[0], lenght_1*cos(phase_1+angle_1) + origin_1[1], resolution);
    // angle_1 = amplitude_1*cos(omega_1*t_1+phase_1);
    // //t += 0.020; //This in order to make the pendulum looks more realistic, in terms of oscillation time, without friction
    // //otherwise
    // //t_1 += T_1/arch_1;
    // t_1 += 1;
    // //console.log(t_1);
    // // Drawing the Second Pendulum
    // origin_2 = [lenght_1*sin(phase_1+angle_1) + origin_1[0], lenght_1*cos(phase_1+angle_1) + origin_1[1]];
    // line(origin_2[0],origin_2[1], lenght_2*sin(phase_2+angle_2) + origin_2[0], lenght_2*cos(phase_2+angle_2)+origin_2[1]);
    // circle(lenght_2*sin(phase_2+angle_2) + origin_2[0], lenght_2*cos(phase_2+angle_2) + origin_2[1], resolution);
    // //line(lenght_2*sin(phase_2+angle_1) + origin_2[0], lenght_2*cos(phase_2+angle_1) + origin_2[1], lenght_2*sin(phase_2+angle_2) + origin_2[0], lenght_2*cos(phase_2+angle_2) + origin_2[1]);
    // angle_2 = cos(omega_2*t_2+phase_2) + angle_1;
    // t_2 = t_1;

    buffer.stroke(0);
    if (frameCount > 1) {
        buffer.line(px2, py2, x2, y2);
    }

    px2 = x2;
    py2 = y2;
}

