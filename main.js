NoseX = 0;
NoseY = 0;

function preload() {
clown_nose=("https://i.postimg.cc/yN1W2XtB/istockphoto-1263470112-612x612.jpg");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video.modelLoaded);
    poseNet.on('pose', gotPoses);
};

function take_snapshoot() {
    save("caputred_image.png");

}

function modelLoaded() {
    console.log("PoseNet is Initialized");
}

function gotPoses(results) {
    if (results.lenght > 0) {
        console.log(results);
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        console.log("nose x =" + NoseX);
        console.log("nose y ="+ NoseY);
        };
}

function draw() {
    image(video, 0, 0, 300, 300);
image(clown_nose, NoseX, NoseY,30,30);
}
 