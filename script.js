const languageNow = document.querySelector('.language__now');
const langOther = document.querySelector('.language__other');
languageNow.addEventListener('click', ({
    target
}) => {
    langOther.classList.toggle('active')
    target.closest('.language__now')
        .querySelector('i').classList.toggle('active')
})