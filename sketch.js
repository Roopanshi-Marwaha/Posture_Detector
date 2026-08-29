//this model detects 17 points--> 5 facial rest others

let capture;
let bodyPose;
let poses = [];

function preload(){
    bodyPose = ml5.bodyPose(); // model preload hota hai
}

function setup(){
    createCanvas(800,500);
    capture = createCapture(VIDEO);
    capture.hide();
    bodyPose.detectStart(capture, gotPoses); //detectStart se poses detection shuru ho raha hai
}

function gotPoses(results){ //callback poses array ko update kar raha hai aur console mein log kar raha hai
    poses=results;
    console.log(poses);
}

function draw(){
    image(capture,0,0,800,500);
    // ab poses[] array mein detected keypoints milenge
}

/*

// basic learning for p5.js

-->setup
1. ek baar cheeze setup kardena shuru hone se pehle
2. this runs only once

-->draw
1. cheezo ko screen pr daalna
2. runs in an infinite loop

so, in arduino programming (setup, loop) same stuff there also
proccessing and arduino are same 

-->variable 
1. hamesha dono functions ke bahar --> global
2. we use 'let' keyword

*/



/*
//webcam enable
let capture;

function setup(){
    createCanvas(800,500);
    capture=createCapture(VIDEO);
    capture.hide();
    //sirf canvas ke andar hi ayegi video bahar nahi 
    //as bahar actual video play hori hai
}

function draw(){
    image(capture,0,0,800,500);
}
*/



/*
//loading images

let shahrukh_img;

function setup(){
    createCanvas(800,500);
    shahrukh_img=loadImage('images/shahrukh.png');
}

function draw(){
    image(shahrukh_img,mouseX,mouseY,100,100);
}
*/



/*
random pattern generation

function setup(){
    createCanvas(800,500);  
    console.log('Setup function');
}

//to color encode--> using random values
function getRandomArbitrary(min,max){
    return Math.random()*(max-min)+min;
}

function draw(){
    r=getRandomArbitrary(0,255);
    g=getRandomArbitrary(0,255);
    b=getRandomArbitrary(0,255);
    console.log('draw function');
    fill(r,g,b);
    ellipse(mouseX,mouseY,50,50);
    // currently mouse jaha pr hai vaha se coordinates
}

/*
                                



//in function draw()

/*
background(200); // to set the background of the canvas

//stroke and color
    stroke(255,0,0);  //can give opacity values also (0--> transparent, 255-->opaque), rgb values rest
    //iss statement ke neeche jitne bhi circles honge same color

    //andar fill karne ke liye
    fill(132,100,34);
    strokeWeight(5); 
    ellipse(100,200,100,100);
    ellipse(250,200,100,100);
    stroke(0,255,0);
    fill(132,0,255);
    ellipse(400,200,100,100);
    ellipse(550,200,100,100);
    stroke(0,0,255);
    ellipse(700,200,100,100);
*/




/*
//how to draw different shapes
    // 1. point
    point(200,200);
    // 2. line
    line(200,200,300,300);
    // 3. traingle
    triangle(100,200,300,400,150,450);
    // 4. rectangle
    rect(500,200,200,100);
    // 5. circle
    ellipse(600,300,100,100); //as width and height are equal so it will be a circle 
*/