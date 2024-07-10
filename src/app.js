import {getRandomColor} from "./utils";

export default function initApp() {
    const buttonRandomColor = document.createElement('button');
    buttonRandomColor.className = 'button';
    buttonRandomColor.textContent = 'Изменить цвет страницы';

    document.body.append(buttonRandomColor);

    buttonRandomColor.addEventListener('click', ()=>{
        const randomColor = getRandomColor();
        document.body.style.background = randomColor;
    })
}