// addons2.js
// Скрипт для отправки второй формы и показа ошибок (без автозаполнения)
window.addEventListener('DOMContentLoaded', function() {
    var sendBtn = document.getElementById('ior44ezl7_0');
    if (!sendBtn) return;

    sendBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Получаем значения полей второй формы
        var phone = document.getElementById('i0imhm0vg_0')?.value.trim();
        var mail = document.getElementById('ia81rclki_0')?.value.trim();
        var agree = document.getElementById('iwgq80l2d_0')?.checked;
        var comment = document.getElementById('i69q0uewv_0')?.value.trim();

        // Не отправляем на сервер, если обязательные поля не заполнены
        if (!phone || !mail || !agree) {
            return;
        }

        var payload = {
            phonenumber: phone,
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
                document.getElementById('i0imhm0vg_0').value = '';
                document.getElementById('ia81rclki_0').value = '';
                document.getElementById('i69q0uewv_0').value = '';
                document.getElementById('iwgq80l2d_0').checked = false;
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
}); 