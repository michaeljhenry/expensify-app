// Object Destructuring

/* const person = {
    name: 'mike',
    age: 21,
    location: {
        city: 'canada',
        temp: '88'
    }
};

const {name = 'Anonymous', age} = person;

console.log(`${name} is ${age}.`);

const {city, temp: temperature} = person.location

if(city && temperature) {
    console.log(`It's ${temperature} in ${city}`);
} 

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}


const {name:publisherName='Self-Published'} = book.publisher
console.log(publisherName);

*/


// Array Destructuring

const address = [];

const [, city = 'New York', province] = address;

console.log(`You are in ${city} ${province}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee,,medium_price] = item

console.log(`A medium ${coffee} costs: ${medium_price}`);