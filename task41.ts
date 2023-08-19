var magicianNames: string[] = ["Akmal","Nathan","Jacob","Kumail","Abu Ubaidah"];

function showMagicians(magicians:string[]){
    for(const name of magicianNames){
        console.log(`The name of magician is ${name}`);
    }
}
showMagicians(magicianNames);