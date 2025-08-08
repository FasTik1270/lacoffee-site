const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Запускаем автослайд каждые 5 секунд
setInterval(nextSlide, 3000);

// Показываем первый слайд сразу
showSlide(currentIndex);

// Настройка модалки с проверкой элементов
function setupModal(openSelector, modalId, closeClass) {
  const openButtons = document.querySelectorAll(openSelector); // Все кнопки с этим классом/ID
  const modal = document.getElementById(modalId);
  const closeBtn = document.querySelector(closeClass);

  if (openButtons.length > 0 && modal) {
    openButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }

    // Закрытие по клику вне модалки
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
}

// Инициализация всех модалок при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  // Модалка входа (открывается по классу .btn-login)
  setupModal('.btn-login', 'modal', '.close');

  // Модалка контактов (только для index.html)
  setupModal('#openModal2', 'modal2', '.close2');

  // Модалки для menu.html
  setupModal('#a1-modal', 'modal4', '.close4'); // Восстановление пароля
  setupModal('#a2-modal', 'modal3', '.close3'); // Регистрация
});


