let changeColor = document.querySelector(".change");
let rgbColor = document.querySelector(".rgbColor");
let hexaColor = document.querySelector(".hexaColor");
let copyHexaColor = document.querySelector(".copyHexaColor");
let rgb;

changeColor.addEventListener("click", change);

function rgbToHex(r, g, b) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
}

function rgbRandom() {
  let red = Math.floor(Math.random() * 240 + 16);
  let green = Math.floor(Math.random() * 248 + 8);
  let blue = Math.floor(Math.random() * 256);
  rgb = `${red},${green},${blue}`;
  rgbColor.innerHTML = `<hr /> RGB : ${rgb} <hr/>`;
  hexa = rgbToHex(red, green, blue);
  hexaColor.innerHTML = `HEX : ${hexa} `;
  copyHexaColor.innerHTML = `<a onclick="copy()" class="btn btn-light">Copy</a> <hr />`;
  return hexa;
}

function change() {
  document.body.style.backgroundColor = rgbRandom();
}

function copy() {
  navigator.clipboard.writeText(hexaColor.textContent.slice(6));
  alert("COPIED : " + hexaColor.textContent.slice(6));
}
