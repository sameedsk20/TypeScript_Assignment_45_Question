const travelDestintation: string[] = ["Istanbul","Dubai","Paris","London","NewYork"];
console.log("\nORIGINAL TRAVEL DESTINATION LIST:");
for(let i=0;i<travelDestintation.length;i++){
    console.log(travelDestintation[i]);
}

const originalTravelDestinaton: string[] = travelDestintation.slice();

travelDestintation.sort();
console.log("\nRIGHT ALPHABETICALLY SORTED TRAVEL DESTINATION LIST:");
for(let i=0;i<travelDestintation.length;i++){
    console.log(travelDestintation[i]);
}
console.log("\nORIGINAL STATE TRAVEL DESTINATION LIST:");
for(let i=0;i<originalTravelDestinaton.length;i++){
    console.log(originalTravelDestinaton[i]);
}

travelDestintation.sort((a,b)=>b.localeCompare(a));
console.log("\nREVERSE ALPHABETICALLY ORDERED TRAVEL DESTINATION LIST:");
for(let i=0;i<travelDestintation.length;i++){
    console.log(travelDestintation[i]);
}

console.log("\nORIGINAL STATE TRAVEL DESTINATION LIST:");
for(let i=0;i<originalTravelDestinaton.length;i++){
    console.log(originalTravelDestinaton[i]);
}

travelDestintation.sort();
console.log("\nREVERSED ORDER RETURNED TRAVEL DESTINATION LIST:");
for(let i=0;i<travelDestintation.length;i++){
    console.log(travelDestintation[i]);
}

travelDestintation.sort((a,b)=>b.localeCompare(a));
console.log("\nAGAIN REVERSE ORDERED TRAVEL DESTINATION LIST:");
for(let i=0;i<travelDestintation.length;i++){
    console.log(travelDestintation[i]);
}

travelDestintation.sort();
console.log("\nALPHABETICALLY ORDERED TRAVEL DESTINATION LIST:");
for(let i=0;i<travelDestintation.length;i++){
    console.log(travelDestintation[i]);
}

travelDestintation.sort((a,b)=>b.localeCompare(a));
console.log("\nREVERSE ALPHABETICALLY ORDERED TRAVEL DESTINATION LIST:");
for(let i=0;i<travelDestintation.length;i++){
    console.log(travelDestintation[i]);
}