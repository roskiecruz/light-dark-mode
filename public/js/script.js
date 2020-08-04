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
const currentTheme = localStorage.getItem('theme');

function sourceChanger(e, name, mode){
    e.src = `public/img/${name}_${mode}.svg`;
}

function switchMode(mode){
    toggleSwitch.checked = (mode === 'dark') ? true : false;
    document.documentElement.setAttribute('data-theme',mode);
    nav.style.backgroundColor = (mode === 'dark') ? darkBG : whiteBG;
    textBox.style.backgroundColor = (mode === 'dark') ? whiteBG : darkBG;
    toggleIcon.children[0].textContent = `${mode.charAt(0).toUpperCase() + mode.slice(1)} Mode`;
    (mode === 'dark') ? toggleIcon.children[1].classList.replace(sun, moon) : toggleIcon.children[1].classList.replace(moon, sun);
    sourceChanger(design, 'design', mode);
    sourceChanger(develop, 'develop', mode);
    sourceChanger(dream, 'dream', mode);
}

// Switch theme dynamically
function switchTheme(event){
    if(event.target.checked){
        localStorage.setItem('theme','dark');
        switchMode(localStorage.getItem('theme'));
    } else {
        localStorage.setItem('theme','light');
        switchMode(localStorage.getItem('theme'));
    }
}

// Switch event listener
toggleSwitch.addEventListener('change', switchTheme);

// Check local storage for theme
if (currentTheme) {
    document.documentElement.setAttribute('data-theme',currentTheme);
    switchMode(currentTheme);
}