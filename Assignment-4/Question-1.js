const fetchData = (callBack) => {
    setTimeout(() => {
        const correct = Math.floor(Math.random() * 1); 
        if (correct === 0) {
            callBack("Error to fetch data");
        }else{
            callBack(["Onkar", "Uzaif", "Bhushan"]);
        }
    }, 2000);
};

// Usage example
fetchData((data) => {
    console.log("Fetched Data:", data);
});