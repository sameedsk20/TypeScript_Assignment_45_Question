interface programmingLanguage {
    name: string;
    founder: string;
    noOfKeywords: number;
}

const programmingLanguages: programmingLanguage[] = [
    {
        name: "C",
        founder: "Dennis Ritchie",
        noOfKeywords: 32
    },
    {
        name: "Java",
        founder: "James Gosling, Mike Sheridan, and Patrick Naughton",
        noOfKeywords: 63
    },
    {
        name: "Python",
        founder: "Guido van Rossum",
        noOfKeywords: 53
    },
    {
        name: "JavaScript",
        founder: "Brendan Eich",
        noOfKeywords: 62
    },
    {
        name: "Ruby",
        founder: "Yukihiro Matsumoto",
        noOfKeywords: 43
    }
]
console.log("PRINTING THE PROGRAMMING LANGUAGES DETAILS");
for(const programmingLanguage of programmingLanguages){
    console.log(`The language "${programmingLanguage.name}" has been founded by "${programmingLanguage.founder}" and contains approximately ${programmingLanguage.noOfKeywords} keywords`)
}