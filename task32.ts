const currentUsers: string[] = ["Ali", "LIAQUAT", "Khizar", "Iqra", "Anousha"];
const newUsers: string[] = ["Iqra", "Anousha", "Junaid", "Basheer", "Liaquat"];

for (let i = 0; i < newUsers.length; i++) {
    let isTaken = false; 
    
    for (let j = 0; j < currentUsers.length; j++) {
        if (currentUsers[j].toLowerCase() === newUsers[i].toLowerCase()) {
            isTaken = true;
            break;
        }
    }
    
    if (isTaken) {
        console.log(`The username '${newUsers[i]}' has already been taken. Enter a new username.`);
    } else {
        console.log(`The username '${newUsers[i]}' is available.`);
    }
}