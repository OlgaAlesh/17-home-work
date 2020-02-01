// Задание 10

let month;
day = prompt("День года","");

if(day <= 31){
    month = 1;
    console.log("Январь");
} else if(31 < day && day <=(31+28)){
    month = 2;
    console.log("Февраль");
} else if(59 <day && day <=(59+31)){
    month = 3;
    console.log("Март");
} else if(90 <day && day <=(90+30)){
    month = 4;
    console.log("Апрель");
} else if(120 <day && day <=(120+31)){
    month = 5;
    console.log("Май");
} else if(151 <day && day <=(151+30)){
    month = 6;
    console.log("Июнь");
} else if(181 <day && day <=(181+31)){
    month = 7;
    console.log("Июль");
} else if(212 <day && day <=(212+31)){
    month = 8;
    console.log("Август");
} else if(243 <day && day <=(243+30)){
    month = 9;
    console.log("Сентябрь");
} else if(273 <day && day <=(273+31)){
    month = 10;
    console.log("Октябрь");
} else if(304<day && day <=(304+30)){
    month = 11;
    console.log("Ноябрь");
} else {
    month = 12;
    console.log("Декабрь");
}

switch(month){
    case 12:
    case 1:
    case 2: 
        console.log("Зима");
    break;
    case 3:
    case 4:
    case 5:
        console.log("Весна");
    break;
    case 6:
    case 7:
    case 8:
        console.log("Лето");
    break;
    default:
        console.log("Осень");
}

