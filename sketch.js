var mousecount = 3;
var score = 0;
var bg = createSprite(200, 200);
bg.setAnimation("bg");
var mouse1 = createSprite(60, 300);
var mouse2 = createSprite(250, 350);
var mouse3 = createSprite(300, 200);
var cat = createSprite(60, 90);
var youwin = createSprite(200, 200);
cat.setAnimation("Cat-01.png_1");
mouse1.setAnimation("Mouse-01.png_1");
mouse2.setAnimation("Mouse-02.png_1");
mouse3.setAnimation("Mouse-03.png_1");
youwin.setAnimation("youwin.jpeg");
youwin.visible = false;
cat.scale = 0.25;
mouse1.scale = 0.2;
mouse2.scale = 0.2;
mouse3.scale = 0.2;
youwin.scale = 0.5;
function draw() {
  drawSprites();
  if (mousePressedOver(cat)) {
    cat.x = World.mouseX;
    cat.y = World.mouseY;
  }
  if (cat.isTouching(mouse1)) {
    mouse1.destroy();
    mousecount = mousecount - 1;
    score = score + 100;
  }
  if (cat.isTouching(mouse2)) {
    mouse2.destroy();
    mousecount = mousecount - 1;
    score = score+ 100;
  }
  if (cat.isTouching(mouse3)) {
    mouse3.destroy();
    mousecount = mousecount - 1;
    score = score + 100;
  }
  if (mousecount == 0 && score == 300) {
    cat.visible = false;
    bg.visible = false;
    youwin.visible = true;
  }
  textSize(20);
  fill("red");
  text("Score:" + score, 26, 22);
}
