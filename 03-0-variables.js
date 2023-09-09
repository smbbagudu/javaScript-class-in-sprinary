var firstName = "Sani";

var surName = "Mohammed"
var middleName = "Busu"
var matricNo ="U19/FNS/CSC/1047"
var phoneNo= 2348145222228

console.log(firstName,middleName,surName);

// string templating  or interpolation
/*~~``
* 1. ('')  single quote can be used for string
* 2. ("")  double quote can also be used for string
* 3. (``)  backtick can also be used string
*     the first two allowed you to manipulate string literal only
*      while the backtick allow manipulating both string and variable
*    (
* 4.
* */

console.log("Hello","Sani Busu Mohammed from string literal")
console.log(`Hello, i am ${firstName.toUpperCase()} ${middleName.toUpperCase()} ${surName.toUpperCase()} and my MatricNo is ${matricNo.toUpperCase()}  and you can contact me on ${phoneNo}`)





