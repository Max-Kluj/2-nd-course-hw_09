function guessNumber() {

let numRandom = Math.floor(Math.random() * 100 + 1);

let numberOfAttempts = 0;

let numUser;

let numUserN;


//     


while (true){
        numUser = prompt('Введите число от 0 до 100');

        if (numUser === null) {
            alert('Вы нажали Отмена');
            return;
        }

        if (numUser.trim() === '') {
            alert('Вы ввели не правильное значение, введите цифру от 0 до 100.');
            continue;
        }

        numUserN = Number(numUser);
        
        if (isNaN(numUserN)) {
            alert('Вы ввели не цифру, введите цифру от 0 до 100.');
            continue;
        }

        if (numUserN < 1 || numUserN > 100) {
            alert(`Такого варианта нет. Введите цифру от 1 до 100`);
            continue;
        }

        numberOfAttempts++;

        if (numUserN > numRandom) {
            alert('Загаданное число меньше');
        } else if (numUserN < numRandom) {
            alert('Загаданное число больше');
        } else if(numUserN === numRandom) {
            alert(`Вы угадали! Попыток: ${numberOfAttempts}.`);
            break;
        }
   
    }

}

