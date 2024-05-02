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
b++
}while(i<5);