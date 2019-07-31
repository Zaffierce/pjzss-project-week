'use strict';
var foodValues = [
    { category: 'Food', name: 'Water', amount: 20, unit: 'gallons' },
    { category: 'Food', name: 'Canned Meat', amount: 7, unit: 'cans' },
    { category: 'Food', name: 'Canned Vegetables', amount: 7, unit: 'cans' },
    { category: 'Food', name: 'Canned Fruits', amount: 7, unit: 'cans' },
    { category: 'Food', name: 'Peanut Butter', amount: 1, unit: 'jar' },
    { category: 'Food', name: 'Jelly', amount: 1, unit: 'jar' },
    { category: 'Food', name: 'Protein Bars', amount: 21, unit: 'bars' },
    { category: 'Food', name: 'Whole Wheat Crackers', amount: 6, unit: 'boxes' },
    { category: 'Food', name: 'Dried Fruit', amount: 10, unit: 'bags' },
    { category: 'Food', name: 'Sports Drinks', amount: 21, unit: 'bottles' },
    { category: 'Food', name: 'Powdered Milk', amount: 3, unit: 'boxes' },
    { category: 'Emergency Equipment', name: 'Flash Light', amount: 1, unit: 'each' },
    { category: 'Emergency Equipment', name: 'Batteries', amount: 1, unit: 'box' },
    { category: 'Emergency Equipment', name: 'Hand Cranked Radio', amount: 1, unit: 'each' },
    { category: 'Emergency Equipment', name: 'Space Blankets', amount: 1, unit: 'each' },
    { category: 'Emergency Equipment', name: 'Rain Coat', amount: 1, unit: 'per person' },
    { category: 'Emergency Equipment', name: 'Clothes', amount: 10, unit: 'pair per person' },
    { category: 'Emergency Equipment', name: 'Socks', amount: 8, unit: 'pair per person' },
    { category: 'Emergency Equipment', name: 'Boots', amount: 1, unit: 'per person' },
    { category: 'Emergency Equipment', name: 'Sanitizing Wipes', amount: 3, unit: 'packs' },
    { category: 'Emergency Equipment', name: 'Anti - bacterial Goop', amount: 3, unit: 'packs' },
    { category: 'Emergency Equipment', name: 'Toilet Paper', amount: 2, unit: 'packs' },
    { category: 'Emergency Equipment', name: 'Plastic Baggies', amount: 3, unit: 'packs' },
    { category: 'Emergency Equipment', name: 'Iodine Things', amount: 21, unit: 'packs' },
    { category: 'Medical Supplies', name: 'Bandaides', amount: 2, unit: 'packs' },
    { category: 'Medical Supplies', name: 'Medical Tape', amount: 1, unit: 'pack' },
    { category: 'Medical Supplies', name: 'Antiseptic Cream', amount: 1, unit: 'pack' },
    { category: 'Medical Supplies', name: 'Gauze', amount: 2, unit: 'packs' },
    { category: 'Medical Supplies', name: 'Vicodin', amount: 50, unit: 'pills' },
    { category: 'Medical Supplies', name: 'Scissors', amount: 2, unit: 'pair' },
    { category: 'Medical Supplies', name: 'Burn Jelly', amount: 2, unit: 'containers' },
    { category: 'Medical Supplies', name: 'Tweezers', amount: 2, unit: 'sets' },
    { category: 'Medical Supplies', name: 'Latex Gloves', amount: 2, unit: 'packs' },
    { category: 'Medical Supplies', name: 'Antacids', amount: 2, unit: 'packs' },
    { category: 'Medical Supplies', name: 'Anti - diarrhea Medication', amount: 2, unit: 'packs' }
];

function renderList() {
    var items = document.getElementById('items');
    var newTable = document.createElement('table');
    items.appendChild(newTable);
    var savedCategory;
    foodValues.forEach(function(food) {
        if (savedCategory !== food.category) {
            //new table row 1
            var newTableRow1 = document.createElement('tr');
            newTable.appendChild(newTableRow1);
            var newTableHeader1 = document.createElement('th');
            newTableRow1.appendChild(newTableHeader1);

            var newTableHeader2 = document.createElement('th');
            newTableHeader2.textContent = food.category
            newTableRow1.appendChild(newTableHeader2);

            var newTableHeader3 = document.createElement('th');
            newTableRow1.appendChild(newTableHeader3);

            savedCategory = food.category;
        }

        var newTableRow = document.createElement('tr');
        newTable.appendChild(newTableRow);
        var newTableData1 = document.createElement('td');
        newTableRow.appendChild(newTableData1);
        //create the checkbox
        var newCheckBox = document.createElement('input');
        newCheckBox.type = 'checkbox';
        newCheckBox.name = 'foodCheckbox';
        newCheckBox.value = food.name;
        newTableData1.appendChild(newCheckBox);
        //create the span
        var newTableData2 = document.createElement('td');
        newTableData2.textContent = food.name
        newTableRow.appendChild(newTableData2);

        var newTableData3 = document.createElement('td');
        newTableData3.textContent = `${food.amount} ${food.unit}`;
        newTableRow.appendChild(newTableData3);

        newCheckBox.addEventListener('click', saveCheckState);

    });
}



function createUpdatedShoppingNumber(quantity) {
    var foodCheckboxes = document.getElementsByName('foodCheckbox');
    // iterate through each checkbox in the DOM
    foodCheckboxes.forEach(function(foodCheckbox) {
        // interate through each food in saved state
        foodValues.forEach(function(foodValue) {
            // if the DOM has the same food value as the saved state food name
            if (foodCheckbox.value === foodValue.name) {
                // change the checked status to the saved state
                // set the value of the td 2 to the right, to quantity * user input
                var newFoodValue = foodValue.amount * quantity;
                foodCheckbox.parentNode.parentNode.lastElementChild.textContent = `${newFoodValue} ${foodValue.unit}`;

            }
        })
    })
}

renderList();
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
    var quantity = event.target.familyNumber.value;
    if (isNaN(quantity)) {
        alert('Please retry with a Number.');
    } else {
        console.log(quantity);
        createUpdatedShoppingNumber(quantity);
    }
}
familyFormEl.addEventListener('submit', submitFamilySize);