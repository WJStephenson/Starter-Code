const button = document.getElementById('theme-button');
const lightModeIcon = `<i class="fa-regular fa-sun"></i>`;
const darkModeIcon = `<i class="fa-regular fa-moon"></i>`;
const darkColors = [`#ff8a00`,
    `#fff`,
    `#13071c`,
    `#1a0725`];
const lightColors = [`#ff8a00`,
    `#fff`,
    `#fff`,
    `#E6E6E6`];

button.addEventListener('click', () => {
    setTheme();
});

window.addEventListener('load', () => {  
    let mode = sessionStorage.getItem('mode');
    if (mode === null) {
        mode = 'dark';
        setDarkMode();
    } else if (mode === 'dark') {
        setDarkMode();
    } else {
        setLightMode();
    }
});

function setTheme() {
    let mode = sessionStorage.getItem('mode');
    if (mode === 'dark') {
        console.log('currently dark, switching to light');
        setLightMode();
    } else {
        console.log('currently light, switching to dark');
        setDarkMode();
    }
}

function setDarkMode() {
    console.log('setting dark');
    sessionStorage.setItem('mode', 'dark');
    document.documentElement.style.setProperty('--primary-text', darkColors[0]);
    document.documentElement.style.setProperty('--secondary-text', darkColors[1]);
    document.documentElement.style.setProperty('--primary-bg', darkColors[2]);
    document.documentElement.style.setProperty('--secondary-bg', darkColors[3]);
    button.innerHTML = darkModeIcon;
}

function setLightMode() {
    console.log('setting light');
    sessionStorage.setItem('mode', 'light');
    document.documentElement.style.setProperty('--primary-text', lightColors[0]);
    document.documentElement.style.setProperty('--secondary-text', lightColors[1]);
    document.documentElement.style.setProperty('--primary-bg', lightColors[2]);
    document.documentElement.style.setProperty('--secondary-bg', lightColors[3]);
    button.innerHTML = lightModeIcon;
}