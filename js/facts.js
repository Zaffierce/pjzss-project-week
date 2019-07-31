'use strict';

var randomFacts = [
  'There is a 37% chance an earthquake greater than 7.1 magnitude will occur between now and 50 years that originates from the Cascadia Subduction Zone. It’s about 14% probable that we’ll have a magnitude 9 earthquake in the next 50 years.',
  'There is a 37% chance an earthquake greater than 7.1 magnitude will occur between now and 50 years that originates from the Cascadia Subduction Zone. It’s about 14% probable that we’ll have a magnitude 9 earthquake in the next 50 years.',
  'There is a 37% chance an earthquake greater than 7.1 magnitude will occur between now and 50 years that originates from the Cascadia Subduction Zone. It’s about 14% probable that we’ll have a magnitude 9 earthquake in the next 50 years.'


  // 'Last major earthquake: On January 26, 1700, a 9.0 magnitude earthquake devasted the PNW coastal regions.',
  // 'In the past 2000 years, the longest quiet period between the nine earthquakes that occurred has been 292 years, and the shortest period has been 68 years. It has been 319 years since the last Cascadia Subduction Zone event.',
  // 'Fault: The Cascadia Subduction Zone – a 600-mile long fault running from northern California up to British Columbia. The fault is between 70-100 miles off our coast.',
  // 'There is a 37% chance an earthquake greater than 7.1 magnitude will occur between now and 50 years that originates from the Cascadia Subduction Zone. It’s about 14% probable that we’ll have a magnitude 9 earthquake in the next 50 years.',
  // 'Length of time a Cascadia earthquake could last: 2+ minutes! A 9.0 earthquake can last five minutes or longer!',
  // 'A magnitude 9.0 earthquake is 33 times stronger than an 8.0 earthquake, while a magnitude 9.0 earthquake is 1,089 times stronger than a 7.0 magnitude earthquake.',
  // 'Will there be aftershocks after the Cascadia earthquake occurs? Yes! For weeks, if not months.',
  // 'The largest ever recorded earthquake was a magnitude 9.5 in southern Chile on May 22, 1960 ... we could experience a 9.0 magnitude Cascadia event.',
  // 'The earthquake the PNW is expecting is also known as a “megathrust earthquake.” This is the most powerful earthquake our planet can produce.',
  // 'A tsunami is highly probable when the Cascadia fault shifts. The water surge could be as high as 30 meters along the coastal areas.',
  // 'A large Seattle Fault earthquake could cause a 16-foot high tsunami within seconds, that could inundate parts of Seattle within five minutes.',
  // 'Seattle has over 1100 unreinforced masonry buildings (URMs) that are likely to collapse in a megathrust  earthquake.',
  // 'There are many bridges in the Seattle area that are expected to be heavily damaged in an earthquake, which will prevent or reduce travel between Seattle regions for an unknown amount of time.',
  // 'Fires are an extremely dangerous side effect of a large earthquake.'
];

var slideIndex = 0;

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
  var i;
  var slides = document.getElementsByClassName('myFact');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1;}
  slides[slideIndex-1].style.display = 'block';
  setTimeout(showSlides, 5000);
}

renderFacts();
showSlides();
