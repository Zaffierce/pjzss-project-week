'use strict';

var foodValues = [
    { name: 'Water ', amount: 21, unit: ' gallons' },
    { name: 'Canned Meat ', amount: 7, unit: ' cans' },
    { name: 'Canned Vegetables ', amount: 7, unit: ' cans' },
    { name: 'Canned Fruits ', amount: 7, unit: ' cans' },
    { name: 'Peanut Butter ', amount: 1, unit: ' jar' },
    { name: 'Jelly ', amount: 1, unit: ' jar' },
    { name: 'Protein Bars ', amount: 21, unit: ' bars' },
    { name: 'Whole Wheat Crackers ', amount: 6, unit: ' boxes' },
    { name: 'Dried Fruit ', amount: 10, unit: ' bags' },
    { name: 'Sports Drinks ', amount: 21, unit: ' bottles' },
    { name: 'Powdered Milk ', amount: 3, unit: ' boxes' },
    { name: 'Flash Light ', amount: 1, unit: ' each' },
    { name: 'Batteries ', amount: 1, unit: ' boxe(s)' },
    { name: 'Hand Cranked Radio ', amount: 1, unit: ' each' },
    { name: 'Space Blankets ', amount: 1, unit: ' each' },
    { name: 'Rain Coat ', amount: 1, unit: ' per person' },
    { name: 'Clothes ', amount: 10, unit: ' pair per person' },
    { name: 'Socks ', amount: 8, unit: ' pair per person' },
    { name: 'Boots ', amount: 1, unit: ' per person' },
    { name: 'Sanitizing Wipes ', amount: 3, unit: ' packs' },
    { name: 'Anti - bacterial Goop ', amount: 3, unit: ' packs' },
    { name: 'Toilet Paper ', amount: 2, unit: ' packs' },
    { name: 'Plastic Baggies ', amount: 3, unit: ' packs' },
    { name: 'Iodine Things ', amount: 21, unit: ' packs' },
    { name: 'Bandaides ', amount: 2, unit: ' packs' },
    { name: 'Medical Tape ', amount: 1, unit: ' pack' },
    { name: 'Antiseptic Cream ', amount: 1, unit: ' pack' },
    { name: 'Gauze ', amount: 2, unit: ' packs' },
    { name: 'Vicodin ', amount: 50, unit: ' pills' },
    { name: 'Scissors ', amount: 2, unit: ' pair' },
    { name: 'Burn Jelly ', amount: 2, unit: ' containers' },
    { name: 'Tweezers ', amount: 2, unit: ' sets' },
    { name: 'Latex Gloves ', amount: 2, unit: ' packs' },
    { name: 'Antacids ', amount: 2, unit: ' packs' },
    { name: 'Anti - diarrhea Medication ', amount: 2, unit: ' packs' }
];
var fieldset = document.getElementById('foodFieldset');

foodValues.forEach(function(food) {
        // create checkbox
        var newCheckBox = document.createElement('input');
        newCheckBox.type = 'checkbox';
        newCheckBox.name = 'foodCheckbox';
        newCheckBox.value = food;
        // create label
        var newLabel = document.createElement('label');
        newLabel.textContent = food.name;
        // create span
        var newSpan1 = document.createElement('span');
        newSpan1.textContent = food.amount;
        // create span
        var newSpan2 = document.createElement('span');
        newSpan2.textContent = food.unit;
        // add checkbox and label to fieldset
        fieldset.appendChild(newCheckBox);
        fieldset.appendChild(newLabel);
        fieldset.appendChild(newSpan1);
        fieldset.appendChild(newSpan2);

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
    foodCheckboxes.forEach(function(foodCheckbox) {
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
    foodCheckboxes.forEach(function(foodCheckbox) {
        // interate through each food in saved state
        foodState.forEach(function(foodFromState) {
            // if the DOM has the same food value as the saved state food name
            if (foodCheckbox.value === foodFromState.food) {
                // change the checked status to the saved state
                foodCheckbox.checked = foodFromState.checked;
            }
        })
    })
}

var familyFormEl = document.getElementById('familyForm');

function submitFamilySize(event) {
    event.preventDefault();
    var content = event.target.familyNumber.value;
    if (isNaN(content)) {
        alert('Please retry with a Number.')
    } else {
        console.log(content);
    }
}
familyFormEl.addEventListener('submit', submitFamilySize);