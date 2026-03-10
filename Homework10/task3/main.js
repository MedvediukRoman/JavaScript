const users = [];

for(let i = 0; i < 100; i++) {
    const user = {
        id: i,
        name: `User №${i + 1}`
    }
    users.push(user);
}

let div = document.getElementById('wrapper');
let currentPage = 0;

let pagination = function (array) {
    div.innerHTML = '';
    const start = currentPage * 10;
    const end = start + 10;
    const UsersTen = array.slice(start, end);

    for(let user of UsersTen) {
        const pElem = document.createElement('p');
        pElem.innerHTML = `ID: ${user.id}, Name: ${user.name}`;
        div.appendChild(pElem);
    }
}

pagination(users);

const form = document.forms.buttons;

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const clickedButton = event.submitter;

    if (clickedButton.value === 'next') {
        if((currentPage + 1) * 10 <= users.length) {
            currentPage++;
            pagination(users);
        }
    }else if (clickedButton.value === 'prev') {
        if(currentPage > 0) {
            currentPage--;
            pagination(users);
        }
    }
});