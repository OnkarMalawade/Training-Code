const getData = new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error))
});

getData
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Output: { "userId": 1, "id": 1, "title": "delectus aut autem", "completed": false }