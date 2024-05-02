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