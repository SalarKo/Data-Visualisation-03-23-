let server = "https://tdb01.ruc.dk/tdb-api/?q=";
let max = 0;
let valgt_parti = "S";
let dy = 0;
let x = 0;
let y = 0;
let last_x = 100;
let last_y = 560;
let animation = 100; // delay between each drawing

function setup() {
  loadJSON(
    server +
      "SELECT parti, partifarve, year(created_at) AS year, month(created_at) AS month, count(likes) AS likes FROM user NATURAL JOIN tweet WHERE parti='" +
      valgt_parti +
      "'and created_at > ('') GROUP BY parti, year, month Order by year, month",
    getData
  );
  createCanvas(2200, 660);
  background("white");
  //2015
  push();
  noStroke();
  fill("gray");
  rect(100, 40, 166, 520);
  for (let i = 0; i < 3; i++) {
    fill("gray");
    x = 516;

    rect(x + 500 * i, 40, 250, 520);
  }
  fill("darkgray");
  for (let i = 0; i < 4; i++) {
    x = 266;
    rect(x + 500 * i, 40, 250, 520);
  }
  //2023
  fill("gray");
  rect(2016, 40, 41.66, 520);
  pop();

  push();
  translate(100, 350);
  rotate(-0.5 * PI);
  fill("darkGrey");
  textSize(210);
  text("2015", -180, 160);
  pop();
  
 

  //Vi tegner grafen
   strokeWeight(3);
  line(100, 40, 100, 560);
  line(90, 40, 110, 40);
  line(100, 560, 2057.66, 560);
  line(2057.66, 550, 2057.66, 570);
  for (let i = 0; i <95;i++) {
      strokeWeight(1);
    linex = 100
    line(linex+20.83*i,555,linex+20.83*i,565)
  }
  textStyle(BOLD);
  fill("black");
  text("43.000", 80, 30);
  text("0", 98, 580);
  textAlign(LEFT);
  text("05 . 2015", 40, 564);
  text("02 . 2023", 2110, 564);

  textAlign(CENTER);
  strokeWeight(3);
  textSize(25)
  text(
    "Graf over summen af likes for partiet - " + valgt_parti + " - siden 2015",
    width/2,
    25
  );
}

function draw() {
  textSize(20)
  fill(random(0,255), random(0,255) ,random(0,255));
  text("Salar Komeyshi", 1980, 630);
  
  fill("white");
  rect(100,590,380,45);
  
  //likes
  if (mouseX >= 100 && mouseX <= 2057.66 && mouseY >= 40 && mouseY <= 560) {
    let likes = map(mouseY, 560, 40, 0, 43000);
    text("likes: "+likes.toFixed(),190,620);
  }  
  
  //Month
  if (mouseX >= 100 && mouseX <= 2058 && mouseY >= 40 && mouseY <= 560) {
    let month=map(mouseX, 100, 2058, 4, 98);
    
    text("Month  " + (floor(month)%12+1), 400, 620);
    //console.log(mouseX)   
  }
}
  


function getData(rows) {
  for (let i = 0; i < rows.length; i++) {
    if (max < rows[i].likes) max = rows[i].likes;
  }
  for (let i = 0; i < rows.length; i++) {
    dy = dy + map(rows[i].likes, 0, 52000, 0, 520);
    let y = 560 - dy;
    let x = 100 + i * 21;
    // delay the drawing of each point and line
    setTimeout(() => {
      stroke(rows[i].partifarve);
      strokeWeight(2);
      ellipse(x, y, 5);
      line(last_x, last_y, x, y);
      last_x = x;
      last_y = y;
    }, i * animation);
  }
}