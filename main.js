song1 = "";
song2 = "";

function setup(){
    create.Canvas(600, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

}

function draw() {
    image(video, 0, 0, 600, 500);
}

function preload()
{
    song1 = loadSound("1");
    song2 = loadSound("2");
}

function play()
{
    song.play();
}