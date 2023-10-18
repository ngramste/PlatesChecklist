let cookie_name = "states-checklist";
let numCols = 3;

let data = {
  "group": [
    {
      "name": "United States",
      "score": 0,
      "plates": [
        {
          "name": "Alabama",
          "buttonState": "off"
        },
        {
          "name": "Alaska",
          "buttonState": "off"
        },
        {
          "name": "Arizona",
          "buttonState": "off"
        },
        {
          "name": "Arkansas",
          "buttonState": "off"
        },
        {
          "name": "California",
          "buttonState": "off"
        },
        {
          "name": "Colorado",
          "buttonState": "off"
        },
        {
          "name": "Connecticut",
          "buttonState": "off"
        },
        {
          "name": "Delaware",
          "buttonState": "off"
        },
        {
          "name": "Florida",
          "buttonState": "off"
        },
        {
          "name": "Georgia",
          "buttonState": "off"
        },
        {
          "name": "Hawaii",
          "buttonState": "off"
        },
        {
          "name": "Idaho",
          "buttonState": "off"
        },
        {
          "name": "Illinois",
          "buttonState": "off"
        },
        {
          "name": "Indiana",
          "buttonState": "off"
        },
        {
          "name": "Iowa",
          "buttonState": "off"
        },
        {
          "name": "Kansas",
          "buttonState": "off"
        },
        {
          "name": "Kentucky",
          "buttonState": "off"
        },
        {
          "name": "Louisiana",
          "buttonState": "off"
        },
        {
          "name": "Maine",
          "buttonState": "off"
        },
        {
          "name": "Maryland",
          "buttonState": "off"
        },
        {
          "name": "Massachusetts",
          "buttonState": "off"
        },
        {
          "name": "Michigan",
          "buttonState": "off"
        },
        {
          "name": "Minnesota",
          "buttonState": "off"
        },
        {
          "name": "Mississippi",
          "buttonState": "off"
        },
        {
          "name": "Missouri",
          "buttonState": "off"
        },
        {
          "name": "Montana",
          "buttonState": "off"
        },
        {
          "name": "Nebraska",
          "buttonState": "off"
        },
        {
          "name": "Nevada",
          "buttonState": "off"
        },
        {
          "name": "New Hampshire",
          "buttonState": "off"
        },
        {
          "name": "New Jersey",
          "buttonState": "off"
        },
        {
          "name": "New Mexico",
          "buttonState": "off"
        },
        {
          "name": "New York",
          "buttonState": "off"
        },
        {
          "name": "North Carolina",
          "buttonState": "off"
        },
        {
          "name": "North Dakota",
          "buttonState": "off"
        },
        {
          "name": "Ohio",
          "buttonState": "off"
        },
        {
          "name": "Oklahoma",
          "buttonState": "off"
        },
        {
          "name": "Oregon",
          "buttonState": "off"
        },
        {
          "name": "Pennsylvania",
          "buttonState": "off"
        },
        {
          "name": "Rhode Island",
          "buttonState": "off"
        },
        {
          "name": "South Carolina",
          "buttonState": "off"
        },
        {
          "name": "South Dakota",
          "buttonState": "off"
        },
        {
          "name": "Tennessee",
          "buttonState": "off"
        },
        {
          "name": "Texas",
          "buttonState": "off"
        },
        {
          "name": "Utah",
          "buttonState": "off"
        },
        {
          "name": "Vermont",
          "buttonState": "off"
        },
        {
          "name": "Virginia",
          "buttonState": "off"
        },
        {
          "name": "Washington",
          "buttonState": "off"
        },
        {
          "name": "West Virginia",
          "buttonState": "off"
        },
        {
          "name": "Wisconsin",
          "buttonState": "off"
        },
        {
          "name": "Wyoming",
          "buttonState": "off"
        }
      ]
    },
    {
      "name": "US Territories",
      "score": 0,
      "plates": [
        {
          "name": "District of Columbia",
          "buttonState": "off"
        },
        {
          "name": "American Samoa",
          "buttonState": "off"
        },
        {
          "name": "Guam",
          "buttonState": "off"
        },
        {
          "name": "Northern Mariana Islands",
          "buttonState": "off"
        },
        {
          "name": "Puerto Rico",
          "buttonState": "off"
        },
        {
          "name": "U.S. Virgin Islands",
          "buttonState": "off"
        }
      ]
    },
    {
      "name": "Canada",
      "score": 0,
      "plates": [
        {
          "name": "Alberta",
          "buttonState": "off"
        },
        {
          "name": "British Columbia",
          "buttonState": "off"
        },
        {
          "name": "Manitoba",
          "buttonState": "off"
        },
        {
          "name": "New Brunswick",
          "buttonState": "off"
        },
        {
          "name": "Newfoundland and Labrador",
          "buttonState": "off"
        },
        {
          "name": "Nova Scotia",
          "buttonState": "off"
        },
        {
          "name": "Ontario",
          "buttonState": "off"
        },
        {
          "name": "Prince Edward Island",
          "buttonState": "off"
        },
        {
          "name": "Quebec",
          "buttonState": "off"
        },
        {
          "name": "Saskatchewan",
          "buttonState": "off"
        }
      ]
    },
    {
      "name": "Other",
      "score": 0,
      "plates": [
        {
          "name": "+",
          "buttonState": "off"
        }
      ]
    }
  ]
};

