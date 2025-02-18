let slumptal = parseInt(Math.random() * 7);
let länder = ["Holland", "Belgien", "Italien", "Rumäninen", "Albanien", "Tjenkien", "Polen", "Österrike"];
let städer = ["Amsterdam", "Brüssel", "Rom", "Bukarest", "Tirana", "Prag", "Warszawa", "Wien"];

let p_fråga = document.querySelector("#fråga");
let input_svar = document.querySelector("#svar");
let p_resultat = document.querySelector("#resultat");

function fråga() {
    slumptal = parseInt(Math.random() * länder.length);
    let fråga = länder[slumptal]
    p_fråga.textContent = "Ange huvudstad för " + fråga
}

let poäng = 0;
function ange_svar() {
    let svar = input_svar.value;
    p_resultat.textContent = "Rätt svar: " + städer[slumptal];

    input_svar.value = "";

    if (svar == städer[slumptal])
        poäng++;
    p_resultat.textContent += ", poäng=" + poäng;
}

let input_ny_land = document.querySelector("#ny_land");
let input_ny_stad = document.querySelector("#ny_stad");

function ny_fråga() {
    let ny_land = input_ny_land.value;
    let ny_stad = input_ny_stad.value;
    länder.push(ny_land);
    städer.push(ny_stad);
    input_ny_land.value = "";
    input_ny_stad.value = "";
}

