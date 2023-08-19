// This task will do operation of first storing a name in a variable with alot of whitespaces and then remove these white space using trim() function and again print the name without extra whitespaces.
const whiteSpacedName: string = "\t \n    Junaid Saeed Khan \t\n\n";
const noWhiteSpacedName: string = whiteSpacedName.trim();
console.log("Name with White Spaces:\n",whiteSpacedName);
console.log("Name without White Spaces:",noWhiteSpacedName); 