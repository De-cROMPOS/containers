// Оборачиваем весь код в IIFE для изоляции
(function() {
    // Функция инициализации карты
    function initMap() {
        // Создаем карту
        var myMap = new ymaps.Map('ymap', {
            center: [55.679514, 37.267847], // Координаты центра карты (Одинцово)
            zoom: 15,
            controls: ['zoomControl', 'fullscreenControl']
        });

        // Создаем метку
        var myPlacemark = new ymaps.Placemark([55.679514, 37.267847], {
            balloonContentHeader: 'Наш офис',
            balloonContentBody: 'г. Одинцово',
            balloonContentFooter: '<a href="tel:+7(777)0000000">+7 (777) 000-00-00</a>'
        }, {
            preset: 'islands#redDotIcon'
        });

        // Добавляем метку на карту
        myMap.geoObjects.add(myPlacemark);

        // Запрещаем скролл карты при скролле страницы
        myMap.behaviors.disable('scrollZoom');

        // На мобильных устройствах отключаем перетаскивание карты
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            myMap.behaviors.disable('drag');
        }
    }

    // Ждем загрузки API и DOM
    document.addEventListener('DOMContentLoaded', function() {
        // Проверяем, загружен ли API Яндекс.Карт
        if (typeof ymaps !== 'undefined') {
            ymaps.ready(initMap);
        } else {
            console.error('API Яндекс.Карт не загружен');
        }
    });
})(); 