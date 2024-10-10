document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const popUp1 = document.getElementById('popUp1');
    const popUp2 = document.getElementById('popUp2');
    const popUp3 = document.getElementById('popUp3');
    const popUp4 = document.getElementById('popUp4');
    const nemaVreme = document.getElementById('istecenoVreme');
    const startBtn = document.getElementById('start');
    const pauseBtn = document.getElementById('pause');
    const resumeBtn = document.getElementById('resume');
    const vreme = document.getElementById('vreme');
    const displayClickedExoplanetsAndTime = document.getElementById('displayBrojIVreme');
    const navLinks = document.querySelectorAll('.popUp-leave a');
    console.log(startBtn, pauseBtn, overlay, popUp1);
    
    let myInterval;
    let time = 5 * 60;
    
    //Tajmer update funkcija:
    function updateTajmer(){
        const minutes = Math.floor(time/60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        vreme.innerHTML = `${minutes}:${seconds}`;
        time--;
        if(time < 0 ){
            clearInterval(myInterval);
            popUp3.classList.add('active');
            overlay.classList.add('active');
            nemaVreme.innerHTML += `There is no more time, but good job because you managed to find ${BrojPlaneti} exoplanets, ${starsNumber} stars and ${bananaNumber} space bananas in just 5 minutes. If you would like to learn more about the exoplanets you should check out the <a href="#" class="nemaVremeINajdeniSiteLinkovi">Exoplanets book </a> or our <a href="#" class="nemaVremeINajdeniSiteLinkovi">Fun facts about exoplanets sticky notes.</a>`;
        }
    }

    //start timer:
    function startTimer(){
        myInterval = setInterval(updateTajmer, 1000);
        // toggleOverlay();
    }

    //stop tajmer:
    function stopTimer(){
        clearInterval(myInterval);
    }

    //popUp1 on load:
    popUp1.classList.add('active');
    overlay.classList.add('active');

    startBtn.addEventListener('click', () => {
        popUp1.classList.remove('active');
        overlay.classList.remove('active');
        startTimer();
    });
    //pause kopce
    pauseBtn.addEventListener('click', () => {
        popUp2.classList.add('active');
        overlay.classList.add('active');
        stopTimer();
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        displayClickedExoplanetsAndTime.innerHTML = `You have found ${BrojPlaneti} exoplanets, and you have ${minutes}:${seconds} time left.`
        console.log('Pause button clicked');
    });
    //resume kopce
    resumeBtn.addEventListener('click', () => {
        popUp2.classList.remove('active');
        overlay.classList.remove('active');
        startTimer();
    });

    // BrojPlaneti = 32;
    // KliknaniPlaneti();
    let planeta = document.getElementsByClassName("klik");

for (let i = 0; i < planeta.length; i++){
    planeta[i].addEventListener("click", () => {
        BrojPlaneti++;
        document.getElementById("planetiBr").innerHTML = "EXOPLANETS FOUND:  " + BrojPlaneti;
        planeta[i].style.pointerEvents = "none";
        planeta[i].style.opacity = "0.8";
        KliknaniPlaneti();
    });
}
    //Najdeni se site exoplaneti popup:
    function KliknaniPlaneti(){
        if(BrojPlaneti == 32){
            popUp4.classList.add('active');
            overlay.classList.add('active');
            stopTimer();
        }
    }
        
   

let exitBtn = document.getElementsByClassName("exit");
for (let i = 0; i < exitBtn.length; i++){
    exitBtn[i].addEventListener("click", () => {
        if (confirm("Are you sure you want to exit the page? Your current progress will be lost.")){
            stopTimer();
            window.location.href = '../index.html';
            }
    });
}

    navLinks.forEach(link => {
        link.addEventListener('click', () =>{
            popUp1.classList.remove('active');
            popUp2.classList.remove('active');
            overlay.classList.remove('active');
        });
    });
    
    overlay.addEventListener('click', (e) => {
        if(e.target === overlay){
            return;
        }
    });
});


