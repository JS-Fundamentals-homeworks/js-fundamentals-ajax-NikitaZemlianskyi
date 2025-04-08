// Завдання: отримання даних про користувачів 
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users 
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js 

const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const list = document.querySelector('ul.usersList');

fetch(usersUrl).then(res => res.json()).then(users => {
    for (const user of users) {
        list.innerHTML += `<li>${user.name}</li>`
    }
});



