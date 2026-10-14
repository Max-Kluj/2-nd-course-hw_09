const quiz = [
           {
               question: "Какой цвет небо?",
               options: ["1. Красный", "2. Синий", "3. Зеленый"],
               correctAnswer: 2 // номер правильного ответа
           },
           {
               question: "Сколько дней в неделе?",
               options: ["1. Шесть", "2. Семь", "3. Восемь"],
               correctAnswer: 2
           },
           {
               question: "Сколько у человека пальцев на одной руке?",
               options: ["1. Четыре", "2. Пять", "3. Шесть"],
               correctAnswer: 2
           }
       ];

function startQuiz() {

let sumResult = 0

for (let i = 0; i < quiz.length; i++) {

    while(true){
        const answer = prompt(`${quiz[i].question}
Выберете номер ответа: ${quiz[i].options.join(' ')}`);
    
        if (answer === null) {
            alert('Вы нажали Отмена');
            return;
        }

        if (answer.trim() === '') {
            alert('Вы ввели не правильное значение, поэтому ответ не засчитан.');
            continue;
        }

        if (isNaN(answer)) {
            alert('Вы ввели не цифру, поэтому ответ не засчитан.');
            continue;
        }

        const num = Number(answer);

        if (num < 1 || num > quiz[i].options.length) {
            alert(`Такого варианта нет. Введите цифру от 1 до ${quiz[i].options.length}`);
            continue;
        }

        if (num === quiz[i].correctAnswer) {
            sumResult++;
        }

        break;
    }
}

alert(`Правильных ответов: ${sumResult} из 3-х`);

}