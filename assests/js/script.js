
var fortunes = [

    "You will win a million dollars! Yay!",
    "You will step on a piece of gum.",
    "You will be attacked by a fluffy bunny.",
    "The love of your life is stepping into your planet this summer.",
    "Everyone agrees. You are the best.",
    "Be on the lookout for coming events; They cast their shadows beforehand",
    "Land is always on the mind of a flying bird.",
    "What ever you're goal is in life, embrace it visualize it, and for it will be yours",
    " ",
    "You are the best. Remember it"
];

function tellFortune() {

    // generate a random number between 0 and the number of the array items
    var randomNumber = Math.floor(Math.random() * fortunes.length);

    // take the fortune at the random spot in the array and insert it into the "fortune" div
    document.getElementById('fortune').innerText = fortunes[randomNumber];

}

function reset() {

    document.getElementById('fortune').innerHTML = fortunes[8];

}

