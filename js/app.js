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

function EHub(zipcode, locationArray) {
  this.zipcode = zipcode;
  this.locationArray = locationArray;
  allLocationsArray.push(this);
}

new EHub(98102, ['Thomas Street Gardens P-Patch, 1010 E. Thomas St', 'Broadway Hill Park P-Patch, E. Republican St & Federal Ave E.', 'Unpaving Paradise P-Patch, E John St & Summit Ave E', 'Volunteer Park Seventh-Day Adventist Church, 1300 E Aloha', 'Eastlake Roger’s Playfield, 2615 Eastlake Ave E']);

console.log(allLocationsArray);

