function flipTheText() {

let textUser;



while (true){

    textUser = prompt('Введите текст:');

    if (textUser === null) {
            alert('Вы нажали Отмена');
            return;
        }

    if (textUser.trim() === '') {
            alert('Вы ничего не ввели, введите текст');
            continue;
        }

    const flipText = textUser.split('').reverse().join('');

    let again;

    again = confirm(`Вы ввели следующий текст: ${textUser}.\n
        Ваш перевернутый текст: ${flipText}. \n Хотите попробовать еще?`);

    if (!again) break;
}

}