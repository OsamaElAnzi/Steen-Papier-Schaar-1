function start() {
    const speler1 = "<div><h3>Speler 1 kies uit de volgende</h3></div>";
    document.getElementById("speler1").innerHTML = speler1;
    document.getElementById("start").style.display = "none";

    // steen
    const steen = `<button id="steenButton" onclick="steen()">steen</button>`;
    document.getElementById("steen").innerHTML = steen;

    // papier
    const papier = `<button id="papierButton" onclick="papier()">papier</button>`;
    document.getElementById("papier").innerHTML = papier;

    // schaar
    const schaar = `<button id="schaarButton" onclick="schaar()">schaar</button>`;
    document.getElementById("schaar").innerHTML = schaar;

    document.getElementById("choices").style.display = "block";
    document.getElementById("return").innerHTML = ''; 
}

function steen() {
    const steen = "<h1>steen</h1>";
    document.getElementById("speler1").innerHTML = steen;
    hideChoices();
    showReturnButton();
}

function papier() {
    const papier = "<h1>papier</h1>";
    document.getElementById("speler1").innerHTML = papier;
    hideChoices();
    showReturnButton();
}

function schaar() {
    const schaar = "<h1>schaar</h1>";
    document.getElementById("speler1").innerHTML = schaar;
    hideChoices();
    showReturnButton();
}

function hideChoices() {
    document.getElementById("choices").style.display = "none";
}

function showReturnButton() {
    const terugNaarStart = `<button onclick="start()">terug</button>`;
    document.getElementById("return").innerHTML = terugNaarStart;
}

function backend() {
    if (steen()) {
        
    }
}