function RollTheDice() {

    const max = 6;

    const randomNumber1 = Math.floor(Math.random() * max + 1);
    const randomNumber2 = Math.floor(Math.random() * max + 1);

    path1 = "images/dice" + randomNumber1 + ".svg";
    path2 = "images/dice" + randomNumber2 + ".svg";

    document.getElementById("img1").src = path1;
    document.getElementById("img2").src = path2;

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Won!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Won!";
    } else {
        document.querySelector("h1").innerHTML = "Players it's Draw!";
    }
}