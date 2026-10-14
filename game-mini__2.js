function simpleArithmetic() {

    console.log('simpleArithmetic вызвана');

let numberOfAttempts = 0;

let numberOfCorrectAnswers = 0;

let a, b, correctAnswer, expression;

const operator = ['+', '-', '*', '/'];  

function generateTask() {
    const oper = operator[Math.floor(Math.random() * operator.length)];    
        
        if (oper === '/') {
            correctAnswer = Math.floor(Math.random() * 10) + 1;
            b = Math.floor(Math.random() * 10) + 1;   
            a = b * correctAnswer; 
        } else {
            a = Math.floor(Math.random() * 10) + 1;
            b = Math.floor(Math.random() * 10) + 1;
        }
        
        
        if (oper === '+') {
            correctAnswer = a + b;
        
        } else if (oper === '-') {
            correctAnswer = a - b;
        
        } else if (oper === '*') {
            correctAnswer = a * b;
        }

    expression = a + ' ' + oper + ' ' + b;

    // return{a, b, oper, correctAnswer, expression};
}

function askUsers() {

    console.log('askUsers вызвана');

    console.log('сейчас вызову generateTask');

    generateTask();
    
while (true){

    console.log('сейчас вызову prompt, expression =', expression);

        const answerUser = prompt(`Введите ответ на выражение ${expression}`);

        if (answerUser === null) {
            alert('Вы нажали Отмена');
            break;
        }

        if (answerUser.trim() === '') {
            alert('Вы ничего не ввели, введите число');
            continue;
        }

        let numUser = Number(answerUser);

        if (isNaN(numUser)) {
            alert('Вы ввели не цифру, введите число');
            continue;
        }

        let again;

        numberOfAttempts++;

        if (correctAnswer === numUser) {
            numberOfCorrectAnswers++;
            again = confirm('Вы ввели ответ верно. Попробуем еще?');
            if (again) {
                generateTask();
            }
        } else {
            again = confirm('Вы ввели ответ не верно. Попробуем еще?');
            
        } 

        if (!again) break;
        
    }

    alert(`Всего задач: ${numberOfAttempts}, из них правильных ответов ${numberOfCorrectAnswers}`);
}

askUsers();

}

