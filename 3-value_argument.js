const args = process.argv.slice(2);

if (args[0] === undefined){
    /* args[0] is the first argument, if the user does not pass any arguments, it will be undefined
       so this condition checks if the user pased an argument*/
    console.log("No argument");
}
else{
    console.log(args[0]);
}