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

    /*
        * wraps the console
        * provides access to console.log
        * supports multiple arguments for log (i.e. logger.log(arg1, arg2, ..., argN))
    */

    log(message){

        console.log(message);
    }
}

//   * provides a method `calcFib` to calculate the fibonacci sequence
class IterativeFibCalculator {

    // calculate the fibonacci sequence
    calcFib([a, b]){

        return [b, a + b]
    }
}

/*
  * inject the `Logger` and the `IterativeFibCalculator`
  * provides a method `printFib(min, max)`
*/
class FibService {
    
    constructor(logger, fibCalculator){

        this.logger = logger
        this.fibCalculator = fibCalculator
    }

    logger

    // internally calls `IterativeFibCalculator.calcFib`
    // uses the `Logger` to print values >= min and <= max
    printFib(min, max) {
        var x = 0;
        var y = 1;
    
        let isInside
        while(y < max) {

            //uses the `Logger` to print values >= min and <= max
            isInside = y >= min && y <= max;
            isInside ? logger.log(y) : "";
            [x, y] = this.fibCalculator.calcFib([x, y]);
        }


    }
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