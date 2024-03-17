/*
let login = prompt('Введите свой логин', '');

if (login === '' || login == null) {
    alert('Отменено')
} 

if (login === 'Админ') {
    message = 'Здравствуйте, админ'
} else if (login == 'Другое') {
    message = 'Я вас не знаю'
}
    alert(message);


if (login == 'Админ') {
    let password = prompt('Введите пароль')
        if (password == "")
            alert('Отменено')

        if (password == 'Я Главный')
            alert('Здравствуйте!')

            else alert('Неверный пароль')
 }
*/
/*
let userLogin = prompt("Введите логин");

if (userLogin == "Админ" || userLogin == "админ") {

    let userPassword = prompt("Введите пароль");

        if (userPassword = "123") {
            alert("Здравствуйте");
        } 
}
*/


let userName = prompt('Введите ваш логин');


if (userName == 'Админ' || userName == 'админ' ) {

    let userPassword = prompt('Введите пароль') 

        if (userPassword == 'Я Главный') {
            alert('Здравствуйте!')
        }
        else if (userPassword == '' || userPassword == null) {
            alert('Отмена')
        }
        else alert('Неправильный пароль')
    }

else if (userName == '' || userName == null) {
    alert('Отмена')
}

else alert('Я вас не знаю');
