import {getRandomColor} from './utils.js';

 export default function initApp() {
    console.log('Hello world');
    //Создаем кнопку
    const button = document.createElement('button')
    button.className='button'
    button.textContent = 'Изменить цвет страницы'
    document.body.append(button)

    //вешаем Клик на кнопку
    document.addEventListener('click',()=>{
        document.body.style.background = getRandomColor()
    })
  }