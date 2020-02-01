// Задание 9

let numDay = prompt("Число дней","");

numDay>=365 ? console.log(numDay/365 + " лет") : console.log("Меньше года");

numDay>=31 ? console.log(numDay/31 + " месяцев") : console.log("Меньше месяца");

numDay>=7 ? console.log(numDay/7 + " недель") : console.log("Меньше недели");

console.log(numDay*24 + " час.");
console.log(numDay*24*60 + " минут");
console.log(numDay*24*60*60 + " секунд");