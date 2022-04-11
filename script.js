function changeMode(){
    changeClasses();
    changeText();
}

function changeClasses(){
    button.classList.toggle(DMC);
    h1.classList.toggle(DMC);
    body.classList.toggle(DMC);
    footer.classList.toggle(DMC);
}

function changeText() {
    const LightMode = "Light Mode";
    const darkMode = "Dark Mode";

    if (body.classList.contains(DMC)){
        button.innerHTML = "Light Mode";
        h1.innerHTML = DMC + " ON";
        return;
    }

    button.innerHTML = "Dark mode";
    h1.innerHTML = LightMode + " ON";
}

const DMC = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];


button.addEventListener('click', changeMode);
