const openModal = document.querySelector('.button1');
const closeModal = document.querySelector('.btn2');
var myModal = document.querySelector('.modal');

openModal.addEventListener('click', () => {
    myModal.style.display = 'Block';
    document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', () => {
    myModal.style.display = 'none';
});

