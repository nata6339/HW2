"use strict"

console.log('------------- # 4')

let a = 10,
    b = 5;
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);

console.log('------------- # 5')

for (let i = 1; i < 6; i++) {
    console.log(i);
}

console.log('------------- # 6')

for (let c = 5; c >=1; c--) {
    console.log(c);
}

console.log('------------- # 7')

function getMarkInfo(condition) {


    if (condition === 10) {
        console.log("У вас максимальный балл");
    }

    else {

        console.log("У вас средний балл");
    }

}
getMarkInfo(10)
getMarkInfo(1)

console.log('------------- # 8')


function getDayInfo(position) {
    switch (position) {
    case 0 :
        console.log("Sunday");
        break;
    case 1 :
        console.log("Monday");
        break;
    case 2 :
        console.log("Tuesday");
        break;
    case 3 :
        console.log("Wednesday");
        break;
    case 4 :
        console.log("Thursday");
        break;
    case 5 :
        console.log("Friday");
        break;
    case 6 :
        console.log("Saturday");
        break;
    default:
        console.log("Wrong data");
        break;
    }

}
getDayInfo(0)
getDayInfo(1)
getDayInfo(2)
getDayInfo(3)
getDayInfo(4)
getDayInfo(5)
getDayInfo(6)



console.log('------------- # 9')

let newArr = ['a', 'b', 'c'];
newArr.push(1,2,3);
console.log(newArr);

console.log('------------- # 10')

const first = ['a', 'b', 'c'];
const second = [1, 2, 3];
const third = first.concat(second);
console.log(third);

console.log('------------- # 11')

let num = prompt( "Введите любое целое положительное число");

let sum = 0;

for (let i=1; i<= num; i++){
    sum = sum + i;
}
console.log(sum);
