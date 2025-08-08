document.addEventListener('DOMContentLoaded', function() {
    // Находим элементы
    const fullText = document.querySelector('.full-text');
    const btn = document.querySelector('.btn-sect2');

    // Проверяем, что элементы существуют (защита от ошибок)
    if (fullText && btn) {
        // Скрываем текст при загрузке
        fullText.style.display = 'none';

        // Вешаем обработчик на кнопку
        btn.addEventListener('click', function(e) {
            e.preventDefault(); // Отменяем стандартное поведение (если кнопка в форме)

            // Переключаем видимость текста
            if (fullText.style.display === 'none' || fullText.style.display === '') {
                fullText.style.display = 'block';
                btn.textContent = 'Show less';
            } else {
                fullText.style.display = 'none';
                btn.textContent = 'Learn more';
            }
        });
    }
});