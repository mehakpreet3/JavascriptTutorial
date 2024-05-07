//object literals

let admin = {
    name: 'crystal',
    age :38,
    email: 'crstal@theninja.co.uk',
    location: 'berlin',
    blog: ['why mac and cheese rules', '10 things to make with marmite']
};

console.log(admin);
console.log(admin.name);

admin.age = 35;
console.log(admin.age);

//using square brackets we can access objects property
console.log(admin['email']);

admin['name'] = 'mehak';
console.log(admin['name']);

console.log(typeof admin);