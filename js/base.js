    "use strict";

    // alert('Hello');

    // const result = confirm('Are you here?');

    // const answer = prompt('Вам есть 18?', 'Да');

    const answers = [];

    answers[0] = prompt('Как вас зовут?', '');
    // answers[1] = prompt('Какая фамилия?', '');
    // answers[2] = prompt('Сколько вам лет?', '');

    // console.log(typeof(answers));
    

    console.log(typeof(null));

    // document.write(answers);

    let number = 5;
    const leftBorderWidth = 1;
    
    number = 10;
    console.log(number);

    const obj = {
        a:50,
        b:20
    };

    const c = 'c';

    obj[c] = 1;

    console.log(obj['c']);

    console.log(obj.b);
    obj.a = 10;

    console.log(obj);

    console.log(imya);
    var imya = 'Maxim';

    imya = 'Name';

    // {
    //     let result = 10;
    // }
    // console.log(result);

    const category = 'toys';
    // console.log('https://someurl.com/' + category + '/' + '4' + '');
    console.log(`https://someurl.com/${category}/5`);

    const user = answers[0];

    alert(`Привет, ${user}`);


    console.log('arr' + ' - object');
    console.log(4 + ' - object');
    console.log(4 + +' - object');    //Плюс перед строкой превращает строку в числовой тип данных (унарный плюс)
    console.log(4 + +'5');


    //Инкремент и декремент
    let incr = 10;
    let decr = 10;

    // incr++;      //Постфиксная
    // decr--;

    // ++incr;      //Префиксная
    // --decr;

    console.log('Incr = ' + (++incr));
    console.log('Decr = ' + (--decr));

    console.log(5%2);

    console.log(2*4 == 8);
    console.log(2 + 2 * 2 === '8');

    const isChecked = true,
          isClose = false;

    console.log(isChecked && !isClose);
    console.log(isChecked || isClose);

    if (4 == 9) {
        console.log('okay');
    } else {
        console.log('not okay');
    }

    const num = 51;

    if (num < 49) {
        console.log('error');
    } else if (num > 100) {
        console.log('too much');
    } else {
        console.log('okay');
    }


    (num == 50) ? console.log('OK') : console.log('error');  //тернарный оператор

    switch (num) {
        case 49: 
            console.log('неверно');
            break;
        case 100:
            console.log('неверно');
            break;
        case 50:
            console.log('верно');
            break;
        default:
            console.log('не повезло');
            break;
    }
    
    const hamburger = 3;
    const fries = 3;
    const cola = 0;
    const nuggets = 2;

    if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
        console.log('Все двольны');
    } else {
        console.log('Мы уходим');
    }

    console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

    
    //Циклы

    let numb = 50;
    // while (numb <= 55) {
    //     console.log(numb);
    //     numb++;
    // }

    // do {
    //     console.log(numb);
    //     numb++;
    // }
    // while (numb <= 55);

    for (let i=0; i <= 10; i++) {
        if (i%2 === 0) {
            // break;
            continue;
        }
        console.log(i);
    }

    for (let i = 0; i <= 3; i++) {
        console.log('i = ' + i);
        for (let j = 0; j <= 3; j++) {
            console.log('j = ' + j);
        }
    }

    let result = '';

    for (let i = 0; i <= 6; i++) {
        for (let j = 0; j <= i; j++) {
            result+='*';
        }
        result += '\n';
    }

    console.log(result);

    first: for (let i = 0; i <= 3; i++) {
        console.log(`First level = ${i}`);
        for (let j = 0; j <= 3; j++) {
            console.log(`Second level = ${j}`);
            for (let k = 0; k <= 3; k++) {
                if (k === 2) {break first;}
                console.log(`Third level = ${k}`);
            }
        }
    }

    let i = 2;
    while (i <= 16) {
        if (i % 2 === 0) {
                continue;
            } 
        console.log(i);
        i++;     
    }
    