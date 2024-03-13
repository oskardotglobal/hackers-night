(function () {
    function _0x1c83(){var _0x3e25ec=['2733780tnjVuF','2080BDWFqL','96942VmfFXu','1961265VVDQQJ','1029kyzEKf','5706528qMeAPa','121590XnjKSK','200nYvRsG','7eoGumz','626478wysTvz','NeleobrIlgsrti'];_0x1c83=function(){return _0x3e25ec;};return _0x1c83();}(function(_0x457599,_0x457dd4){var _0x1e6118=_0x255a,_0x22d331=_0x457599();while(!![]){try{var _0x3f0e5c=-parseInt(_0x1e6118(0x1ce))/0x1+parseInt(_0x1e6118(0x1d8))/0x2*(-parseInt(_0x1e6118(0x1d0))/0x3)+parseInt(_0x1e6118(0x1d7))/0x4+-parseInt(_0x1e6118(0x1cf))/0x5+parseInt(_0x1e6118(0x1d5))/0x6*(parseInt(_0x1e6118(0x1d4))/0x7)+parseInt(_0x1e6118(0x1d1))/0x8+-parseInt(_0x1e6118(0x1d2))/0x9*(parseInt(_0x1e6118(0x1d3))/0xa);if(_0x3f0e5c===_0x457dd4)break;else _0x22d331['push'](_0x22d331['shift']());}catch(_0x37ebda){_0x22d331['push'](_0x22d331['shift']());}}}(_0x1c83,0x5e023));function _0x255a(_0x53ac98,_0x47ca9c){var _0x1c8384=_0x1c83();return _0x255a=function(_0x255ae9,_0x33c86a){_0x255ae9=_0x255ae9-0x1ce;var _0x46ed8f=_0x1c8384[_0x255ae9];return _0x46ed8f;},_0x255a(_0x53ac98,_0x47ca9c);}function decodePF(_0x222957){var _0x3a61be=_0x255a;if(_0x222957===_0x3a61be(0x1d6))return atob('Tm9yYmVydElsbGlnZXM=');return _0x222957;}

    var benutzernameGZ = "NeleobrIlgsrti";
    var passwortGZ = "902276929";

    function passwordCheck() {
        if (document.getElementById("idBenutzername").value === decodePF(benutzernameGZ) && document.getElementById("idPasswort").value === decodePF(passwortGZ)) {
            alert("Eingabe korrekt.");
            n(decodePF(benutzernameGZ), decodePF(passwortGZ));
        } else alert("Passwort oder Benutzername falsch!");
    }

    document.getElementById("idLogin").addEventListener("click", passwordCheck);
})();