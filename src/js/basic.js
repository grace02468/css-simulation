var item = document.getElementById("item");
var wh_code = document.getElementById("wh_code");
var background_code = document.getElementById("background_code");
var border_code1 = document.getElementById("border_code1");
var border_code2 = document.getElementById("border_code2");
var radius_code = document.getElementById("radius_code");

var itemheight_text = document.getElementById("itemheight_text");
var itemwidth_text = document.getElementById("itemwidth_text");
var itemcolor_text = document.getElementById("itemcolor_text");
var bordercolor_text = document.getElementById("bordercolor_text");
var borderwidth_text = document.getElementById("borderwidth_text");
var val_text = document.getElementById("val_text");
var borderradius_text = document.getElementById("borderradius_text");

function resetBackground() {
  wh_code.style.background = "transparent";
  background_code.style.background = "transparent";
  border_code1.style.background = "transparent";
  border_code2.style.background = "transparent";
  radius_code.style.background = "transparent";
}
function resetRedText() {
  itemheight_text.style.color = "black";
  itemwidth_text.style.color = "black";
  itemcolor_text.style.color = "black";
  bordercolor_text.style.color = "black";
  borderwidth_text.style.color = "black";
  val_text.style.color = "black";
  borderradius_text.style.color = "black";
}

var itemheight = 100,
  itemwidth = 100;

function changeItemSize() {
  itemheight = document.getElementById("input_height").value;
  itemwidth = document.getElementById("input_width").value;
  item.style.height = itemheight + "px";
  item.style.width = itemwidth + "px";
  resetBackground();
  wh_code.style.background = "#fff79b";
  resetRedText();
  itemwidth_text.style.color = "red";
  itemheight_text.style.color = "red";
  itemwidth_text.innerHTML = "itemwidth";
  itemheight_text.innerHTML = "itemheight";
}

var itemcolor;

function changeItemColor() {
  itemcolor = document.getElementById("input_color").value;
  item.style.background = itemcolor;
  resetBackground();
  background_code.style.background = "#fff79b";
  resetRedText();
  itemcolor_text.style.color = "red";
  itemcolor_text.innerHTML = "itemcolor";
}

var borderstyle, index, val, bordercolor, borderwidth, borderradius;
var border, bordernone;

function changeBorder() {
  border = document.getElementById("border");
  bordernone = document.getElementById("bordernone");
  if (border.checked) {
    bordernone.style.textDecoration = "none";
    item.style.border = "none";
    resetBackground();
    resetRedText();
  } else {
    bordernone.style.textDecoration = "line-through";
    bordercolor = document.getElementById("border_color").value;
    item.style.borderColor = bordercolor;
    borderwidth = document.getElementById("border_width").value;
    item.style.borderWidth = borderwidth + "px";
    borderstyle = document.getElementById("mySelect");
    index = borderstyle.selectedIndex;
    val = borderstyle.options[index].value;
    item.style.borderStyle = val;
    resetBackground();
    border_code1.style.background = "#fff79b";
    border_code2.style.background = "#fff79b";
    resetRedText();
    bordercolor_text.style.color = "red";
    borderwidth_text.style.color = "red";
    val_text.style.color = "red";
    bordercolor_text.innerHTML = "bordercolor";
    borderwidth_text.innerHTML = "borderwidth";
    val_text.innerHTML = "val";
  }
}

function changeBorderRadius() {
  borderradius = document.getElementById("border_radius").value;
  item.style.borderRadius = borderradius + "%";
  resetBackground();
  radius_code.style.background = "#fff79b";
  resetRedText();
  borderradius_text.style.color = "red";
  borderradius_text.innerHTML = "borderradius";
}

function resetDiv() {
  itemwidth_text.innerHTML = "itemwidth";
  itemheight_text.innerHTML = "itemheight";
  itemcolor_text.innerHTML = "itemcolor";
  bordercolor_text.innerHTML = "bordercolor";
  borderwidth_text.innerHTML = "borderwidth";
  val_text.innerHTML = "val";
  borderradius_text.innerHTML = "borderradius";

  item.style.height = 100 + "px";
  item.style.width = 100 + "px";
  item.style.background = "white";

  item.style.borderColor = "black";
  item.style.borderStyle = "solid";
  item.style.borderRadius = 0 + "%";
  item.style.borderWidth = 1 + "px";
  resetBackground();
  resetRedText();
  document.getElementById("input_width").value = "";
  document.getElementById("input_height").value = "";
  document.getElementById("input_color").value = "";
  document.getElementById("border_color").value = "";
  document.getElementById("border_width").value = "";
  document.getElementById("border_radius").value = "";
  document.getElementById("border").checked = false;
  document.getElementById("bordernone").style.textDecoration = "line-through";
  document.getElementById("mySelect").selectedIndex = 0;
  item.style.borderStyle = "solid";
}

function changeVariable() {
  if (itemwidth_text.style.color == "red") {
    itemwidth_text.innerHTML = '"' + itemwidth + '"';
    itemheight_text.innerHTML = '"' + itemheight + '"';
  } else if (itemcolor_text.style.color == "red") {
    itemcolor_text.innerHTML = '"' + itemcolor + '"';
  } else if (val_text.style.color == "red") {
    bordercolor_text.innerHTML = '"' + bordercolor + '"';
    borderwidth_text.innerHTML = '"' + borderwidth + '"';
    val_text.innerHTML = '"' + val + '"';
  } else if (borderradius_text.style.color == "red") {
    borderradius_text.innerHTML = '"' + borderradius + '"';
  } else {
  }
}

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
