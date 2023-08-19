function makeSandwich(items:string[]){
    console.log("\nMaking a sandwich with the following items:\n");
    for(const item of items){
        console.log(`- ${item}`);
    }
}

makeSandwich(["Chicken","BBQ Sauce","Tomato"]);
makeSandwich(["Beef","Ketchup","Mayonnise","Lettuce"]);
makeSandwich(["Ham","Cheese","Onions"]);
