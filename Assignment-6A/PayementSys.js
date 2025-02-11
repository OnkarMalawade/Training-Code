"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Payment = /** @class */ (function () {
    function Payment(amount, date) {
        this.amount = amount;
        this.date = date;
    }
    return Payment;
}());
var CreditCardPayment = /** @class */ (function (_super) {
    __extends(CreditCardPayment, _super);
    function CreditCardPayment(amount, date, cardNumber) {
        var _this = _super.call(this, amount, date) || this;
        _this.cardNumber = cardNumber;
        return _this;
    }
    CreditCardPayment.prototype.getCardNumber = function () {
        return this.cardNumber;
    };
    CreditCardPayment.prototype.toString = function () {
        return "Amount: ".concat(this.amount, ", Date: ").concat(this.date);
    };
    return CreditCardPayment;
}(Payment));
var CryptoPayment = /** @class */ (function (_super) {
    __extends(CryptoPayment, _super);
    function CryptoPayment(amount, date, walletAddress) {
        var _this = _super.call(this, amount, date) || this;
        _this.walletAddress = walletAddress;
        return _this;
    }
    CryptoPayment.prototype.getWalletAddress = function () {
        return this.walletAddress;
    };
    CryptoPayment.prototype.toString = function () {
        return "Amount: ".concat(this.amount, ", Date: ").concat(this.date);
    };
    return CryptoPayment;
}(Payment));
var payment1 = new CreditCardPayment(1000, "12-12-2021", 1234567890);
console.log(payment1);
console.log(payment1.getCardNumber());
var payment2 = new CryptoPayment(2000, "12-12-2021", "0x1234567890");
console.log(payment2);
console.log(payment2.getWalletAddress());
