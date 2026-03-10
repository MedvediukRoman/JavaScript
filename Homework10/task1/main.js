let button = document.getElementById('button');
button.onclick = function(eve) {
    eve.preventDefault();
    let check = document.getElementById('age');
    if (Number(check.value) < 18) {
        console.log("Інформація стосується тільки для осіб 18+")
    }
    else{
        console.log("Можеш переглядати")
    }
}