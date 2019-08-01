'use strict';

var randomFacts = [
  'The PNW was devastated by a 9.0 earthquake on January 26, 1700.',
  'Cascadia earthquakes have occured between 68 - 292 years in the last 2000 years.',
  'It has been 319 years since the last Cascadia Subduction Zone event.',
  'The Cascadia Subduction Zone is a 600-mile long fault running from northern California to British Columbia.',
  'The Cascadia Subduction Zone is between 70-100 miles off our coast.',
  'It is 37% likely that a 7.1 or greater magnitude earthquake from the Cascadia Subduction Zone will happen in the next 50 years.',
  'It is about 14% probable that a magnitude 9.0 earthquake will hit Seattle in the next 50 years.',
  'A 9.0 magnitude earthquake can last five minutes or longer.',
  'A magnitude 9.0 earthquake is 33 times stronger than an 8.0 earthquake.',
  'A magnitude 9.0 earthquake is 1,089 times stronger than a 7.0 magnitude earthquake.',
  'Big earthquakes produce aftershocks, sometimes hundreds of smaller earthquakes, for weeks to years.',
  'The largest ever recorded earthquake was a magnitude 9.5 in southern Chile on May 22, 1960.',
  'The devastating earthquake the PNW is expecting is called a megathrust earthquake.',
  'A megathrust earthquake is the most powerful earthquake our planet can produce.',
  'Coastal areas of Washington may have a water surge of 100 feet if a 9.0 magnitude earthquake occurs from the Cascadia fault.',
  'Seattle has several fault lines that can cause earthquakes.',
  'The Seattle Fault is a significant seismic hazard, secondary to the Cascadia Subduction Zone',
  'A Seattle Fault earthquake could cause a 16-foot high tsunami within seconds, that could inundate parts of Seattle within five minutes.',
  'The Seattle Fault last produced a 7.0+ magnitude earthquake',
  'Seattle has over 1100 unreinforced masonry buildings (URMs)',
  'Unreinforced masonry buildings are likely to collapse in a megathrust  earthquake.',
  'The many bridges in the Seattle area are expected to be heavily damaged in a large earthquake.',
  'Earthquake damaged bridges will prevent or reduce travel between Seattle regions for an unknown amount of time.',
  'Fires are an extremely dangerous side effect of a large earthquake.',
  'Millions of people will be impacted at once by a Cascadia or Seattle Fault event',
  'The next Cascadia earthquake may release 1500 times the seismic energy as the 2001 M 6.8 Nisqually Earthquake.',
  'The last Cascadia earthquake in 1700 was actually a connected series of extremely large earthquakes'
];


var randomIndex = Math.floor(Math.random() * (randomFacts.length-1 - 0 + 1)) + 1;
var slideIndex = randomIndex;

function renderFacts() {
  var containerEl = document.getElementById('fact-container');
  for (var i = 0; i < randomFacts.length; i++) {
    var divMyFactEl = document.createElement('div');
    divMyFactEl.setAttribute('class', 'myFact fade');
    containerEl.appendChild(divMyFactEl);
    var divMyFactTextEl = document.createElement('div');
    divMyFactTextEl.setAttribute('class', 'text');
    divMyFactTextEl.textContent = randomFacts[i];
    divMyFactEl.appendChild(divMyFactTextEl);
  }
}

function showSlides() {
  var slides = document.getElementsByClassName('myFact');
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 5000);
}

renderFacts();
showSlides();
