//LOGO I DZVEZDA KLIK
let banana = document.getElementsByClassName("banana");
for (let j = 0; j < banana.length; j++){
    banana[j].addEventListener("click", () => {
        window.alert("Nope, it's a space banana, not an exoplanet!");

        banana[j].style.pointerEvents = "none";
        banana[j].style.opacity = "0.8";
        bananaNumber++;
    });
}

let star = document.getElementsByClassName("starLink");
for (let j = 0; j < star.length; j++){
    star[j].addEventListener("click", () => {
        window.alert("Nope, it's a star, not an exoplanet!");
        star[j].style.pointerEvents = "none";
        star[j].style.opacity = "0.8";
        starsNumber++;
    });
}

function pageRefresh(){
    location.reload();
};


