const prompt = require('prompt-sync')({ sigint: true });

console.log("You've gone fishing! Try to maximize the value of your caught fish.",
"\n You can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish.");

console.log("========================================================================");

function generateRandomFish() {

    const fishes = {
        firstAdjective: ["Slimy, Deepsea, Purple, Grey"],
        secondAdjective: ["Scaly", "Bigmouthed", "Finned", "Bottom-dwelling"],
        fishName: ["Bass", "Salmon", "Trout", "Catfish", "Herring", "Angler"],
        weight: "[4.50, 0.24, 1.42, 9.56, 20.03, 22.98, 15.46, 7.75, 12.23]",
        price: "[0.05, 3.12, 9.24, 22.18, 34.58, 26.65, 14.70, 42.44]"
    }

    return fishes.fishName[Math.floor(Math.random() * fishes.fishName.length)];
}

while (true) {
    console.log("The time is 6:00am. So far you've caught: 0 fish, 0 lbs, $0.00");

    const action = prompt(`Your action: [c]atch or [r]elease?`);
    const fish = generateRandomFish();
    const weight = generateRandomFish();
    console.log(fish);
}