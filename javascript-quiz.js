// Массив вопросов для викторины: каждый объект содержит категорию, текст вопроса, варианты ответов и правильный ответ

const questions = [
  {
    category: "Переменные",
    question: "Какое ключевое слово используется для объявления переменной, значение которой можно менять?",
    choices: ["const", "let", "function"],
    answer: "let"
  },
  {
    category: "Типы данных",
    question: "Какой тип данных возвращает выражение typeof 123?",
    choices: ["number", "string", "boolean"],
    answer: "number"
  },
  {
    category: "Строки",
    question: "Какой метод используется для получения длины строки в JavaScript?",
    choices: ["size", "length", "count"],
    answer: "length"
  },
  {
    category: "Массивы",
    question: "Какой метод добавляет новый элемент в конец массива?",
    choices: ["push", "pop", "shift"],
    answer: "push"
  },
  {
    category: "Функции",
    question: "Какое ключевое слово используется для объявления обычной функции?",
    choices: ["fun", "def", "function"],
    answer: "function"
  }
];

// Выбирает случайный вопрос из переданного массива вопросов
const getRandomQuestion = (questionsArray) => {
    // Генерируем случайный индекс от 0 до (длина массива - 1)
  let randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

// Выбирает случайный вариант ответа из массива choices конкретного вопроса
const getRandomComputerChoice = (choicesArray) => {
    // choicesArray — это question.choices (3 варианта ответа)
  let randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}


// Сравнивает выбор компьютера с правильным ответом и возвращает результат
// questionObject — объект вопроса с полем answer
// computerChoice — строка, выбранная компьютером из question.choices
const getResults = (questionObject,computerChoice) => {
  let correctAnswer = questionObject.answer
  if (computerChoice === correctAnswer) {
    return "The computer's choice is correct!"
  }
  else {
    return `The computer's choice is wrong. The correct answer is: ${correctAnswer}`;
  }
}

// Проверка
// 1. Получаем случайный вопрос
const randomQuestion = getRandomQuestion(questions);
console.log("Вопрос:", randomQuestion.question);
// 2. Компьютер делает выбор
const computerChoice = getRandomComputerChoice(randomQuestion.choices);
console.log("Компьютер выбрал:", computerChoice);
// 3. Результат
console.log(getResults(randomQuestion, computerChoice));