// create infinite interval
const interval = setInterval(() => {
    console.log("Hello");
}, 1000);

// clear the interval from memory
const clear = () => clearInterval(interval);