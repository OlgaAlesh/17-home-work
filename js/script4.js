// Задание 7

let n= prompt("Число от 0 до 59","");
console.log(n);
if(n<=15){
    console.log("I четверть");
} else if(15<n && n<=30){
    console.log("II четверть");
} else if(30<n && n<=45){
    console.log("III четверть");
} else{
    console.log("IV четверть");
}


