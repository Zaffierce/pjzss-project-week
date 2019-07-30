'use strict';

var foodValues = [
  'Water',
  'Canned Meat',
  'Canned Vegetables',
  'Canned Fruits',
  'Peanut Butter',
  'Jelly',
  'Protein Bars',
  'Whole Wheat Crackers',
  'Dried Fruit',
  'Sports Drinks',
  'Powdered Milk'
]
var fieldset = document.getElementById('foodFieldset');

foodValues.forEach(function (food) {
  // create checkbox
  var newCheckBox = document.createElement('input');
  newCheckBox.type = 'checkbox';
  newCheckBox.name = 'foodCheckbox';
  newCheckBox.value = food;
  // create label
  var newLabel = document.createElement('label');
  newLabel.textContent = food;
  // create span
  var newSpan = document.createElement('span');
  newSpan.textContent = 'test';
  // add checkbox and label to fieldset
  fieldset.appendChild(newCheckBox);
  fieldset.appendChild(newLabel);
  fieldset.appendChild(newSpan);

  // add click event listener for each checkbox
  newCheckBox.addEventListener('click', saveCheckState);
})
// add saved state to checkboxes after rendering checkboxes
restoreCheckState();

// called for all clicks on checkboxes (both check and uncheck events)
function saveCheckState() {
  // feeding food:value and checked:state into array
  var foodStates = [];
  var foodCheckboxes = document.getElementsByName('foodCheckbox');
  foodCheckboxes.forEach(function (foodCheckbox) {
    var x = { food: foodCheckbox.value, checked: foodCheckbox.checked };
    foodStates.push(x);
  });
  console.log(foodStates);
  localStorage.setItem('FoodState', JSON.stringify(foodStates));
}

function restoreCheckState() {
  var foodState = localStorage.getItem('FoodState')
  if (!foodState) {
    return;
  }
  foodState = JSON.parse(foodState);
  var foodCheckboxes = document.getElementsByName('foodCheckbox');
  // iterate through each checkbox in the DOM
  foodCheckboxes.forEach(function (foodCheckbox) {
    // interate through each food in saved state
    foodState.forEach(function (foodFromState) {
      // if the DOM has the same food value as the saved state food name
      if (foodCheckbox.value === foodFromState.food) {
        // change the checked status to the saved state
        foodCheckbox.checked = foodFromState.checked;
      }
    })
  })
}