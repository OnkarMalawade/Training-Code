const bookLibrary = {
    books: [
        { title: "Onkar", author: "Bhushan", yearPublished: 2023 },
        { title: "Uzaif", author: "Bhushan", yearPublished: 2024 },
        { title: "Bhushan", author: "Bhushan", yearPublished: 2099 }
    ],

    addBook(book) {
        this.books.push(book);
    },

    getBooksByAuthor(author) {
        let output = this.books.filter(book => book.author === author);
        return output;
    },

    removeBook(title) {
        if(this.books.length === 0) {
            console.log("No books available to remove");
        }
        this.books = this.books.filter(book => book.title !== title);
    },

    getAllBooks() {
        return this.books;
    }
};
bookLibrary.addBook({ title: "Pravat", author: "Bera", yearPublished: 1888 });
console.log("Get Book by Author: ", bookLibrary.getBooksByAuthor("Bhushan"));
console.log("Get All Books: ", bookLibrary.getAllBooks());
bookLibrary.removeBook("spidy");
console.log("Get All Books: ", bookLibrary.getAllBooks());
