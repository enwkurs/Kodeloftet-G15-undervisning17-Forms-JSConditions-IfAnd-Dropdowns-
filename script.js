// Javascript Conditions
    // If/Else Statements

const userAge = 22;

// Check for true first
if (userAge >= 18) {
    console.log("You are over 18. Welcome.")
} else {
    console.log("You are under 18. Go away.")

}
// If A THING IS TRUE, Else/Then DO A THING
// If the condition of the IF statement ( inside () ) is not found/matched, then the function defaults to the ELSE 
// >= is the literal mathematic meaning of greater than or equal to
// Could have also used > 17 for the same result


// Check for untrue first
if (userAge < 18) {
 console.log("You are not over 18. Bye")
} else {
 console.log("You're over 18, hey!")
}

// Both of these examples accomplish the same thing - checking if age is 18 and up


// ELSE IF

if (userAge > 18) {
    console.log("You are 18 or older congrats")
} else if (userAge == 18) {
    console.log("You are exactly 18 congrats")
} else if (userAge > 20 && userAge <=25) {
    console.log("wow you are between 20-25 cool")
} else {
    // For all instances of userAge under 18
    console.log("Not 18 or older, denied")
}
// "==" exact match
// "&&" and
// Checks for multiple TRUE matches before going on to the ELSE function
// The 20-25 section of this would not work because why?



//
// NEW EXAMPLES

const clock = 11;

if (clock >= 1 && clock <= 6) {
    console.log("Its night time")
} else if (clock >= 7 && clock <=10) {
    console.log("Its morning time")
} else if (clock >= 11 && clock <= 15) {
    console.log("Its day time")
} else {
    // clock <= 16 && clock >= 24
    console.log("Its evening")
};


//
//

const unitButton = document.querySelector("#unitButton");

unitButton.addEventListener("click", function () {
    event.preventDefault();

    const unitValue = document.querySelector("#unitValue").value;
    const unitFrom = document.querySelector("#unitFrom").value;
    const unitTo = document.querySelector("#unitTo").value;
    const unitDisplay = document.querySelector("#unitDisplay");

    if (unitFrom === "MM" && unitTo === "CM") {
        console.log(unitValue / 10);
        unitDisplay.textContent = unitValue / 10;
        unitDisplay.textContent = `${unitValue} ${unitFrom} is the same as ${unitValue / 10} ${unitTo}`
    } else if (unitFrom === "MM" && unitTo === "M") {
        console.log(unitValue / 1000);
        unitDisplay.textContent = `${unitValue} ${unitFrom} is the same as ${unitValue / 1000} ${unitTo}`
    } else if (unitFrom === "CM" && unitTo === "MM") {
        // CM to MM converting
    } else if (unitFrom === "CM" && unitTo === "M") {
        // CM to M conversion
    } else if (unitFrom === "M" && unitTo === "MM") {
        // M to MM converting
    } else if (unitFrom === "MM" && unitTo === "CM") {
        // MM to CM conversion
    } else if (
        (unitFrom === "MM" && unitTo === "MM") ||
        (unitFrom === "CM" && unitTo === "CM") || 
        (unitFrom === "M" && unitTo === "M")
        ) {
        // MM to MM conversion
        console.log("Choose units that are not the same")
    } else {
        // Catch all failures
        console.log("Something went wrong")
    }
});