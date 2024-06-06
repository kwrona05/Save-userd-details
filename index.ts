const nameInput: HTMLInputElement | null = document.querySelector('.nameInput');
const surrnameInput: HTMLInputElement | null = document.querySelector('.surrnameInput');
const jobInput: HTMLInputElement | null = document.querySelector('.jobInput');

const header: HTMLHeadElement | null = document.querySelector('.nameHeader');
const paragraph: HTMLParagraphElement | null = document.querySelector('.jobParagraph');

const btnSubmit: HTMLButtonElement | null = document.querySelector('.submit');

function saveDetails() {
    if (header && paragraph) {
    header.textContent = nameInput?.value + ' ' + surrnameInput?.value
    paragraph.textContent = jobInput?.value
    }
};

btnSubmit?.addEventListener('click', saveDetails);