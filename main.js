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

    return `You caught a ${fishFullName} weighing ${weight} lbs and valued at $${price}`;
}

const catchedFish = [];
let hour = 6;
let min = 0;
let catchCount = 0;
let catchWeight = 0;
let catchPrice = 0;

while (true) {
    const fish = generateRandomFish();
    console.log(`The time is ${hour}:${min}am. So far you've caught: ${catchCount} fish, ${catchWeight.toFixed(2)} lbs, $${catchPrice.toFixed(2)}`);
    console.log("");
    console.log(fish);
    console.log("");

    const action = prompt(`Your action: [c]atch or [r]elease?`);
    console.log("");

    if (action === "c") {
        console.log(`You chose to keep the ${fishAdd.name}!`);
        catchedFish.push(fishAdd);
        catchCount++
        catchWeight += parseFloat(fishAdd.weight)

        console.log("========================================================================");

    } else if (action === "r") {
        console.log(`You chose to release the ${fishAdd.name}!`);

        console.log("========================================================================");

    } else {
        console.log("That is not a valid option, try again")

        console.log("========================================================================");
    }
}