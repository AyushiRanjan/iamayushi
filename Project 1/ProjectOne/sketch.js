function setup() {
  // put setup code here
  createCanvas(375, 812);
  link = createA('file:///Users/jimlin/Desktop/p5/ProjectOne/item.html', '');
}

function draw() {
  // put drawing code here
  background(141);
  fill(190);
  noStroke();
  rect(0, 0, 375, 80);
  textSize(36)
  textStyle(BOLD);
  fill(255);
  textFont('SF Pro Display');
  text('Recylce', 20, 50);
  fill(255);
  rect(307, 23, 48, 8, 8);
  rect(307, 36, 48, 8, 8);
  rect(307, 49, 48, 8, 8);
  fill(196);
  stroke(128, 128, 128);
  strokeWeight(4);
  rect(21, 106, 156, 156, 16);
  rect(197, 106, 156, 156, 16);
  rect(21, 282, 156, 156, 16);
  rect(197, 282, 156, 156, 16);
  rect(21, 458, 156, 156, 16);
  rect(197, 458, 156, 156, 16);
  rect(21, 634, 156, 156, 16);
  rect(197, 634, 156, 156, 16);

  img = createImg('https://raw.githubusercontent.com/OverMochi/project1/811c8491c3efce91e50a8beb0a96e7e7219b2a62/paper.png','file:///Users/jimlin/Desktop/p5/ProjectOne/item.html').parent(link);
  img.position(21, 106);
  img.size(156,156);


}
