/**
 * Level 1: Fibonacci
 *
 * Requirements:
 * - Use a single function `calcFib(max)` to implement the calculation iteratively.
 * - Implement a solution in linear complexity, O(n).
 * - Every new calculated number of the sequence is **instantly** logged without using an array.
 */

 function calcFib(max) {

    var x = 0;
    var y = 1;

    while(y < max) {
      
        console.log(y);
        y += x;
        x = y - x;
    }

}

//---------------------------------------
// Run the app

calcFib(100000000);

/**
 * Expected result
 *
 * => All calculated numbers from 1 to <=100000000 are logged to the console on each iteration:
 *
 * 1
 * 1
 * 2
 * 3
 * 5
 * 8
 * 13
 * ...
 * 63245986
 */