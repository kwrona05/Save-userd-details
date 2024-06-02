const nameInput = document.querySelector('.nameInput');
const surrnameInput = document.querySelector('.surrnameInput');
const jobInput = document.querySelector('.jobInput');

const header = document.querySelector('.nameHeader');
const paragraph = document.querySelector('.jobParagraph');

const btnSubmit = document.querySelector('.submit');

function saveDetails() {
    header.innerText = nameInput.value + surrnameInput.value
    paragraph.innerText = jobInput.value
};

btnSubmit.addEventListener('click', saveDetails);