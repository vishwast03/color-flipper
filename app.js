const title = document.querySelector('title');
const optionSimple = document.querySelector('.option-simple');
const optionHex = document.querySelector('.option-hex');
const mainSection = document.querySelector('.main-section');
const colorValue = document.querySelector('.color');
const button = document.querySelector('.btn');

const colorList = ["#F1F5F8", "red", "orange", "yellow", "green", "blue", "purple", "pink", "brown", "gray"];

let mode = "simple";

optionSimple.addEventListener('click', () => {
    mode = "simple";
    title.textContent = "Color Flipper | Simple";
    optionHex.classList.remove('option-selected');
    optionSimple.classList.add('option-selected');
});

optionHex.addEventListener('click', () => {
    mode = "hex";
    title.textContent = "Color Flipper | Hex";
    optionSimple.classList.remove('option-selected');
    optionHex.classList.add('option-selected');
})

button.addEventListener('click', () => {
    if(mode == "simple") {
        let randomIdx = Math.floor(Math.random() * 10);
        mainSection.style.backgroundColor = colorList[randomIdx];
        colorValue.textContent = colorList[randomIdx].toUpperCase();
    }
    else {
        let randomHex = randomHexColorCode();
        mainSection.style.backgroundColor = randomHex;
        colorValue.textContent = randomHex.toUpperCase();
    }
});

const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };