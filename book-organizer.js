const books = [
  {
    title: 'Властелин колец: Братство Кольца',
    authorName: 'Дж. Р. Р. Толкин',
    releaseYear: 1954
  },
  {
    title: 'Хоббит, или Туда и обратно',
    authorName: 'Дж. Р. Р. Толкин',
    releaseYear: 1937
  },
  {
    title: 'Игра престолов',
    authorName: 'Джордж Р. Р. Мартин',
    releaseYear: 1996
  },
  {
    title: 'Меч Истины: Первое правило волшебника',
    authorName: 'Терри Гудкайнд',
    releaseYear: 1994
  },
  {
    title: 'Колесо Времени: Око Мира',
    authorName: 'Роберт Джордан',
    releaseYear: 1990
  },
  {
    title: 'Эрагон',
    authorName: 'Кристофер Паолини',
    releaseYear: 2002
  },
  {
    title: 'Хроники Нарнии: Лев, Колдунья и платяной шкаф',
    authorName: 'Клайв Стейплз Льюис',
    releaseYear: 1950
  },
  {
    title: 'Имя ветра',
    authorName: 'Патрик Ротфусс',
    releaseYear: 2007
  },
  {
    title: 'Тёмные начала: Северное сияние',
    authorName: 'Филип Пулман',
    releaseYear: 1995
  },
  {
    title: 'Гарри Поттер и Философский камень',
    authorName: 'Дж. К. Роулинг',
    releaseYear: 1997
  }
];


function sortByYear (book,anotherBook) {
    if (book.releaseYear < anotherBook.releaseYear) {
        return -1;
    }
    else if (book.releaseYear > anotherBook.releaseYear) {
        return 1;
    }
    else if (book.releaseYear === anotherBook.releaseYear) {
        return 0; 
    }
}

let filteredBooks = books
    .filter(function(book) {
        return book.releaseYear <= 1950
    });

console.log(filteredBooks.sort(sortByYear));