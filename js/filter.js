// Фильтрация 
let filterBox = document.querySelectorAll('.block');

// filterNav - Навигация с тегами для фильтрации без doc.getElem
filterNav.addEventListener('click', (event) => {

    if (event.target.tagName !== 'P') return false;
    let filterClass = event.target.dataset['f'];
    console.log(filterClass);
    menu.classList.add('off');
    body.classList.toggle('body-off');

    filterBox.forEach(elem => {
        elem.style.display = "block";
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.style.display = "none";
        }
    });

});