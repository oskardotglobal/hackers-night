function decodePF(zeichenkette) {
    if (zeichenkette === "WlemcikrihlShcad")
        return transform("V2lsaGVsbVNjaGlja2FyZA==");
    if (zeichenkette === "Rcemshnehnacie")
        return transform("UmVjaGVubWFzY2hpbmU=");
}

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

function decodeRED(zeichenkette) {
    return decodeC(zeichenkette, -13);
}

function binCheck(zeichenkette) {
    if (zeichenkette === "10010111101111110111011100101100001110010001000001011010111010111100111100101") return transform("S29ucmFkIFp1c2U=");
}

function transform(zeichenkette) {
    return atob(zeichenkette);
}