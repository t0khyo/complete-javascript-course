'use strict';
/*
let hasDriversLicense = false;
let passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive :D');

// const interface = 'hello';

*/

/*
function logger() {
    console.log('My name is Abdelrahman!')
}

// calling / running / invoking func.
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const applesJuice = fruitProcessor(5, 1);
console.log(applesJuice);
*/

/*
// Function declaration
function calcAge(birthYear){
    return 2023 - birthYear;
}

console.log(calcAge(2004));

// Function expression
const calcAge2 = function (birthYear) {
    return 2023 - birthYear
}

const age2 = calcAge2(2004);
console.log(age2);

// Arrow function
const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(2004);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntilRetirement(2004, 'Abdelrahman'));
*/

/*
const friends = ['Mohamed', 'Omar', 'Nasser'];
console.log(friends);

const  years = new Array(1991, 1996, 2001, 2004);
console.log(years);

console.log(friends[0], years[1]);

console.log(friends.length);

friends[2] = 'Ali';
console.log(friends);

const t0khyo = ['Abdelrahman', 2004, friends];
console.log(t0khyo);
*/

/*
const friends = ['Fathi', 'Amr', 'Nasser'];
friends.push('Ali');
friends.reverse();
friends.unshift('Omar');
console.log(friends);
*/

/*
const t0khyoArray = [
    'abdelrahman',
    'Eltokhy',
    'programmer',
    ['Amr','Ali','fathi']
];

const t0khyo = {
    firstName: 'Abdelrahman',
    lastName: 'Eltokhy',
    age: 2023-2004,
    friends: ['Amr', 'Ali', 'Fathi']
};

console.log(t0khyo.lastName);
console.log(t0khyo['lastName']);

const nameKey ='Name';
console.log(t0khyo['first'+nameKey]);
console.log(t0khyo['last'+nameKey]);

const interestedIn = prompt(`what do you want to know about me?
Choose between firstName, lastName, age or friends.`);

if(t0khyo[interestedIn]) {
    console.log(t0khyo[interestedIn]);
} else {
    console.error('Bad Request');
}

t0khyo.location = 'Egypt';
console.log(t0khyo);
*/

/*
const t0khyo = {
    firstName: 'Abdelrahman',
    lastName: 'Eltokhy',
    birthYear: 2004,
    friends: ['Amr', 'Ali', 'Fathi'],
    hasDriverLicense: true,
    
    // calcAge: function(birthYear){
    //     return 2023 - birthYear; 
    // }
    
    // calcAge: function() {
    //     return 2023 - this.birthYear;
    // }
    
    calcAge: function() {
        this.age = 2023 -2004;
        return age;
    }
};

console.log(t0khyo.());
console.log(t0khyo.calcAge());
console.log(t0khyo.calcAge());
console.log(t0khyo.calcAge());
*/

// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}🏋️‍♂️`);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weights repetition ${rep}🏋️‍♂️`);
//     rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6){
    console.log(`you rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log('loop is about to end...');
}