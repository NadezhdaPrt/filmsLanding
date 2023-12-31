/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */


/* 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */ 

'use strict';

const promoAdv = document.querySelectorAll('.promo__adv img'),      
      background = document.querySelector('.promo__bg'),
      genre = background.querySelector('.promo__genre'),
      listOfFilms = document.querySelector('.promo__interactive-list'),
      input = document.querySelector('.adding__input'),
      addButton = document.querySelector('button');

promoAdv.forEach(item => {
    item.remove();
})
genre.textContent = 'ДРАМА';
background.style.backgroundImage = `url('img/bg.jpg')`;

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

console.log(movieDB.movies)
let list = movieDB.movies.sort();
listOfFilms.innerHTML = '';
list.forEach( (film, i) => {
    listOfFilms.innerHTML += `<li class="promo__interactive-item">${i + 1}. ${film}
    <div class="delete"></div>
</li>`;
})

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value !== '') {
    listOfFilms.innerHTML += `<li class="promo__interactive-item">1. ${input.value}
    <div class="delete"></div>`;    
    input.value = ''; 
    }   
})

