'use strict';

var allLocationsArray = [];
var printEl = document.getElementById('print');
// rendering variables
var submitEl = document.getElementById('zip-submit');
var ulEl = document.getElementById('locationList');
var elh2 = document.getElementById('zipcode-notification');
var invalidEl = document.getElementById('invalid-alert');
var showAllEl = document.getElementById('show-all');
var selectedValue;

function EHub(zipcode, locationArray) {
  this.zipcode = zipcode;
  this.locationArray = locationArray;
  allLocationsArray.push(this);
}

// === Instances ===
new EHub('98101', ['West Edge Hub, 1st Ave and Pike']);

new EHub('98102', ['Thomas Street Gardens P-Patch, 1010 E. Thomas St', 'Broadway Hill Park P-Patch, E. Republican St and Federal Ave E.', 'Unpaving Paradise P-Patch, E John St and Summit Ave E', 'Volunteer Park Seventh-Day Adventist Church, 1300 E Aloha', 'Eastlake Rogers Playfield, 2615 Eastlake Ave E']);

new EHub('98103', ['Bagley Elementary Hub, 7821 Stone Ave N', 'Linden Orchard P-Patch, Linden Ave N and N 67th St', 'Lower Woodland Playfields Hub, Green Lake Way N and N 50th St']);

new EHub('98105', ['Burke-Gilman Gardens P-Patch, Sand Point Way NE and NE 52nd St']);

new EHub('98106', ['High Point Juneau Garden P-Patch, 23rd Ave SW and SW Juneau St']);

new EHub('98107', ['Ross Playground, 4320 4th Ave NW']);

new EHub('98108', ['High Point Commons Park P-Patch, S Graham St and 32nd Ave S']);

new EHub('98109', ['Cascade P-Patch, Thomas St and Minor Ave N']);

new EHub('98112', ['Pelican Tea Garden P-Patch, 1909 E Roy St', 'Mad P P-Patch, 3000 E Mercer St', 'Ida Mia Garden P-Patch', 'E Madison St and Lake Washington Blvd']);

new EHub('98115', ['Picardo Farm P-Patch, 8040 25th Ave NE']);

new EHub('98116', ['Hope Lutheran Church (Alaska Junction Hub), 42nd Ave SW and SW Oregon St', 'Ercolini Park Hub, 48th Ave SW and SW Alaska St', 'Alki Community Center, 59th Ave and SW Stevens St']);

new EHub('98121', ['Belltown Sculpture Park Hub, Outside Paccar Pavilion', 'Belltown P-Patch, Elliot Ave & Vine St']);

new EHub('98125', ['Pinehurst P-Patch, 11525 12th Ave NE']);

new EHub('98122', ['Horuichi P-Patch, Boren Ave & E. Yesler Way', 'Squire Park P-Patch, 14th Ave & E Fir St', 'Immaculate P-Patch, E. Columbia St & 18th Ave', 'Spring Street P-Patch E Spring St and 25th Ave', 'Braeburn Condominum Hub, Meet in Condo Courtyard', 'Howell Coolective P-Patch, E Howell St & 16th Ave']);

new EHub('98133', ['Bitter Lake P-Patch, N 143rd St and Linden Ave N']);

new EHub('98144', ['Estelle Street P-Patch, 3400 Mt Rainier Dr S', 'Hillside Garden P-Patch, Martin Luther King Jr Way S and S McClellan St', 'Coleman Park P-Patch, 1716 32nd Ave S']);

new EHub('98178', ['Leo Farm, 51st Ave S and S Leo St']);

console.log(allLocationsArray);

// === Prototype Function - renders location array living in constructor function ===
EHub.prototype.renderList = function () {
  console.log('this is the location array within renderList', this.locationArray);
  ulEl.innerHTML = '';
  for (var j = 0; j < this.locationArray.length; j++) {
    var liEl = document.createElement('li');
    liEl.textContent = this.locationArray[j];
    ulEl.appendChild(liEl);
  }
};

function renderAllLocations() {
  for (var i = 0; i < allLocationsArray.length; i++) {
    for (var j = 0; j < allLocationsArray[i].locationArray.length; j++) {
      var liEl = document.createElement('li');
      liEl.textContent = allLocationsArray[i].locationArray[j];
      ulEl.appendChild(liEl);
    }
  }
  invalidEl.textContent = '';
  renderButton();
}


// Does actions if localStorage exists
function showPreviousZipcode() {
  if (localStorage.length > 0) {
    getLocalStorage();
    elh2.textContent = `The zipcode you chose on your last visit was ${getLocalStorage()}.`;
  } else {
    elh2.textContent = '';
  }
}

// === Functions ===

// sets print button to visible 
function renderButton() {
  printEl.style.display = 'block';
}

// sets local storage
function setLocalStorage() {
  var stringifiedData = JSON.stringify(selectedValue);
  localStorage.setItem('keyZip', stringifiedData);
}

// grabs local storage and parses it
function getLocalStorage() {
  var grabLocalStorage = localStorage.getItem('keyZip');
  var parsedLocalStorage = JSON.parse(grabLocalStorage);
  return parsedLocalStorage;
}
showPreviousZipcode();

// === Event Handler ===
function handleTextInput() {
  var validInput = false;
  selectedValue = document.getElementById('zip-input').value;
  for (var i = 0; i < allLocationsArray.length; i++) {
    var zipcode = allLocationsArray[i].zipcode;
    if (selectedValue === zipcode) {
      invalidEl.textContent = '';
      allLocationsArray[i].renderList();
      renderButton();
      setLocalStorage();
      validInput = true;
      console.log('valid input in if statement is ', validInput);
    } else if (validInput === false) {
      invalidEl.textContent = 'Please Enter A Valid Seattle Zip Code.';
    }
  }
}

submitEl.addEventListener('click', handleTextInput);
showAllEl.addEventListener('click', renderAllLocations);

