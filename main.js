const wrapBtns = document.getElementById('wrapperButtons');
console.log(wrapBtns);

wrapBtns.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        const viewBtnText = event.target.textContent;
        alert(`Клікнуто по кнопці з назвою "${viewBtnText}"`);
    }
});