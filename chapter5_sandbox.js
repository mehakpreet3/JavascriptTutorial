//object literals
// const blogs =[
//     {title: 'why mac and cheese rules', likes:30},
//     {title: '10 things to make with marmite', likes: 50}
// ];

// console.log(blogs);


let admin = {
    name: 'crystal',
    age :38,
    email: 'crstal@theninja.co.uk',
    location: 'berlin',
    blog: [ {title: 'why mac and cheese rules', likes:30},
            {title: '10 things to make with marmite', likes: 50}
],
    login: function(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    },
    logBlogs(){
        console.log('this user has written the following blogs:');
        this.blog.forEach(blog =>{
            console.log(blog.title, blog.likes);
        })
    }
};

admin.login();
admin.logout();
admin.logBlogs();

// console.log(admin);
// console.log(admin.name);

// admin.age = 35;
// console.log(admin.age);

//using square brackets we can access objects property
// console.log(admin['email']);

// admin['name'] = 'mehak';
// console.log(admin['name']);

// console.log(typeof admin);


//Math object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const areaOfCircle = 7.7;

console.log(Math.round(areaOfCircle));
console.log(Math.floor(areaOfCircle));
console.log(Math.ceil(areaOfCircle));
console.log(Math.trunc(areaOfCircle));

//random numbers

const random = Math.random();
console.log(random);
console.log (Math.round(random * 100));

//primitive(numbers,strings,booleans, null,undefined,symbols) and reference types(object types, object literals)
//stack (primitive) and heap(reference type)

//primitive values
// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}` , `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}` , `scoreTwo: ${scoreTwo}`);

//reference type
const userOne = {name:'ryu', age: 30};
const userTwo = userOne;

console.log (userOne, userTwo);

userOne.age = 40;
console.log (userOne, userTwo);
