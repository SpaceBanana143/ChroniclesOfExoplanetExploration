const reveal = document.getElementById('mouseReveal');

let lastMouseX = 0;
let lastMouseY = 0;

document.addEventListener('mousemove', (e) =>{
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
    
   updateRevealPosition(lastMouseX, lastMouseY);
});

document.addEventListener('scroll', () => {
    updateRevealPosition(lastMouseX, lastMouseY);
});

function updateRevealPosition(x, y) {
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    reveal.style.left = `${x + scrollX -125}px`;
    reveal.style.top = `${y + scrollY - 125}px`;
}