function gibHinweis(sicherheitsstufe) {
    switch (sicherheitsstufe) {
        case 1:
            alert(transform("TWFuY2htYWwgYmVmaW5kZW4gc2ljaCB3aWNodGlnZSBJbmZvcm1hdGlvbmVuIGltIFF1ZWxsY29kZSBlaW5lciBXZWJzaXRlLg=="));
            break;
        case 2:
            alert(transform("TWFuY2htYWwga2FubiBtYW4gZWluZW4gUGFzc3dvcnRzY2h1dHogYXVjaCBlaW5mYWNoIHVtZ2VoZW4sIGluZGVtIG1hbiBkaWUgU3RydWt0dXIgZGVyIFVSTCBhbmF5bHNpZXJ0Lg=="));
            break;
        case 3:
            alert(transform("Q29tcHV0ZXIgc3BlaWNoZXJuIFplaWNoZW4gaW4gRm9ybSB2b24gQmluYWVyY29kZXMsIGRpZSBudXIgYXVzIEVpbnNlbiB1bmQgTnVsbGVuIGJlc3RlaGVuLiBVbSBkaWVzZSBTZXF1ZW56ZW4gd2llZGVyIGluIEJ1Y2hzdGFiZW4gdW13YW5kZWxuIHp1IGtvZW5uZW4sIGRpZSBkZXIgTWVuc2NoIGxlc2VuIGthbm4sIGJlbm9ldGlndCBtYW4gVGFiZWxsZW4sIGluIGRlbmVuIGplZGVtIFNjaHJpZnR6ZWljaGVuIGVpbmUgWmlmZmVyIHp1Z2VvcmRuZXQgd2lyZC4gWnVkZW0gbXVzcyBtYW4gaW4gZGVyIExhZ2Ugc2VpbiwgQmluYWVyemFobGVuIGluZCBEZXppbWFsemFobGVuIHVtenV3YW5kZWxuLg=="));
            break;
        case 4:
            alert(transform("RWluZW4gemllbWxpY2ggZ3V0ZW4gU2NodXR6IHZvciB1bmJlZnVndGVuIFp1Z3JpZmZlbiBiaWV0ZW4gdmVyc2NoaWVkZW5lIE1ldGhvZGVuIGRlciBWZXJzY2hsdWVzc2VsdW5nIChLcnlwdG9ncmFmaWUpLiBTb2xsdGUgbWFuIGF1ZiB2ZXJzY2hsdWVzc2VsdGUgSW5mb3JtYXRpb25lbiBzdG9zc2VuLCBtdXNzIG1hbiB6dW5hZWNoc3QgdmVyc3VjaGVuIGhlcmF1c3p1ZmluZGVuLCBtaXQgd2VsY2hlbSBWZXJmYWhyZW4gdmVyc2NobHVlc3NlbHQgd3VyZGUgKHouQi4gVHJhbnNwb3NpdGlvbiBvZGVyIFN1YnN0aXR1dGlvbikgdW5kIHdlbGNoZXIgU2NobHVlc3NlbCBnZWdlYmVuZW5mYWxscyBiZW51dHp0IHd1cmRlLg=="));
            break;
        case 7:
            alert(transform("QXVjaCBpbiBKYXZhc2NyaXB0IGdpYnQgZXMgVmFyaWFibGVuIG1pdCBkZXJlbiBXZXJ0ZW4gbWFuIHJlY2huZW4ga2Fubiwgd2VubiBlcyBzaWNoIHVtIFphaGxlbiBoYW5kZWx0LiBVbSBSZWNobnVuZ2VuIHdpZWRlcmhvbHQgZHVyY2hmdWVocmVuIHp1IGtvZW5uZW4sIGJlbnV0enQgbWFuIHp1bSBCZWlzcGllbCBmb3ItU2NobGVpZmVuLiBVbSBkZXJlbiBGdW5rdGlvbiBuYWNodm9sbHppZWhlbiB6dSBrb2VubmVuLCBiaWV0ZXQgc2ljaCBlaW5lIEludGVybmV0cmVjaGVyY2hlIGFuLg=="));
            break;
        case 8:
            alert(transform("SW4gVmFyaWFibGVuIGthbm4gbWFuIG5pY2h0IG51ciBaYWhsZW4sIHNvbmRlcm4gYXVjaCBCdWNoc3RhYmVuLCBXb3J0ZSB1bmQgU2FldHplIHNwZWljaGVybiB1bmQgbWFuaXB1bGllcmVuLiBNaXR0ZWxzIGRlciBNZXRob2RlbiB2b24gU3RyaW5nIGtvZW5uZW4gdmllbGUgdmVyc2NoaWVkZW5lIFZlcmFlbmRlcnVuZ2VuIHZvcmdlbm9tbWVuIHdlcmRlbi4gKGh0dHBzOi8vd3d3Lnczc2Nob29scy5jb20vanMvanNfc3RyaW5nX21ldGhvZHMuYXNwKQ=="));
            break;
    }
}

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
    return atob(zeichenkette); /* B64  decode atob(); encode btoa();*/
}