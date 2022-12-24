var words = [
  "進入車站、月臺及車廂，敬請配戴口罩。","477次 新自強號 玉里-員林 經由山線，沿途停靠：新竹、竹南、苗栗、豐原、台中、彰化、員林"
];
var posX = 0;
var palabraNro = 0;
let clockFont;
let customFont; //variable for custom font

function setup() {
  createCanvas(500, 200);
  // 設置字體名字
  clockFont = "華";
  // 設置框線
  stroke(175);
}

function draw() {
  let c = color(0, 0, 0);
  let d = color(990, 50, 50);
  let e = color(50, 50, 50);
  let f = color(50, 500, 50);
  let g = color(240, 240, 240);

  background(240);

  // 設置字體大小
  fill(c);
  textSize(12);
  text(
    "Train NO.        Destination       Dep. Time.         Remarks",
    135,
    48
  );

  fill(c);
  textSize(25);
  text("車次", 135, 30);
  fill(c);
  textSize(25);
  text("開往", 225, 30);
  fill(c);
  textSize(25);
  text("時間", 315, 30);
  fill(c);
  textSize(25);
  text("備註", 405, 30);
  fill(c);
  textSize(60);
  text("3A", 20, 60);
  fill(c);
  textSize(25);
  text("車次", 135, 30);

  // 設置字體大小
  textSize(15);
  text("月 台", 38, 82);
  textSize(20);
  text("Plat.", 37, 107);
  textSize(10);

  fill(c);
  text("現在時間  Clock", 23, 125);
  textSize(16);
  text("", 36, 90);
  // Draw a rectangle at location (30, 20) with a width and height of 55.
  fill(e);
  rect(120, 150, 350, 30);
  describe("white rect with black outline in mid-right of canvas");

  fill(e);
  rect(120, 55, 350, 30);
  describe("white rect with black outline in mid-right of canvas");
  fill(e);
  rect(120, 102.5, 350, 30);
  describe("white rect with black outline in mid-right of canvas");
  fill(d);
  textSize(20);
  text("18:59", 315, 77);
  fill(d);
  textSize(20);
  text("19:05", 315, 124);
  fill(f);
  textSize(18);
  text("準 點", 410, 76);
  fill(f);
  textSize(18);
  text("晚19分", 405, 124);
  fill(f);
  textSize(18);
  text("新 竹", 230, 76);
  fill(f);
  textSize(18);
  text("員 林", 230, 124);
  fill(f);
  textSize(18);
  text("477", 143, 124);
  fill(f);
  textSize(18);
  text("1235", 140, 76);

  fill(f);
  textSize(15);

  if (posX > width) {
    //setting start point
    posX = -550;
    //palabraNro++;
  }
  //if (palabraNro == words.length) palabraNro = 0;
  text(words[palabraNro], -posX++, 170);

  // Draw a rectangle at location (30, 20) with a width and height of 55.
  stroke(240);

  fill(g);
  rect(0, 150, 120, 30);
  describe("white rect with black outline in mid-right of canvas");

  fill(g);
  rect(470, 150, 120, 30);
  describe("white rect with black outline in mid-right of canvas");

  textFont(clockFont);
  clock();

  oddOrEven = second() % 2;

  if (oddOrEven == 1) {
    up();
  } else {
    down();
  }
}

function clock() {
  fill("red");
  textFont(clockFont);
  textSize(30);
  let Hour = hour();
  let min = minute();
  let secs = second();
  let noon = Hour >= 12 ? " PM" : " AM";
  if (min < 10) min = "0" + min;
  Hour %= 24;
  text(Hour + ":" + min, 23, 174);
}

function up() {
  let d = color(990, 50, 50);
  fill(d);
  textSize(13);
  text("●", 122, 68);
}
function down() {
  let d = color(990, 50, 50);
  fill(d);
  textSize(13);
  text("●", 122, 82);
}
function mousePressed() {
  palabraNro++;
  if (palabraNro == words.length) palabraNro = 0;
}