/** Level 5: Reactive
 *
 * Requirements
 * - Reuse class `RecursiveFibCalculator`.
 * - Add class `ReactiveFibEmitter`
 *      - gets injected the `RecursiveFibCalculator`
 *      - provides methods to `subscribe` and `unsubscribe` to the events `next` and `complete` of the fibonacci stream
 *      - provides method to start a stream of fibonacci numbers
 *      - emits a `next` event of the current calculated fibonacci number of a sequence, whereas the calculation (and
 *        thus new items in the stream) occur in an interval.
 *        The interval can be parameterized in delay and end: `startNewFibStream(intervalDelayMilliseconds, intervalEndMilliseconds){...}`
 *      - emits a `complete` event when the stream ends
 *      - continues the stream if any of the subscribers throws an exception on handling any events.
 *
 * Example:
 *  ```
 *  // start a new stream emitting new fib numbers to all subscribers every 1 second and completing after 1 minute.
 *  startNewFibStream(1000, 60000);
 * ```
 *
 * - Add class `ReactiveFibObserver`
 *      - gets injected the `Logger`, the `ReactiveFibEmitter` and an optional `maxNextIterations` value on construction
 *      - subscribes to the `ReactiveFibEmitter` `next` and `complete` events
 *      - unsubscribes from the `ReactiveFibEmitter` `next` and `complete` events if `maxNextIterations` is exceeded
 *      - logs every next event using the `Logger`
 *      - logs every complete event using the `Logger`
 *      - throws an error with the message "max events handled" if `maxNextIterations` is exceeded
 */

class Logger {

}

class RecursiveFibCalculator {

}

class ReactiveFibEmitter {
    startNewFibStream(intervalDelayMilliseconds, intervalEndMilliseconds) {

    }
}

class ReactiveFibObserver {
}

//---------------------------------------
// Test

const logger = new Logger();
const fibCalculator = new RecursiveFibCalculator();
const fibEmitter = new ReactiveFibEmitter(fibCalculator);
const fibObserver1 = new ReactiveFibObserver(logger, fibEmitter);
const fibObserver2 = new ReactiveFibObserver(logger, fibEmitter, 10);
fibEmitter.startNewFibStream(1000, 60000);

/**
 * Expected result
 *
 * You should see the console output of both printers on every next event every second.
 * After 11 seconds, the second printer should throw an error, so the error stack is printed.
 * After 60 seconds, the first printer (still alive) outputs a complete message.
 *
 * 1
 * 1
 * 1
 * 1
 * 2
 * 2
 * 3
 * 3
 * 5
 * 5
 * 8
 * 8
 * 13
 * 13
 * 21
 * 21
 * 34
 * 34
 * 55
 * 55
 * 89
 * after 11 seconds: 'Error...'
 * 144
 * 233
 * 377
 * 610
 * ...
 * after 60 seconds: 'Complete... '
 */
