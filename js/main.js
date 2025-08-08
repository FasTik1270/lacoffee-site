// Бургер меню(каталог) для моб версии
const burger = document.querySelector('.burger');
const nav = document.querySelector('.header-nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Скролл для About us
document.getElementById('link1').addEventListener('click', function(e) {
    e.preventDefault(); // отменяем стандартный прыжок

    document.querySelector('#sect2').scrollIntoView({
        behavior: 'smooth'  // плавная прокрутка
    });
});

// Скролл для Contacts
document.getElementById('link2').addEventListener('click', function(e) {
    e.preventDefault(); // отменяем стандартный прыжок

    document.querySelector('#sect5').scrollIntoView({
        behavior: 'smooth'  // плавная прокрутка
    });
});

// Скролл для Coffee
document.getElementById('link3').addEventListener('click', function(e) {
    e.preventDefault(); // отменяем стандартный прыжок

    document.querySelector('#card1').scrollIntoView({
        behavior: 'smooth'  // плавная прокрутка
    });
});

// Скролл для Coffee
document.getElementById('link4').addEventListener('click', function(e) {
    e.preventDefault(); // отменяем стандартный прыжок

    document.querySelector('#card2').scrollIntoView({
        behavior: 'smooth'  // плавная прокрутка
    });
});
// Скролл для Coffee
document.getElementById('link5').addEventListener('click', function(e) {
    e.preventDefault(); // отменяем стандартный прыжок

    document.querySelector('#card3').scrollIntoView({
        behavior: 'smooth'  // плавная прокрутка
    });
});

// Скролл для Coffee
document.getElementById('link6').addEventListener('click', function(e) {
    e.preventDefault(); // отменяем стандартный прыжок

    document.querySelector('#card4').scrollIntoView({
        behavior: 'smooth'  // плавная прокрутка
    });
});


