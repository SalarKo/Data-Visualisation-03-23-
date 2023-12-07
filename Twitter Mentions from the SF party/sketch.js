let server = "https://tdb01.ruc.dk/tdb-api/?q=";
let nummer = 0;
let max=0;
function setup() {
  loadJSON(
    server +
      "select distinct mparti, user, count(*) antal from mention natural join user where parti = 'SF'AND type='mf'AND mparti<>'SF'group by mparti order by antal DESC",
    gotdata
  );
  createCanvas(600, 600);
  background(0);
  textAlign(CENTER, CENTER);
  textSize(16);
  fill("white");
  text("Salar Komeyshi",500,25);
}

function gotdata(rows) {
  // Først findes det største antal, max, for et enkelt parti
  for (let i = 0; i < rows.length; i++) {
    if (max < rows[i].antal) max = rows[i].antal;
  }
  // Så gennemløbes svaret igen og nu henter vi de data der skal visualiseres
  for (let i = 0; i < rows.length; i++) {
    // her bruger vi det fundne max
    let d = map(rows[i].antal, 0, max, 20, 180); // her bruges max
    let x = 130 + (nummer % 3) * 180;
    let y = 130 + floor(nummer / 3) * 180;
    fill(0, 200, 0);
    ellipse(x, y, d, d);
    fill(0);
  //  text(rows[i].parti+"\n"+rows[i].antal, x, y); // med antal
    text(rows[i].mparti, x, y); // uden antal
    nummer++;
  }
}
