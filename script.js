document.addEventListener('DOMContentLoaded', function () {
    const bitcoinDataContainer = document.getElementById('bitcoinData');

    // Виклик функції fetch() для отримання даних з Coindesk API
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => {
            // Перевірка на успішний статус відповіді
            if (!response.ok) {
                throw new Error('Помилка отримання даних з API');
            }
            // Повернення JSON-об'єкта для наступного обробника
            return response.json();
        })
        .then(data => {
            // Вставка отриманих даних на сторінку
            const bitcoinPrice = data.bpi.USD.rate;
            bitcoinDataContainer.textContent = `Поточна ціна Bitcoin: ${bitcoinPrice}`;
        })
        .catch(error => {
            // Обробка помилок
            console.error(error.message);
        });
});
