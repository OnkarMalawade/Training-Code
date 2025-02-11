class Payment{
    amount: number;
    date: string;
    constructor(amount: number, date: string){
        this.amount = amount;
        this.date = date;
    }
}

class CreditCardPayment extends Payment{
    private cardNumber: number;
    constructor(amount : number, date: string, cardNumber: number){
        super(amount, date);
        this.cardNumber = cardNumber;
    }
    getCardNumber(): number{
        return this.cardNumber;
    }
    toString(): string{
        return `Amount: ${this.amount}, Date: ${this.date}`;
    }
}

class CryptoPayment extends Payment{
    private walletAddress: string;
    constructor(amount: number, date: string, walletAddress: string){
        super(amount, date);
        this.walletAddress = walletAddress;
    }
    getWalletAddress(): string{
        return this.walletAddress;
    }
    toString(): string{
        return `Amount: ${this.amount}, Date: ${this.date}`;
    }
}

let payment1 = new CreditCardPayment(1000, "12-12-2021", 1234567890);
console.log(payment1);
console.log(payment1.getCardNumber());

let payment2 = new CryptoPayment(2000, "12-12-2021", "0x1234567890");
console.log(payment2);
console.log(payment2.getWalletAddress());

export {}