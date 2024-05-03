//for loops
for(let i = 0; i < 5; i++){
    console.log('in loop:', i);
}

console.log('loop finished');

//looping through names
const names = ['shaun','mario','luigi'];

for (let i = 0; i<names.length; i++){
    //console.log(names[i]);

    //used html literals
    let html = `<div>${names[i]}</div>`
    console.log(html);
}

//while loop
let i= 0;

while(i < 5){
    console.log('in loop:', i);
    i++;
}

let a=0;
while(a < names.length){
    console.log(names[a]);
    a++;
}

//do while loops
let b= 5;
do{
console.log('val of i is : ', b);
b++;
}while(i<5);

//if statements
const age = 25;

if (age >20){
    console.log('you are over 20 years old');
}

const ninjas =['shaun','ryu','chun-li','yashi'];

if (ninjas.length >3){
    console.log('thats a lot of ninjas');
}

const password ='p@sswh';

if(password.length>=12){
    console.log("The password is might strong");
}else if(password.length >=7){
    console.log("The password is long enough!");
}else{
    console.log("password is not long enough!!!!");
}

//logical operators OR || and AND &&
if(password.length>=12 && password.includes('@')){
    console.log("The password is might strong");
}else if(password.length >=7 ||password.includes('@') && password.length >5){
    console.log("The password is strong enough!");
}else{
    console.log("password is not strong  enough!!!!");
}

//logical Not(!)
let user = false;

if(!user){
    console.log('you must be logged in to continue')
}

console.log(!true);
console.log(!false)

//break and continue
const scores = [50,25,0,30,100,20,10];

for(let i= 0; i<scores.length; i++){
    console.log('your score: ', scores[i]);

    if(scores[i===0]){
        continue;
    }

    if(scores[i] === 100){
        console.log('congrats, you got the the highest score!');
        break;
    }
}