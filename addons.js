// addons.js
// Скрипт для отправки формы и показа ошибок
window.addEventListener('DOMContentLoaded', function() {
    var sendBtn = document.getElementById('i5saxp12k_0');
    if (!sendBtn) return;

    // Функция показать ошибку
    function showError(errorElement) {
        if (errorElement) {
            errorElement.classList.remove('is-removed');
        }
    }
    // Функция скрыть ошибку
    function hideError(errorElement) {
        if (errorElement) {
            errorElement.classList.add('is-removed');
        }
    }

    sendBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Получаем значения полей
        var phone = document.getElementById('ilb0lfylv_0')?.value.trim();
        var mail = document.getElementById('ihazd3rnw_0')?.value.trim();
        var agree = document.getElementById('i42wx0z6u_0')?.checked;
        var name = document.getElementById('ibd9gdm5c_0')?.value.trim();
        var comment = document.getElementById('i85063ziw_0')?.value.trim();

        // Блоки ошибок
        var phoneError = document.getElementById('isht2zjk8_0');
        var mailError = document.getElementById('ifa4a825r_0');
        var checkboxError = document.getElementById('i6z8r8b76_0');

        // Сброс ошибок
        hideError(phoneError);
        hideError(mailError);
        hideError(checkboxError);

        var hasError = false;
        if (!phone) {
            showError(phoneError);
            hasError = true;
        }
        if (!mail) {
            showError(mailError);
            hasError = true;
        }
        if (!agree) {
            showError(checkboxError);
            hasError = true;
        }
        if (hasError) return;

        var payload = {
            phonenumber: phone,
            name: name || '',
            mail: mail,
            comment: comment || ''
        };

        fetch('http://localhost:8088/send-mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(async function(response) {
            if (response.ok) {
                alert('Данные успешно отправлены!');
                // Очищаем форму
                document.getElementById('ilb0lfylv_0').value = '';
                document.getElementById('ibd9gdm5c_0').value = '';
                document.getElementById('ihazd3rnw_0').value = '';
                document.getElementById('i85063ziw_0').value = '';
                document.getElementById('i42wx0z6u_0').checked = false;
            } else {
                let data = {};
                try {
                    data = await response.json();
                } catch (e) {}
                if (data.errors) {
                    let messages = [];
                    if (data.errors.phonenumber) {
                        messages.push(data.errors.phonenumber);
                    }
                    if (data.errors.mail) {
                        messages.push(data.errors.mail);
                    }
                    if (messages.length > 0) {
                        alert(messages.join('\n'));
                    } else {
                        alert('Ошибка при отправке данных.');
                    }
                } else {
                    alert('Ошибка при отправке данных.');
                }
            }
        })
        .catch(function(error) {
            alert('Ошибка соединения: ' + error);
        });
    });

    // Открытие формы по клику на карточку контейнера (отменяем переход по ссылке и всегда открываем форму)
    var containerCards = document.querySelectorAll('.list__item--u-i98suif6b');
    var popup = document.getElementById('i08eth00c_0');
    if (popup && containerCards.length) {
        containerCards.forEach(function(card) {
            card.addEventListener('click', function(e) {
                var link = e.target.closest('a');
                if (link) {
                    e.preventDefault();
                }
                popup.classList.remove('is-removed');
                popup.style.display = 'block';

                // Динамическое определение типа контейнера для комментария
                var typeElem = card.querySelector('.text--u-ir056f1uk .text-block-wrap-div');
                var commentInput = document.getElementById('i85063ziw_0');
                if (commentInput && typeElem) {
                    commentInput.value = 'Интересует контейнер: ' + typeElem.textContent.trim();
                }
            });
        });
    }
}); 