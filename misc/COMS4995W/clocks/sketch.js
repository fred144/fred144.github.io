// setup() is called once at page-load
function setup() {
    createCanvas(windowWidth, windowHeight);
}

// draw() is called 60 times per second
// function draw() {
//     let hr = hour();
//     let min = minute();
//     let sec = second();

//     background(225);
//     textSize(32);
//     fill(180);
//     rect(50, 450, 100, 100, 5);

//     text(hr, 10, 30);
//     fill(100);
//     text(min, 10, 60);
//     fill(0);
//     text(sec, 10, 90);
// }

function drawDots(x, y, size, maxDots, currentValue, dotsPerRow) {
    let dotRadius = size / (dotsPerRow + 1);
    let filledDots = Math.round((currentValue / maxDots) * maxDots);
    
    for (let i = 0; i < maxDots; i++) { // maxDots total dots
        let col = i % dotsPerRow; // dotsPerRow columns
        let row = Math.floor(i / dotsPerRow); // calculated rows
        let dotX = x + (col + 1) * (size / dotsPerRow); // position in x
        let dotY = y + (row + 1) * (size / dotsPerRow); // position in y
        
        if (i < filledDots) {// if within current value, fill black
            fill(0);
        } else {
            fill(200);
        }
        circle(dotX, dotY, dotRadius);
    }
}

function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();

    background(225);
    
    // hours (12 dots, 4x3 grid)
    let hr12 = hr % 12;
    drawDots(width / 4, height / 2, 80, 12, hr12, 4);
    
    // PM indicator dot
    fill(hr >= 12 ? 0 : 200);
    circle(width / 6 , height / 2 + 40, 8);
    fill(0);
    textSize(12);
    text("PM", width / 6 + 15, height / 2 + 45);
    
    // minutes (60 dots, 10x6 grid)
    drawDots(width / 2, height / 2, 120, 60, min, 10);
    
    // seconds (60 dots, 10x6 grid)
    drawDots(3 * width / 4, height / 2, 120, 60, sec, 10);
}

// windowResized() is called whenever the browser window is resized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}