'use strict';

// Overall goal: render a list of zipcode within form

// save zipcodes array to local storage
// pull zipcodes from local storage 
// render a list with reponses to zipcode choice

var allLocationsArray = [];

// rendering variables
var pullDown = document.getElementById('dropdown');
var ulEl = document.getElementById('locationList');
var elh2 = document.getElementById('zipcode-notification');
var selectedValue;

function EHub(zipcode, locationArray) {
  this.zipcode = zipcode;
  this.locationArray = locationArray;
  allLocationsArray.push(this);
}

new EHub('98102', ['Thomas Street Gardens P-Patch, 1010 E. Thomas St', 'Broadway Hill Park P-Patch, E. Republican St & Federal Ave E.', 'Unpaving Paradise P-Patch, E John St & Summit Ave E', 'Volunteer Park Seventh-Day Adventist Church, 1300 E Aloha', 'Eastlake Roger’s Playfield, 2615 Eastlake Ave E']);

new EHub('98122', ['Horuichi P-Patch, Boren Ave & E. Yesler Way', 'Squire Park P-Patch, 14th Ave & E Fir St', 'Immaculate P-Patch, E. Columbia St & 18th Ave', 'Spring Street P-Patch E Spring St & 25th Ave', 'Braeburn Condominum Hub, Meet in Condo Courtyard', 'Howell Coolective P-Patch, E Howell St & 16th Ave']);

console.log(allLocationsArray);


EHub.prototype.renderList = function() {
  console.log('this is the location array within renderList', this.locationArray);
  ulEl.innerHTML = '';
  for(var j = 0; j < this.locationArray.length; j++){
    var liEl = document.createElement('li');
    liEl.textContent = this.locationArray[j];
    ulEl.appendChild(liEl);
  }
};


function renderDropDown() {
  for (var i = 0; i < allLocationsArray.length; i++){
    var optionEl = document.createElement('option');
    optionEl.textContent = allLocationsArray[i].zipcode;
    //optionEl.textContent=localStorage||allLocationsArray[i].zipcode;
    console.log(i);
    optionEl.value = allLocationsArray[i].zipcode;
    pullDown.appendChild(optionEl);
  }
}

if (localStorage.length > 0){
  console.log('In if statement about local storage being greater than zero', localStorage);
  getLocalStorage();
  elh2.textContent = `The last zipcode you chose was ${getLocalStorage()}`;
}


function setLocalStorage() {
  var stringifiedData = JSON.stringify(selectedValue);
  localStorage.setItem('keyZip', stringifiedData);
}


function getLocalStorage() {
  var grabLocalStorage = localStorage.getItem('keyZip');
  var parsedLocalStorage = JSON.parse(grabLocalStorage);
  //selectedValue = parsedLocalStorage;
  return parsedLocalStorage;
}


// Event Handler
function handlePullDown() {
  console.log('inside handler');
  selectedValue = document.getElementById('dropdown').value;
  for(var i = 0; i < allLocationsArray.length; i++){
    //console.log(i, 'inside for loop of handlePullDown', selectedValue);
    //console.log('checking zipcode and selectedValue', allLocationsArray[i].zipcode);
    if (selectedValue === allLocationsArray[i].zipcode.toString()){
      
      allLocationsArray[i].renderList();
      console.log('inside if statement of selectedValue', allLocationsArray[i].locationArray);
      console.log('in pullDown onchange function');
    }
  }
  setLocalStorage();
}



// for (var i = 0; i < allLocationsArray.length; i++){
//   allLocationsArray[i].renderList();
// }

pullDown.addEventListener('change', handlePullDown);
renderDropDown();
//setLocalStorage();
