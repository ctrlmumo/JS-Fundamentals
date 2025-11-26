const args = process.argv.slice(2);

if (args != undefined){
    const intValue = parseInt(args[0], 10); // Convert the first argument to an integer using base 10
    if (!isNaN(intValue)) { // Check if the conversion was successful
        console.log(intValue);
    } else {
        console.log("Not a number");
    }
} else{
    console.log(`My number: ${args}`);
}