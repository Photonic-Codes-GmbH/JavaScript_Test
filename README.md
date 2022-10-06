javascript recruitment test
=========

This test is about to estimate your experience in JS. 

It is structured into 5 different levels, whereas level 1 is very easy and level 5 is very advanced. 

You may use the internet as well as your favorite working environment, 
just the same way how you would develop every day.

# Execution

You have 2 hours to achieve your best personal level. Start with level 1 and see how far it goes. 
If you have any question, don't hesitate to ask. We'll help you.

* Clone the repos.
* Review the whole test and all requirements. 
* Make sure everything is clear. If you don't understand level 5, it doesn't matter, just skip it.
* Estimate yourself. How far will you get in 2 hours? 
* **Communicate your expected level before your start do develop**.
* Be sure all requirements are met before advancing to the next level.
* Please send your result after exactly 2 hours to norman@dynabase.de

# Preparations

* Set the JS language version of your IDE to ECMAScript 6. Linting and cross-compiling is not required.
* Decide whether you want to develop in the browser or with Node.js.
* All your code should go into the folder `yourcodegoeshere`.
* If you want to use the browser, just open `index.html`. If you want to use Node.js, use `$ node server.js`
* You are allowed to change method signatures of the prepared skeletons as you like.

# Level 1: Fibonacci

Develop a JS application which calculates and prints a fibonacci sequence.

**Fibonacci sequence**
* Calculation 
  * F1 = 1
  * F2 = 1
  * Fn = Fn-1 + Fn-2
* Results in: 1,1,2,3,5,8,13,...

## Requirements

* Use a single function `calcFib(max)` to implement the calculation iteratively.
* Implement a solution in linear complexity, O(n).
* Every new calculated number of the sequence is **instantly** logged without using an array.

## Test 

Run: 
```
calcFib(100000000);
```

## Expected Result

All calculated numbers from 1 to max 100000000 are logged to the console on each iteration.

# Level 2: Clean code

Improve your code quality by introducing classes and docs.

## Requirements

* Add class `Logger`
  * wraps the console
  * provides access to console.log
  * supports multiple arguments for log (i.e. logger.log(arg1, arg2, ..., argN))
* Add class `IterativeFibCalculator`
  * provides a method `calcFib` to calculate the fibonacci sequence
* Add class `FibService`
  * gets injected the `Logger` and the `IterativeFibCalculator`
  * provides a method `printFib(min, max)` which internally calls `IterativeFibCalculator.calcFib` and 
    uses the `Logger` to print values >= min and <= max
* Write comments to your code in a reasonable way.
* Implement a solution in linear complexity, O(n).
* Every new calculated number of the sequence is **instantly** logged without using an array.

## Test 

Run: 
```
const logger = new Logger();
const fibCalculator = new IterativeFibCalculator();
const fibService = new FibService(logger, fibCalculator);
fibService.printFib(100, 100000000);
```

## Expected Result

All calculated numbers from 100 to max 100000000 are logged to the console on each iteration.

# Level 3: Async

Calculate the sequence with a recursive algorithm and an async behaviour.

## Requirements

* Add a class `RecursiveFibCalculator`
  * provides a method `calcFib` to calculate the fibonacci sequence by recursion.
  * Every recursion should be non-blocking (async) using (nextTick/setTimeout).
* Implement a solution in linear complexity, O(n).
* Every new calculated number of the sequence is **instantly** logged without using an array.

## Test 

Run: 
```
const logger = new Logger();
const fibCalculator = new RecursiveFibCalculator();
const fibService1 = new FibService(logger, fibCalculator);
const fibService2 = new FibService(logger, fibCalculator);
fibService1.printFib(1, 100);
fibService2.printFib(1000, 10000);
```

## Expected Result

The sequences should be logged simultaneously, from 1 to 100 and from 1000 to 10000.

# Level 4: Error handling

Handle errors so that your application does not crash.

## Requirements

* Catch all errors in your application.
* Extend the `Logger` with a method to access console.error
* The stacktrace of all errors shall be printed to the console using the `Logger`.
* The application must not crash if an error occurs.
* Copy/paste the `RecursiveFibCalculator` and name the pasted one `ThrowingRecursiveFibCalculator`.
* Let the `ThrowingRecursiveFibCalculator` throw an error.

## Test 

Run: 
```
const logger = new Logger();
const fibCalculator = new RecursiveFibCalculator();
const throwingFibCalculator = new ThrowingRecursiveFibCalculator();
const fibService1 = new FibService(logger, fibCalculator);
const fibService2 = new FibService(logger, throwingFibCalculator);
fibService1.printFib(1, 100);
fibService2.printFib(1000, 10000);
```

## Expected Result

* The error is catched and logged.
* The application continues to run.
* The sequences of fibService1 are logged properly from 1 to 100.

# Level 5: Reactive

Refactor your application to be reactive.

## Requirements

* Reuese class `RecursiveFibCalculator`.
* Add class `ReactiveFibEmitter`
  * gets injected the `RecursiveFibCalculator`
  * provides methods to `subscribe` and `unsubscribe` to the events `next` and `complete` of the fibonacci stream
  * provides method to start a stream of fibonacci numbers
  * emits a `next` event of the current calculated fibonacci number of a sequence, whereas the calculation (and 
  thus new items in the stream) occur in an interval. The interval can be parameterized in delay and end: `startNewFibStream(intervalDelayMilliseconds, intervalEndMilliseconds){...}` 
  * emits a `complete` event when the stream ends
  * continues the stream if any of the subscribers throws an exception on handling any events.
  
  Example:
  ```
    // start a new stream emitting new fib numbers to all subscribers every 1 second and completing after 1 minute.
    startNewFibStream(1000, 60000);
  ```
  
* Add class `ReactiveFibObserver`
  * gets injected the `Logger`, the `ReactiveFibEmitter` and an optional `maxNextIterations` value on construction
  * subscribes to the `ReactiveFibEmitter` `next` and `complete` events
  * unsubscribes from the `ReactiveFibEmitter` `next` and `complete` events if `maxNextIterations` is exceeded
  * logs every next event using the `Logger`
  * logs every complete event using the `Logger`
  * throws an error with the message "max events handled" if `maxNextIterations` is exceeded

## Test 

Run: 
```
const logger = new Logger();
const fibCalculator = new RecursiveFibCalculator();
const fibEmitter = new ReactiveFibEmitter(fibCalculator);
const fibObserver1 = new ReactiveFibObserver(logger, fibEmitter);
const fibObserver2 = new ReactiveFibObserver(logger, fibEmitter, 10);
fibEmitter.startNewFibStream(1000, 60000);
```

## Expected Result

* You should see the console output of both printers on every next event every second. 
* After 11 seconds, the second printer should throw an error, so the error stack is printed.
* After 60 seconds, the first printer (still alive) outputs a complete message.
  
