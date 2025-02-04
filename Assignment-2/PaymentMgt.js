class Payment {
    constructor(amount, date) {
        this.amount = amount;
        this.date = date;
    }
}

class CreditCardPayment extends Payment {
    constructor(amount, date, cardNumber) {
        super(amount, date);
        this.#cardNumber = cardNumber;
    }
    #cardNumber;
    getCardNumber() {
        return this.#cardNumber;
    }
}

class PayPalPayment extends Payment {
    constructor(amount, date, email) {
        super(amount, date);
        this.#email = email;
    }
    #email;
    getEmail() {
        return this.#email;
    }
}

class CryptoPayment extends Payment {
    constructor(amount, date, walletAddress) {
        super(amount, date);
        this.#walletAddress = walletAddress;
    }
    #walletAddress;
    getWalletAddress() {
        return this.#walletAddress;
    }
}
const payment = new Payment(1000, "2025-02-04");
console.log(payment);

const payment1 = new CreditCardPayment(500, "2025-02-04", "1234-5678-9101-1121");
console.log(payment1);
console.log(payment1.getCardNumber());

const payment2 = new PayPalPayment(300, "2025-02-04", "user@example.com");
console.log(payment2);
console.log(payment2.getEmail());

const payment3 = new CryptoPayment(800, "2025-02-04", "1A2b3C4d5E6F7G");
console.log(payment3);
console.log(payment3.getWalletAddress());
