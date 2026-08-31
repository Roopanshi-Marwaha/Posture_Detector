//this model detects 17 points--> 5 facial rest others

let capture;
let bodyPose;
let poses = [];
// manual skeleton connections
let skeletonConnections=[
    ['left_shoulder','right_shoulder'],
    ['left_shoulder','left_elbow'],
    ['left_elbow','left_wrist'],
    ['right_shoulder','right_elbow'],
    ['right_elbow','right_wrist'],
    ['left_shoulder','left_hip'],
    ['right_shoulder','right_hip'],
    ['left_hip','right_hip'],
    ['left_hip','left_knee'],
    ['left_knee','left_ankle'],
    ['right_hip','right_knee'],
    ['right_knee','right_ankle']
];

let actor_img;
let specs;
let filter_cigar;

// naam se keypoint dhoondne wala helper function (guessing avoid karne ke liye)
function getKeypoint(keypoints, targetName){
    for(let i=0; i<keypoints.length; i++){
        if(keypoints[i].name === targetName){
            return keypoints[i];
        }
    }
    return null;
}

function preload(){
    bodyPose = ml5.bodyPose(); // model preload hota hai
}

function setup(){
    createCanvas(800,500);
    capture = createCapture(VIDEO);
    capture.size(800,500);
    capture.hide();
    bodyPose.detectStart(capture, gotPoses); //detectStart se poses detection shuru ho raha hai

    // actor_img=loadImage('images/shahrukh.png');
    actor_img=loadImage('images/taylor.png');
    // specs=loadImage('images/spects.png');
    // filter_cigar=loadImage('images/cigar.png');
}

function gotPoses(results){ //callback poses array ko update kar raha hai aur console mein log kar raha hai
    poses=results;
    console.log(poses);
}

function draw(){
    image(capture,0,0,800,500);
    // ab poses[] array mein detected keypoints milenge
    if(poses.length>0){
        let keypoints=poses[0].keypoints; // saare 17 points ka array
        console.log(JSON.stringify(keypoints)); 

        // har keypoint pe loop chalao
        for(let i=0;i<keypoints.length;i++){
            let point=keypoints[i];
            fill(255,0,0);
            noStroke();
            circle(point.x,point.y,20);
        }

        // manual skeleton connections se lines banao (keypoints array se naam dhoond ke)
        stroke(255,255,0);
        strokeWeight(3);

        for(let i=0; i<skeletonConnections.length; i++){
            let pointA=getKeypoint(keypoints, skeletonConnections[i][0]);
            let pointB=getKeypoint(keypoints, skeletonConnections[i][1]);

            if(pointA && pointB){
                line(pointA.x, pointA.y, pointB.x, pointB.y);
            }
        }

        // image(specs,poses[0].nose.x-120, poses[0].nose.y-130,250,225); //adjusted accordingly
        // image(filter_cigar,poses[0].nose.x-65, poses[0].nose.y+30,50,50);
        image(actor_img,poses[0].nose.x-120,poses[0].nose.y-110,220,200);
    }
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


/*
//only for nose
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
    capture.size(800,500);
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

    // agar koi pose detect hui hai tabhi aage badho
    if(poses.length>0){
        let nose=poses[0].nose; // pehle detected insaan ka nose
        let noseX=nose.x;
        let noseY=nose.y;
        console.log(noseX, noseY);
        // visually confirm karne ke liye ek circle bana do nose pe
        fill(255,0,0);
        noStroke();
        circle(noseX,noseY,20);
    }
}
*/