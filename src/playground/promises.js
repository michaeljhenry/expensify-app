const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'mike',
        //     age: 23
        // });
        reject('Something went wrong');
    }, 5000)
});
console.log('Before');
promise.then((resolveData) => {
    console.log('1', resolveData);
    return 'some data'
}).then((str) => {
    console.log('does this run?', str)
}).catch((error) => {
    console.log('error: ', error);
});

// OTHER SYNTAX: PROVIDE CATCH AS THE SECOND ARGUMENT TO 'THEN'

// promise.then((resolveData) => {
//     console.log('1', resolveData);
// }, (error) => {
//     console.log('error: ', error);
// });


console.log('after');