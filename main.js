const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Selecting input and body, changing background to white or black */
const inputEl = document.querySelector('.input');
const bodyEl = document.querySelector('body');

inputEl.checked = JSON.parse(localStorage.getItem('mode'));

function updateBody() {
 if(inputEl.checked) {
  bodyEl.style.background = 'black';
  inputEl.style.color = 'white';
 } else {
  bodyEl.style.background = 'white';
  inputEl.style.color = 'purple';
 }
};

updateBody();

function updateLocalStorage() {
 localStorage.setItem('mode', JSON.stringify(inputEl.checked));
};

inputEl.addEventListener('input', () => {
 updateBody();
 updateLocalStorage();
});
/* Declaring the array of image filenames */

const imgFiles = [
 "pic1.jpg",
 "pic2.jpg",
 "pic3.jpg",
 "pic4.jpg",
 "pic5.jpg"
];

/* Declaring the alternative text for each image file */

const altText = {
 "pic1.jpg" : 'Closeup of a human eye',
 "pic2.jpg" : 'Smoke plume',
 "pic3.jpg" : 'Flowers in bloom',
 "pic4.jpg": 'Relief of Ancient Egyptian deities',
 "pic5.jpg": 'Butterfly on flat green leaf'
};

/* Looping through images */

for(const image of imgFiles) {
 const newImage = document.createElement('img');
 newImage.setAttribute('src', `images/${image}`);
 newImage.setAttribute('alt', altText[image]);
 thumbBar.appendChild(newImage);

 newImage.addEventListener('click', e => {
  displayedImage.src = e.target.src;
  displayedImage.alt = e.target.alt;
 });
};


/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
 const btnClass = btn.getAttribute('class');
 if(btnClass === 'dark') {
  btn.setAttribute('class', 'light');
  btn.textContent = 'Lighten';
  overlay.style.backgroundColor = 'rgb(0,0,0,0.5)'
 } else {
  btn.SetAttribute('class', 'dark');
  btn.textContent = 'Darken';
  overlay.style.backgroundColor = 'rgb(0,0,0,0)';
 };
});