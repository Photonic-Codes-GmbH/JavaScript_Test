/**
 * Level 2: Clean code
 *
 * Requirements
 * - Add class `Logger`
 *      - wraps the console
 *      - provides access to console.log
 *      - supports multiple arguments for log (i.e. logger.log(arg1, arg2, ..., argN))
 * - Add class `IterativeFibCalculator`
 *      - provides a method `calcFib` to calculate the fibonacci sequence
 * - Add class `FibService`
 *      - gets injected the `Logger` and the `IterativeFibCalculator`
 *      - provides a method `printFib(min, max)` which internally calls `IterativeFibCalculator.calcFib`
 *        and uses the `Logger` to print values >= min and <= max
 * - Write comments to your code in a reasonable way.
 * - Implement a solution in linear complexity, O(n).
 * - Every new calculated number of the sequence is **instantly** logged without using an array.
 */

 class Logger {

}

//   * provides a method `calcFib` to calculate the fibonacci sequence
class IterativeFibCalculator {

}

/*
  * inject the `Logger` and the `IterativeFibCalculator`
  * provides a method `printFib(min, max)`
*/
class FibService {
    
}

//---------------------------------------
// Run the app

const logger = new Logger(console);
const fibCalculator = new IterativeFibCalculator();
const fibService = new FibService(logger, fibCalculator);
fibService.printFib(100, 100000000);

/**
 * Expected result
 *
 * => All calculated numbers from >=100 to <=100000000 are logged to the console on each iteration:
 *
 * 144
 * 233
 * 377
 * ...
 * 63245986
 */