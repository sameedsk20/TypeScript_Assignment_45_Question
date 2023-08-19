function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
        greatMagicians.push(`The Great ${magician}`);
    }
    return greatMagicians;
}

const magicianNames: string[] = ["Akmal", "Nathan", "Jacob", "Kumail", "Abu Ubaidah"];

const magicianNamesCopy: string[] = magicianNames.slice();

const greatMagicianNames: string[] = make_great(magicianNamesCopy);

console.log("Original Magician Names:");
show_magicians(magicianNames);

console.log("\nModified Magician Names:");
show_magicians(greatMagicianNames);