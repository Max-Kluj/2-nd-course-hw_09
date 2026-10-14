function rockScissorsPaper() {

// const arr = ['камень', 'ножницы', 'бумага'];

// let numberOfAttempts = 0;
// let winAnswer = 0;

// function askUsers() {

//     while (true){

//         const arrAuto = arr[Math.floor(Math.random() * arr.length)];

//         const userAnswer = prompt('Введите один из вариантов своего ответа: камень, ножницы, бумага');

//         if (userAnswer === null) {
//             alert('Вы нажали Отмена');
//             break;
//         }

//         if (userAnswer.trim() === '') {
//             alert('Вы ничего не ввели. Введите один из вариантов: камень, ножницы или бумага');
//             continue;
//         }
        
//         if (userAnswer.toLowerCase() !== 'камень'  && userAnswer.toLowerCase() !== 'ножницы' && userAnswer.toLowerCase() !== 'бумага') {
//             alert('Вы ввели неправильный вариант. Введите один из вариантов своего ответа: камень, ножницы, бумага');
//             continue;
//         }

        
//         let again;

//         numberOfAttempts++;

//         if (userAnswer.toLowerCase() === arrAuto) {
            
//             again = confirm(`Компьютер сгенерировал вариант: ${arrAuto}, вы ввели вариант: ${userAnswer}. Ничья. Попробуем еще?`);
            
//         } else if (userAnswer.toLowerCase() === 'камень' && arrAuto === 'ножницы') {
//             again = confirm(`Компьютер сгенерировал вариант: ${arrAuto}, вы ввели вариант: ${userAnswer}. Вы выиграли! Попробуем еще?`);
//             winAnswer++;
//         } else if (userAnswer.toLowerCase() === 'камень' && arrAuto === 'бумага') {
//             again = confirm(`Компьютер сгенерировал вариант: ${arrAuto}, вы ввели вариант: ${userAnswer}. Вы проиграли! Попробуем еще?`);
//         } else if (userAnswer.toLowerCase() === 'ножницы' && arrAuto === 'бумага') {
//             again = confirm(`Компьютер сгенерировал вариант: ${arrAuto}, вы ввели вариант: ${userAnswer}. Вы выиграли! Попробуем еще?`);
//             winAnswer++;
//         } else if (userAnswer.toLowerCase() === 'ножницы' && arrAuto === 'камень') {
//             again = confirm(`Компьютер сгенерировал вариант: ${arrAuto}, вы ввели вариант: ${userAnswer}. Вы проиграли! Попробуем еще?`);
//         } else if (userAnswer.toLowerCase() === 'бумага' && arrAuto === 'камень') {
//             again = confirm(`Компьютер сгенерировал вариант: ${arrAuto}, вы ввели вариант: ${userAnswer}. Вы выиграли! Попробуем еще?`);
//             winAnswer++;
//         } else if (userAnswer.toLowerCase() === 'бумага' && arrAuto === 'ножницы'){
//             again = confirm(`Компьютер сгенерировал вариант: ${arrAuto}, вы ввели вариант: ${userAnswer}. Вы проиграли! Попробуем еще?`);
//         }
         
//         if (!again) break;
        
//     }

//     alert(`Всего задач: ${numberOfAttempts}, из них выигрышных ответов ${winAnswer}`);
// }

// askUsers();


const arr = ['камень', 'ножницы', 'бумага'];

let numberOfAttempts = 0;
let winAnswer = 0;

function askUsers() {

    while (true){

        const arrAuto = arr[Math.floor(Math.random() * arr.length)];

        const userAnswer = prompt('Введите один из вариантов своего ответа: камень, ножницы, бумага');

        const userChoice = userAnswer.toLowerCase();

        if (userAnswer === null) {
            alert('Вы нажали Отмена');
            break;
        }

        if (userAnswer.trim() === '') {
            alert('Вы ничего не ввели. Введите один из вариантов: камень, ножницы или бумага');
            continue;
        }
        
        if (arr.includes(userChoice) === false) {
            alert('Вы ввели неправильный вариант. Введите один из вариантов своего ответа: камень, ножницы, бумага');
            continue;
        }

        
        let again;

        numberOfAttempts++;

        if (userChoice === arrAuto) {
            
            again = confirm(`Компьютер сгенерировал вариант: ${arrAuto}, вы ввели вариант: ${userAnswer}. Ничья. Попробуем еще?`);
            
        } else if (userChoice === 'камень' && arrAuto === 'ножницы') {
            again = confirm(`Компьютер сгенерировал вариант: ${arrAuto}, вы ввели вариант: ${userAnswer}. Вы выиграли! Попробуем еще?`);
            winAnswer++;
        } else if (userChoice === 'камень' && arrAuto === 'бумага') {
            again = confirm(`Компьютер сгенерировал вариант: ${arrAuto}, вы ввели вариант: ${userAnswer}. Вы проиграли! Попробуем еще?`);
        } else if (userChoice === 'ножницы' && arrAuto === 'бумага') {
            again = confirm(`Компьютер сгенерировал вариант: ${arrAuto}, вы ввели вариант: ${userAnswer}. Вы выиграли! Попробуем еще?`);
            winAnswer++;
        } else if (userChoice === 'ножницы' && arrAuto === 'камень') {
            again = confirm(`Компьютер сгенерировал вариант: ${arrAuto}, вы ввели вариант: ${userAnswer}. Вы проиграли! Попробуем еще?`);
        } else if (userChoice === 'бумага' && arrAuto === 'камень') {
            again = confirm(`Компьютер сгенерировал вариант: ${arrAuto}, вы ввели вариант: ${userAnswer}. Вы выиграли! Попробуем еще?`);
            winAnswer++;
        } else if (userChoice === 'бумага' && arrAuto === 'ножницы'){
            again = confirm(`Компьютер сгенерировал вариант: ${arrAuto}, вы ввели вариант: ${userAnswer}. Вы проиграли! Попробуем еще?`);
        }
         
        if (!again) break;
        
    }

    alert(`Всего задач: ${numberOfAttempts}, из них выигрышных ответов ${winAnswer}`);
}

askUsers();


}