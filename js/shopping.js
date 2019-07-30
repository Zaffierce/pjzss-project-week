'use strict';
var checkedItems = [];
var shoppingList = document.forms['foodList'].elements['checkbox[]'];
// var valueBox = document.forms['foodList'].elements['valuebox'];
// var valueBox = document.getElementById('valuebox[]');
var valueBox = document.getElementsByClassName('valuebox');


for (var i = 0; i < valueBox.length; i++) {
    valueBox[i].addEventListener('click', doSomethingElse);
}

for (var i = 0, len = shoppingList.length; i < len; i++) {
    shoppingList[i].onclick = doSomething;
}

function doSomethingElse() {
    console.log('My value of something else is ', this.value);
    valueBox.textContent = 'Hello';
}

// access properties of checkbox clicked using 'this' keyword
function doSomething() {
    if (this.checked === true) {
        console.log('Item was checked');
        checkedItems.push(this.value);
        var jsonItems = JSON.stringify(checkedItems);
        localStorage.setItem('food', jsonItems);
        // console.log();
        //valueBox.textContent = 'Hello';
        // if checked ...
        // alert(this.value);
    }
    if (this.checked === false) {

        var index = checkedItems.indexOf(this.value);
        if (index !== -1) checkedItems.splice(index, 1);

        jsonItems = JSON.stringify(checkedItems);
        localStorage.setItem('food', jsonItems);

        var getItems = localStorage.getItem('food');
        var parseItems = JSON.parse(getItems);



        console.log('My parsed items', parseItems);
        console.log('Item was unchecked');
        console.log(checkedItems);
    }
};

//When page loads, determine if any boxes are checked by looking through an array
//If they are checked, push the value to the input tags
//allow to add or delete checked items