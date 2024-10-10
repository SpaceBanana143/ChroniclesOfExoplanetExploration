function randomPozicija(){
    const planeti = document.querySelectorAll('.random');
    const container = document.querySelector('.planetiClickable');
    const containerW = container.offsetWidth;
    const containerH = container.offsetHeight;
    const pozicii = [];

    planeti.forEach(planeta =>{
        let randomX, randomY, overlap;
        const planetaW = planeta.offsetWidth;
        const planetaH = planeta.offsetHeight;

    do{
        randomX = Math.floor(Math.random() * (containerW - planetaW));
        randomY = Math.floor(Math.random() * (containerH - planetaH));

        overlap = pozicii.some(pos => {
            const distancaX = pos.x - randomX;
            const distancaY = pos.y - randomY;
            const distanca = Math.sqrt(distancaX * distancaX + distancaY * distancaY);
            return distanca < planetaW;
        });
    }while(overlap);

    planeta.style.left = `${randomX}px`;
    planeta.style.top = `${randomY}px`;
    pozicii.push({ x: randomX, y: randomY });
    });
}
document.addEventListener('DOMContentLoaded', (e) => {
    randomPozicija();
});