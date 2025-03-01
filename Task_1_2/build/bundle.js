
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

console.log('Hello World!');

// document.body.innerHTML=`<h1>I love JavaScript</h1><img src="./assets/Spotify_logo.jpg"/>`

const h1 = document.createElement('h1');
h1.textContent = 'I love JavaScript';
document.body.append(h1);
const IMAGE = '/assets/Spotify_logo.jpg';
const img = document.createElement('img');
img.src = IMAGE;
document.body.append(img);
