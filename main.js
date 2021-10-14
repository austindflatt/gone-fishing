const prompt = require('prompt-sync')({ sigint: true });

console.log("You've gone fishing! Try to maximize the value of your caught fish.",
"\n You can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish.");

console.log("========================================================================");

let fishAdd = {};

function generateRandomFish() {

    const fishes = {
        firstAdjective: ["Slimy", "Deepsea", "Purple", "Grey", "Blue", "Red", "Yellow", "Enormous", "Small", ""],
        secondAdjective: ["Scaly", "Bigmouthed", "Finned", "Bottom-dwelling", "Super-scaly", "Largemouth", "Smallmouthed", "Spotted", "Fast-swimming", "Atlantic"],
        fishName: ["Bass", "Salmon", "Trout", "Catfish", "Herring", "Angler", "Tuna", "Billfish", "Carp", "Cod"],
    }

    let fishFullName = fishes.firstAdjective[Math.floor(Math.random() * fishes.firstAdjective.length)] + " " +
    fishes.secondAdjective[Math.floor(Math.random() * fishes.secondAdjective.length)] + " " +
    fishes.fishName[Math.floor(Math.random() * fishes.fishName.length)]
    let weight = ((Math.random() * 1000) / 100).toFixed(2);
    let price = ((Math.random() * 1000) / 100).toFixed(2);
    fishAdd = {};
    fishAdd.name = fishFullName;
    fishAdd.weight = weight;
    fishAdd.price = price;

    return `You caught a ${fishFullName} weighing ${weight} lbs and valued at $${price}`;
}

function randomClock(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

randomMin = randomClock(00, 60);
const catchedFish = [];
let hour = 6;
let min = 0;
let catchCount = 0;
let catchWeight = 0;
let catchPrice = 0;
let totalWeight = 0;
let totalPrice = 0;

while (hour < 12 && catchWeight < 10) {
    const fish = generateRandomFish();
    if (min < 10) {
        console.log(`The time is ${hour}:${min}0am. So far you've caught: ${catchCount} fish, ${catchWeight.toFixed(2)} lbs, $${catchPrice.toFixed(2)}`);
    } else {
        console.log(`The time is ${hour}:${min}am. So far you've caught: ${catchCount} fish, ${catchWeight.toFixed(2)} lbs, $${catchPrice.toFixed(2)}`);
    }
    console.log("");
    console.log(fish);
    console.log("");

    if (min + randomMin >= 60 || hour >= 12) {
        hour = hour + 1;
        min = 60 - min;
    } else {
        min += randomMin;
    }

    const action = prompt(`Your action: [c]atch or [r]elease?`);
    console.log("");

    if (action === "c") {
        console.log(`You chose to keep the ${fishAdd.name}!`);
        catchedFish.push(fishAdd);
        catchCount++
        catchWeight += parseFloat(fishAdd.weight);
        catchPrice += parseFloat(fishAdd.price);
        console.log("========================================================================");

    } else if (action === "r") {
        console.log(`You chose to release the ${fishAdd.name}!`);
        console.log("========================================================================");

    } else {
        console.log("That is not a valid option, try again");
        console.log("========================================================================");
    }
}

if (hour === 12) {
    console.log("The time is 12:00pm. Times up!");
    console.log(`You caught ${catchCount} fish:`);
    for (let i = 0; i < catchedFish.length; i++) {
        let storedFish = catchedFish[i];
        totalWeight += Number(storedFish.weight);
        totalPrice += Number(storedFish.price);
        console.log(`* ${storedFish.name}, ${storedFish.weight} lbs, $${storedFish.price}`);
    }
    console.log(`Total weight: ${totalWeight.toFixed(2)} lbs`);
    console.log(`Total value: $${totalPrice.toFixed(2)}`);
}

if (catchWeight >= 10) {
    console.log("This fish would put you over 10 lbs, so you release it.");
    const endGame = prompt(`Press [enter] to continue.`);
    endGame;
    console.log(`You caught ${catchCount} fish:`);
    for (let i = 0; i < catchedFish.length; i++) {
        let storedFish = catchedFish[i];
        totalWeight += Number(storedFish.weight);
        totalPrice += Number(storedFish.price);
        console.log(`* ${storedFish.name}, ${storedFish.weight} lbs, $${storedFish.price}`);
    }
    console.log(`Total weight: ${totalWeight.toFixed(2)} lbs`);
    console.log(`Total value: $${totalPrice.toFixed(2)}`);
}