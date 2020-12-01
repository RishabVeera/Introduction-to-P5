function preload() {

}

function setup() {
    canvas = createCanvas(650 , 500);
    canvas.position(100 , 150);
    video = createCapture(VIDEO);
    video.size(500, 400);
    video.hide();

}


function draw(canvas) {
    image(video, 0, 0, 650, 500);
    rect(35, 35, 575,20);
    rect(595, 24, 20,455);
    rect(35, 455, 575,20);
    rect(45, 25, 20,455);
    ellipse(56, 46, 55, 55);
    ellipse(605, 46, 55, 55);
    ellipse(605, 465, 55, 55);
    ellipse(56, 465, 55, 55);

}



function take_snapshot() {
    save('student_1.png');
}

