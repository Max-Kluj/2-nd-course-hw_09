// Находим кнопку по id
const button1 = document.querySelector('#exercise-1');

// Добавляем обработчик события
const textEx1 = document.querySelector('.text1');

function delText() {
        textEx1.style.color = 'red';
        
        setTimeout(() => {
            alert('ой, сейчас исправлю...');;
        }, 1000);

        setTimeout(() => {
            textEx1.style.display = 'none';
        }, 2000);
}

function showText() {
        textEx1.style.display = '';
        textEx1.style.color = '';
    }

button1.addEventListener('click', function() {

    if (textEx1.style.display === 'none') {
        showText();
    } else {
        delText();
    }
}
);

const button2 = document.querySelector('#exercise-2');

const textEx2 = document.querySelector('.text2');

button2.addEventListener('click', function() {

    if (textEx2.style.color === 'blue') {
        textEx2.style.color = '';
    } else {
        textEx2.style.color = 'blue';
    }
    
});

const button3 = document.querySelector('#exercise-3');

button3.addEventListener('click', function() {
    
const textEx3 = document.querySelector('.text3');
textEx3.textContent = 'Привет, мир!';

});


const button4 = document.querySelector('#exercise-4');

button4.addEventListener('click', function() {
   
const textEx4 = document.querySelectorAll('.description');
textEx4.forEach(description => {
    description.textContent = 'Измененный текст согласно заданию 4';
    description.style.color = 'orangered';    
});

});    


const button5 = document.querySelector('#exercise-5');

button5.addEventListener('click', function() {
    
const textEx5 = document.querySelectorAll('.description');
textEx5.forEach(description => {
    description.textContent = 'Новый текст согласно заданию 5';
    description.style.color = 'forestgreen';
    description.style.fontWeight = '800';
    description.style.fontSize = '32px';
});

});


const button6 = document.querySelector('#exercise-6');

button6.addEventListener('click', function() {

    const newP = document.createElement('p');
    newP.textContent = 'Новый элемент';
    newP.classList.add('textEx6');
    document.body.appendChild(newP);
    newP.style.color = 'red';
    newP.style.fontSize = '32px';
    newP.style.fontWeight = '800';
    
});


const button7 = document.querySelector('#exercise-7');

button7.addEventListener('click', function() {

    const deleteP = document.querySelector('.description');
    const newTitle = document.createElement('h1');
    deleteP.before(newTitle);
    deleteP.remove();
    newTitle.textContent = 'Ниже удален параграф';
    newTitle.style.color = 'purple';
    
    
});