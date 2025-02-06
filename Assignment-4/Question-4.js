function processData(numbers, callback) {
    return callback(numbers);
}

const filterOdd = (numbers) => numbers.filter(num => num % 2 !== 0);

const doubleNumbers = (numbers) => numbers.map(num => num * 2);

const calculateSum = (numbers) => numbers.reduce((sum, num) => sum + num, 0);

const largest = (numbers) => {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
};

const numbersArray = [1, 2, 3, 4, 5, 6];

console.log("Filtered Odd Numbers:", processData(numbersArray, filterOdd));
console.log("Doubled Numbers:", processData(numbersArray, doubleNumbers));
console.log("Sum of Numbers:", processData(numbersArray, calculateSum));
console.log("Maximum Number:", processData(numbersArray, largest));
