# Steady Hand Game

I wrote this to attempt to explain some of the concepts that we used in creating the steady hand game.

This repository contains the completed steady hand game with some additional features that we didn't get to in the session. Feel free to have a ready through the code if you wish, but before you do, be aware of code comments.

These are bits of text you can add to code documents that are not interpreted. They can, therefore, be used to describe what some code is doing.

### Comments in HTML
```html
<div>
  <p>Hello, World</p> <!-- This is a comment -->
</div>
```

### Comments in CSS
```css
.row {
    height: 15px; /*This is a comment*/
}
```

### Comments in JavaScript
```javascript
let hits = 0; // this is a comment
```

## HTML basics

HTML provide document structure, HTML documents are static until we use JavaScript to change them.

Basic HTML elements have an opening and a closing tag, such as the 'p' element:
```html
<p>Hello UoS</p>
```
We can give elements attributes by providing the name of the attribute followed by an '=' then the value to be given to the attribute in double quotation marks. Below I am assigning the id attribute to a p element:
```html
<p id="my-id">Hello, UoS</p>
```
Some attributes, such as 'id' and 'class' can be assigning to all HTML elements. Some elements have their own attributes with special meaning [Read here for more on HTML elements](https://www.w3schools.com/html/html_elements.asp)

Some elements don't just contain text, but a collection of other elements. Below, the div element contains three 'p' elements

```html
<div>
  <p>Hello</p>
  <p>Hello, again</p>
  <p>Hello yet again</p>
</div>
```

The div element is usually used to put part of the HTML document in to sections, it can be thought of as in invisible box.

Its other main purpose is to be given a class or id so that the div element, and its children (the three 'p' elements in the example above), can be targeted with CSS or JavaScript.

## CSS basics

CSS is used to change the styles of an HTML document. Colours, sizes, spacing, layout, etc.

They work through a set of rules that target parts of the HTML document with a selector, then by applying values to a set of built-in properties such as margin, background-color, etc.

The syntax takes the following form:

```css
p { /* p is the selector, it will select all p elements in the document. */
    color: red; /* 'color' is the property to change and 'red' is the value */
}
```
We can either select 
- All HTML elements with a specific tag, e.g. 'p', as in the example above.
- All HTML elements with a specific class using a dot '.':
```css
.some-class {
  color: red;
}
```
- A specific element with an id using the hash symbol '#':
```css
#my-id {
  color: red;
}
```
[W3 Schools](https://www.w3schools.com/cssref/index.php) has a good reference on all CSS properties and how to use them.

## JavaScript Basics

JavaScript is huge, it's a full-blown general purpose programming language. It was designed to make web pages dynamic but has become something much more in the last 20 years. Its even the language used to [discover the secrets of the universe](https://universemagazine.com/en/heart-of-james-webb-nasa-revealed-the-main-secret-of-the-telescope/#:~:text=So%2C%20NASA%20uses%20JavaScript%20to,photos%20taken%20from%20the%20telescope.)

We can assign variables that can hold data. Data can be numbers, strings (ordered sets of characters e.g. a word or a sentence), booleans (true or false), functions, arrays or objects

```javascript
let myMessage = 'Hello UoS';
```

- 'let' tells JavaScript we are going to declare a variable.
- 'myMessage' is a name I have given to the variable, it can be anything but must follow some [rules](https://www.w3schools.com/js/js_variables.asp)
- 'Hello UoS' is a String, it's the data I want to store in the variable

Variables can be changed, to change a variable, you don't use the let word again

```javascript
let myMessage = 'Hello';
myMessage = 'GoodBye' // the value of myMessage is now 'Goodbye'
```

 - Constants are mostly like variables but they cannot be changed
```javascript
const myConstantMessage = 'Never give up!';
myConstantMessage = 'I quit'; // This line will cause an error
```

Expressions are something that evaluate to something

```javascript
let x = 1 + 1;
```

- 1 + 1 is an expression, it evaluates to 2, which is then stored in the variable 'x'
- Other [arithmetics and logical operators](https://www.w3schools.com/js/js_operators.asp) can be used to create more complex expressions.

Functions are a set of statements that can be repeated

```javascript
function incrementHits() {
  hits = hits + 1;
  hitCounter.textContent = hits;
}
```
- 'function' lets JavaScript know that we are going to declare a function
- 'incrementHits' is the name I have given the function, we need to follow the same rules as with variable naming
- () parameters can be added here between the ( and ) (see below)
- The function body is between { and }, this is the set of statements that are executed by the function, in order.
- Once a function is defined, it can be called from somewhere else in the script
```javascript
incrementHits() // I called the function once
incrementHits() // I called it a second time
// Hits will now have been incremented twice and the hitCounter will display the result.
```
Functions can take parameters and return the result:
```javascript
function add(num1, num2) {
  let result = num1 + num2;
  return result; //return keyword used to return some data
}
```
- Returning a value in a function means that its call can be thought of as an expression
```javascript
let x = add(1, 1); // Call of add(1, 1) evaluates to 2 which is assigned to x
let y = add(2, 4); // Evaluates to 6, assigned to y.
```

Objects are collections of data and functions, they are made up of key and value pairs.
- The key can be any word which follows the variable naming rules
- The value can be any type of data (number, string, function, nested objects)
- We define objects in { and } as a comma separated list of key-value pairs
```javascript
const myMadeUpObject = {
  name: 'Andy', // 'name' is the key I have given, 'Andy' is the data value
  age: 37,
  likesBeer: true
}
```
- We can access object values using the dot notation:
```javascript
let someGuysName = myMadeUpObject.name;
```

Arrays are lists of data, the data can be of any sort

```javascript
let myList = [1, 2, 3, 'go']
```

Arrays are ordered and each item has an index starting from 0, we can access array elements with the [index] notation.

```javascript
let firstElement = myList[0] // evaluates as 1 because 1 is in the 0 index position of the array.
```

We can do something to an array using the forEach function that is available on any array (arrays are objects, they have properties that can be accessed with the dot notation, forEach is a function available as a property on the array object)

To do something to each element in the array we first need a function that takes each element as a parameter

```javascript
function arrayLogger(element) {
  console.log(element) // I am using console.log() here, it simply takes what is passed in and prints it to the console
  // You can view the console in a browser by right-clicking on a page and clicking inspect then by clicking console in the panel that opens
}
```
We can now pass the arrayLogger function to the forEach function of an array
```javascript
myList.forEach(arrayLogger); // immediatly executes the arrayLogger function for each element in the array
```

if conditions allow us to only execute parts of code is some condition is met first

```javascript
if (myNumber > 10) {
  console.log('myNumber is bigger than 10') // this line only executes if the value held in myNumber is bigger than 10
}
```
- myNumber > 10 is a boolean expression, it evaluates to true or false
- We can add an 'else' block to execute if the condition is false
```javascript
if (myNumber > 10) {
  console.log('myNumber is bigger than 10') // this line only executes if the value held in myNumber is bigger than 10
} else {
  console.log('myNumber is smaller or equal to 10')
}
```