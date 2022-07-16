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
