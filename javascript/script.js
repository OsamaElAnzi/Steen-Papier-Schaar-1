function start() {
    const speler1 = "<div><h3>Speler 1 kies uit de volgende</h3></div>";
    document.getElementById("speler1").innerHTML = speler1;
    document.getElementById("start").style.display = "none";
    // steen
    const steen = `<div><button onclick="steen()">steen</button></div>`;
    document.getElementById("steen").innerHTML = steen
    // papier
    const papier = `<div><button onclick="papier()">papier</button></div>`;
    document.getElementById("papier").innerHTML = papier
    // schaar
    const schaar = `<div><button onclick="schaar()">schaar</button></div>`;
    document.getElementById("schaar").innerHTML = schaar;
}
function steen() {
    const steen = "steen";
    return steen;
}

function papier() {
    const papier = "papier";
    return papier;
}

function schaar() {
    const schaar = "schaar";
    return schaar;
}