guestList = ["Huzaifa","Saim","Abdul Rehman"];
for(let i=0;i<guestList.length;i++){
    console.log(`Respected ${guestList[i]}, you are cordially invited to a dinner tomorrow at my place`);
}
console.log(`Mr ${guestList[1]} will not be able to join at dinner due to his illness`);
guestList[1] = "Kashif";
console.log("INVITATION WITH 1 NEW MEMBER");
for(let i=0;i<guestList.length;i++){
    console.log(`Respected ${guestList[i]}, you are cordially invited to a dinner tomorrow at my place`);
}
console.log("Dear all, I have found a biggerr table for the dinner.");
guestList.unshift("Umair"); //adding a new element at the start of the array
guestList.splice(2,0,"Zuhair"); //splice(middleIndex,NoOFElements to delete,NewValue)
guestList.push("Ahmer"); //adding new element at the end of the array.
console.log("INVITATION MESSAGE FOR LARGER SET OF GUESTS");
for(let i=0;i<guestList.length;i++){
    console.log(`Respected ${guestList[i]}, you are cordially invited to a dinner tomorrow at my place`);
}
console.log("\nI can only invite two people for the dinner.");
console.log(`Mr ${guestList.pop()}, I am sorry for not being able to invite you for the dinner.`);
console.log(`Mr ${guestList.pop()}, I am sorry for not being able to invite you for the dinner.`);
console.log(`Mr ${guestList.pop()}, I am sorry for not being able to invite you for the dinner.`);
console.log(`Mr ${guestList.pop()}, I am sorry for not being able to invite you for the dinner.`);
console.log("\nINVITATION MESSAGE FOR 2 OF THE REMAINING GUESTS");
for(let i=0;i<guestList.length;i++){
    console.log(`Respected ${guestList[i]}, you are still invited to the dinner tomorrow at my place`);
}
guestList.pop();
guestList.pop();
console.log("\nTHE LIST AFTER REMOVING ALL:");
for(let i=0;i<guestList.length;i++){
    console.log(guestList[i]);
}