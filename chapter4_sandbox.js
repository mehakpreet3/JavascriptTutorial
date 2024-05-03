

//function hosting works onl with function declaration not function expression.
greet();//calling or invoking the function

//function declaration
function greet(){
    console.log('hello there');
}

//function expression, semicolon at the end
const speak = function(){
    console.log('good day!')
};

speak();

//arguments & parameters

const spoke = function(name='sham',time='night'){
    console.log(`good ${time} ${name}`)
};

spoke('mario', 'morning');

//returning values
// const calcArea = function(radius){
//     let area = 3.14 * radius**2;
//     return area;
// };

//arrow function
const calcArea = (radius) =>{
    return 3.14 * radius**2;
};

const area = calcArea(5);
console.log('area is:' ,area);


// const bill = function(products,tax){
//     let total = 0;
//     for(let i=0; i<products.length; i++){
//         total += products[i] +products[i] *tax;
//     }
//     return total;
// }

const bill = (products,tax) =>{
    let total = 0;
    for(let i=0; i<products.length; i++){
        total += products[i] +products[i] *tax;
    }
    return total; 
}
console.log(bill([10,15,30], 0.2));
