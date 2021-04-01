let search = document.getElementById('search'); // search bar
let nothing = document.getElementById('nothing'); // when no element matches to search bar value

nothing.style.display = 'none';

search.addEventListener('input', function () {
    let inputVal = search.value.toLowerCase();
    let elements = document.getElementsByClassName('accordion-item'); // On which we want to perform search
    let count = 0;
    Array.from(elements).forEach(function (element) {
        let searchOn = element.firstElementChild.firstElementChild.textContent.toLowerCase();
        if ((searchOn).includes(inputVal)) {
            count += 1;
            nothing.style.display = 'none';
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    })
    if (count == 0) {
        nothing.style.display = 'block';
    }
})