let price = Number(localStorage.getItem('price')) || 100;
let lastUpdate = Number(localStorage.getItem('lastUpdate')) || 0;
let now = Date.now();
if (now - lastUpdate > 10000) {
    price += 10;
    localStorage.setItem('price', price);
    localStorage.setItem('lastUpdate', now);
}
document.getElementById('target').innerText = price + " грн";