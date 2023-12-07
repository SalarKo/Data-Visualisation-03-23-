let server = "https://tdb01.ruc.dk/tdb-api/?q=";
function setup() {
  loadJSON(server + "SELECT parti, name FROM user WHERE parti IN ('ALT', 'EL', 'RV', 'SF') AND type = 'mf' ORDER BY parti", gotdata);
  createCanvas(800, 800);
  background("black");
  fill("white");
    text("Salar Komeyshi", 25,30);
}
function gotdata(rows) {
  translate(width/2, height/2);
  rotate(-PI/2); 
  
  for (let i = 0; i < 39; i++) {
    fill("white");
    text(rows[i].parti + "    " + rows[i].name, 80, 0);
    rotate(PI/24);
  }
}
