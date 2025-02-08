// Data Security 
// Description: Data security is the practice of protecting digital information from unauthorized access, corruption, or theft throughout its entire lifecycle.

// CORS (Cross-Origin Resource Sharing)
// Description: Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to tell browsers to give a web application running at one origin, access to selected resources from a different origin.

// Access control allow origin
// Description: The Access-Control-Allow-Origin response header indicates whether the response can be shared with requesting code from the given origin.

// Proxy
// Description: A proxy is a computer program or application that intercepts requests and responses between a client and a server, and potentially modifies or redirects them.

// Regular Expression
// Description: A regular expression is a sequence of characters that define a search pattern.
// Code:
const string = 'Hello, World!';
const pattern = /Hello/;
console.log(pattern.test(string)); // Output: true

const email = 'aDk4w@example.com';
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailPattern.test(email)); // Output: true

// ORM (Object-Relational Mapping)
// Description: Object-Relational Mapping (ORM) is a programming technique for converting data between incompatible type systems using object-oriented programming languages.

// Libray vs Framework
// Description: A library is a collection of functions and methods that can be used to perform specific tasks, while a framework is a collection of libraries and tools that help developers build applications more efficiently.

// Immutable JS 
// Description: Immutable.js is a library that provides immutable data structures. These data structures help prevent bugs and make the code easier to understand.
// Code:
const { List } = require('immutable');
const immutableArray = List([1, 2, 3]);
const newImmutableArray = immutableArray.push(4);
console.log(immutableArray.toJS()); // List [ 1, 2, 3 ]
console.log(newImmutableArray.toJS()); // List [ 1, 2, 3, 4 ]

const { Map } = require('immutable');
const immutableObject = Map({ name: 'Onkar', surname: 'Malawade' });
const newImmutableObject = immutableObject.set('age', 21);
console.log(immutableObject.toJS()); // { name: 'Onkar', surname: 'Malawade' }
console.log(newImmutableObject.toJS()); // { name: 'Onkar', surname: 'Malawade', age: 21 }

const { Record } = require('immutable');
const immutableRecord = Record({ name: 'Onkar', surname: 'Malawade' });
const newImmutableRecord = immutableRecord.set('age', 21);
console.log(immutableRecord.toJS()); // { name: 'Onkar', surname: 'Malawade' }
console.log(newImmutableRecord.toJS()); // { name: 'Onkar', surname: 'Malawade', age: 21 }

// Project - fakestoreapi.com
