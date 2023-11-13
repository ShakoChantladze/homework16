1
let numberArray = [4, 7, 15, 44, 89];
let sum = 0;
for (let i = 0; i < numberArray.length; i++) {
  sum += numberArray[i];
}
console.log(sum);

2
let users = [
    { 
        name: "Lewis", 
        age: 25, 
        address: "Robakidze Ave"
    },
    { 
        name: "Emily", 
        age: 23, 
        address: "Rustaveli Ave"
    },
    { 
        name: "James", 
        age: 20, 
        address: "Chavchavadze Ave"
    }
  ];

3
console.log(`My name is ${users[0].name}, my age is ${users[0].age}, my address is ${users[0].address}`)

4
if (users[1].age <19){
    console.log("I am a teenager");
} else {
    console.log("I am an adult");
}

5
let numbersArray = [1,2,3,4,5]
for (let i = 0; i < 5; i++) {
    console.log(i);
  }

6
const currentDay = new Date().getDay();

switch (currentDay) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}