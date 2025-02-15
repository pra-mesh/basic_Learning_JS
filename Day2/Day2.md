# Data Types and methods

## Math objects

```
 Math.PI       // gives value of PI
 Math.round    // rounds to closest number if above .5 up if less down rounding
 Math.floor    // rounding down
 Math.ceil     // rounding up
 +varaible.toFixed(2)   //Rounds value to two digit
 Math.min(-5, 3, 20, 4, 5, 10)  //Returns minimum value
 Math.max(5, 3, 20, 4, 5, 10)  //Returns maximum value
 Math.random()      //Creates Random number between 0 to 0.999999
 Math.floor(Math.random()*11);  //Creates Random number between 0 to 10
 Math.abs(-10);     //non negative absolute value
 Math.sqrt(2);      //Square root
 Math.pow(3,2)      //Power
 Math.E             //base E
 Math.log(2);       // Logarith with base E
 Math.LN2           //Natural lagarith of 2
 Math.sin(0)         //Trigonometry
```

## String Concatenation

### Concatenating Using Addition Operator

```js
let firstName = "Pramesh",
  lastName = "Pradhan";
let fullName = firstName + " " + lastName;
```

## Long Literal Strings

If the string length is too big it does not fit in one line. We can use the backslash character (\) at the end of each line to indicate that the string will continue on the next line.

```js
    const paragraph = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam minima nulla dolores? Sequi nostrum reprehenderit, harum neque illum \ asperiores temporibus voluptas totam aspernatur corporis. Ipsum distinctio recusandae placeat totam modi, blanditiis, doloribus eligendi \
    laboriosam dolores sapiente quaerat illum nesciunt! Quibusdam doloremque qui, ipsam adipisci exercitationem autem illo nemo! Sapiente, fugit?"
```
## String Methods
1. length
  ```
  let js = 'JavaScript'
  console.log(js.length)  
  ```
2. Accessing characters in a string
``` js
let strings = "JavaScript";
let firstletter = strings[0];
```
3. To upper case
``` js
let string = "JavaScript";
console.log(string.toUpperCase());
```

4. To lower case
``` js
let string = "JavaScript";
console.log(string.toLowerCase());
```

5. Sub string _substr()_: starting point is and number of characters
``` js
let string = "JavaScript";
console.log(string.substr(4,6))
```

6. Sub string _substring()_: the starting index and ending index, end index will
not be include
```js
let string = "JavaScript";
console.log(string.subString(4,10)); //script
console.log(string.subString(0,4)); //Java
console.log(string.subString(4)); //script
```

7. split _split()_
```js
let string = "Hello this is Pramesh";
console.log(string.split()); //Converts to array ["Hello this is Pramesh"]
console.log(string.split(' ')); //Converts to array ["Hello", "this", "is", "Pramesh"]
```
8. Trim trim()

```js
let string = "     Hello World!!!!!         "
console.log(string.trim('  '))
console.log(string.trim());
```

9. include
It takes a substring argument and it checks if substring argument exists in the string.
```js
let string = "30 Days of JavaScript";
console.log(string.includes('Day')) //true
console.log(string.includes('day')) //false
```

10. replace(): takes as a parameter the old substring and a new substring.
  string.replace(oldsubstring, newsubstring)

  ``` js
  let string = '30 Days Of JavaScript'
  console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python
  let country = 'Finland'
  console.log(country.replace('Fin', 'Noman'))       // Nomanland
  ````

11. charAt(): Takes index and it returns the value at that index
  ``` js
  let string = "30 Days of JavaScript";
  console.log(string.charAt(0)) //3
  console.log(string.charAt(string.index -1));
  ```

12. charCodeAt(): Takes index and it returns char code (ASCII number) of the value at that index
  ``` js
  let string = "30 Days of JavaScript";
  console.log(string.charCodeAt(0))     // D ASCII number is 68
  ```

13. indexOf(): Takes a substring and if substring exists the first position of the substring if not returns -1
  ```js
  let string = "30 Days of JavaScript";
  console.log(string.indexOf("of"));      // retruns 8
  console.log(string.indexof("h2"));      // returns -1
  ```

14. lastIndexOf(): Takes a substring and if substring exists the last position of the substring if not returns -1
  ```js
  let string = "30 Days of JavaScript";
  console.log(string.indexOf("of"));      // retruns 9
  console.log(string.indexof("h2"));      // returns -1
  ```

15. concat(): it takes many substrings and joins them.
  ```js
  let country = "Fin";
  console.log(country.concat("land"));
  ```

16. startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring.
  ```js
  let string = "Learning js as a C# developer";
  console.log(string.startsWith("Learnin"))    //true
  console.log(string.startsWith("learnin"))   //false
  ```

17. endsWith: it takes a substring as an argument and it checks if the string ends with that specified substring.
  ```js
  let string = "Learning js as a C# developer";
  console.log(string.endsWith("eloper"))    //true
  console.log(string.endsWith("Eloper"))   //false
  ```

18. search: it takes a substring as an argument and it returns the index of the first match.
``` js
let string = "I am learning JavaScript. I am learning MERN which requires basic JavaScript. Basic language uses in MERN \
              is JavaScript";
console.log(string.search("JavaScript"))   //14
```

19. match: it takes a substring or regular expression pattern as an argument and it returns an array 
if there is match if not it returns null.
``` js
let string = "I am learning JavaScript. I am learning MERN which requires basic JavaScript. Basic language uses in MERN \
              is JavaScript";
console.log(string.match("JavaScript"))   //[ 'JavaScript',
                                          //   index: 14,
                                          //   input: 'I am learning JavaScript. I am learning MERN which requires 
                                          // basic JavaScript. Basic language uses in MERN is JavaScript',
                                          //   groups: undefined
                                          // ]
/*
Regular Expression
pattern: /value/     ---Without flag
pattern with flag:  /value/gi     ---g-mans to search in the whole text, i - case insesititve
*/
 console.log(string.match(/javascript/gi))                                      
```
20. repeat(): it takes a number as argument and it returns the repeated version of string.
  ```js
  let string = 'test'
  console.log(string.repeat(5))     //testtesttesttesttest
  ```
