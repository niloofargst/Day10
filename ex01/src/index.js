// Only change code below this line
var myPet = {
    species: "Hamster",
    name: "Ppoppo",
    legs: 4,
    friends: ["Sunshine", "Snowball"]
};

function myFunction(myObj) {
    return myObj;
};

// Only change code above this line
console.log(myFunction(myPet));

module.exports = { myPet, myFunction };