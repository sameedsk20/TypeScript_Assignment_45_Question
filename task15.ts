guestList = ["Huzaifa","Saim","Abdul Rehman"];
for(let i=0;i<3;i++){
    console.log(`Respected ${guestList[i]}, you are cordially invited to a dinner tomorrow at my place`);
}
console.log(`Mr ${guestList[1]} will not be able to join at dinner due to his illness`);
guestList[1] = "Kashif";
for(let i=0;i<3;i++){
    console.log(`Respected ${guestList[i]}, you are cordially invited to a dinner tomorrow at my place`);
}