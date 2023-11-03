var text = document.getElementById("text");

var textsize_code = document.getElementById("textsize_code");
var textweight_code = document.getElementById("textweight_code");
var textspace_code = document.getElementById("textspace_code");
var lineheight_code = document.getElementById("lineheight_code");
var fontfamily_code = document.getElementById("fontfamily_code");
var textalign_code = document.getElementById("textalign_code");
var shadow_code = document.getElementById("shadow_code");

var textsize_text = document.getElementById("textsize_text");
var textweight_text = document.getElementById("textweight_text");
var textspace_text = document.getElementById("textspace_text");
var lineheight_text = document.getElementById("lineheight_text");
var fontfamily_text = document.getElementById("fontfamily_text");
var textalign_text = document.getElementById("textalign_text");
var shadowX_text = document.getElementById("shadowX_text");
var shadowY_text = document.getElementById("shadowY_text");
var shadow_blurred_text = document.getElementById("shadow_blurred_text");
var shadow_color_text = document.getElementById("shadow_color_text");

function resetBackground() {
  textsize_code.style.background = "transparent";
  textweight_code.style.background = "transparent";
  textspace_code.style.background = "transparent";
  lineheight_code.style.background = "transparent";
  fontfamily_code.style.background = "transparent";
  textalign_code.style.background = "transparent";
  shadow_code.style.background = "transparent";
}

function resetRedText() {
  textsize_text.style.color = "black";
  textweight_text.style.color = "black";
  textspace_text.style.color = "black";
  lineheight_text.style.color = "black";
  fontfamily_text.style.color = "black";
  textalign_text.style.color = "black";
  shadowX_text.style.color = "black";
  shadowY_text.style.color = "black";
  shadow_blurred_text.style.color = "black";
  shadow_color_text.style.color = "black";
}

var shadowX, shadowY, shadow_blurred, shadow_color;

function showshadow() {
  shadowX = document.getElementById("shadowX").value;
  shadowY = document.getElementById("shadowY").value;
  shadow_blurred = document.getElementById("shadow_blurred").value;
  shadow_color = document.getElementById("shadow_color").value;

  text.style.textShadow =
    shadowX + "px " + shadowY + "px " + shadow_blurred + "px " + shadow_color;

  resetBackground();
  shadow_code.style.background = "#fff79b";
  resetRedText();
  shadowX_text.style.color = "red";
  shadowY_text.style.color = "red";
  shadow_blurred_text.style.color = "red";
  shadow_color_text.style.color = "red";
  shadowX_text.innerHTML = "shadowX";
  shadowY_text.innerHTML = "shadowY";
  shadow_blurred_text.innerHTML = "shadow_blurred";
  shadow_color_text.innerHTML = "shadow_color";
}

var textsize, textweight, textspace, lineheight, fontfamily, textalign;

function changeFontSize() {
  textsize = document.getElementById("input_fontsize").value;
  text.style.fontSize = textsize + "px";
  resetBackground();
  textsize_code.style.background = "#fff79b";
  resetRedText();
  textsize_text.style.color = "red";
  textsize_text.innerHTML = "textsize";
}

function changeFontWeight() {
  textweight = document.getElementById("input_fontweight").value;
  text.style.fontWeight = textweight;
  resetBackground();
  textweight_code.style.background = "#fff79b";
  resetRedText();
  textweight_text.style.color = "red";
  textweight_text.innerHTML = "textweight";
}

function changeLetterSpacing() {
  textspace = document.getElementById("input_letterspacing").value;
  text.style.letterSpacing = textspace + "px";
  resetBackground();
  textspace_code.style.background = "#fff79b";
  resetRedText();
  textspace_text.style.color = "red";
  textspace_text.innerHTML = "textspace";
}

function changeLineHeight() {
  lineheight = document.getElementById("input_lineheight").value;
  text.style.lineHeight = lineheight + "px";
  resetBackground();
  lineheight_code.style.background = "#fff79b";
  resetRedText();
  lineheight_text.style.color = "red";
  lineheight_text.innerHTML = "lineheight";
}

function changeFontFamily() {
  fontfamily = document.getElementById("input_fontfamily").value;
  text.style.fontFamily = fontfamily;
  resetBackground();
  fontfamily_code.style.background = "#fff79b";
  resetRedText();
  fontfamily_text.style.color = "red";
  fontfamily_text.innerHTML = "fontfamily";
}

function changeTextAlign() {
  textalign = document.getElementById("input_textalign").value;
  text.style.textAlign = textalign;
  resetBackground();
  textalign_code.style.background = "#fff79b";
  resetRedText();
  textalign_text.style.color = "red";
  textalign_text.innerHTML = "textalign";
}

function resetDiv() {
  resetBackground();
  resetRedText();

  shadowX_text.innerHTML = "shadowX";
  shadowY_text.innerHTML = "shadowY";
  shadow_blurred_text.innerHTML = "shadow_blurred";
  shadow_color_text.innerHTML = "shadow_color";
  textsize_text.innerHTML = "textsize";
  textweight_text.innerHTML = "textweight";
  textspace_text.innerHTML = "textspace";
  lineheight_text.innerHTML = "lineheight";
  fontfamily_text.innerHTML = "fontfamily";
  textalign_text.innerHTML = "textalign";

  text.style.textShadow = "0px 0px 0px transparent";
  text.style.fontSize = "20px";
  text.style.fontWeight = "normal";
  text.style.letterSpacing = "0px";
  text.style.lineHeight = "26.5px";
  text.style.fontFamily = "微軟正黑體";
  text.style.textAlign = "left";

  document.getElementById("input_fontsize").value = "";
  document.getElementById("input_fontweight").value = "";
  document.getElementById("input_letterspacing").value = "";
  document.getElementById("input_lineheight").value = "";
  document.getElementById("input_fontfamily").value = "";
  document.getElementById("input_textalign").value = "";
  document.getElementById("shadowX").value = "";
  document.getElementById("shadowY").value = "";
  document.getElementById("shadow_blurred").value = "";
  document.getElementById("shadow_color").value = "";
}

function changeVariable() {
  if (textsize_text.style.color == "red") {
    textsize_text.innerHTML = '"' + textsize + '"';
  } else if (textweight_text.style.color == "red") {
    textweight_text.innerHTML = '"' + textweight + '"';
  } else if (textspace_text.style.color == "red") {
    textspace_text.innerHTML = '"' + textspace + '"';
  } else if (lineheight_text.style.color == "red") {
    lineheight_text.innerHTML = '"' + lineheight + '"';
  } else if (fontfamily_text.style.color == "red") {
    fontfamily_text.innerHTML = '"' + fontfamily + '"';
  } else if (textalign_text.style.color == "red") {
    textalign_text.innerHTML = '"' + textalign + '"';
  } else if (shadowX_text.style.color == "red") {
    shadowX_text.innerHTML = '"' + shadowX + '"';
    shadowY_text.innerHTML = '"' + shadowY + '"';
    shadow_blurred_text.innerHTML = '"' + shadow_blurred + '"';
    shadow_color_text.innerHTML = '"' + shadow_color + '"';
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
