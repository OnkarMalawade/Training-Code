const axios = require('axios');

const api1 = axios.get('https://jsonplaceholder.typicode.com/todos/1');
const api2 = axios.get('https://jsonplaceholder.typicode.com/todos/2');
const api3 = axios.get('https://jsonplaceholder.typicode.com/todos/invalid');

const getData = async () => {
    try {
        const data = await Promise.all([api1, api2, api3]);
        console.log(data.json());
    } catch (error) {
        console.error(error);
    }
}

getData();

const getData1 = async () => {
    try {
        const data = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getData1();

