

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
const calcArea = function(radius){
    let area = 3.14 * radius**2;
    return area;
};

const area = calcArea(5);
console.log(area);


