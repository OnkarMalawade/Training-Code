fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
// Output: { "userId": 1, "id": 1, "title": "delectus aut autem", "completed": false }
// node fetchApi.js
// It fetches the data from the given URL and logs the data to the console.

const getData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        console.log(response); // object of Response
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    } finally { 
        console.log("Data fetched successfully"); 
    }
}

getData();