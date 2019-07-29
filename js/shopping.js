'use strict';
var testButton = document.getElementById('submit');
// var formFood = document.getElementById('foodList');



// formFood.addEventListener('click', testData);

// function testData(event) {
//   event.preventDefault();
//   console.log(event.target.input.value);
//   console.log('I am being clicked');
// }


// formFood.addEventListener('onclick', checkOff);

// function checkOff() {
//   var checkBox = document.getElementById('checkbox');
//   if (checkBox.checked === true) {
//     console.log('True');
//   }
// }


function save(event) {
  var checkbox = document.getElementById('checkbox');
  var value = event.target.checkbox.value;
  console.log(value)
  localStorage.setItem('checkbox', checkbox.checked);
}

// testButton.addEventListener('click', save);
// function save(){
//    var checkbox = document.getElementById('checkbox1zaal1');
//    if(document.getElementById('checkbox1zaal1').checked) {
//        localStorage.setItem('checkbox1zaal1', true);
//    }
// }
// function load(){
//    var checked = localStorage.getItem('checkbox1zaal1');
//    if (checked == true) {
//        document.getElementById("checkbox1zaal1").setAttribute('checked','checked');
//    }
// }
// function wis(){
//    location.reload();
//    localStorage.clear()
// }
// </script>
// <body onload="load()">
// <input type="button" id="ReserveerButton1" value="save" onclick="save()"/>
// <input type="button" id="Wisbutton1" value="delete" onclick="wis()"/>
// <input type="checkbox" id="checkbox1zaal1">1e film van de dag</input>
// </body>