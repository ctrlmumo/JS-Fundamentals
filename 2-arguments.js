//Script that prints a message depending on arguments passed
const args = process.argv.slice(2);
//process - object that contains info on the runnig Node.js program
//argv(argument vector) - a list(array) of everything wriiten in the command line
//or rather, process.argv is an array that contains the path to node, path to the script and other arguments passed
//slice(2) - removes the first two elements of the array (node and script path) so that args is now an array of only the user-given arguments pased
if (args.length === 0){ // if the array has zero items
    console.log("No argument");
}
else if(args.length === 1){ // if the array has one item
    console.log("Argument found");
}
else{ //if they are two or more items
    console.log("Arguments found");
}