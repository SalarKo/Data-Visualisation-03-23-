let user=["Hans_Kr_Skibby","FranciskaRosenk","troelslundp","NWammen","engelschmidt","AneHalsboe","MaiVilladsen","mfMorten","PernilleVermund","Astridkrag","sophieloehde","martinlidegaard","mattiastesfaye","MrMesserschmidt","AlexVanopslagh","JakobEllemann","PiaOlsen","larsloekke"];    
let navn=["Hans Kristian Skibby","Franciska Rosenkilde","Troels Lund Poulsen","Nicolai Wammen","Jakob Engel-Schmidt","Ane Halsboe-Jørgensen","Mai Villadsen","Morten Bødskov","Pernille Vermund","Astrid Krag","Sophie Løhde","Martin Lidegaard","Mattias Tesfaye","Morten Messerschmidt","Alex Vanopslagh","Jakob Ellemann-Jensen","Pia Olsen Dyhr","Lars Løkke Rasmussen"];
let folgere=  [2944,4473,7136,8621,10576,12527,15718,18128,22925,23154,28053,28506,31453,33190,47053,58671,62902,213693];
let billed = [];
let y = 30;

function preload() {
  for (let i = 0; i < user.length; i++) {
    billed[i]=loadImage("https://tdb01.ruc.dk/tdb-api/img/"+user[i]+".jpg");
  }
}

function setup() {
  createCanvas(400, 400); 
  textAlign(RIGHT);
  background(0);
  fill(220);
  
  
  for (let i = 0; i < user.length; i++) {
    showData(navn[i], billed[i], folgere[i], y);
    y += 20; 
  }
   fill(random(0,255), random(0,255) ,random(0,255));
  text("Salar Komeyshi", 100,20);
}

function showData(name, picture, followers, y) {
  text(name, 150, y + 12);
  image(picture, 160, y, 15, 15);
  text(followers, 225, y + 12);

  let width = map(followers, folgere[0], folgere[17], 20, 180);
  rect(235, y, width, 15);
}

