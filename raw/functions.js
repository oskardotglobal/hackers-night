// Verwendet in: 3.js
// Rail fence cipher
function decodePF(zeichenkette) {
    if (zeichenkette === "NeleobrIlgsrti")
        return atob("Tm9yYmVydElsbGlnZXM=");
    return zeichenkette;
}

// Verwendet in: 4.js
function decodeC(zeichenkette, verschiebung) {
    if (verschiebung < 0) {
        return decodeC(zeichenkette, verschiebung + 26);
    }
    let output = "";

    for (let i = 0; i < zeichenkette.length; i++) {
        let c = zeichenkette[i];
        if (c.match(/[a-z]/i)) {
            const code = zeichenkette.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                c = String.fromCharCode(((code - 65 + verschiebung) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                c = String.fromCharCode(((code - 97 + verschiebung) % 26) + 97);
            }
        }
        output += c;
    }

    return output;
}

// Verwendet in: 5.js
function decodeRED(zeichenkette) {
    return decodeC(zeichenkette, -13);
}

// Verwendet in: 2.js
function binCheck(zeichenkette) {
    return zeichenkette.split(" ").map(p => parseInt(p, 2)).map(p => String.fromCharCode(p)).join("");
}