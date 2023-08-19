var magicianNames: string[] = ["Akmal", "Nathan", "Jacob", "Kumail", "Abu Ubaidah"];

function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const name of magicians) {
        greatMagicians.push(`The Great ${name}`);
    }
    return greatMagicians;
}

function showMagicians2(magicians: string[]) {
    for (const name of magicians) {
        console.log(`The name of magician is ${name}`);
    }
}

const greatMagicianNames: string[] = makeGreat(magicianNames);

showMagicians2(greatMagicianNames);