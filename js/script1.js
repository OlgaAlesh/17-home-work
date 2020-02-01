// Задание 1

let name,
    age,
    city,
    phone,
    email, 
    company;
name = prompt("Ваше имя", "Иван Иванов");
age = prompt("Ваш возраст", "25");
city = prompt("Город проживания","Минск");
phone = prompt("Ваш номер телефона", "+375 ХХ ХХХ ХХ ХХ");
email = prompt("Ваш e-mail", "");
company = prompt("Название компании", "X");

document.write("Меня зовут " +name+". Мне "+ age + " лет. Я проживаю в городе " + city + " и работаю в компании " + company + ". Мои контактные данные: "+ phone + ", "+ email + ".<br \/><br \/>");


// Задание 2

let year = 2020 - age;  // не точно. т.к. неизвестна дата рождения

document.write(name + " родился в " + year + " году. <br\/>");