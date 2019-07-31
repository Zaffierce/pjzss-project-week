'use strict';

var navBarItems = [
  { link: "index.html" , title: "Home Page" },
  { link: "shoppinglist.html" , title: "Preparation List" },
  { link: "location.html" , title: "E-hub Finder" },
  { link: "resources.html" , title: "Additional Resources" },
  { link: "aboutus.html" , title: "About Us" },
];


var navBarEl = document.getElementById('navBar');

function renderNav() {
  var navLogoEl = document.createElement('div');
  navBarEl.appendChild(navLogoEl);
  var navLogoImg = document.createElement('img');
  // navLogoImg.setAttribute('src', 'img/logo.png');
  navLogoEl.appendChild(navLogoImg);
  var ulEl = document.createElement('ul');
  navLogoEl.appendChild(ulEl);
  for (var i = 0; i < navBarItems.length; i++) {
    var liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    var aEl = document.createElement('a');
    aEl.setAttribute('href', navBarItems[i].link);
    aEl.textContent = navBarItems[i].title;
    liEl.appendChild(aEl);
  }
}

renderNav();
