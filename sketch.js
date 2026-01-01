let CylinderPic;
let smallWaterPic;
let largeWaterPic;
let Chewy;
//let ComicNeue;
let Btn;
let slider;
let gui;
let waterHeight1 = 0;
let waterHeight2 = 0;
//let units;

function preload() {
  Chewy = loadFont('assets/ComicNeue-Bold.ttf');
  //ComicNeue = loadFont('assets/ComicNeue-Regular.ttf');
  CylinderPic = loadImage('assets/cylinderZoom.png');
  largeWaterPic = loadImage('assets/largeWater.png');
  smallWaterPic = loadImage('assets/smallWater.png');

}

function setup() {
  describe('A 2-D drawing of a graduated cylinder containing water with a meniscus and a zoomed in image that shows how to measure volume to the correct digit.');

  fill(255); //white background
  if (windowWidth < 1000) {
    createCanvas(windowWidth, (700 / 1000) * windowWidth);
  } else {
    createCanvas(1000, 700);
  } //changes canvase size based on device if the device is small

  gui = createGui();

  describeElement('Measure Button', 'A button that causes the amount of water in the cylinder to be displayed to the correct digits.');
  Btn = createButton("Measure", 0.05 * width, 0.05 * width, 128, 32);
  Btn.setStyle({
    textSize: 18 * width / 1000
  });

  describeElement('Slider', 'The slider controls the water level in the graduated cylinder and changes the amount displayed.')
  slider = createSliderV("slider", 0.9 * width, 0.2 * height, 0.03 * width, width / 3, 0, 200);
}

function draw() {
  background(255);
  image(smallWaterPic, -6, 0.5 * (waterHeight1 * width / 1000), width, height);
  image(largeWaterPic, 0, 3 * (waterHeight2 * width / 1000), width, height);
  image(CylinderPic, 0, 0, width, height);


  drawGui();

  waterHeight1 = 190 - slider.val;
  waterHeight2 = 200 - slider.val;

  push();
  describeElement('Large tick Marks', `Large tick marks on the graducated cylinder every 10 mL`);
  describeElement('Small tick Marks', `Small tick marks on the graducated cylinder every 1 mL`);
  fill(0);
  for (let i = 0; i < 6; i++) {
    let largeTic = 50 * (i + 1) + 200;
    let largeText = 70 - 10 * (i + 1);
    textSize(floor(16 * width / 1000));
    textFont(Chewy);
    rect(0.312 * width, largeTic, 25 * width / 1000, 2); // Draw major ticks
    text(largeText, 0.29 * width, largeTic + 5); // Display unit labels
    if (i < 5) {
      for (let j = 0; j < 10; j++) {
        let smallTic = largeTic + (j + 1) * 5;
        rect(0.332 * width, smallTic, 5 * width / 1000, 1);

      }
    }
  }

  describeElement('Tick Marks Zoomed In', `Large tick marks on the the zoomed in graducated cylinder go from 30 to 50 mL`);
  for (let i = 0; i < 3; i++) {
    let largeTic = 300 * i + 77;
    let largeText = 60 - 10 * (i + 1);
    textSize(floor(50 * width / 1000));
    textFont(Chewy);
    rect(0.75 * width, largeTic, 100 * width / 1000, 8); // Draw major ticks
    text(largeText, 0.68 * width, largeTic + 16); // Display unit labels
    if (i < 2) {
      for (let j = 0; j < 10; j++) {
        let smallTic = largeTic + (j + 1) * 30;
        rect(0.81 * width, smallTic, 40 * width / 1000, 2);

      }
    }
  }
  pop();

  push();
  stroke(193, 20, 20);
  fill(193, 20, 20);
  if (Btn.isHeld) {
    rect(0.68 * width, 3 * (waterHeight2 * width / 1000) + 100, 0.18 * width, 2);
    let waterAmount = 29.2 + slider.val / 10;
    let textAmount = waterAmount.toFixed(1) + " mL";
    textSize(floor(70 * width / 1000));
    textFont(Chewy);
    text(textAmount, 215, 100);
    text
  }
  pop();

}

function touchMoved() {
  // Optional: Add specific touch interaction logic here if needed
  return false; // This line is key to stopping default scrolling
}

function windowResized() {
  if (windowWidth < 1000) {
    resizeCanvas(windowWidth, (700 / 1000) * windowWidth);
  } else {
    resizeCanvas(1000, 700);
  }
}