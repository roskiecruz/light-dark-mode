const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const design = document.getElementById('design_image');
const develop = document.getElementById('develop_image');
const dream = document.getElementById('dream_image');
const textBox = document.getElementById('text-box');

const whiteBG = 'rgb(255 255 255 / 50%)';
const darkBG = 'rgb(0 0 0 / 50%)';
const sun = 'fa-sun';
const moon = 'fa-moon';
const mode = '';

function sourceChanger(e, name, mode){
    e.src = `public/img/${name}_${mode}.svg`;
}

function switchMode(mode){
    if(mode === 'dark'){
        nav.style.backgroundColor = darkBG;
        textBox.style.backgroundColor = whiteBG;
        toggleIcon.children[0].textContent = `${mode.charAt(0).toUpperCase() + mode.slice(1)} Mode`;
        toggleIcon.children[1].classList.replace(sun, moon);
        sourceChanger(design, 'design', mode);
        sourceChanger(develop, 'develop', mode);
        sourceChanger(dream, 'dream', mode);
    } else {
        nav.style.backgroundColor = whiteBG;
        textBox.style.backgroundColor = darkBG;
        toggleIcon.children[0].textContent = `${mode.charAt(0).toUpperCase() + mode.slice(1)} Mode`;
        toggleIcon.children[1].classList.replace(moon, sun);
        toggleIcon.children[1].classList.add(sun);
        sourceChanger(design, 'design', mode);
        sourceChanger(develop, 'develop', mode);
        sourceChanger(dream, 'dream', mode);
    }
}

/* // Dark mode styles
function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode'; //first child of toggle-icon div
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    design.src = 'public/img/design_dark.svg';
    develop.src = 'public/img/develop_dark.svg';
    dream.src = 'public/img/dream_dark.svg';
}

// Light mode styles
function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode'; //first child of toggle-icon div
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
    design.src = 'public/img/design_light.svg';
    develop.src = 'public/img/develop_light.svg';
    dream.src = 'public/img/dream_light.svg';
} */

// Switch theme dynamically
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        localStorage.setItem('theme','dark');
        switchMode('dark');
    } else {
        document.documentElement.setAttribute('data-theme','light');
        localStorage.setItem('theme','light');
        switchMode('light');
    }
}

// Switch event listener
toggleSwitch.addEventListener('change', switchTheme);

// Check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme',currentTheme);
    switchMode(currentTheme);
    
    if (currentTheme === 'dark'){
        toggleSwitch.checked = true;
    } else {
        toggleSwitch.checked = false;
    }
}