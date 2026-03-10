for (const course of coursesArray) {
    let container = document.createElement('div');
    container.classList.add('course');
    document.body.appendChild(container);

    let titleEl = document.createElement('h2');
    titleEl.innerText = course.title;
    container.appendChild(titleEl);

    let durationEl = document.createElement('p');
    durationEl.innerText = `Duration: ${course.monthDuration} months, ${course.hourDuration} hours`;
    container.appendChild(durationEl);

    let modulesList = document.createElement('ul');
    modulesList.classList.add('modules');
    container.appendChild(modulesList);

    for (const mod of course.modules) {
        let moduleItem = document.createElement('li');
        moduleItem.innerText = mod;
        modulesList.appendChild(moduleItem);
    }
}