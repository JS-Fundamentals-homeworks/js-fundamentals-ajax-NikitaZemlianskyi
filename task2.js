// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

const usersURL = 'https://jsonplaceholder.typicode.com/users';

getUserButton.addEventListener('click', function () {
    fetch(usersURL)
        .then(res => res.json())
        .then(users => {
            const user = users.find(usr => usr.name === userNameInput.value);
            userCity.innerHTML = user.address.city;
        });
});

