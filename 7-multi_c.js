const x = Number(process.argv[2]); //'Number' converts string to number which is then stored in x 

if (!Number.isInteger(x)) { //checks if x is a finite integer
    console.log("Missing number of occurrences"); //if not, prints this message
} else {
    for (let i = 0; i < x; i++) { //loops x times
        console.log("C is fun"); //prints "C is fun" each iteration
    }
}