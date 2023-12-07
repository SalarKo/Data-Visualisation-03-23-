let server="https://tdb01.ruc.dk/tdb-api/?q=";
let rows=[];
let name = [];
let img = [];
let user = [];
let x = [];
let y = [];
let n;

function setup () {
  createCanvas(900, 900);
  background(0);
  fill(255);
  loadJSON( server+"select name, parti, user, profile_image_url_large, partifarve from user where name > ' ' and type like 'mf' order by parti desc,name", gotdata );
}
function gotdata(data){
  rows=data;
  n=rows.length;
  translate(width/2, height/2);
  rotate(-PI/2);
for (let i=0;i<rows.length;i++) {
    name[i] = rows[i].name+" ("+rows[i].parti+")" ;
    img[i] = loadImage("https://tdb01.ruc.dk/tdb-api/img/"+rows[i].user+".jpg");
    user[i] = "@" + rows[i].user; // store the twitter username in the array
    x[i] = width/2 + cos(i*TWO_PI/n-PI/2)*width/3;
    y[i] = height/2 + sin(i*TWO_PI/n-PI/2)*height/3;
    text(name[i], width/3, 0);
   
    rotate(TWO_PI/n);
  }
  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER);
  textSize(24);

}
function draw(){
  for (let i=0; i<n;i++) {
    if (dist(mouseX,mouseY,x[i],y[i])<10) {
      overPerson = i; // set the overPerson variable to the current person
      fill(0);
      rect(width/2,height/2+130,0.55*width,30);
      if (!(img[i]==null)) image(img[i],width/2,height/2,300,300);
      fill(0,200,0);
      text(name[i],width/2,height/2+140);
      fill("black");
      rect(450,630,300,50);
      fill("green")
      text(user[i],width/2,height/2+180);
    }
  }
}