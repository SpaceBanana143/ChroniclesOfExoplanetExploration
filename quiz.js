function submit(){
    let CorrectAnswers=0;
    if (document.getElementById('correctFirst').checked) {
        CorrectAnswers+=1; 
    }
    if (document.getElementById('correctSecond').checked) {
        CorrectAnswers+=1; 
    }
    if (document.getElementById('correctThird').checked) {
        CorrectAnswers+=1; 
    }
    if (document.getElementById('correctFourth').checked) {
        CorrectAnswers+=1; 
    }
    if (document.getElementById('correctFifth').checked) {
        CorrectAnswers+=1; 
    }
    if (document.getElementById('correctSixth').checked) {
        CorrectAnswers+=1; 
    }
    if (document.getElementById('correctSeventh').checked) {
        CorrectAnswers+=1; 
    }
    if (document.getElementById('correctEight').checked) {
        CorrectAnswers+=1; 
    }
    document.getElementById('correctA').innerHTML="You got "+CorrectAnswers+"/8"+" correct"
    document.getElementById('answers').innerHTML='<h3>Correct Answers:</h3>'+
            '<b>1:</b> An exoplanet is a planet that orbits a star outside our solar system. <br>'+
            '<b>2:</b> The planets in the TRAPPIST-1 system orbit the star TRAPPIST-1. <br>'+
            '<b>3:</b> The habitable zone is the region around a star where conditions are suitable for liquid water to exist. <br>'+
            '<b>4:</b> TOI 1338 b <br>'+
            '<b>5:</b> WASP-12b is a hot Jupiter, a gas giant that orbits very close to its star. <br>'+
            '<b>6:</b> Types of exoplanets include super-Earths, hot Jupiters, Ocean Worlds, Rocky Worlds... <br>'+
            '<b>7:</b> Proxima Centauri b is the closest known exoplanet neighbor to Earth. <br>'+
            '<b>8:</b> Exoplanets with a rocky core completely covered by deep liquid oceans. <br></br>'
    document.querySelector('.score').scrollIntoView({ behavior: 'smooth' });
}
function submitH(){
    let CorrectAnswers=0;
    if (document.getElementById('correctFirst').checked) {
        CorrectAnswers+=1; 
    }
    if (document.getElementById('correctSecond').checked) {
        CorrectAnswers+=1; 
    }
    if (document.getElementById('correctThird').checked) {
        CorrectAnswers+=1; 
    }
    if (document.getElementById('correctFourth').checked) {
        CorrectAnswers+=1; 
    }
    if (document.getElementById('correctFifth').checked) {
        CorrectAnswers+=1; 
    }
    if (document.getElementById('correctSixth').checked) {
        CorrectAnswers+=1; 
    }
    if (document.getElementById('correctSeventh').checked) {
        CorrectAnswers+=1; 
    }
    if (document.getElementById('correctEight').checked) {
        CorrectAnswers+=1;
    }
    if (document.getElementById('correctNinth').checked) {
        CorrectAnswers+=1;
    }
    if (document.getElementById('correctTenth').checked) {
        CorrectAnswers+=1;
    }
    if (document.getElementById('correctEleventh').checked) {
        CorrectAnswers+=1;
    }
    if (document.getElementById('correctTwelfth').checked) {
        CorrectAnswers+=1;
    }
    document.getElementById('correctA').innerHTML="You got "+CorrectAnswers+"/12"+" correct"
    document.getElementById('answers').innerHTML='<h3>Correct Answers:</h3>'+
            '<b>1:</b> Hot Jupiters. <br>'+
            '<b>2:</b> WASP-12b <br>'+
            '<b>3:</b> Seven. <br>'+
            '<b>4:</b> Being the first exoplanet found in a habitable zone. <br>'+
            '<b>5:</b> Tiny Trio. <br>'+
            '<b>6:</b> It has a temperature of about 5,000 degrees Fahrenheit. <br>'+
            '<b>7:</b> It rains glass sideways. <br>'+
            '<b>8:</b> A gas giant. <br>'+
            '<b>9:</b> They contain silicate dust and are constantly mixing.<br>'+
            "<b>10:</b> The range where liquid water could exist on a planet's surface. <br>"+
            '<b>11:</b> OGLE-2005-BLG-390. <br>'+
            '<b>12:</b> It is much larger and hotter than Mercury. <br>'
    document.querySelector('.score').scrollIntoView({ behavior: 'smooth' });
}