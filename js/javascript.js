let cookie_name = "states-checklist";
let tiles = [["Alabama", "off"], ["Alaska", "off"], ["Arizona", "off"], ["Arkansas", "off"], ["California", "off"], ["Colorado", "off"], ["Connecticut", "off"], ["Delaware", "off"], ["Florida", "off"], ["Georgia", "off"], ["Hawaii", "off"], ["Idaho", "off"], ["Illinois", "off"], ["Indiana", "off"], ["Iowa", "off"], ["Kansas", "off"], ["Kentucky", "off"], ["Louisiana", "off"], ["Maine", "off"], ["Maryland", "off"], ["Massachusetts", "off"], ["Michigan", "off"], ["Minnesota", "off"], ["Mississippi", "off"], ["Missouri", "off"], ["Montana", "off"], ["Nebraska", "off"], ["Nevada", "off"], ["New Hampshire", "off"], ["New Jersey", "off"], ["New Mexico", "off"], ["New York", "off"], ["North Carolina", "off"], ["North Dakota", "off"], ["Ohio", "off"], ["Oklahoma", "off"], ["Oregon", "off"], ["Pennsylvania", "off"], ["Rhode Island", "off"], ["South Carolina", "off"], ["South Dakota", "off"], ["Tennessee", "off"], ["Texas", "off"], ["Utah", "off"], ["Vermont", "off"], ["Virginia", "off"], ["Washington", "off"], ["West Virginia", "off"], ["Wisconsin", "off"], ["Wyoming", "off"]];
let numTiles = tiles.length + 1;
let numCols = 3;

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return JSON.parse(c.substring(name.length, c.length));
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + encodeURIComponent(JSON.stringify(cvalue)) + ";" + expires + ";path=/";
}

function deleteCookie(cname) {
  document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function clickTile(tile) {
  let value = document.getElementById(tile).attributes.class.value;

  let cookie = getCookie(cookie_name);

  if (value == "on") {
    document.getElementById(tile).setAttribute("class", "off");
    cookie[tile][1] = "off";
  }
  else {
    document.getElementById(tile).setAttribute("class", "on");
    cookie[tile][1] = "on";
  }

  setCookie(cookie_name, cookie, 1000);
}

function newBoard() {
  if (window.confirm("Are you sure you want a new board?")) {
    deleteCookie(cookie_name);
    location.reload();
  }
}

function loadBoard() {
  let html = document.getElementById('card').innerHTML;
  let numRows = Math.ceil(numTiles / numCols);

  for (let row = 0; row < numRows; row++) {
    html += "  <tr>\n";
    for (let col = 0; col < numCols; col++) {
      if ((row * numCols + col) == (numTiles - 1)) {
        html += "    <td id=" + (row * numCols + col) + " class=\"off\" onclick=\"addCustom()\">+</td>\n";
        break;
      }
      html += "    <td id=" + (row * numCols + col) + " class=\"" + tiles[row * numCols + col][1] + "\" onclick=\"clickTile(" + (row * numCols + col) + ")\">" + tiles[row * numCols + col][0] + "</td>\n";
    }
    html += "  </tr>\n";
  }

  document.getElementById('card').innerHTML = html;
}

function addCustom() {
  let custom = prompt("Add Custom Tile", "");
  if (custom != null) {
    let cookie = getCookie(cookie_name);
    cookie.push([custom, "on"]);
    setCookie(cookie_name, cookie, 1000);
    document.getElementById('card').innerHTML = "";
    onLoad();
  }
}

function onLoad() {
  let board = getCookie(cookie_name);
  if (board != '') {
    tiles = board;
    numTiles = tiles.length + 1;
    numCols = 3;
  }

  setCookie(cookie_name, tiles, 1000);
  loadBoard();
}

document.addEventListener("DOMContentLoaded", function () {
  onLoad();
});