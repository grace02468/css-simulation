var item = document.getElementById("item");

var translate_code = document.getElementById("translate_code");
var scale_code = document.getElementById("scale_code");
var rotate_code = document.getElementById("rotate_code");
var skew_code = document.getElementById("skew_code");

var itemtranslateX_text = document.getElementById("itemtranslateX_text");
var itemtranslateY_text = document.getElementById("itemtranslateY_text");
var itemscaleX_text = document.getElementById("itemscaleX_text");
var itemscaleY_text = document.getElementById("itemscaleY_text");
var itemrotate_text = document.getElementById("itemrotate_text");
var itemskewX_text = document.getElementById("itemskewX_text");
var itemskewY_text = document.getElementById("itemskewY_text");

function resetBackground() {
  translate_code.style.background = "transparent";
  scale_code.style.background = "transparent";
  rotate_code.style.background = "transparent";
  skew_code.style.background = "transparent";
}
function resetRedText() {
  itemtranslateX_text.style.color = "black";
  itemtranslateY_text.style.color = "black";
  itemscaleX_text.style.color = "black";
  itemscaleY_text.style.color = "black";
  itemrotate_text.style.color = "black";
  itemskewX_text.style.color = "black";
  itemskewY_text.style.color = "black";
}

var tX, tY, r, scX, scY, skX, skY;

function translateItem() {
  tX = parseInt(document.getElementById("input_translateX").value);
  tY = parseInt(document.getElementById("input_translateY").value);
  item.style.transform = "translate(" + tX + "px" + "," + tY + "px)";
  resetBackground();
  translate_code.style.background = "#fff79b";
  resetRedText();
  itemtranslateX_text.style.color = "red";
  itemtranslateY_text.style.color = "red";
  itemtranslateX_text.innerHTML = "tX";
  itemtranslateY_text.innerHTML = "tY";
}

function scaleItem() {
  scX = parseInt(document.getElementById("input_scaleX").value);
  scY = parseInt(document.getElementById("input_scaleY").value);
  item.style.transform = "scale(" + scX + "," + scY + ")";
  resetBackground();
  scale_code.style.background = "#fff79b";
  resetRedText();
  itemscaleX_text.style.color = "red";
  itemscaleY_text.style.color = "red";
  itemscaleX_text.innerHTML = "scX";
  itemscaleY_text.innerHTML = "scY";
}

function rotateItem() {
  r = parseInt(document.getElementById("input_rotate").value);
  item.style.transform = "rotate(" + r + "deg)";
  resetBackground();
  rotate_code.style.background = "#fff79b";
  resetRedText();
  itemrotate_text.style.color = "red";
  itemrotate_text.innerHTML = "r";
}

function skewItem() {
  skX = parseInt(document.getElementById("input_skewX").value);
  skY = parseInt(document.getElementById("input_skewY").value);
  item.style.transform = "skew(" + skX + "deg" + "," + skY + "deg)";
  resetBackground();
  skew_code.style.background = "#fff79b";
  resetRedText();
  itemskewX_text.style.color = "red";
  itemskewY_text.style.color = "red";
  itemskewX_text.innerHTML = "skX";
  itemskewY_text.innerHTML = "skY";
}

function reset() {
  itemtranslateX_text.innerHTML = "tX";
  itemtranslateY_text.innerHTML = "tY";
  itemscaleX_text.innerHTML = "scX";
  itemscaleY_text.innerHTML = "scY";
  itemrotate_text.innerHTML = "r";
  itemskewX_text.innerHTML = "skX";
  itemskewY_text.innerHTML = "skY";

  item.style.transform = "scale(1,1)";
  item.style.transform = "rotate(0deg)";
  item.style.transform = "skew(0deg,0deg)";
  item.style.transform = "translate(-50px,-50px)";

  resetBackground();
  resetRedText();

  document.getElementById("input_translateX").value = "";
  document.getElementById("input_translateY").value = "";
  document.getElementById("input_scaleX").value = "";
  document.getElementById("input_scaleY").value = "";
  document.getElementById("input_rotate").value = "";
  document.getElementById("input_skewX").value = "";
  document.getElementById("input_skewY").value = "";
}

function changeVariable() {
  if (itemtranslateX_text.style.color == "red") {
    itemtranslateX_text.innerHTML = '"' + tX + '"';
    itemtranslateY_text.innerHTML = '"' + tY + '"';
  } else if (itemscaleX_text.style.color == "red") {
    itemscaleX_text.innerHTML = '"' + scX + '"';
    itemscaleY_text.innerHTML = '"' + scY + '"';
  } else if (itemrotate_text.style.color == "red") {
    itemrotate_text.innerHTML = '"' + r + '"';
  } else if (itemskewX_text.style.color == "red") {
    itemskewX_text.innerHTML = '"' + skX + '"';
    itemskewY_text.innerHTML = '"' + skY + '"';
  } else {
  }
}

function transition() {}

var items = document.getElementById("items");
var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");
var count = 0;

function callItems() {
  if (count % 2 == 0) {
    items.style.zIndex = 2;
    items.style.opacity = 1;
    item1.style.opacity = 1;
    item2.style.opacity = 1;
    item3.style.opacity = 1;
    item4.style.opacity = 1;
    item1.style.transitionDelay = 0.4 + "s";
    item2.style.transitionDelay = 0.8 + "s";
    item3.style.transitionDelay = 1.3 + "s";
    item4.style.transitionDelay = 1.8 + "s";
  } else {
    items.style.zIndex = -1;
    item1.style.opacity = 0;
    item2.style.opacity = 0;
    item3.style.opacity = 0;
    item4.style.opacity = 0;
    items.style.opacity = 0;
    item1.style.transitionDelay = 0 + "s";
    item2.style.transitionDelay = 0 + "s";
    item3.style.transitionDelay = 0 + "s";
    item4.style.transitionDelay = 0 + "s";
  }
  count++;
}
