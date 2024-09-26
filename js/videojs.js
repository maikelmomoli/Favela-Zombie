const arrow = document.querySelector('.arrow');
    const item = document.querySelector('.item');
    const right = document.querySelector('.right');

function toggleItem(){
    arrow.classList.toggle('active');
    item.classList.toggle('active');
    right.classList.toggle('active');
}