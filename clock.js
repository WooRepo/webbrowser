const searchButton = document.querySelector('.searchBtn');
document.querySelector('form').addEventListener('submit', function(e) {
    var searchTerm = document.querySelector('input[name="q"]').value.trim();
    if (searchTerm === '') {
        e.preventDefault();
        
        console.log("nooor");
    }
});

startTime();

function startTime(){
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let day = today.getDay();
    let daywords = days[day];
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    document.getElementById('clockTag').innerText = 
    hours + ":" + minutes + ":" + seconds;
    setTimeout(startTime,1000);
    document.getElementById('date').innerText = daywords;

    function checkTime(i) {
        if (i < 10) {i = "0" + i};
        return i;
    }
} 

document.getElementById("github-button").onclick = function () {
window.location.replace("https://github.com/WooRepo/webbrowser"); };
