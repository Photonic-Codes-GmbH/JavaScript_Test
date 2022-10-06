/** Level 4: Error handling
 *
 * Requirements
 * - Catch all errors in your application.
 * - Extend the `Logger` with a method to access console.error
 * - The stacktrace of all errors shall be printed to the console using the `Logger`.
 * - The application must not crash if an error occurs.
 * - Copy/paste the `RecursiveFibCalculator` and name the pasted one `ThrowingRecursiveFibCalculator`.
 * - Let the `ThrowingRecursiveFibCalculator` throw an error.
 */

class Logger {

}

class RecursiveFibCalculator {

}

class ThrowingRecursiveFibCalculator {

}

class FibService {
    printFib(min, max) {

    }
}

//---------------------------------------
// Test

const logger = new Logger();
const fibCalculator = new RecursiveFibCalculator();
const throwingFibCalculator = new ThrowingRecursiveFibCalculator();
const fibService1 = new FibService(logger, fibCalculator);
const fibService2 = new FibService(logger, throwingFibCalculator);
fibService1.printFib(1, 100);
fibService2.printFib(1000, 10000);

/**
 * Expected result
 *
 * => The error is catched and logged.
 * => The application continues to run.
 * => The sequences of fibService1 are logged properly from 1 to <=100:
 *
 * 1
 * 1
 * 2
 * 3
 * 5
 * 8
 * 13
 * 21
 * 34
 * 55
 * 89
 */