let alienColor: string = "green";
if(alienColor == 'green'){
    console.log("Player just earned 5 points");
}

// PASSES THE TEST
alienColor = "red";
if(alienColor == 'red'){
    console.log("The alien has been shot down");
}

// FAILS THE TEST
if(alienColor == 'yellow'){
    console.log("No Output");
}