/*Declare a new variable named petDog and give itthe name Rex.
. Declare a new variable named petCat and give itthe name Pepper.
*/

var petDog = "Rex";
var petCat = "Peper";

    // Console.log the petDog variable.
    // Console.log the petCat variable.
console.log(petDog);
console.log(petCat);

    // . Console.log the text "My pet dog's name is: " and the petDog variable.
    // . Console.log the text "My pet cat's name is: " and the petCat variable.

console.log(`my Pet dog's is: ${petDog}`);
console.log(`my pet cat's name is: ${petCat}`);

      // Declare another variable and name it catSound. Assign the string of "purr" to it.
      // Declare another variable and name it dogSound. Assign the string of "woof" to it.

var catSound = "purr";
var dogsound = "woof";

 // Console.log the variable petDog,then the string "says",then the variable dogSound.
 // Console.log the variable petCat,then the string "says",then the variable catSound.

console.log(`${petDog} says ${dogsound}`);
console.log(`${petCat} says ${catSound}`);

    // Reassign the value stored in catSound to the string "meow".
    // Console.log the variable petCat,then the string "now says",then the variable catSound.
catSound = "meow";
console.log(petCat, " now says" , catSound)
