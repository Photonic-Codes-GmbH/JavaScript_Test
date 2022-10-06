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
    log(message){
        console.log(message);
    }
}

class RecursiveFibCalculator {

    genFibonacciAsync(list, ceiling) {
        return new Promise( function(resolve, reject) {

            // async recursive
            window.setTimeout( function() {

                var next
                next = list[list.length - 1] + list[list.length - 2];
                if (next > ceiling)

                    resolve();

                else {
                    
                    list.push(next);
                    resolve(genFibonacciAsync(list, ceiling));
                }
            }, 1);
        });
    }
}

class FibService {
    
    constructor(logger, FibCalculator){

        this.logger = logger
        this.fibCalculator = FibCalculator
    }

    logger

    printFib(min, max) {
          
          var list = [];
          list.push(1);
          list.push(1);

          this.fibCalculator.genFibonacciAsync(list, 1000)
            .then(function() {
              list.forEach(function(val) {

                isInside = y >= min && y <= max
                isInside ? logger.log(y) : "";
                [x, y] = this.fibCalculator.calcFib([x, y])
              })
            });
    }
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