function getCookie(cname) {
  try {
    return JSON.parse(localStorage.getItem(cname));
  }
  catch {
    return '';
  }
}

function setCookie(cname, cvalue, exdays) {
  localStorage.setItem(cname, JSON.stringify(cvalue));
}

function deleteCookie(cname) {
  localStorage.setItem(cname, '');
}

function updateScore() {
  let cookie = getCookie(cookie_name);

  cookie.group.forEach(group => {
    group.score = 0;
    group.plates.forEach(plate => {
      group.score += (plate.buttonState == "on");
    });
  });

  setCookie(cookie_name, cookie, 1000);
}

function sortGroups() {
  data.group.forEach(group => {
    group.plates.filter(plate => plate.buttonState == 'off').concat(group.plates.filter(plate => plate.buttonState == 'on'));
  });
}

function getPlate(group, plate) {
  return getCookie(cookie_name).group.filter(obj => obj.name === group)[0].plates.filter(obj => obj.name === plate);
}

function clickTile(group, plate) {
  let id = group + ":" + plate;
  let cookie = getCookie(cookie_name);

  if (getPlate(group, plate)[0].buttonState == "on") {
    document.getElementById(id).setAttribute("class", "card off");
    cookie.group.filter(obj => obj.name === group)[0].plates.filter(obj => obj.name === plate)[0].buttonState = "off";
  }
  else {
    document.getElementById(id).setAttribute("class", "card on");
    cookie.group.filter(obj => obj.name === group)[0].plates.filter(obj => obj.name === plate)[0].buttonState = "on";
  }

  setCookie(cookie_name, cookie, 1000);
  displayBoard();
}

function newBoard() {
  if (window.confirm("Are you sure you want a new board?")) {
    deleteCookie(cookie_name);
    location.reload();
  }
}

function displayBoard() {
  let html = "";

  updateScore();
  let cookie = getCookie(cookie_name);

  cookie.group.forEach(group => {
    html += "<div class='group'>";
    html +=   "<div class='progress'>";
    html +=     "<div class='name'>" + group.name + "</div>";
    html +=     "<div class='hr'></div>";
    html +=     "<div class='score'>" + group.score + "/" + (group.plates.length - (group.plates[0].name === '+')) + "</div>";
    html +=   "</div>";

    html +=   "<div class='plates'>";

    group.plates.forEach(plate => {
      let id = group.name + ":" + plate.name;
      if (plate.name === '+') {
        html += "<div id='" + id + "' class='card " + plate.buttonState + "' onclick=\"addCustom()\">" + plate.name + "</div>";
      }
      else {
        html += "<div id='" + id + "' class='card " + plate.buttonState + "' onclick=\"clickTile('" + group.name + "','" + plate.name + "')\">" + plate.name + "</div>";
      }
    });

    html +=   "</div>";

    html += "</div>";
  });

  document.getElementById('board').innerHTML = html;

}

function addCustom() {
  let custom = prompt("Add Custom Plate", "");
  if (custom != null) {
    let cookie = getCookie(cookie_name);
    cookie.group[cookie.group.length - 1].plates.push(
      {
        "name": custom,
        "buttonState": "on"
      });

    setCookie(cookie_name, cookie, 1000);
    onLoad();
  }
}

function onLoad() {
  let board = getCookie(cookie_name);
  if (board != undefined && board != '') {
    data = board;
    numCols = 3;
  }

  setCookie(cookie_name, data, 1000);
  displayBoard();
}

document.addEventListener("DOMContentLoaded", function () {
  onLoad();
});