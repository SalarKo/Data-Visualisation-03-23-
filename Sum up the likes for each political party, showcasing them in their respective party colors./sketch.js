let server = "https://tdb01.ruc.dk/tdb-api/?q=";
let nummer = 0;
let max = 0;

function setup() {
  loadJSON(
    server +
      "SELECT parti, partifarve, count(*) antal FROM user natural join tweet where parti>'' and created_at>'2019-01-01' group by  parti ORDER BY antal ASC",
    gotdata
  );
  createCanvas(450, 390);
  background(0);
  textAlign(CENTER);
  textSize(20);
  noStroke();
  fill("white");
  text("Salar Komeyshi", 375, 25);
}
function gotdata(rows) {
  // Først findes det største antal for et enkelt parti
  for (let i = 0; i < rows.length; i++) {
    if (max < rows[i].antal) max = rows[i].antal;
  }

  // Så gennemløbes svaret igen. Data hentes og visualiseres
  for (let i = 0; i < rows.length; i++) {
    let d = map(rows[i].antal, 0, max, 0, 300);
    let x = 100;
    let y = 20 + 30 * nummer;
    fill(220);
    text(rows[i].parti, x - 50, y + 16);
    fill(rows[i].partifarve);
    rect(x, y, d, 20);
    nummer++;
  }
}
