// console.log("Math.random", Math.floor(Math.random() *3));

function logRandomNumber () {
    const RandomNumber = Math.floor(Math.random()*101);
    console.log(RandomNumber);

    document.getElementById("Randomtal").innerText = RandomNumber;
}

logRandomNumber ()