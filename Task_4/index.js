import './index.css';
import IMAGE from './assets/Spotify_logo.jpg';

console.log('Hello World!');

// document.body.innerHTML=`<h1>I love JavaScript</h1><img src="./assets/Spotify_logo.jpg"/>`

const h1 = document.createElement('h1')
h1.textContent = 'I love JavaScript';
document.body.append(h1)

// const IMAGE = '/assets/Spotify_logo.jpg'
const img = document.createElement('img')
img.src = IMAGE
document.body.append(img)