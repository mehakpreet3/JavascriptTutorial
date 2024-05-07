//Interacting with a browser
//Document Object Model()
//add, change amd delete content
//make a cool pop-up effect in web page

// const para = document.querySelector('div.error');

// console.log(para);

// const paras = document.querySelectorAll('p');

// const errors = document.querySelectorAll('.error');

// console.log(errors);

//get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);

//get elements by their class name

// const errors =document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);
//forEach cannot be used in html collection

//get elements by their tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);


//const para = document.querySelector('p');

//console.log(para.innerText);
//para.innerText = 'ninjas are awesome';

//const paras =document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// });

//const content = document.querySelector('.content');

//console.log(content.innerHTML);
//content.innerHTML +='<h2> THIS IS A NEW H2</h2>';

// const people = ['mario', 'luigi', 'ypshi'];

// people.forEach(person => {
//     content.innerHTML += `<p> ${person}</p>`;
// }
// )

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https: //www.thenetninja.co.uk');
// link.innerText = 'TheNet Ninja website';

// const mssg = document.querySelector('p');
// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class','success');
// mssg.setAttribute('style', 'color:green;');


const title = document.querySelector('h1');

//title.setAttribute('style', 'margin:50px;');
console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color ='red';

title.style.fontSize = '60px';
title.style.margin = '';
