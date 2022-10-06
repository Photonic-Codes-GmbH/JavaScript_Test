/** Level 3: Async
 *
 * Requirements
 * - Add a class `RecursiveFibCalculator`
 *      - Provides a method `calcFib` to calculate the fibonacci sequence by recursion.
 *      - Every recursion should be non-blocking (async) using (nextTick/setTimeout).
 * - Implement a solution in linear complexity, O(n).
 * - Every new calculated number of the sequence is **instantly** logged without using an array.
 */

 class Logger {

}

class RecursiveFibCalculator {

}

class FibService {
    
}

//---------------------------------------
// Test

const logger = new Logger();
const FibCalculator = new RecursiveFibCalculator();
const fibService1 = new FibService(logger, FibCalculator);
const fibService2 = new FibService(logger, FibCalculator);
fibService1.printFib(1, 100);
fibService2.printFib(1000, 10000);

/**
 * Expected result
 *
 * => The sequences should be logged simultaneously, from 1 to <=100 and from >=1000 to <=10000:
 *
 * 1
 * 1597
 * 1
 * 2584
 * 2
 * 4181
 * 3
 * 6765
 * 5
 * 8
 * 13
 * 21
 * 34
 * 55
 * 89
 *
 */