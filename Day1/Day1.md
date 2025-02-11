# Adding JavaScript to a web Page
Java script can be added to web page in three different ways:
- Inline script
- Internal script
- External script
- Multiple External scripts

### Inline Script
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adding script to web page</title>
</head>
<body>
    <!--Inline-->
    <button onclick="alert('Welcome from JS')"></button>
</body>
</html>
```
### Internal Script

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adding script to web page</title>
</head>
<body>
    <!--Internal-->
     <script>
      console.log('Welcome to 30DaysOfJavaScript')
    </script>
</body>
</html>
```
 Writing the JavaScript code in the body section is the most preferred option.

### ### External Script

Similar to the internal script, the external script link can be on the header or body, but it is preferred to put it in the body.
First, we should create an external JavaScript file with .js extension. All files ending with .js extension are JavaScript files. Create a file named introduction.js inside your project directory and write the following code and link this .js file at the bottom of the body.

```js
console.log('Welcome to 30DaysOfJavaScript')
```

External scripts in the _head_:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30DaysOfJavaScript:External script</title>
    <script src="introduction.js"></script>
  </head>
  <body></body>
</html>
```

### Multiple External Scripts

We can also link multiple external JavaScript files to a web page.


```js
console.log('Hello, World!')
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Multiple External Scripts</title>
  </head>
  <body>
    <script src="./helloworld.js"></script>
    <script src="./introduction.js"></script>
  </body>
</html>
```

_The script execution will fallow the top down approach_. It is very important to remember this.

## Comments
1. Single Line Comment ``` // ```
2. Multi Line Comment ```/**/```


## Variables
 Variables are containers thta hold data. Variables are used to store data in a memory location.
 Types of variable
 ES5 (ECMAScript 5)
 -var-
    var is a legacy variable declarations that was introduced on ES5 it holds data that can be changed 
 ES6 (ECMAScript 6)
 -let-
 -const-

| Feature         | `var`                                 | `let`                                 | `const`                               |
|-----------------|---------------------------------------|---------------------------------------|---------------------------------------|
| Scope           | Function scoped                       | Block scoped                          | Block scoped                          |
| Hoisting        | Yes, initialized with `undefined`     | Yes, but not initialized              | Yes, but not initialized              |
| Re-declaration  | Allowed                               | Not allowed within the same scope     | Not allowed within the same scope     |
| Re-assignment   | Allowed                               | Allowed                               | Not allowed                           |
| Initialization  | Optional                              | Optional                              | Required at the time of declaration   |

### Hoisting
It is a behavior where variable and function declarations are moved to the top of their contianing scope during the compilation phase, before
the code is executed. With hoisting we can use variable and function before decalaration. Only declaration are hoisted not initializations.
</br>
Variables declared with let and const are also hoisted, but they are not initialized. This results in a _ReferenceError_ if you try to use them before their declaration.

### A valid JavaScript variable name must follow the following rules:
 - Name should not begin with a number
 - Vaiable name should not allow special character beside _ and $
 - Naming should fallow camelCase convention
 - Space between words are not permitted.

## Data Types
### _Primitive data types_
Primitive data types are immutable(non-modifiable) data types.
1. String let color ="Yellow";
2. Number let weight ="7.5";
3. Bigint let hugeString = BigInt ("900719925474099") //900719925474099ln value with more than 10^9 
4. Boolean let x = true;
5. Undefined let x;
6. NUll let foo = null; //foo has no type and value --- learn more about it
7. Symbol //symbols are notation to create unique ID Eg: const s = Symbol("Pramesh")

By default JS takes all variable as an string so whenever a variable with stirng and numeric value we try to perfom math operation it might not work as expected.

### _The object Data Type (Complex Data Type) or Non-Primitive data_
Non-primitive data types are modifiable or mutable.
The object data type can contain:
1. object
2. array
3. date

### Checking Data Types
 ``` js
    console.log(typeof "Pramesh") // string
    console.log(typeof undefined) // undefined
```
##  Type Conversion / Type Coercion
``` js
const value = "12";
console.log(typeof value)// type Checking
const actualNumber = Number(value);
const num = +value;
console.log(actualNumber);
console.log(typeof actualNumber);

// Convert number to string
const num = 13;
const numericval = String(num);
console.log(numericval , num);
```