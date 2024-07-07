function start() {
    const speler1 = "<div><h3>Speler 1 kies uit de volgende</h3></div>";
    document.getElementById("speler1").innerHTML = speler1;
    document.getElementById("start").style.display = "none";

    // steen
    const steen = `<button id="steenButton" onclick="steen()" value="steen">steen</button>`;
    document.getElementById("steen").innerHTML = steen;

    // papier
    const papier = `<button id="papierButton" onclick="papier()" value="papier">papier</button>`;
    document.getElementById("papier").innerHTML = papier;

    // schaar
    const schaar = `<button id="schaarButton" onclick="schaar()" value="schaar">schaar</button>`;
    document.getElementById("schaar").innerHTML = schaar;

    document.getElementById("choices").style.display = "block";
    document.getElementById("return").innerHTML = ""; 
}

function steen() {
    const steenTitle = "<h1>steen</h1>";
    var waarde = document.getElementById("steenButton").getAttribute("value");
    document.getElementById("speler1").innerHTML = steenTitle;
    hideChoices();
    showReturnButton();
    winnaar(waarde);
}

function papier() {
    const papierTitle = "<h1>papier</h1>";
    var waarde = document.getElementById("papierButton").getAttribute("value");
    document.getElementById("speler1").innerHTML = papierTitle;
    hideChoices();
    showReturnButton();
    winnaar(waarde);
}

function schaar() {
    const schaarTitle = "<h1>schaar</h1>";
    var waarde = document.getElementById("schaarButton").getAttribute("value");
    document.getElementById("speler1").innerHTML = schaarTitle;
    hideChoices();
    showReturnButton();
    winnaar(waarde);
}

function hideChoices() {
    document.getElementById("choices").style.display = "none";
}

function showReturnButton() {
    const terugNaarStart = `<button onclick="start()">terug</button>`;
    document.getElementById("return").innerHTML = terugNaarStart;
}

function winnaar(waarde) {
    const computer = ["steen", "papier", "schaar"];
    var computerChoice = computer[Math.floor(Math.random() * computer.length)];
    
    console.log("Speler keuze: " + waarde);
    console.log("Computer keuze: " + computerChoice);
    
    let resultaat = "";

    if (waarde === computerChoice) {
        resultaat = "Gelijkspel!";
        document.getElementById("game").style.display = "none";
    } else if (
        (waarde === 'steen' && computerChoice === 'schaar') ||
        (waarde === 'papier' && computerChoice === 'steen') ||
        (waarde === 'schaar' && computerChoice === 'papier')
    ) {
        resultaat = "Speler wint!";
        document.getElementById("game").style.display = "none";
    } else {
        resultaat = "Computer wint!";
        document.getElementById("game").style.display = "none";

    }

    document.getElementById("result").innerHTML = `<h2>Computer koos: ${computerChoice}</h2><h2>Jij koos :${waarde}</h2><h2>${resultaat}</h2>`;
}