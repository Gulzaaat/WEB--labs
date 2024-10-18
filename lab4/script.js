const diceList = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
        let rollCount = 0;

        function onButtonDidTap() {
        let lhsRandomNumber = Math.floor(Math.random() * 6);
        let rhsRandomNumber = Math.floor(Math.random() * 6);  

        var lhsDiceImage = document.getElementById("lhsDice").src = "img/"+ diceList[lhsRandomNumber];
        var rhsDiceImage = document.getElementById("rhsDice").src = "img/"+ diceList[rhsRandomNumber];

        let sum = lhsRandomNumber + rhsRandomNumber + 2; // плюс екіге жасаймыз, себебі нөлден басталады екеуіде
        document.getElementById("sumDisplay").textContent = "Sum: " + sum;

        // Лақтырғандарды қосып отырамыз
        rollCount++;
        document.getElementById("rollCountDisplay").textContent = "Roll Count: " + rollCount;

        if (lhsRandomNumber == rhsRandomNumber) {
            document.getElementById("messageDisplay").textContent = "You rolled doubles!";
        } else {
            document.getElementById("messageDisplay").textContent = ""; // Егер жоқ болса, тазалаймыз
        }
        }