let currentDay = new Date().getDate();
let id = 'tile' + currentDay;



function play(doorName) {
    if (currentDay <= doorName) {
        document.getElementById(id).classList.add('tile-today');
    } else {
        alert('Yesterday is history. Tomorrow is a mystery. Today is a gift!')
    }
}

function greet() {
    document.getElementById('greeting').innerHTML = 'Frohe Weihnachten';

    changeGreeting('Frohe Feiertage', 6000);
    changeGreeting('Happy Holidays ', 12000);
    changeGreeting('Joyeuses fêtes ', 18000);
}

function changeGreeting(time) {
    setTimeout(function () {
        document.getElementById('greeting').classList.add('animate');

        setTimeout(function () {
            document.getElementById('greeting').classList.remove('animate');
        }, 1000);
    }, time);

        setTimeout(function(){
            greet();
        },8000);
} 