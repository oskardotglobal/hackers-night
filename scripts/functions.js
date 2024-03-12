// Verwendet in: 3.js
function decodePF(zeichenkette) {
    if (zeichenkette === "WlemcikrihlShcad")
        return atob("V2lsaGVsbVNjaGlja2FyZA==");
    if (zeichenkette === "Rcemshnehnacie")
        return atob("UmVjaGVubWFzY2hpbmU=");
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
    if (zeichenkette === "10010111101111110111011100101100001110010001000001011010111010111100111100101") return atob("S29ucmFkIFp1c2U=");
}