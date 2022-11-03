function searchFruit(fruitOne, fruitTwo) {
  let text = `My favorite fruit is grapes. Because with grapes, you always
    get another chance. 'Cause, you know, if you have a crappy apple or a peach,
    you're stuck with that crappy piece of fruit.
    But if you have a crappy grape, no problem - just move on to the next.
    'Grapes: The Fruit of Hope.'`;

  let result1 = text.includes(fruitOne);
  let result2 = text.includes(fruitTwo, 50);
  console.log(result1);
  console.log(result2);

}

let fruitOne = "apple";
let fruitTwo = "grapes";
// Call the function here with the arguments
searchFruit(fruitOne,fruitTwo);