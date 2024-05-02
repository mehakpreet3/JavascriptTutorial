// let age = 25;
// let year = 2019;

// //log things to connect
// console.log(age, year);

// age = 30;
// console.log(age);

// const points = 100;
// console.log(points);

// var score = 75;
// console.log(score);

//strings
// console.log('hello, world');

// let email = 'mehakpret20@gmail.com';
// console.log(email);

// //string concatenation
// let firstName = 'Brandon';
// let lastName = 'Sanderson';

// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// //getting characters
// console.log(fullName[2]);

// //string length
// console.log(fullName.length);

// //string methods
// console.log(fullName.toUpperCase());

// let result = fullName.toLowerCase();
// console.log(result, fullName);

// let index = email.indexOf('@');
// console.log(index);

//common string methods
// let email = 'mehakpret20@gmail.com';

//let result = email.lastIndexOf('m');

//slice is used to get some part from the total
//let result= email.slice(0,10);

//let result = email.substring(0,5);

//let result = email.replace('m', 'w');
// let result = email.replace('e', 'a');
// console.log(result);

// let radius = 10;
// const pi=3.14;

//console.log(radius,pi);

//math operators +,-, *, /,**,%
// console.log(10/2);

// let result = radius % 3;

// let result = pi* radius **2;

//order of operation - B I D M A S
//let result = 5 *(10-3)**2;

//console.log(result);

//let likes = 10;

//likes = likes +1;
//likes++;

//likes--;

//likes +=10;
//likes -= 5;

//likes *=2;
//likes /=2;

//console.log(likes);

//NaN - NOT A NUMBER
// console.log(5/ 'hello');
// console.log(5* 'hello');

// let result = 'the blog has ' + likes + ' likes';
// console.log(result);

//template strings
// const title = 'Best reads of 2019';
// const author = 'Mario';
// const likes = 30;

//concatenation way
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes.'
// console.log(result);

//template string way
// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

//creating html templates
// let html = `
// <h2> ${title}</h2>
// <p>By ${author}</p>
// <span>This blog has ${likes} likes </span>
// `;

// console.log(html);

//let ninjas = ['shaun', 'ryu', 'chun-li'];

// ninjas[1] = 'kan';
// console.log(ninjas[1]);

// let ages = [20,25,30,35];
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30,20];
// console.log(random);

//console.log(ninjas.length);

//let result = ninjas.join(',');

//let result = ninjas.indexOf('chun-li');

//let result = ninjas.concat(['ken', 'crystal']);

//push gives new length of the array. it is destructive method
// let result = ninjas.push('ken');
//      result = ninjas.pop();
//console.log(result);

// let age = null;
// console.log(age, age+3, `the age is ${age}`);

//boolean & comparison
//console.log(true,false, "true", "false");

//method can return booleans
//let email = "mehakpret20@co.com";
// let names = ['mehak', 'mario', 'raman']

//let result = email.includes('!');
// let result=  names.includes('mehak');
// console.log(result);


//comparison operators
let age = 25;

// console.log(age==25);

// console.log(age==24);

// console.log(age!=25);
// console.log(age>20);
// console.log(age<20);
// console.log(age<=24);
// console.log(age>=24);

// let name = 'shaun';

// console.log (name == 'shaun');
// console.log (name == 'Shaun');
// console.log (name >'crystal');
// console.log (name > 'Crystal');

//loose comparision (different types can be equal)
// console.log(age ==25);
// console.log(age =='25');
// console.log(age !=25);
// console.log(age !='25');

//strict comparision (different types cannot be equal)
// console.log(age ===25);
// console.log(age ==='25');
// console.log(age !==25);
// console.log(age !=='25');

//type conversion
let score ='100';
//score = Number(score);
//console.log (score +1);

//console.log(typeof score);

let result = Boolean('100');
console.log(result, typeof result);