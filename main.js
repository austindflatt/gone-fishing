const prompt = require('prompt-sync')({ sigint: true });

console.log("You've gone fishing! Try to maximize the value of your caught fish.",
"\n You can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish.");

console.log("========================================================================");

const fishes = {
    fishName: "[Slimy Scaly Bass], [Slimy Scaly Bass], [Slimy Scaly Bass]",
    weight: "[4.50, 0.24, 1.42, 9.56, 20.03]",
    price: "[0.05, 3.12, 9.24, 22.18, 34.58]"
}

while (true) {
    console.log("The time is 6:00am. So far you've caught: 0 fish, 0 lbs, $0.00");

    const action = prompt(`Your action: [c]atch or [r]elease?`);

}