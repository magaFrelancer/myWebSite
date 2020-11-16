//languege
const languageNow = document.querySelector('.language__now');
const langOther = document.querySelector('.language__other');
languageNow.addEventListener('click', () => {
    langOther.classList.toggle('active');
    languageNow.querySelector('i').classList.toggle('active');
})

//slider

const img = document.querySelectorAll('.slider__imgs-item');
let index = 0;

setInterval(() => {
    img.forEach(item => item.classList.remove('active'))
    index++;
    if (index > img.length - 1) index = 0;
    else {
        index = img.length - 1;
    }
    img[index].classList.add('active')
}, 3000);