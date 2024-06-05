let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    if (count === 10) {
        var audio1 = new Audio('./culocolleco.wav');
        audio1.play();
    } else if (count === 20) {
        var audio1 = new Audio('./mostro.wav');
        audio1.play();
    }   else {
        var audio = new Audio('./Bocchinara.wav');
        audio.play();
    }
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
