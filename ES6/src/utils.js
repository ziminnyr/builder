export function getRandomColor() {
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    // console.log(`rgb(${red},${green},${blue})`); 

    return `rgb(${red},${green},${blue})`;
}