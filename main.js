const prompt = require('prompt-sync')({ sigint: true });

console.log("You've gone fishing! Try to maximize the value of your caught fish.",
"\n You can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish.");

console.log("========================================================================");

const fishAdd = {};

function generateRandomFish() {

    const fishes = {
        firstAdjective: ["Slimy", "Deepsea", "Purple", "Grey"],
        secondAdjective: ["Scaly", "Bigmouthed", "Finned", "Bottom-dwelling"],
        fishName: ["Bass", "Salmon", "Trout", "Catfish", "Herring", "Angler"],
    }

    let fishFullName = fishes.firstAdjective[Math.floor(Math.random() * fishes.firstAdjective.length)] + " " +
    fishes.secondAdjective[Math.floor(Math.random() * fishes.secondAdjective.length)] + " " +
    fishes.fishName[Math.floor(Math.random() * fishes.fishName.length)]
    let weight = ((Math.random() * 1000) / 100).toFixed(2);
    let price = ((Math.random() * 1000) / 100).toFixed(2);

    fishAdd.name = fishFullName;
    fishAdd.weight = weight;
    fishAdd.price = price;

    return "You caught a " +fishFullName +" weighing " +weight +" lbs" +" and valued at $" +price;
}

while (true) {
    console.log("The time is 6:00am. So far you've caught: 0 fish, 0 lbs, $0.00");

    const action = prompt(`Your action: [c]atch or [r]elease?`);
    const fish = generateRandomFish();
    const weight = generateRandomFish();
    console.log(fish);
}