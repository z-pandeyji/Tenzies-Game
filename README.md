# Tenzies Game https://tenzies-game1.herokuapp.com/

 * In this game you have to Roll the dice and select the same number until you selected all the same number. When you select every dice you won!

 ### What problems i face creating this web-app ?

 * 1->  I didn't know how to stop dice roll after clicking the dice?
 * for this problem i use function called `clickedDice` I change the previous STATE and pass the data with .map function and return `!` not the original value.

 * 2-> When all the dice have same value after the roll how can I change button value roll to new game ?
 * For this problem i use `useEffect` and store the dice value in 3 variables `allHeld` , `firstValue`, `allSameValue` and use .every function to check every value for dice and if the value is same i change the SETSTATE value to true. 
 ### what exciting thing i learn when i created this web-app?
 * I always use for generating random numbers -> `Math.floor(Math.random() * 10)` but this time i found everytime i clicked roll button i found most of the number is less than 5 and sometimes 4 soo as a developer I google it and found there is a another way to create random number is .ceil function that always gives you the number that are closer to your heighest number soo i use `Math.ceil(Math.random() * 8)`
