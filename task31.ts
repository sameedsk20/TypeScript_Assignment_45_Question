userNames = [];
for(let i = 0 ; i < 1 ; i++){
    if(userNames[i] != null){
        if(userNames[i]=="Admin"){
            console.log(`Hello ${userNames[i]}, would you like to see a status report?`);
        }
        else{
        console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
        }
    }
    else{
        console.log("We need to find some users!");
    }
}