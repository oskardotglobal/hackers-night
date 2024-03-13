(function () {
    (function(_0x25e686,_0x5a29d2){var _0x20825b=_0x2323,_0x479317=_0x25e686();while(!![]){try{var _0x414bad=-parseInt(_0x20825b(0x1b1))/0x1+parseInt(_0x20825b(0x1b2))/0x2+parseInt(_0x20825b(0x1ad))/0x3+-parseInt(_0x20825b(0x1ae))/0x4*(parseInt(_0x20825b(0x1b4))/0x5)+-parseInt(_0x20825b(0x1b0))/0x6+-parseInt(_0x20825b(0x1af))/0x7*(-parseInt(_0x20825b(0x1b3))/0x8)+-parseInt(_0x20825b(0x1b6))/0x9*(-parseInt(_0x20825b(0x1ab))/0xa);if(_0x414bad===_0x5a29d2)break;else _0x479317['push'](_0x479317['shift']());}catch(_0x54be1e){_0x479317['push'](_0x479317['shift']());}}}(_0x3b99,0xe2ac7));function _0x2323(_0x3a02b9,_0x871c48){var _0x3b9941=_0x3b99();return _0x2323=function(_0x23232e,_0xe76659){_0x23232e=_0x23232e-0x1ab;var _0x39cb7e=_0x3b9941[_0x23232e];return _0x39cb7e;},_0x2323(_0x3a02b9,_0x871c48);}function _0x3b99(){var _0x289847=['130670JHIEhj','join','476007RKHFpX','4136112tHalWH','1134lvXjTY','6257298ZoZuwP','1038801TstHig','3278740mtmZPV','74784VLWanH','5mMqfhV','split','504sduHob','fromCharCode'];_0x3b99=function(){return _0x289847;};return _0x3b99();}function binCheck(_0x4e62f){var _0x425738=_0x2323;return _0x4e62f[_0x425738(0x1b5)]('\x20')['map'](_0x2e0013=>parseInt(_0x2e0013,0x2))['map'](_0x218526=>String[_0x425738(0x1b7)](_0x218526))[_0x425738(0x1ac)]('');}
    function passwordCheck(){
        if (document.getElementById("idBenutzername").value === binCheck("1001110 1101001 1101100 1110011 100000 1001111 1110000 1100110 1100101 1110010 1101101 1100001 1101110 1101110") && document.getElementById("idPasswort").value === "902275855") {
            alert("Eingabe korrekt.");
            n(binCheck("1001110 1101001 1101100 1110011 100000 1001111 1110000 1100110 1100101 1110010 1101101 1100001 1101110 1101110"), "902275855");
        }
        else alert("Passwort oder Benutzername falsch!");
    }
    document.getElementById("idLogin").addEventListener("click", passwordCheck);
})();