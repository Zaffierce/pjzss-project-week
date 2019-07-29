'use strict';

// Overall goal: render a list of zipcode within form
// Create constructor function for zipcodes
// access name (zipcode), to render into dropdown menu
// presents zipcode 
// locations for each zipcode is specific to the instance
// save zipcodes array to local storage
// pull zipcodes from local storage 
// render a list with reponses to zipcode choice

var allLocationsArray = [];

// rendering variables
var pullDown = document.getElementById('dropdown');
var ulEl = document.getElementById('locationList');

function EHub(zipcode, locationArray) {
  this.zipcode = zipcode;
  this.locationArray = locationArray;
  allLocationsArray.push(this);
}

new EHub(98102, ['Thomas Street Gardens P-Patch, 1010 E. Thomas St', 'Broadway Hill Park P-Patch, E. Republican St & Federal Ave E.', 'Unpaving Paradise P-Patch, E John St & Summit Ave E', 'Volunteer Park Seventh-Day Adventist Church, 1300 E Aloha', 'Eastlake Roger’s Playfield, 2615 Eastlake Ave E']);

new EHub(98122, ['Horuichi P-Patch, Boren Ave & E. Yesler Way', 'Squire Park P-Patch, 14th Ave & E Fir St', 'Immaculate P-Patch, E. Columbia St & 18th Ave', 'Spring Street P-Patch E Spring St & 25th Ave', 'Braeburn Condominum Hub, Meet in Condo Courtyard', 'Howell Coolective P-Patch, E Howell St & 16th Ave']);

console.log(allLocationsArray);


EHub.prototype.renderList = function() {
  console.log('this is the location array within renderList', this.locationArray);
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
    console.log(i);
    optionEl.value = allLocationsArray[i].zipcode;
    pullDown.appendChild(optionEl);
  }
}




for (var i = 0; i < allLocationsArray.length; i++){
  allLocationsArray[i].renderList();
}

renderDropDown();


// event listener

