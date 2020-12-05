let currentDay = new Date().getDate();
let id = 'tile' + currentDay;

function addAnimation() {
    document.getElementById(id).classList.add('tile-animation');
}

function play(doorName) {
    if (currentDay <= doorName) {
        document.getElementById(id).classList.add('tile-today');
    } else {
        alert('Yesterday is history. Tomorrow is a mystery. Today is a gift!')
    }
}

function greet() {
    document.getElementById('greeting').innerHTML = 'Frohe Weihnachten!';
    changeGreeting('Frohe Feiertage!', 4000);
    changeGreeting('Happy Holidays!', 8000);
    changeGreeting('Joyeuses fêtes!', 12000);
    changeGreeting('Sărbători fericite!', 16000);

    
    setInterval(function () {
        changeGreeting('Frohe Feiertage!', 4000);
        changeGreeting('Happy Holidays!', 8000);
        changeGreeting('Joyeuses fêtes!', 12000);
        changeGreeting('Sărbători fericite!', 16000);

    }, 20000);
}

function changeGreeting(text, time) {
    setTimeout(function () {
        document.getElementById('greeting').classList.add('animate');
        document.getElementById('greeting').innerHTML = text;

        setTimeout(function () {
            document.getElementById('greeting').classList.remove('animate');
        }, 1000);
    }, time);

} 