const api1 = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json()
);

const api2 = fetch('https://jsonplaceholder.typicode.com/todos/2')
    .then(response => response.json()
);

const api3 = fetch('https://jsonplaceholder.typicode.com/todos/invalid')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();
    }
);

// Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves when all of the promises have resolved.
// Promise.all([api1, api2, api3])
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// Promise.allSettled() method returns a promise that resolves after all of the given promises have either resolved or rejected, with an array of objects that each describes the outcome of each promise.
// Promise.allSettled([api1, api2, api3])
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// Promise.any() method takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfills, returns a single promise that resolves with the value from that promise.
// Promise.any([api1, api2, api3])
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.
Promise.race([api1, api2, api3])
    .then(data => console.log(data))
    .catch(error => console.log(error));